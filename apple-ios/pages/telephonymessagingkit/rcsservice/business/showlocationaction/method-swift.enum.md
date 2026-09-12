> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/business/showlocationaction/method-swift.enum](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/business/showlocationaction/method-swift.enum)

# RCSService.Business.ShowLocationAction.Method

**Framework:** TelephonyMessagingKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+

Enumeration indicating method to use when searching for location.

## Declaration

```swift
enum Method
```

## Topics

### Determining location method

- [RCSService.Business.ShowLocationAction.Method.coordinates(\_:)](method-swift.enum/coordinates%28__%29.md): Search for location using coordinates.
- [CLLocationCoordinate2D](https://developer.apple.com/documentation/corelocation/cllocationcoordinate2d): The latitude and longitude associated with a location, specified using the WGS 84 reference frame.
- [RCSService.Business.ShowLocationAction.Method.query(\_:)](method-swift.enum/query%28__%29.md): Search for location(s) by query.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing action properties

- [method](method-swift.property.md): The method to use.
- [label](label.md): Label to use for location.
- [fallbackURL](fallbackurl.md): Fallback URL to use when unable to perform operation.
