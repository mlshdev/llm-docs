> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uivideoeditorcontrollerdelegate/videoeditorcontroller(_:didfailwitherror:)](https://developer.apple.com/documentation/uikit/uivideoeditorcontrollerdelegate/videoeditorcontroller(_:didfailwitherror:))

# videoEditorController(\_:didFailWithError:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies the delegate when the video editor is unable to load or save a movie.

## Declaration

```swift
optional func videoEditorController(_ editor: UIVideoEditorController, didFailWithError error: any Error)
```

## Parameters

- `editor`: The video editor that was unable to load or save a movie.
- `error`: The loading or saving error.

<a id="Discussion"></a>

## Discussion

Loading a movie into the video editor could fail because of an invalid filesystem path or an invalid media format. Saving could fail because of a lack of disk space or other reasons.

# videoEditorController:didFailWithError: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Notifies the delegate when the video editor is unable to load or save a movie.

## Declaration

```objectivec
- (void) videoEditorController:(UIVideoEditorController *) editor didFailWithError:(NSError *) error;
```

## Parameters

- `editor`: The video editor that was unable to load or save a movie.
- `error`: The loading or saving error.

<a id="Discussion"></a>

## Discussion

Loading a movie into the video editor could fail because of an invalid filesystem path or an invalid media format. Saving could fail because of a lack of disk space or other reasons.
