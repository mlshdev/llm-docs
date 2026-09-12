> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/kclerroruserinfoalternateregionkey](https://developer.apple.com/documentation/corelocation/kclerroruserinfoalternateregionkey)

# kCLErrorUserInfoAlternateRegionKey (Swift)

**Framework:** Core Location  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

A key in the user information dictionary of an error relating to a delayed region-monitoring response.

## Declaration

```swift
let kCLErrorUserInfoAlternateRegionKey: String
```

<a id="Discussion"></a>

## Discussion

This key is included in an error of type [regionMonitoringResponseDelayed](clerror-swift.struct/regionmonitoringresponsedelayed.md). The value is a [CLRegion](clregion.md) object containing the region that location services can monitor more effectively.

## See Also

### Errors

- [CLError](clerror-swift.struct.md): A Core Location error.
- [kCLErrorDomain](kclerrordomain.md): The domain for Core Location errors.

# kCLErrorUserInfoAlternateRegionKey (Objective-C)

**Framework:** Core Location  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

A key in the user information dictionary of an error relating to a delayed region-monitoring response.

## Declaration

```objectivec
extern NSString * const kCLErrorUserInfoAlternateRegionKey;
```

<a id="Discussion"></a>

## Discussion

This key is included in an error of type [regionMonitoringResponseDelayed](clerror-swift.struct/regionmonitoringresponsedelayed.md). The value is a [CLRegion](clregion.md) object containing the region that location services can monitor more effectively.

## See Also

### Errors

- [kCLErrorDomain](kclerrordomain.md): The domain for Core Location errors.
