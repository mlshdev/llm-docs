> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clgeocoder/cancelgeocode()](https://developer.apple.com/documentation/corelocation/clgeocoder/cancelgeocode())

# cancelGeocode() (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 26.0) · iPadOS 5.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 2.0+ (deprecated in 26.0)

Cancels a pending geocoding request.

> Use MKGeocodingRequest

## Declaration

```swift
func cancelGeocode()
```

<a id="Discussion"></a>

## Discussion

You can use this method to cancel a pending request and free up the resources associated with that request. Canceling a pending request causes the completion handler block to be called.

If the request is not pending, because it has already returned or has not yet begun, this method does nothing.

## See Also

### Managing geocoding requests

- [isGeocoding](isgeocoding.md): Deprecated. A Boolean value indicating whether the receiver is in the middle of geocoding its value.

# cancelGeocode (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 26.0) · iPadOS 5.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 2.0+ (deprecated in 26.0)

Cancels a pending geocoding request.

> Use MKGeocodingRequest

## Declaration

```objectivec
- (void) cancelGeocode;
```

<a id="Discussion"></a>

## Discussion

You can use this method to cancel a pending request and free up the resources associated with that request. Canceling a pending request causes the completion handler block to be called.

If the request is not pending, because it has already returned or has not yet begun, this method does nothing.

## See Also

### Managing geocoding requests

- [geocoding](isgeocoding.md): Deprecated. A Boolean value indicating whether the receiver is in the middle of geocoding its value.
