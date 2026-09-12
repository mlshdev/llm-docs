> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clerror-swift.struct/code/deferredaccuracytoolow](https://developer.apple.com/documentation/corelocation/clerror-swift.struct/code/deferredaccuracytoolow)

# CLError.Code.deferredAccuracyTooLow (Swift)

**Framework:** Core Location  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant that indicates deferred mode isn’t supported for the requested accuracy.

## Declaration

```swift
case deferredAccuracyTooLow
```

<a id="Discussion"></a>

## Discussion

The accuracy must be set to [kCLLocationAccuracyBest](../../kcllocationaccuracybest.md) or [kCLLocationAccuracyBestForNavigation](../../kcllocationaccuracybestfornavigation.md).

## See Also

### Getting deferred location update errors

- [CLError.Code.deferredFailed](deferredfailed.md): A constant that indicates the location manager didn’t enter deferred mode for an unknown reason.
- [CLError.Code.deferredCanceled](deferredcanceled.md): A constant that indicates your app or the location manager canceled the request for deferred updates.
- [CLError.Code.deferredDistanceFiltered](deferreddistancefiltered.md): A constant that indicates deferred mode doesn’t support distance filters.
- [CLError.Code.deferredNotUpdatingLocation](deferrednotupdatinglocation.md): A constant that indicates the location manager didn’t enter deferred mode because location updates were already disabled or paused.

# kCLErrorDeferredAccuracyTooLow (Objective-C)

**Framework:** Core Location  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant that indicates deferred mode isn’t supported for the requested accuracy.

## Declaration

```objectivec
kCLErrorDeferredAccuracyTooLow
```

<a id="Discussion"></a>

## Discussion

The accuracy must be set to [kCLLocationAccuracyBest](../../kcllocationaccuracybest.md) or [kCLLocationAccuracyBestForNavigation](../../kcllocationaccuracybestfornavigation.md).

## See Also

### Getting deferred location update errors

- [kCLErrorDeferredFailed](deferredfailed.md): A constant that indicates the location manager didn’t enter deferred mode for an unknown reason.
- [kCLErrorDeferredCanceled](deferredcanceled.md): A constant that indicates your app or the location manager canceled the request for deferred updates.
- [kCLErrorDeferredDistanceFiltered](deferreddistancefiltered.md): A constant that indicates deferred mode doesn’t support distance filters.
- [kCLErrorDeferredNotUpdatingLocation](deferrednotupdatinglocation.md): A constant that indicates the location manager didn’t enter deferred mode because location updates were already disabled or paused.
