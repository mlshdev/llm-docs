> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservices/identitydocumentwebpresentmentrawrequest/requestdata](https://developer.apple.com/documentation/identitydocumentservices/identitydocumentwebpresentmentrawrequest/requestdata)

# requestData

**Framework:** IdentityDocumentServices  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+

The request data blob for the web presentment raw request.

## Declaration

```swift
var requestData: Data
```

<a id="discussion"></a>

## Discussion

The system encodes this according to the specified request type.

## See Also

### Creating an identity document web presentment raw request

- [init(requestType:requestData:)](init%28requesttype_requestdata_%29.md): Initializes a web presentment raw request.
- [requestType](requesttype-swift.property.md): The request type for the current request that the system uses to help the document provider deserialize the request.
