> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uivideoeditorcontrollerdelegate/videoeditorcontrollerdidcancel(_:)](https://developer.apple.com/documentation/uikit/uivideoeditorcontrollerdelegate/videoeditorcontrollerdidcancel(_:))

# videoEditorControllerDidCancel(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies the delegate when the user cancels a movie editing operation.

## Declaration

```swift
optional func videoEditorControllerDidCancel(_ editor: UIVideoEditorController)
```

## Parameters

- `editor`: The video editor that the user canceled, not wanting to save changes.

## See Also

### Closing the video editor

- [videoEditorController(\_:didSaveEditedVideoToPath:)](videoeditorcontroller%28__didsaveeditedvideotopath_%29.md): Notifies the delegate after the system finishes saving an edited movie.

# videoEditorControllerDidCancel: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Notifies the delegate when the user cancels a movie editing operation.

## Declaration

```objectivec
- (void) videoEditorControllerDidCancel:(UIVideoEditorController *) editor;
```

## Parameters

- `editor`: The video editor that the user canceled, not wanting to save changes.

## See Also

### Closing the video editor

- [videoEditorController:didSaveEditedVideoToPath:](videoeditorcontroller%28__didsaveeditedvideotopath_%29.md): Notifies the delegate after the system finishes saving an edited movie.
