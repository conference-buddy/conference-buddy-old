/* eslint @typescript-eslint/explicit-module-boundary-types: "off" */
import React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient()

export const wrapRootElement = ({ element }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {element}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
