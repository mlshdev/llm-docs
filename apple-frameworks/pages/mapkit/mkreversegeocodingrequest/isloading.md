> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mkreversegeocodingrequest/isloading

# isLoading (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A Boolean value that indicates whether the current reverse geocoding request is in a loading state.

## Declaration

```swift
var isLoading: Bool { get }
```

## See Also

### Getting the reverse geocoder’s state

- [isCancelled](iscancelled.md): A Boolean value that indicates whether the current reverse geocoding request is in a cancelled state.
- [location](location.md): The location provided to the initializer.

# loading (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A Boolean value that indicates whether the current reverse geocoding request is in a loading state.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isLoading) BOOL loading;
```

## See Also

### Getting the reverse geocoder’s state

- [cancelled](iscancelled.md): A Boolean value that indicates whether the current reverse geocoding request is in a cancelled state.
- [location](location.md): The location provided to the initializer.
