> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkimagerymapconfiguration](https://developer.apple.com/documentation/mapkit/mkimagerymapconfiguration)

# MKImageryMapConfiguration (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The class that represents an imagery-based map presentation, such as one using satellite imagery.

## Declaration

```swift
class MKImageryMapConfiguration
```

## Topics

### Creating a map imagery configuration

- [init()](mkimagerymapconfiguration/init%28%29.md): Creates a new imagery based map configuration.
- [init(elevationStyle:)](mkimagerymapconfiguration/init%28elevationstyle_%29.md): Creates a new imagery based map configuration with the specified elevation style.

## Relationships

### Inherits From

- [MKMapConfiguration](mkmapconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Configuring the map appearance

- [preferredConfiguration](mkmapview/preferredconfiguration.md): The characteristics of the map view, including the map type and features the map displays.
- [pitchButtonVisibility](mkmapview/pitchbuttonvisibility.md): A value that indicates whether the map’s pitch button is visible.
- [showsUserTrackingButton](mkmapview/showsusertrackingbutton.md): A Boolean value that indicates whether the map displays the user tracking button.
- [MKMapConfiguration](mkmapconfiguration.md): An abstract class that represents the shared elements of map configurations.
- [MKStandardMapConfiguration](mkstandardmapconfiguration.md): The class that represents the default map presentation, which is a street map that shows the position of all roads and some road names.
- [MKHybridMapConfiguration](mkhybridmapconfiguration.md): The class that represents a satellite image of the area with road and road name information layers on top.

# MKImageryMapConfiguration (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The class that represents an imagery-based map presentation, such as one using satellite imagery.

## Declaration

```objectivec
@interface MKImageryMapConfiguration : MKMapConfiguration
```

## Topics

### Creating a map imagery configuration

- [init](mkimagerymapconfiguration/init%28%29.md): Creates a new imagery based map configuration.
- [initWithElevationStyle:](mkimagerymapconfiguration/init%28elevationstyle_%29.md): Creates a new imagery based map configuration with the specified elevation style.

## Relationships

### Inherits From

- [MKMapConfiguration](mkmapconfiguration.md)

## See Also

### Configuring the map appearance

- [preferredConfiguration](mkmapview/preferredconfiguration.md): The characteristics of the map view, including the map type and features the map displays.
- [pitchButtonVisibility](mkmapview/pitchbuttonvisibility.md): A value that indicates whether the map’s pitch button is visible.
- [showsUserTrackingButton](mkmapview/showsusertrackingbutton.md): A Boolean value that indicates whether the map displays the user tracking button.
- [MKMapConfiguration](mkmapconfiguration.md): An abstract class that represents the shared elements of map configurations.
- [MKStandardMapConfiguration](mkstandardmapconfiguration.md): The class that represents the default map presentation, which is a street map that shows the position of all roads and some road names.
- [MKHybridMapConfiguration](mkhybridmapconfiguration.md): The class that represents a satellite image of the area with road and road name information layers on top.
