> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pencilkit/pktoolpickerobserver/toolpickerisruleractivedidchange(_:)

# toolPickerIsRulerActiveDidChange(\_:) (Swift)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the observer when a person shows or hides the ruler.

## Declaration

```swift
optional func toolPickerIsRulerActiveDidChange(_ toolPicker: PKToolPicker)
```

## Parameters

- `toolPicker`: The tool picker whose configuration changed.

## See Also

### Detecting tool configuration changes

- [toolPickerSelectedToolItemDidChange(\_:)](toolpickerselectedtoolitemdidchange%28__%29.md): Tells the observer when a person selects a new tool item.

# toolPickerIsRulerActiveDidChange: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the observer when a person shows or hides the ruler.

## Declaration

```objectivec
- (void) toolPickerIsRulerActiveDidChange:(PKToolPicker *) toolPicker;
```

## Parameters

- `toolPicker`: The tool picker whose configuration changed.

## See Also

### Detecting tool configuration changes

- [toolPickerSelectedToolItemDidChange:](toolpickerselectedtoolitemdidchange%28__%29.md): Tells the observer when a person selects a new tool item.
