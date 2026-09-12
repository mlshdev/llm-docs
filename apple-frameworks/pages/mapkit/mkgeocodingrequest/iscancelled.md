> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkgeocodingrequest/iscancelled](https://developer.apple.com/documentation/mapkit/mkgeocodingrequest/iscancelled)

# isCancelled (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A Boolean value that indicates whether the current geocoding request is in a cancelled state.

## Declaration

```swift
var isCancelled: Bool { get }
```

## See Also

### Getting the geocoder’s state

- [isLoading](isloading.md): A Boolean value that indicates whether the current geocoding request is in a loading state.

# cancelled (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A Boolean value that indicates whether the current geocoding request is in a cancelled state.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCancelled) BOOL cancelled;
```

## See Also

### Getting the geocoder’s state

- [loading](isloading.md): A Boolean value that indicates whether the current geocoding request is in a loading state.
