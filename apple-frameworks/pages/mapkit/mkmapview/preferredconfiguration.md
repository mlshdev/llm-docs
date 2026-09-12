> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/preferredconfiguration](https://developer.apple.com/documentation/mapkit/mkmapview/preferredconfiguration)

# preferredConfiguration (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The characteristics of the map view, including the map type and features the map displays.

## Declaration

```swift
@NSCopying var preferredConfiguration: MKMapConfiguration { get set }
```

## See Also

### Configuring the map appearance

- [pitchButtonVisibility](pitchbuttonvisibility.md): A value that indicates whether the map’s pitch button is visible.
- [showsUserTrackingButton](showsusertrackingbutton.md): A Boolean value that indicates whether the map displays the user tracking button.
- [MKMapConfiguration](../mkmapconfiguration.md): An abstract class that represents the shared elements of map configurations.
- [MKStandardMapConfiguration](../mkstandardmapconfiguration.md): The class that represents the default map presentation, which is a street map that shows the position of all roads and some road names.
- [MKHybridMapConfiguration](../mkhybridmapconfiguration.md): The class that represents a satellite image of the area with road and road name information layers on top.
- [MKImageryMapConfiguration](../mkimagerymapconfiguration.md): The class that represents an imagery-based map presentation, such as one using satellite imagery.

# preferredConfiguration (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The characteristics of the map view, including the map type and features the map displays.

## Declaration

```objectivec
@property (nonatomic, copy) MKMapConfiguration * preferredConfiguration;
```

## See Also

### Configuring the map appearance

- [pitchButtonVisibility](pitchbuttonvisibility.md): A value that indicates whether the map’s pitch button is visible.
- [showsUserTrackingButton](showsusertrackingbutton.md): A Boolean value that indicates whether the map displays the user tracking button.
- [MKMapConfiguration](../mkmapconfiguration.md): An abstract class that represents the shared elements of map configurations.
- [MKStandardMapConfiguration](../mkstandardmapconfiguration.md): The class that represents the default map presentation, which is a street map that shows the position of all roads and some road names.
- [MKHybridMapConfiguration](../mkhybridmapconfiguration.md): The class that represents a satellite image of the area with road and road name information layers on top.
- [MKImageryMapConfiguration](../mkimagerymapconfiguration.md): The class that represents an imagery-based map presentation, such as one using satellite imagery.
