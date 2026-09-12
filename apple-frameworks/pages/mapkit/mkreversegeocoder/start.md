> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkreversegeocoder/start](https://developer.apple.com/documentation/mapkit/mkreversegeocoder/start)

# start

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 5.0) · iPadOS 3.0+ (deprecated in 5.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Starts the reverse-geocoding process asynchronously.

> Use the [CLGeocoder](../../corelocation/clgeocoder.md) class instead.

## Declaration

```objectivec
- (void) start;
```

<a id="Discussion"></a>

## Discussion

You should call this method only once to begin the reverse-geocoding process. This method submits the coordinate value to the map server asynchronously and returns. Once the process is complete, the results are delivered to the associated delegate object.

## See Also

### Managing the Search

- [querying](querying.md): Deprecated. A Boolean value indicating whether the receiver is in the middle of reverse-geocoding its coordinate.
- [cancel](cancel.md): Deprecated. Cancels a pending reverse-geocoding request.
