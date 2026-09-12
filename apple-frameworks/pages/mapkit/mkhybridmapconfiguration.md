> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkhybridmapconfiguration](https://developer.apple.com/documentation/mapkit/mkhybridmapconfiguration)

# MKHybridMapConfiguration (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The class that represents a satellite image of the area with road and road name information layers on top.

## Declaration

```swift
class MKHybridMapConfiguration
```

## Topics

### Creating a hybrid map configuration

- [init()](mkhybridmapconfiguration/init%28%29.md): Creates a new hybrid map configuration.
- [init(elevationStyle:)](mkhybridmapconfiguration/init%28elevationstyle_%29.md): Creates a new hybrid map configuration with the specified elevation style.
- [MKMapConfiguration.ElevationStyle](mkmapconfiguration/elevationstyle-swift.enum.md): Values that control the map’s elevation style.

### Controlling what the map displays

- [pointOfInterestFilter](mkhybridmapconfiguration/pointofinterestfilter.md): The filter the framework uses to determine the points of interest to show on the map.
- [showsTraffic](mkhybridmapconfiguration/showstraffic.md): A Boolean value that indicates whether the maps shows traffic conditions.

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
- [MKImageryMapConfiguration](mkimagerymapconfiguration.md): The class that represents an imagery-based map presentation, such as one using satellite imagery.

# MKHybridMapConfiguration (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The class that represents a satellite image of the area with road and road name information layers on top.

## Declaration

```objectivec
@interface MKHybridMapConfiguration : MKMapConfiguration
```

## Topics

### Creating a hybrid map configuration

- [init](mkhybridmapconfiguration/init%28%29.md): Creates a new hybrid map configuration.
- [initWithElevationStyle:](mkhybridmapconfiguration/init%28elevationstyle_%29.md): Creates a new hybrid map configuration with the specified elevation style.
- [MKMapElevationStyle](mkmapconfiguration/elevationstyle-swift.enum.md): Values that control the map’s elevation style.

### Controlling what the map displays

- [pointOfInterestFilter](mkhybridmapconfiguration/pointofinterestfilter.md): The filter the framework uses to determine the points of interest to show on the map.
- [showsTraffic](mkhybridmapconfiguration/showstraffic.md): A Boolean value that indicates whether the maps shows traffic conditions.

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
- [MKImageryMapConfiguration](mkimagerymapconfiguration.md): The class that represents an imagery-based map presentation, such as one using satellite imagery.
