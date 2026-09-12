> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdisplaychangesummaryflags](https://developer.apple.com/documentation/coregraphics/cgdisplaychangesummaryflags)

# CGDisplayChangeSummaryFlags (Swift)

**Framework:** Core Graphics  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

The configuration parameters that are passed to a display reconfiguration callback function.

## Declaration

```swift
struct CGDisplayChangeSummaryFlags
```

<a id="overview"></a>

## Overview

For information about how these constants are used, see the callback [CGDisplayReconfigurationCallBack](cgdisplayreconfigurationcallback.md).

## Topics

### Constants

- [beginConfigurationFlag](cgdisplaychangesummaryflags/beginconfigurationflag.md): The display configuration is about to change.
- [movedFlag](cgdisplaychangesummaryflags/movedflag.md): The location of the upper-left corner of the display in the global display coordinate space has changed.
- [setMainFlag](cgdisplaychangesummaryflags/setmainflag.md): The display is now the main display.
- [setModeFlag](cgdisplaychangesummaryflags/setmodeflag.md): The display mode has changed.
- [addFlag](cgdisplaychangesummaryflags/addflag.md): The display has been added to the active display list.
- [removeFlag](cgdisplaychangesummaryflags/removeflag.md): The display has been removed from the active display list.
- [enabledFlag](cgdisplaychangesummaryflags/enabledflag.md): The display has been enabled.
- [disabledFlag](cgdisplaychangesummaryflags/disabledflag.md): The display has been disabled.
- [mirrorFlag](cgdisplaychangesummaryflags/mirrorflag.md): The display is now mirroring another display.
- [unMirrorFlag](cgdisplaychangesummaryflags/unmirrorflag.md): The display is no longer mirroring another display.
- [desktopShapeChangedFlag](cgdisplaychangesummaryflags/desktopshapechangedflag.md)

### Initializers

- [init(rawValue:)](cgdisplaychangesummaryflags/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Enumerations

- [CGCaptureOptions](cgcaptureoptions.md): Configuration parameters that are used when capturing displays.
- [CGColorConversionInfoTransformType](cgcolorconversioninfotransformtype.md): Constants describing how a color conversion uses color spaces.
- [CGColorRenderingIntent](cgcolorrenderingintent.md): Handling options for colors that are not located within the destination color space of a graphics context.
- [CGConfigureOption](cgconfigureoption.md): The scope of the changes in a display configuration transaction.
- [CGDisplayStreamFrameStatus](cgdisplaystreamframestatus.md): Describes a frame update event.
- [CGDisplayStreamUpdateRectType](cgdisplaystreamupdaterecttype.md): Use these constants to determine which rectangles your app is interested in.
- [CGError](cgerror.md): A uniform type for result codes returned by functions in Core Graphics.
- [CGEventField](cgeventfield.md): Constants used as keys to access specialized fields in low-level events.
- [CGEventFilterMask](cgeventfiltermask.md): Specify masks for classes of low-level events that can be filtered during event suppression states.
- [CGEventFlags](cgeventflags.md): Constants that indicate the modifier key state at the time an event is created, as well as other event-related states.
- [CGEventMouseSubtype](cgeventmousesubtype.md): Constants used with the [CGEventField.mouseEventSubtype](cgeventfield/mouseeventsubtype.md) event field.
- [CGEventSourceStateID](cgeventsourcestateid.md): Constants that specify the possible source states of an event source.
- [CGEventSuppressionState](cgeventsuppressionstate.md): Specify the event suppression states that can occur after posting an event.
- [CGEventTapLocation](cgeventtaplocation.md): Constants that specify possible tapping points for events.
- [CGEventTapOptions](cgeventtapoptions.md): Constants that specify whether a new event tap is an active filter or a passive listener.

# CGDisplayChangeSummaryFlags (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

The configuration parameters that are passed to a display reconfiguration callback function.

## Declaration

```objectivec
enum CGDisplayChangeSummaryFlags : uint32_t;
```

<a id="overview"></a>

## Overview

For information about how these constants are used, see the callback [CGDisplayReconfigurationCallBack](cgdisplayreconfigurationcallback.md).

## Topics

### Constants

- [kCGDisplayBeginConfigurationFlag](cgdisplaychangesummaryflags/beginconfigurationflag.md): The display configuration is about to change.
- [kCGDisplayMovedFlag](cgdisplaychangesummaryflags/movedflag.md): The location of the upper-left corner of the display in the global display coordinate space has changed.
- [kCGDisplaySetMainFlag](cgdisplaychangesummaryflags/setmainflag.md): The display is now the main display.
- [kCGDisplaySetModeFlag](cgdisplaychangesummaryflags/setmodeflag.md): The display mode has changed.
- [kCGDisplayAddFlag](cgdisplaychangesummaryflags/addflag.md): The display has been added to the active display list.
- [kCGDisplayRemoveFlag](cgdisplaychangesummaryflags/removeflag.md): The display has been removed from the active display list.
- [kCGDisplayEnabledFlag](cgdisplaychangesummaryflags/enabledflag.md): The display has been enabled.
- [kCGDisplayDisabledFlag](cgdisplaychangesummaryflags/disabledflag.md): The display has been disabled.
- [kCGDisplayMirrorFlag](cgdisplaychangesummaryflags/mirrorflag.md): The display is now mirroring another display.
- [kCGDisplayUnMirrorFlag](cgdisplaychangesummaryflags/unmirrorflag.md): The display is no longer mirroring another display.
- [kCGDisplayDesktopShapeChangedFlag](cgdisplaychangesummaryflags/desktopshapechangedflag.md)

## See Also

### Enumerations

- [CGCaptureOptions](cgcaptureoptions.md): Configuration parameters that are used when capturing displays.
- [CGColorConversionInfoTransformType](cgcolorconversioninfotransformtype.md): Constants describing how a color conversion uses color spaces.
- [CGColorRenderingIntent](cgcolorrenderingintent.md): Handling options for colors that are not located within the destination color space of a graphics context.
- [CGConfigureOption](cgconfigureoption.md): The scope of the changes in a display configuration transaction.
- [CGDisplayStreamFrameStatus](cgdisplaystreamframestatus.md): Describes a frame update event.
- [CGDisplayStreamUpdateRectType](cgdisplaystreamupdaterecttype.md): Use these constants to determine which rectangles your app is interested in.
- [CGError](cgerror.md): A uniform type for result codes returned by functions in Core Graphics.
- [CGEventField](cgeventfield.md): Constants used as keys to access specialized fields in low-level events.
- [CGEventFilterMask](cgeventfiltermask.md): Specify masks for classes of low-level events that can be filtered during event suppression states.
- [CGEventFlags](cgeventflags.md): Constants that indicate the modifier key state at the time an event is created, as well as other event-related states.
- [CGEventMouseSubtype](cgeventmousesubtype.md): Constants used with the [kCGMouseEventSubtype](cgeventfield/mouseeventsubtype.md) event field.
- [CGEventSourceStateID](cgeventsourcestateid.md): Constants that specify the possible source states of an event source.
- [CGEventSuppressionState](cgeventsuppressionstate.md): Specify the event suppression states that can occur after posting an event.
- [CGEventTapLocation](cgeventtaplocation.md): Constants that specify possible tapping points for events.
- [CGEventTapOptions](cgeventtapoptions.md): Constants that specify whether a new event tap is an active filter or a passive listener.
