> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkstandardmapconfiguration](https://developer.apple.com/documentation/mapkit/mkstandardmapconfiguration)

# MKStandardMapConfiguration (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The class that represents the default map presentation, which is a street map that shows the position of all roads and some road names.

## Declaration

```swift
class MKStandardMapConfiguration
```

## Topics

### Creating a standard map configuration

- [init()](mkstandardmapconfiguration/init%28%29.md): Creates a new standard map configuration.
- [init(elevationStyle:)](mkstandardmapconfiguration/init%28elevationstyle_%29.md): Creates a new standard map configuration with the specified elevation style.
- [init(elevationStyle:emphasisStyle:)](mkstandardmapconfiguration/init%28elevationstyle_emphasisstyle_%29.md): Creates a standard map configuration with the specified elevation and emphasis styles.
- [init(emphasisStyle:)](mkstandardmapconfiguration/init%28emphasisstyle_%29.md): Creates a standard map configuration with the specified emphasis style.
- [MKMapConfiguration.ElevationStyle](mkmapconfiguration/elevationstyle-swift.enum.md): Values that control the map’s elevation style.
- [MKStandardMapConfiguration.EmphasisStyle](mkstandardmapconfiguration/emphasisstyle-swift.enum.md): Values that control how the framework emphasizes map features.

### Customizing the map display

- [emphasisStyle](mkstandardmapconfiguration/emphasisstyle-swift.property.md): The value that indicates how the framework emphasizes map features.
- [MKStandardMapConfiguration.EmphasisStyle](mkstandardmapconfiguration/emphasisstyle-swift.enum.md): Values that control how the framework emphasizes map features.
- [pointOfInterestFilter](mkstandardmapconfiguration/pointofinterestfilter.md): The filter used to determine the points of interest shown on the map.
- [showsTraffic](mkstandardmapconfiguration/showstraffic.md): A Boolean value that controls whether the map displays traffic conditions.

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
- [MKHybridMapConfiguration](mkhybridmapconfiguration.md): The class that represents a satellite image of the area with road and road name information layers on top.
- [MKImageryMapConfiguration](mkimagerymapconfiguration.md): The class that represents an imagery-based map presentation, such as one using satellite imagery.

# MKStandardMapConfiguration (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The class that represents the default map presentation, which is a street map that shows the position of all roads and some road names.

## Declaration

```objectivec
@interface MKStandardMapConfiguration : MKMapConfiguration
```

## Topics

### Creating a standard map configuration

- [init](mkstandardmapconfiguration/init%28%29.md): Creates a new standard map configuration.
- [initWithElevationStyle:](mkstandardmapconfiguration/init%28elevationstyle_%29.md): Creates a new standard map configuration with the specified elevation style.
- [initWithElevationStyle:emphasisStyle:](mkstandardmapconfiguration/init%28elevationstyle_emphasisstyle_%29.md): Creates a standard map configuration with the specified elevation and emphasis styles.
- [initWithEmphasisStyle:](mkstandardmapconfiguration/init%28emphasisstyle_%29.md): Creates a standard map configuration with the specified emphasis style.
- [MKMapElevationStyle](mkmapconfiguration/elevationstyle-swift.enum.md): Values that control the map’s elevation style.
- [MKStandardMapEmphasisStyle](mkstandardmapconfiguration/emphasisstyle-swift.enum.md): Values that control how the framework emphasizes map features.

### Customizing the map display

- [emphasisStyle](mkstandardmapconfiguration/emphasisstyle-swift.property.md): The value that indicates how the framework emphasizes map features.
- [MKStandardMapEmphasisStyle](mkstandardmapconfiguration/emphasisstyle-swift.enum.md): Values that control how the framework emphasizes map features.
- [pointOfInterestFilter](mkstandardmapconfiguration/pointofinterestfilter.md): The filter used to determine the points of interest shown on the map.
- [showsTraffic](mkstandardmapconfiguration/showstraffic.md): A Boolean value that controls whether the map displays traffic conditions.

## Relationships

### Inherits From

- [MKMapConfiguration](mkmapconfiguration.md)

## See Also

### Configuring the map appearance

- [preferredConfiguration](mkmapview/preferredconfiguration.md): The characteristics of the map view, including the map type and features the map displays.
- [pitchButtonVisibility](mkmapview/pitchbuttonvisibility.md): A value that indicates whether the map’s pitch button is visible.
- [showsUserTrackingButton](mkmapview/showsusertrackingbutton.md): A Boolean value that indicates whether the map displays the user tracking button.
- [MKMapConfiguration](mkmapconfiguration.md): An abstract class that represents the shared elements of map configurations.
- [MKHybridMapConfiguration](mkhybridmapconfiguration.md): The class that represents a satellite image of the area with road and road name information layers on top.
- [MKImageryMapConfiguration](mkimagerymapconfiguration.md): The class that represents an imagery-based map presentation, such as one using satellite imagery.
