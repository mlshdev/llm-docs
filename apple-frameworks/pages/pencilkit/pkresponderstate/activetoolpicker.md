> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkresponderstate/activetoolpicker](https://developer.apple.com/documentation/pencilkit/pkresponderstate/activetoolpicker)

# activeToolPicker (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

The current tool picker.

## Declaration

```swift
var activeToolPicker: PKToolPicker? { get set }
```

<a id="discussion"></a>

## Discussion

Control tool picker visibility with the `toolPickerVisibility` property.

If `nil` the active tool picker is based on the next responder.

## See Also

### Configuring the tool picker

- [PKToolPickerVisibility](../pktoolpickervisibility.md): Constants that describe the visibility state of a tool picker.

# activeToolPicker (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

The current tool picker.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) PKToolPicker * activeToolPicker;
```

<a id="discussion"></a>

## Discussion

Control tool picker visibility with the `toolPickerVisibility` property.

If `nil` the active tool picker is based on the next responder.

## See Also

### Configuring the tool picker

- [PKToolPickerVisibility](../pktoolpickervisibility.md): Constants that describe the visibility state of a tool picker.
