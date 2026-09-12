> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/paginginformation/paging-data.dictionary](https://developer.apple.com/documentation/enterpriseprogramapi/paginginformation/paging-data.dictionary)

# PagingInformation.Paging

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

Paging details such as the total number of resources and the per-page limit.

## Declaration

```
object PagingInformation.Paging
```

## Properties

- `total` — `integer`: The total number of resources matching your request.
- `limit` — `integer` (required): The maximum number of resources to return per page, from 0 to 200.

<a id="Discussion"></a>

## Discussion

Adjust the number of resources returned per page by using the `limit` query parameter in your request. For example, the following request returns the first 10 users:

```javascript
GET /v1/users?limit=10
```
