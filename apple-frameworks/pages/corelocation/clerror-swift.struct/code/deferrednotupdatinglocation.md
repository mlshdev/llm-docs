> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clerror-swift.struct/code/deferrednotupdatinglocation](https://developer.apple.com/documentation/corelocation/clerror-swift.struct/code/deferrednotupdatinglocation)

# CLError.Code.deferredNotUpdatingLocation (Swift)

**Framework:** Core Location  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant that indicates the location manager didn’t enter deferred mode because location updates were already disabled or paused.

## Declaration

```swift
case deferredNotUpdatingLocation
```

## See Also

### Getting deferred location update errors

- [CLError.Code.deferredFailed](deferredfailed.md): A constant that indicates the location manager didn’t enter deferred mode for an unknown reason.
- [CLError.Code.deferredCanceled](deferredcanceled.md): A constant that indicates your app or the location manager canceled the request for deferred updates.
- [CLError.Code.deferredAccuracyTooLow](deferredaccuracytoolow.md): A constant that indicates deferred mode isn’t supported for the requested accuracy.
- [CLError.Code.deferredDistanceFiltered](deferreddistancefiltered.md): A constant that indicates deferred mode doesn’t support distance filters.

# kCLErrorDeferredNotUpdatingLocation (Objective-C)

**Framework:** Core Location  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant that indicates the location manager didn’t enter deferred mode because location updates were already disabled or paused.

## Declaration

```objectivec
kCLErrorDeferredNotUpdatingLocation
```

## See Also

### Getting deferred location update errors

- [kCLErrorDeferredFailed](deferredfailed.md): A constant that indicates the location manager didn’t enter deferred mode for an unknown reason.
- [kCLErrorDeferredCanceled](deferredcanceled.md): A constant that indicates your app or the location manager canceled the request for deferred updates.
- [kCLErrorDeferredAccuracyTooLow](deferredaccuracytoolow.md): A constant that indicates deferred mode isn’t supported for the requested accuracy.
- [kCLErrorDeferredDistanceFiltered](deferreddistancefiltered.md): A constant that indicates deferred mode doesn’t support distance filters.
