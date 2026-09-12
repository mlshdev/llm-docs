> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlrequest/allhttpheaderfields](https://developer.apple.com/documentation/foundation/urlrequest/allhttpheaderfields)

# allHTTPHeaderFields

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary containing all of the HTTP header fields for a request.

## Declaration

```swift
var allHTTPHeaderFields: [String : String]? { get set }
```

<a id="Discussion"></a>

## Discussion

Certain header fields are reserved (see [Reserved HTTP headers](../nsurlrequest.md#Reserved-HTTP-headers)). Do not use this property to set such headers.

## See Also

### Accessing header fields

- [addValue(\_:forHTTPHeaderField:)](addvalue%28__forhttpheaderfield_%29.md): Adds a value to the header field.
- [setValue(\_:forHTTPHeaderField:)](setvalue%28__forhttpheaderfield_%29.md): Sets a value for the header field.
- [value(forHTTPHeaderField:)](value%28forhttpheaderfield_%29.md): Retrieves a header value.
