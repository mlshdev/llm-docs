> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uivideoeditorcontrollerdelegate/videoeditorcontroller(_:didsaveeditedvideotopath:)](https://developer.apple.com/documentation/uikit/uivideoeditorcontrollerdelegate/videoeditorcontroller(_:didsaveeditedvideotopath:))

# videoEditorController(\_:didSaveEditedVideoToPath:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies the delegate after the system finishes saving an edited movie.

## Declaration

```swift
optional func videoEditorController(_ editor: UIVideoEditorController, didSaveEditedVideoToPath editedVideoPath: String)
```

## Parameters

- `editor`: The video editor that has finished editing and saving a movie.
- `editedVideoPath`: The filesystem path to the edited movie.

## See Also

### Closing the video editor

- [videoEditorControllerDidCancel(\_:)](videoeditorcontrollerdidcancel%28__%29.md): Notifies the delegate when the user cancels a movie editing operation.

# videoEditorController:didSaveEditedVideoToPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Notifies the delegate after the system finishes saving an edited movie.

## Declaration

```objectivec
- (void) videoEditorController:(UIVideoEditorController *) editor didSaveEditedVideoToPath:(NSString *) editedVideoPath;
```

## Parameters

- `editor`: The video editor that has finished editing and saving a movie.
- `editedVideoPath`: The filesystem path to the edited movie.

## See Also

### Closing the video editor

- [videoEditorControllerDidCancel:](videoeditorcontrollerdidcancel%28__%29.md): Notifies the delegate when the user cancels a movie editing operation.
