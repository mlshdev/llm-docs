> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlrequest/value(forhttpheaderfield:)](https://developer.apple.com/documentation/foundation/urlrequest/value(forhttpheaderfield:))

# value(forHTTPHeaderField:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves a header value.

## Declaration

```swift
func value(forHTTPHeaderField field: String) -> String?
```

## Parameters

- `field`: The header field name to use for the lookup (case-insensitive).

<a id="return-value"></a>

## Return Value

The value associated with the header field field,  or `nil` if there is no corresponding header field.

<a id="Discussion"></a>

## Discussion

Note that, in keeping with the HTTP RFC, HTTP header field names are case-insensitive.

## See Also

### Accessing header fields

- [allHTTPHeaderFields](allhttpheaderfields.md): A dictionary containing all of the HTTP header fields for a request.
- [addValue(\_:forHTTPHeaderField:)](addvalue%28__forhttpheaderfield_%29.md): Adds a value to the header field.
- [setValue(\_:forHTTPHeaderField:)](setvalue%28__forhttpheaderfield_%29.md): Sets a value for the header field.
