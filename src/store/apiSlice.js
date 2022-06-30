import {create,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseURI = 'http://localhost:8080';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl : baseURI}),
    endpoints: builder => ({
        getCategories : builder.query({
            query:() => '/api/categories',
            provideTags:['categories']
        }),

        getLabels: builder.query({
            query:() => '/api/labels',
            provideTags:['transaction']
        }),

        addTransaction: builder.mutation({
            query:()=>({
                url: '/api/transaction',
                method:"POST",
                body:initialTransaction

            }),
            invalidatesTags:['transaction']
        }),

        deleteTransaction: builder.mutation({
            query: recordId => ({
                url:'/api/transaction',
                method: "DELETE",
                body: recordID
            }),
            invalidatesTags:['transaction']
        })
    })
})

export default apiSlice;