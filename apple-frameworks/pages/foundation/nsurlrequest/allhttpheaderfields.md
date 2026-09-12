> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlrequest/allhttpheaderfields](https://developer.apple.com/documentation/foundation/nsurlrequest/allhttpheaderfields)

# allHTTPHeaderFields (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary containing all of the HTTP header fields for a request.

## Declaration

```swift
var allHTTPHeaderFields: [String : String]? { get }
```

## See Also

### Related Documentation

- [allHTTPHeaderFields](../nsmutableurlrequest/allhttpheaderfields.md): A dictionary containing all of the HTTP header fields for a request.

### Getting header fields

- [value(forHTTPHeaderField:)](value%28forhttpheaderfield_%29.md): Returns the value of the specified HTTP header field.

# allHTTPHeaderFields (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary containing all of the HTTP header fields for a request.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDictionary<NSString *,NSString *> * allHTTPHeaderFields;
```

## See Also

### Related Documentation

- [allHTTPHeaderFields](../nsmutableurlrequest/allhttpheaderfields.md): A dictionary containing all of the HTTP header fields for a request.

### Getting header fields

- [valueForHTTPHeaderField:](value%28forhttpheaderfield_%29.md): Returns the value of the specified HTTP header field.
