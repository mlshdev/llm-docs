> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgscreenupdatemovedelta](https://developer.apple.com/documentation/coregraphics/cgscreenupdatemovedelta)

# CGScreenUpdateMoveDelta (Swift)

**Framework:** Core Graphics  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

The distance, in pixel units, that an onscreen region moves.

## Declaration

```swift
struct CGScreenUpdateMoveDelta
```

<a id="overview"></a>

## Overview

Move operation notifications are restricted to changes that move a region by an integer number of pixels. The fields `dX` and `dY` describe the direction of movement:

- Positive values of `dX` indicate movement to the right.
- Negative values of `dX` indicate movement to the left.
- Positive values of `dY` indicate movement downward.
- Negative values of `dY` indicate movement upward.

## Topics

### Initializers

- [init()](cgscreenupdatemovedelta/init%28%29.md)
- [init(dX:dY:)](cgscreenupdatemovedelta/init%28dx_dy_%29.md)

### Instance Properties

- [dX](cgscreenupdatemovedelta/dx.md)
- [dY](cgscreenupdatemovedelta/dy.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Structures

- [CGPSConverter](cgpsconverter.md): An opaque data type used to convert PostScript data to PDF data.
- [CGCaptureOptions](cgcaptureoptions.md): Configuration parameters that are used when capturing displays.
- [CGConfigureOption](cgconfigureoption.md): The scope of the changes in a display configuration transaction.
- [CGDeviceColor](cgdevicecolor.md)
- [CGDisplayChangeSummaryFlags](cgdisplaychangesummaryflags.md): The configuration parameters that are passed to a display reconfiguration callback function.
- [CGEventFilterMask](cgeventfiltermask.md): Specify masks for classes of low-level events that can be filtered during event suppression states.
- [CGEventFlags](cgeventflags.md): Constants that indicate the modifier key state at the time an event is created, as well as other event-related states.
- [CGEventTapInformation](cgeventtapinformation.md): Defines the structure used to report information about event taps.
- [CGScreenUpdateOperation](cgscreenupdateoperation.md): Types of screen-update operations.
- [CGWindowImageOption](cgwindowimageoption.md): The data type to use to specify the type of image to be generated for a window.
- [CGWindowListOption](cgwindowlistoption.md): The data type used to specify the options for gathering a list of windows.
- [CGColorBufferFormat](cgcolorbufferformat.md)
- [CGColorDataFormat](cgcolordataformat.md)
- [CGPDFAccessPermissions](cgpdfaccesspermissions.md)
- [CGPSConverterCallbacks](cgpsconvertercallbacks.md): A structure for holding the callbacks provided when you create a PostScript converter object.

# CGScreenUpdateMoveDelta (Objective-C)

**Framework:** Core Graphics  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

The distance, in pixel units, that an onscreen region moves.

## Declaration

```objectivec
struct CGScreenUpdateMoveDelta;
```

<a id="overview"></a>

## Overview

Move operation notifications are restricted to changes that move a region by an integer number of pixels. The fields `dX` and `dY` describe the direction of movement:

- Positive values of `dX` indicate movement to the right.
- Negative values of `dX` indicate movement to the left.
- Positive values of `dY` indicate movement downward.
- Negative values of `dY` indicate movement upward.

## Topics

### Instance Properties

- [dX](cgscreenupdatemovedelta/dx.md)
- [dY](cgscreenupdatemovedelta/dy.md)

## See Also

### Structures

- [CGPSConverterRef](cgpsconverter.md): An opaque data type used to convert PostScript data to PDF data.
- [CGCaptureOptions](cgcaptureoptions.md): Configuration parameters that are used when capturing displays.
- [CGConfigureOption](cgconfigureoption.md): The scope of the changes in a display configuration transaction.
- [CGDeviceColor](cgdevicecolor.md)
- [CGDisplayChangeSummaryFlags](cgdisplaychangesummaryflags.md): The configuration parameters that are passed to a display reconfiguration callback function.
- [CGEventFilterMask](cgeventfiltermask.md): Specify masks for classes of low-level events that can be filtered during event suppression states.
- [CGEventFlags](cgeventflags.md): Constants that indicate the modifier key state at the time an event is created, as well as other event-related states.
- [CGEventTapInformation](cgeventtapinformation.md): Defines the structure used to report information about event taps.
- [CGScreenUpdateOperation](cgscreenupdateoperation.md): Types of screen-update operations.
- [CGWindowImageOption](cgwindowimageoption.md): The data type to use to specify the type of image to be generated for a window.
- [CGWindowListOption](cgwindowlistoption.md): The data type used to specify the options for gathering a list of windows.
- [CGColorBufferFormat](cgcolorbufferformat.md)
- [CGColorDataFormat](cgcolordataformat.md)
- [CGPDFAccessPermissions](cgpdfaccesspermissions.md)
- [CGPSConverterCallbacks](cgpsconvertercallbacks.md): A structure for holding the callbacks provided when you create a PostScript converter object.
