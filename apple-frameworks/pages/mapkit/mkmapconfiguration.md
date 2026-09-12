> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapconfiguration](https://developer.apple.com/documentation/mapkit/mkmapconfiguration)

# MKMapConfiguration (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An abstract class that represents the shared elements of map configurations.

## Declaration

```swift
class MKMapConfiguration
```

## Topics

### Controlling the elevation style

- [elevationStyle](mkmapconfiguration/elevationstyle-swift.property.md): The value that indicates the map’s elevation style.
- [MKMapConfiguration.ElevationStyle](mkmapconfiguration/elevationstyle-swift.enum.md): Values that control the map’s elevation style.

### Initializers

- [init(coder:)](mkmapconfiguration/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MKHybridMapConfiguration](mkhybridmapconfiguration.md)
- [MKImageryMapConfiguration](mkimagerymapconfiguration.md)
- [MKStandardMapConfiguration](mkstandardmapconfiguration.md)

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
- [MKStandardMapConfiguration](mkstandardmapconfiguration.md): The class that represents the default map presentation, which is a street map that shows the position of all roads and some road names.
- [MKHybridMapConfiguration](mkhybridmapconfiguration.md): The class that represents a satellite image of the area with road and road name information layers on top.
- [MKImageryMapConfiguration](mkimagerymapconfiguration.md): The class that represents an imagery-based map presentation, such as one using satellite imagery.

# MKMapConfiguration (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An abstract class that represents the shared elements of map configurations.

## Declaration

```objectivec
@interface MKMapConfiguration : NSObject
```

## Topics

### Controlling the elevation style

- [elevationStyle](mkmapconfiguration/elevationstyle-swift.property.md): The value that indicates the map’s elevation style.
- [MKMapElevationStyle](mkmapconfiguration/elevationstyle-swift.enum.md): Values that control the map’s elevation style.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MKHybridMapConfiguration](mkhybridmapconfiguration.md)
- [MKImageryMapConfiguration](mkimagerymapconfiguration.md)
- [MKStandardMapConfiguration](mkstandardmapconfiguration.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Configuring the map appearance

- [preferredConfiguration](mkmapview/preferredconfiguration.md): The characteristics of the map view, including the map type and features the map displays.
- [pitchButtonVisibility](mkmapview/pitchbuttonvisibility.md): A value that indicates whether the map’s pitch button is visible.
- [showsUserTrackingButton](mkmapview/showsusertrackingbutton.md): A Boolean value that indicates whether the map displays the user tracking button.
- [MKStandardMapConfiguration](mkstandardmapconfiguration.md): The class that represents the default map presentation, which is a street map that shows the position of all roads and some road names.
- [MKHybridMapConfiguration](mkhybridmapconfiguration.md): The class that represents a satellite image of the area with road and road name information layers on top.
- [MKImageryMapConfiguration](mkimagerymapconfiguration.md): The class that represents an imagery-based map presentation, such as one using satellite imagery.
