> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgscrolleventunit](https://developer.apple.com/documentation/coregraphics/cgscrolleventunit)

# CGScrollEventUnit (Swift)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

Constants that specify the unit of measurement for a scrolling event.

## Declaration

```swift
enum CGScrollEventUnit
```

<a id="overview"></a>

## Overview

You may pass one of these constants to the function [CGEventCreateScrollWheelEvent](cgeventcreatescrollwheelevent.md) to specify the unit of measurement for the event. The constant `kCGScrollEventUnitPixel` produces an event that most applications interpret as a smooth scrolling event. By default, the scale is about ten pixels per line. You can alter the scale with the function [CGEventSourceSetPixelsPerLine](cgeventsourcesetpixelsperline.md).

## Topics

### Constants

- [CGScrollEventUnit.pixel](cgscrolleventunit/pixel.md): Specifies that the unit of measurement is pixels.
- [CGScrollEventUnit.line](cgscrolleventunit/line.md): Specifies that the unit of measurement is lines.

### Initializers

- [init(rawValue:)](cgscrolleventunit/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

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

# CGScrollEventUnit (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

Constants that specify the unit of measurement for a scrolling event.

## Declaration

```objectivec
enum CGScrollEventUnit : uint32_t;
```

<a id="overview"></a>

## Overview

You may pass one of these constants to the function [CGEventCreateScrollWheelEvent](cgeventcreatescrollwheelevent.md) to specify the unit of measurement for the event. The constant `kCGScrollEventUnitPixel` produces an event that most applications interpret as a smooth scrolling event. By default, the scale is about ten pixels per line. You can alter the scale with the function [CGEventSourceSetPixelsPerLine](cgeventsourcesetpixelsperline.md).

## Topics

### Constants

- [kCGScrollEventUnitPixel](cgscrolleventunit/pixel.md): Specifies that the unit of measurement is pixels.
- [kCGScrollEventUnitLine](cgscrolleventunit/line.md): Specifies that the unit of measurement is lines.

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
