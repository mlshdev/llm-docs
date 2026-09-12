> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgscreenupdateoperation](https://developer.apple.com/documentation/coregraphics/cgscreenupdateoperation)

# CGScreenUpdateOperation (Swift)

**Framework:** Core Graphics  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

Types of screen-update operations.

## Declaration

```swift
struct CGScreenUpdateOperation
```

<a id="overview"></a>

## Overview

For information about how these constants are used, see the function [CGWaitForScreenUpdateRects(\_:\_:\_:\_:\_:)](cgwaitforscreenupdaterects%28__________%29.md).

## Topics

### Constants

- [refresh](cgscreenupdateoperation/refresh.md): A screen-refresh operation.
- [move](cgscreenupdateoperation/move.md): A screen-move operation.
- [reducedDirtyRectangleCount](cgscreenupdateoperation/reduceddirtyrectanglecount.md)

### Initializers

- [init(rawValue:)](cgscreenupdateoperation/init%28rawvalue_%29.md)

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
- [CGDisplayChangeSummaryFlags](cgdisplaychangesummaryflags.md): The configuration parameters that are passed to a display reconfiguration callback function.
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

# CGScreenUpdateOperation (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

Types of screen-update operations.

## Declaration

```objectivec
enum CGScreenUpdateOperation : uint32_t;
```

<a id="overview"></a>

## Overview

For information about how these constants are used, see the function [CGWaitForScreenUpdateRects](cgwaitforscreenupdaterects%28__________%29.md).

## Topics

### Constants

- [kCGScreenUpdateOperationRefresh](cgscreenupdateoperation/refresh.md): A screen-refresh operation.
- [kCGScreenUpdateOperationMove](cgscreenupdateoperation/move.md): A screen-move operation.
- [kCGScreenUpdateOperationReducedDirtyRectangleCount](cgscreenupdateoperation/reduceddirtyrectanglecount.md)

## See Also

### Enumerations

- [CGCaptureOptions](cgcaptureoptions.md): Configuration parameters that are used when capturing displays.
- [CGColorConversionInfoTransformType](cgcolorconversioninfotransformtype.md): Constants describing how a color conversion uses color spaces.
- [CGColorRenderingIntent](cgcolorrenderingintent.md): Handling options for colors that are not located within the destination color space of a graphics context.
- [CGConfigureOption](cgconfigureoption.md): The scope of the changes in a display configuration transaction.
- [CGDisplayChangeSummaryFlags](cgdisplaychangesummaryflags.md): The configuration parameters that are passed to a display reconfiguration callback function.
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
