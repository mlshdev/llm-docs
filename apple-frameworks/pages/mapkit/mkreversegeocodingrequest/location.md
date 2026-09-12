> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkreversegeocodingrequest/location](https://developer.apple.com/documentation/mapkit/mkreversegeocodingrequest/location)

# location (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The location provided to the initializer.

## Declaration

```swift
@NSCopying var location: CLLocation { get }
```

## See Also

### Getting the reverse geocoder’s state

- [isLoading](isloading.md): A Boolean value that indicates whether the current reverse geocoding request is in a loading state.
- [isCancelled](iscancelled.md): A Boolean value that indicates whether the current reverse geocoding request is in a cancelled state.

# location (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The location provided to the initializer.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) CLLocation * location;
```

## See Also

### Getting the reverse geocoder’s state

- [loading](isloading.md): A Boolean value that indicates whether the current reverse geocoding request is in a loading state.
- [cancelled](iscancelled.md): A Boolean value that indicates whether the current reverse geocoding request is in a cancelled state.
