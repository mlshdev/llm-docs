> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkresponderstate/toolpickervisibility-7hikj](https://developer.apple.com/documentation/pencilkit/pkresponderstate/toolpickervisibility-7hikj)

# toolPickerVisibility

**Interface language:** Objective-C

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

The visibility state of the tool picker.

## Declaration

```objectivec
@property (nonatomic, assign) PKToolPickerVisibility toolPickerVisibility;
```

<a id="discussion"></a>

## Discussion

This controls the state of the tool picker that is provided by the `activeToolPicker` property.

If `PKToolPickerVisibilityInherited` tool picker visibility is based on the next responder. If no responder provides a visibility, the default is `PKToolPickerVisibilityVisible`.
