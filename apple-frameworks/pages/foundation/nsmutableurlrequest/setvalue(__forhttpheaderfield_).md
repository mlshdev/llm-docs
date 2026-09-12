> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableurlrequest/setvalue(_:forhttpheaderfield:)](https://developer.apple.com/documentation/foundation/nsmutableurlrequest/setvalue(_:forhttpheaderfield:))

# setValue(\_:forHTTPHeaderField:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets a value for the header field.

## Declaration

```swift
func setValue(_ value: String?, forHTTPHeaderField field: String)
```

## Parameters

- `value`: The new value for the header field. Any existing value for the field is replaced by the new value.
- `field`: The name of the header field to set. In keeping with the HTTP RFC, HTTP header field names are case insensitive.

<a id="Discussion"></a>

## Discussion

Certain header fields are reserved. Do not use this method to set such headers. Specifically, there is no need for you to set the `Content-Length` header. See [Reserved HTTP headers](../nsurlrequest.md#Reserved-HTTP-headers).

## See Also

### Related Documentation

- [value(forHTTPHeaderField:)](../nsurlrequest/value%28forhttpheaderfield_%29.md): Returns the value of the specified HTTP header field.

### Accessing header fields

- [allHTTPHeaderFields](allhttpheaderfields.md): A dictionary containing all of the HTTP header fields for a request.
- [addValue(\_:forHTTPHeaderField:)](addvalue%28__forhttpheaderfield_%29.md): Adds a value to the header field.

# setValue:forHTTPHeaderField: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets a value for the header field.

## Declaration

```objectivec
- (void) setValue:(NSString *) value forHTTPHeaderField:(NSString *) field;
```

## Parameters

- `value`: The new value for the header field. Any existing value for the field is replaced by the new value.
- `field`: The name of the header field to set. In keeping with the HTTP RFC, HTTP header field names are case insensitive.

<a id="Discussion"></a>

## Discussion

Certain header fields are reserved. Do not use this method to set such headers. Specifically, there is no need for you to set the `Content-Length` header. See [Reserved HTTP headers](../nsurlrequest.md#Reserved-HTTP-headers).

## See Also

### Related Documentation

- [valueForHTTPHeaderField:](../nsurlrequest/value%28forhttpheaderfield_%29.md): Returns the value of the specified HTTP header field.

### Accessing header fields

- [allHTTPHeaderFields](allhttpheaderfields.md): A dictionary containing all of the HTTP header fields for a request.
- [addValue:forHTTPHeaderField:](addvalue%28__forhttpheaderfield_%29.md): Adds a value to the header field.
