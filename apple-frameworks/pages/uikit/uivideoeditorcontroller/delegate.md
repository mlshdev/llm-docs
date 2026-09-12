> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uivideoeditorcontroller/delegate](https://developer.apple.com/documentation/uikit/uivideoeditorcontroller/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

The video editor’s delegate object.

## Declaration

```swift
unowned(unsafe) var delegate: (any UINavigationControllerDelegate & UIVideoEditorControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate receives a notification when the system has finished saving an edited movie or when the user cancels the video editor. The delegate also decides when to dismiss the editor interface, so you must provide a delegate to use a video editor. If this property is `nil`, the editor is dismissed immediately if you try to show it. The delegate protocol is described in [UIVideoEditorControllerDelegate](../uivideoeditorcontrollerdelegate.md).

## See Also

### Managing changes to the video

- [UIVideoEditorControllerDelegate](../uivideoeditorcontrollerdelegate.md): A set of methods that your delegate object must implement to respond to the video editor.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

The video editor’s delegate object.

## Declaration

```objectivec
@property (nonatomic, assign, nullable) id<UINavigationControllerDelegate,UIVideoEditorControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate receives a notification when the system has finished saving an edited movie or when the user cancels the video editor. The delegate also decides when to dismiss the editor interface, so you must provide a delegate to use a video editor. If this property is `nil`, the editor is dismissed immediately if you try to show it. The delegate protocol is described in [UIVideoEditorControllerDelegate](../uivideoeditorcontrollerdelegate.md).

## See Also

### Managing changes to the video

- [UIVideoEditorControllerDelegate](../uivideoeditorcontrollerdelegate.md): A set of methods that your delegate object must implement to respond to the video editor.
