> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clerror-swift.struct/deferreddistancefiltered](https://developer.apple.com/documentation/corelocation/clerror-swift.struct/deferreddistancefiltered)

# deferredDistanceFiltered

**Framework:** Core Location  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant that indicates deferred mode doesn’t support distance filters.

## Declaration

```swift
static var deferredDistanceFiltered: CLError.Code { get }
```

<a id="Discussion"></a>

## Discussion

Set the distance filter to [kCLDistanceFilterNone](../kcldistancefilternone.md).

## See Also

### Getting deferred location update errors

- [deferredFailed](deferredfailed.md): A constant that indicates the location manager didn’t enter deferred mode for an unknown reason.
- [deferredCanceled](deferredcanceled.md): A constant that indicates your app or the location manager canceled the request for deferred updates.
- [deferredAccuracyTooLow](deferredaccuracytoolow.md): A constant that indicates deferred mode isn’t supported for the requested accuracy.
- [deferredNotUpdatingLocation](deferrednotupdatinglocation.md): A constant that indicates the location manager didn’t enter deferred mode because location updates were already disabled or paused.
