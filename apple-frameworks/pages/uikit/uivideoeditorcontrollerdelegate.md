> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uivideoeditorcontrollerdelegate](https://developer.apple.com/documentation/uikit/uivideoeditorcontrollerdelegate)

# UIVideoEditorControllerDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

A set of methods that your delegate object must implement to respond to the video editor.

## Declaration

```swift
@MainActor protocol UIVideoEditorControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The methods of this protocol notify your delegate when the system has saved an edited movie or the user has canceled editing to discard any changes. There’s also a method for responding to errors encountered by the video editor.

The delegate methods are responsible for dismissing the video editor when the operation completes. To dismiss the editor, call the [dismiss(animated:completion:)](uiviewcontroller/dismiss%28animated_completion_%29.md) method of the parent controller responsible for displaying the video editor. The video editor is described in [UIVideoEditorController](uivideoeditorcontroller.md).

## Topics

### Closing the video editor

- [videoEditorController(\_:didSaveEditedVideoToPath:)](uivideoeditorcontrollerdelegate/videoeditorcontroller%28__didsaveeditedvideotopath_%29.md): Notifies the delegate after the system finishes saving an edited movie.
- [videoEditorControllerDidCancel(\_:)](uivideoeditorcontrollerdelegate/videoeditorcontrollerdidcancel%28__%29.md): Notifies the delegate when the user cancels a movie editing operation.

### Handling errors

- [videoEditorController(\_:didFailWithError:)](uivideoeditorcontrollerdelegate/videoeditorcontroller%28__didfailwitherror_%29.md): Notifies the delegate when the video editor is unable to load or save a movie.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Managing changes to the video

- [delegate](uivideoeditorcontroller/delegate.md): The video editor’s delegate object.

# UIVideoEditorControllerDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

A set of methods that your delegate object must implement to respond to the video editor.

## Declaration

```objectivec
@protocol UIVideoEditorControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The methods of this protocol notify your delegate when the system has saved an edited movie or the user has canceled editing to discard any changes. There’s also a method for responding to errors encountered by the video editor.

The delegate methods are responsible for dismissing the video editor when the operation completes. To dismiss the editor, call the [dismissViewControllerAnimated:completion:](uiviewcontroller/dismiss%28animated_completion_%29.md) method of the parent controller responsible for displaying the video editor. The video editor is described in [UIVideoEditorController](uivideoeditorcontroller.md).

## Topics

### Closing the video editor

- [videoEditorController:didSaveEditedVideoToPath:](uivideoeditorcontrollerdelegate/videoeditorcontroller%28__didsaveeditedvideotopath_%29.md): Notifies the delegate after the system finishes saving an edited movie.
- [videoEditorControllerDidCancel:](uivideoeditorcontrollerdelegate/videoeditorcontrollerdidcancel%28__%29.md): Notifies the delegate when the user cancels a movie editing operation.

### Handling errors

- [videoEditorController:didFailWithError:](uivideoeditorcontrollerdelegate/videoeditorcontroller%28__didfailwitherror_%29.md): Notifies the delegate when the video editor is unable to load or save a movie.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Managing changes to the video

- [delegate](uivideoeditorcontroller/delegate.md): The video editor’s delegate object.
