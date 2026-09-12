> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpickercustomitem/controloptions](https://developer.apple.com/documentation/pencilkit/pktoolpickercustomitem/controloptions)

# PKToolPickerCustomItem.ControlOptions (Swift)

**Framework:** PencilKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Options for which controls to present.

## Declaration

```swift
struct ControlOptions
```

## Topics

### Initializers

- [init(rawValue:)](https://developer.apple.com/documentation/pencilkit/pktoolpickercustomitem/controloptions/init%28rawvalue:%29)

### Type Properties

- [opacity](controloptions/opacity.md): Present an opacity control if color adjustment is supported.
- [width](controloptions/width.md): Present a width control if width adjustment is supported.

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

# PKToolPickerCustomItemControlOptions (Objective-C)

**Framework:** PencilKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Options for which controls to present.

## Declaration

```objectivec
enum PKToolPickerCustomItemControlOptions : NSUInteger;
```

## Topics

### Enumeration Cases

- [PKToolPickerCustomItemControlOpacity](controloptions/opacity.md): Present an opacity control if color adjustment is supported.
- [PKToolPickerCustomItemControlWidth](controloptions/width.md): Present a width control if width adjustment is supported.
- [PKToolPickerCustomItemControlNone](../pktoolpickercustomitemcontroloptions/pktoolpickercustomitemcontrolnone.md): Present neither a width nor opacity control.

## See Also

### Tools

- [Configuring the PencilKit tool picker](../configuring-the-pencilkit-tool-picker.md): Incorporate a custom PencilKit tool picker with a variety of system and custom tools into a drawing app.
- [PKToolPicker](../pktoolpicker.md): A tool palette that displays a selection of drawing tools and colors for tools that a person can choose from.
- [PKInkingTool](../pkinkingtoolreference.md): An object that defines the drawing characteristics (width, color, pen style) to use when drawing lines on a canvas view.
- [PKEraserTool](../pkerasertoolreference.md): A tool for erasing previously drawn content in a canvas view.
- [PKLassoTool](../pklassotoolreference.md): A tool for selecting stroked lines and shapes in a canvas view.
- [PKTool](../pktool-c.class.md): An abstract base class for tools used by a canvas view.
- [PKResponderState](../pkresponderstate.md): An object that controls PencilKit behavior associated with a responder.
- [PKToolPickerVisibility](../pktoolpickervisibility.md): Constants that describe the visibility state of a tool picker.
- [PKToolPickerDelegate](../pktoolpicker/delegate-swift.protocol.md)
