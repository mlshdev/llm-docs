> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkreversegeocoder/cancel](https://developer.apple.com/documentation/mapkit/mkreversegeocoder/cancel)

# cancel

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 5.0) · iPadOS 3.0+ (deprecated in 5.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Cancels a pending reverse-geocoding request.

> Use the [CLGeocoder](../../corelocation/clgeocoder.md) class instead.

## Declaration

```objectivec
- (void) cancel;
```

<a id="Discussion"></a>

## Discussion

You can use this method to cancel a pending request and free up the resources associated with that request. If the request has already returned or has not yet begun, calling this method has no effect.

## See Also

### Managing the Search

- [start](start.md): Deprecated. Starts the reverse-geocoding process asynchronously.
- [querying](querying.md): Deprecated. A Boolean value indicating whether the receiver is in the middle of reverse-geocoding its coordinate.
