> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableurlrequest/allhttpheaderfields](https://developer.apple.com/documentation/foundation/nsmutableurlrequest/allhttpheaderfields)

# allHTTPHeaderFields (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

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

# allHTTPHeaderFields (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary containing all of the HTTP header fields for a request.

## Declaration

```objectivec
@property (copy, nullable) NSDictionary<NSString *,NSString *> * allHTTPHeaderFields;
```

<a id="Discussion"></a>

## Discussion

Certain header fields are reserved (see [Reserved HTTP headers](../nsurlrequest.md#Reserved-HTTP-headers)). Do not use this property to set such headers.

## See Also

### Accessing header fields

- [addValue:forHTTPHeaderField:](addvalue%28__forhttpheaderfield_%29.md): Adds a value to the header field.
- [setValue:forHTTPHeaderField:](setvalue%28__forhttpheaderfield_%29.md): Sets a value for the header field.
