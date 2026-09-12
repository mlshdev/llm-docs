> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkresponderstate](https://developer.apple.com/documentation/pencilkit/pkresponderstate)

# PKResponderState (Swift)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

An object that controls PencilKit behavior associated with a responder.

## Declaration

```swift
class PKResponderState
```

<a id="overview"></a>

## Overview

Access a responder’s `PKResponderState` through the `pencilKitResponderState` property on any `UIResponder`. Use it to attach a tool picker to a specific view and control when that picker is visible. Tool picker visibility follows the responder chain: if a responder’s visibility is set to `PKToolPickerVisibilityInherited`, it defers to the next responder in the chain. If no responder in the chain specifies a visibility, the tool picker defaults to visible.

```swift
view.pencilKitResponderState.activeToolPicker = PKToolPicker()
view.pencilKitResponderState.toolPickerVisibility = .visible
```

## Topics

### Configuring the tool picker

- [activeToolPicker](pkresponderstate/activetoolpicker.md): The current tool picker.
- [PKToolPickerVisibility](pktoolpickervisibility.md): Constants that describe the visibility state of a tool picker.

### Instance Properties

- [toolPickerVisibility](https://developer.apple.com/documentation/pencilkit/pkresponderstate/toolpickervisibility-7cj3c): The visibility state of the tool picker.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# PKResponderState (Objective-C)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

An object that controls PencilKit behavior associated with a responder.

## Declaration

```objectivec
@interface PKResponderState : NSObject
```

<a id="overview"></a>

## Overview

Access a responder’s `PKResponderState` through the `pencilKitResponderState` property on any `UIResponder`. Use it to attach a tool picker to a specific view and control when that picker is visible. Tool picker visibility follows the responder chain: if a responder’s visibility is set to `PKToolPickerVisibilityInherited`, it defers to the next responder in the chain. If no responder in the chain specifies a visibility, the tool picker defaults to visible.

```swift
view.pencilKitResponderState.activeToolPicker = PKToolPicker()
view.pencilKitResponderState.toolPickerVisibility = .visible
```

## Topics

### Configuring the tool picker

- [activeToolPicker](pkresponderstate/activetoolpicker.md): The current tool picker.
- [PKToolPickerVisibility](pktoolpickervisibility.md): Constants that describe the visibility state of a tool picker.

### Instance Properties

- [toolPickerVisibility](pkresponderstate/toolpickervisibility-7hikj.md): The visibility state of the tool picker.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Tools

- [Configuring the PencilKit tool picker](configuring-the-pencilkit-tool-picker.md): Incorporate a custom PencilKit tool picker with a variety of system and custom tools into a drawing app.
- [PKToolPicker](pktoolpicker.md): A tool palette that displays a selection of drawing tools and colors for tools that a person can choose from.
- [PKInkingTool](pkinkingtoolreference.md): An object that defines the drawing characteristics (width, color, pen style) to use when drawing lines on a canvas view.
- [PKEraserTool](pkerasertoolreference.md): A tool for erasing previously drawn content in a canvas view.
- [PKLassoTool](pklassotoolreference.md): A tool for selecting stroked lines and shapes in a canvas view.
- [PKTool](pktool-c.class.md): An abstract base class for tools used by a canvas view.
- [PKToolPickerVisibility](pktoolpickervisibility.md): Constants that describe the visibility state of a tool picker.
- [PKToolPickerDelegate](pktoolpicker/delegate-swift.protocol.md)
- [PKToolPickerCustomItemControlOptions](pktoolpickercustomitem/controloptions.md): Options for which controls to present.
