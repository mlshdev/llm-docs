> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phpickerviewcontrollerdelegate-5yntc/picker(_:didfinishpicking:)](https://developer.apple.com/documentation/photosui/phpickerviewcontrollerdelegate-5yntc/picker(_:didfinishpicking:))

# picker(\_:didFinishPicking:)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS

Called when the user completes a selection or dismisses `PHPickerViewController` using the cancel button.

## Declaration

```swift
@MainActor @preconcurrency func picker(_ picker: PHPickerViewController, didFinishPicking results: [PHPickerResult])
```

<a id="discussion"></a>

## Discussion

The picker won’t be automatically dismissed when this method is called.
