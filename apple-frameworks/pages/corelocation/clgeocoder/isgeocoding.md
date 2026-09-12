> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clgeocoder/isgeocoding](https://developer.apple.com/documentation/corelocation/clgeocoder/isgeocoding)

# isGeocoding (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 26.0) · iPadOS 5.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 2.0+ (deprecated in 26.0)

A Boolean value indicating whether the receiver is in the middle of geocoding its value.

> Use MapKit

## Declaration

```swift
var isGeocoding: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the value [true](https://developer.apple.com/documentation/swift/true) if the process is ongoing or [false](https://developer.apple.com/documentation/swift/false) if the process is done or has not yet been initiated.

## See Also

### Managing geocoding requests

- [cancelGeocode()](cancelgeocode%28%29.md): Deprecated. Cancels a pending geocoding request.

# geocoding (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 26.0) · iPadOS 5.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 2.0+ (deprecated in 26.0)

A Boolean value indicating whether the receiver is in the middle of geocoding its value.

> Use MapKit

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isGeocoding) BOOL geocoding;
```

<a id="Discussion"></a>

## Discussion

This property contains the value [true](https://developer.apple.com/documentation/swift/true) if the process is ongoing or [false](https://developer.apple.com/documentation/swift/false) if the process is done or has not yet been initiated.

## See Also

### Managing geocoding requests

- [cancelGeocode](cancelgeocode%28%29.md): Deprecated. Cancels a pending geocoding request.
