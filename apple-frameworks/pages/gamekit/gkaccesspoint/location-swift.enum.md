> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkaccesspoint/location-swift.enum](https://developer.apple.com/documentation/gamekit/gkaccesspoint/location-swift.enum)

# GKAccessPoint.Location (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Specifies the corner of the screen to display the access point.

## Declaration

```swift
enum Location
```

## Topics

### Corners

- [GKAccessPoint.Location.bottomLeading](location-swift.enum/bottomleading.md): The lower-left corner of the screen.
- [GKAccessPoint.Location.bottomTrailing](location-swift.enum/bottomtrailing.md): The lower-right corner of the screen.
- [GKAccessPoint.Location.topLeading](location-swift.enum/topleading.md): The upper-left corner of the screen.
- [GKAccessPoint.Location.topTrailing](location-swift.enum/toptrailing.md): The upper-right corner of the screen.

### Initializers

- [init(rawValue:)](location-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the location

- [location](location-swift.property.md): The corner of the screen to display the access point.
- [frameInScreenCoordinates](frameinscreencoordinates.md): The frame of the access point in screen coordinates.
- [parentWindow](parentwindow.md): The window that contains the access point.

# GKAccessPointLocation (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Specifies the corner of the screen to display the access point.

## Declaration

```objectivec
enum GKAccessPointLocation : NSInteger;
```

## Topics

### Corners

- [GKAccessPointLocationBottomLeading](location-swift.enum/bottomleading.md): The lower-left corner of the screen.
- [GKAccessPointLocationBottomTrailing](location-swift.enum/bottomtrailing.md): The lower-right corner of the screen.
- [GKAccessPointLocationTopLeading](location-swift.enum/topleading.md): The upper-left corner of the screen.
- [GKAccessPointLocationTopTrailing](location-swift.enum/toptrailing.md): The upper-right corner of the screen.

## See Also

### Managing the location

- [location](location-swift.property.md): The corner of the screen to display the access point.
- [frameInScreenCoordinates](frameinscreencoordinates.md): The frame of the access point in screen coordinates.
- [parentWindow](parentwindow.md): The window that contains the access point.
