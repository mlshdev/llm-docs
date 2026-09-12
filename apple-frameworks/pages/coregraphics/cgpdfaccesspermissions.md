> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfaccesspermissions](https://developer.apple.com/documentation/coregraphics/cgpdfaccesspermissions)

# CGPDFAccessPermissions (Swift)

**Framework:** Core Graphics  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
struct CGPDFAccessPermissions
```

## Topics

### Initializers

- [init(rawValue:)](cgpdfaccesspermissions/init%28rawvalue_%29.md)

### Type Properties

- [allowsCommenting](cgpdfaccesspermissions/allowscommenting.md)
- [allowsContentAccessibility](cgpdfaccesspermissions/allowscontentaccessibility.md)
- [allowsContentCopying](cgpdfaccesspermissions/allowscontentcopying.md)
- [allowsDocumentAssembly](cgpdfaccesspermissions/allowsdocumentassembly.md)
- [allowsDocumentChanges](cgpdfaccesspermissions/allowsdocumentchanges.md)
- [allowsFormFieldEntry](cgpdfaccesspermissions/allowsformfieldentry.md)
- [allowsHighQualityPrinting](cgpdfaccesspermissions/allowshighqualityprinting.md)
- [allowsLowQualityPrinting](cgpdfaccesspermissions/allowslowqualityprinting.md)

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

# CGPDFAccessPermissions (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
enum CGPDFAccessPermissions : uint32_t;
```

## Topics

### Type Properties

- [kCGPDFAllowsCommenting](cgpdfaccesspermissions/allowscommenting.md)
- [kCGPDFAllowsContentAccessibility](cgpdfaccesspermissions/allowscontentaccessibility.md)
- [kCGPDFAllowsContentCopying](cgpdfaccesspermissions/allowscontentcopying.md)
- [kCGPDFAllowsDocumentAssembly](cgpdfaccesspermissions/allowsdocumentassembly.md)
- [kCGPDFAllowsDocumentChanges](cgpdfaccesspermissions/allowsdocumentchanges.md)
- [kCGPDFAllowsFormFieldEntry](cgpdfaccesspermissions/allowsformfieldentry.md)
- [kCGPDFAllowsHighQualityPrinting](cgpdfaccesspermissions/allowshighqualityprinting.md)
- [kCGPDFAllowsLowQualityPrinting](cgpdfaccesspermissions/allowslowqualityprinting.md)

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
