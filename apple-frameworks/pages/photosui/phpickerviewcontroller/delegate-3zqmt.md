> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photosui/phpickerviewcontroller/delegate-3zqmt

# delegate

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS

The picker’s delegate object.

## Declaration

```swift
@MainActor @preconcurrency weak var delegate: (any PHPickerViewControllerDelegate)? { get set }
```

## See Also

### Responding to user selection

- [PHPickerViewControllerDelegate](../phpickerviewcontrollerdelegate-5yntc.md): A set of methods that the delegate must implement to respond to `PHPickerViewController` user events.
- [PHPickerResult](../phpickerresult-swift.struct.md): Types that represent a selected asset from a person’s photo library.
