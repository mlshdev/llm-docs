> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkreversegeocoder/querying](https://developer.apple.com/documentation/mapkit/mkreversegeocoder/querying)

# querying

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 5.0) · iPadOS 3.0+ (deprecated in 5.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value indicating whether the receiver is in the middle of reverse-geocoding its coordinate.

> Use the [CLGeocoder](../../corelocation/clgeocoder.md) class instead.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isQuerying) BOOL querying;
```

<a id="Discussion"></a>

## Discussion

This property contains YES if the process is ongoing or NO if the process is done or has not yet been initiated.

## See Also

### Managing the Search

- [start](start.md): Deprecated. Starts the reverse-geocoding process asynchronously.
- [cancel](cancel.md): Deprecated. Cancels a pending reverse-geocoding request.
