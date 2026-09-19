> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mkreversegeocodingrequest/iscancelled

# isCancelled (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A Boolean value that indicates whether the current reverse geocoding request is in a cancelled state.

## Declaration

```swift
var isCancelled: Bool { get }
```

## See Also

### Getting the reverse geocoder’s state

- [isLoading](isloading.md): A Boolean value that indicates whether the current reverse geocoding request is in a loading state.
- [location](location.md): The location provided to the initializer.

# cancelled (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A Boolean value that indicates whether the current reverse geocoding request is in a cancelled state.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCancelled) BOOL cancelled;
```

## See Also

### Getting the reverse geocoder’s state

- [loading](isloading.md): A Boolean value that indicates whether the current reverse geocoding request is in a loading state.
- [location](location.md): The location provided to the initializer.
