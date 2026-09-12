> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlrequest/value(forhttpheaderfield:)](https://developer.apple.com/documentation/foundation/nsurlrequest/value(forhttpheaderfield:))

# value(forHTTPHeaderField:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value of the specified HTTP header field.

## Declaration

```swift
func value(forHTTPHeaderField field: String) -> String?
```

## Parameters

- `field`: The name of the header field whose value is to be returned. In keeping with the HTTP RFC, HTTP header field names are case-insensitive.

<a id="return-value"></a>

## Return Value

The value associated with the header field `field`, or `nil` if there is no corresponding header field.

## See Also

### Related Documentation

- [addValue(\_:forHTTPHeaderField:)](../nsmutableurlrequest/addvalue%28__forhttpheaderfield_%29.md): Adds a value to the header field.
- [setValue(\_:forHTTPHeaderField:)](../nsmutableurlrequest/setvalue%28__forhttpheaderfield_%29.md): Sets a value for the header field.

### Getting header fields

- [allHTTPHeaderFields](allhttpheaderfields.md): A dictionary containing all of the HTTP header fields for a request.

# valueForHTTPHeaderField: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value of the specified HTTP header field.

## Declaration

```objectivec
- (NSString *) valueForHTTPHeaderField:(NSString *) field;
```

## Parameters

- `field`: The name of the header field whose value is to be returned. In keeping with the HTTP RFC, HTTP header field names are case-insensitive.

<a id="return-value"></a>

## Return Value

The value associated with the header field `field`, or `nil` if there is no corresponding header field.

## See Also

### Related Documentation

- [addValue:forHTTPHeaderField:](../nsmutableurlrequest/addvalue%28__forhttpheaderfield_%29.md): Adds a value to the header field.
- [setValue:forHTTPHeaderField:](../nsmutableurlrequest/setvalue%28__forhttpheaderfield_%29.md): Sets a value for the header field.

### Getting header fields

- [allHTTPHeaderFields](allhttpheaderfields.md): A dictionary containing all of the HTTP header fields for a request.
