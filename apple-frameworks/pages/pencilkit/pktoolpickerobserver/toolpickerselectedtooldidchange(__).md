> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pencilkit/pktoolpickerobserver/toolpickerselectedtooldidchange(_:)

# toolPickerSelectedToolDidChange(\_:) (Swift)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Tells the observer when a person selects a new tool.

> Use [toolPickerSelectedToolItemDidChange(\_:)](toolpickerselectedtoolitemdidchange%28__%29.md) instead.

## Declaration

```swift
optional func toolPickerSelectedToolDidChange(_ toolPicker: PKToolPicker)
```

## Parameters

- `toolPicker`: The tool picker whose configuration changed.

# toolPickerSelectedToolDidChange: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Tells the observer when a person selects a new tool.

> Use [toolPickerSelectedToolItemDidChange:](toolpickerselectedtoolitemdidchange%28__%29.md) instead.

## Declaration

```objectivec
- (void) toolPickerSelectedToolDidChange:(PKToolPicker *) toolPicker;
```

## Parameters

- `toolPicker`: The tool picker whose configuration changed.
