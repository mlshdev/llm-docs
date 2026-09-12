> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableurlrequest/addvalue(_:forhttpheaderfield:)](https://developer.apple.com/documentation/foundation/nsmutableurlrequest/addvalue(_:forhttpheaderfield:))

# addValue(\_:forHTTPHeaderField:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a value to the header field.

## Declaration

```swift
func addValue(_ value: String, forHTTPHeaderField field: String)
```

## Parameters

- `value`: The value for the header field.
- `field`: The name of the header field. In keeping with the HTTP RFC, HTTP header field names are case insensitive.

<a id="Discussion"></a>

## Discussion

This method provides the ability to add values to header fields incrementally. If a value was previously set for the specified field, the supplied value is appended to the existing value using the appropriate field delimiter (a comma).

Certain header fields are reserved (see [Reserved HTTP headers](../nsurlrequest.md#Reserved-HTTP-headers)). Do not use this method to change such headers.

## See Also

### Related Documentation

- [value(forHTTPHeaderField:)](../nsurlrequest/value%28forhttpheaderfield_%29.md): Returns the value of the specified HTTP header field.

### Accessing header fields

- [allHTTPHeaderFields](allhttpheaderfields.md): A dictionary containing all of the HTTP header fields for a request.
- [setValue(\_:forHTTPHeaderField:)](setvalue%28__forhttpheaderfield_%29.md): Sets a value for the header field.

# addValue:forHTTPHeaderField: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a value to the header field.

## Declaration

```objectivec
- (void) addValue:(NSString *) value forHTTPHeaderField:(NSString *) field;
```

## Parameters

- `value`: The value for the header field.
- `field`: The name of the header field. In keeping with the HTTP RFC, HTTP header field names are case insensitive.

<a id="Discussion"></a>

## Discussion

This method provides the ability to add values to header fields incrementally. If a value was previously set for the specified field, the supplied value is appended to the existing value using the appropriate field delimiter (a comma).

Certain header fields are reserved (see [Reserved HTTP headers](../nsurlrequest.md#Reserved-HTTP-headers)). Do not use this method to change such headers.

## See Also

### Related Documentation

- [valueForHTTPHeaderField:](../nsurlrequest/value%28forhttpheaderfield_%29.md): Returns the value of the specified HTTP header field.

### Accessing header fields

- [allHTTPHeaderFields](allhttpheaderfields.md): A dictionary containing all of the HTTP header fields for a request.
- [setValue:forHTTPHeaderField:](setvalue%28__forhttpheaderfield_%29.md): Sets a value for the header field.
