> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentinteractioncontrollerdelegate/documentinteractioncontroller(_:didendsendingtoapplication:)](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontrollerdelegate/documentinteractioncontroller(_:didendsendingtoapplication:))

# documentInteractionController(\_:didEndSendingToApplication:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when a document interaction controller’s document has been handed off to the specified application.

## Declaration

```swift
optional func documentInteractionController(_ controller: UIDocumentInteractionController, didEndSendingToApplication application: String?)
```

## Parameters

- `controller`: The document interaction controller whose document is about to be opened.
- `application`: The bundle identifier of the application that is about to open the document. This value corresponds to the value in the `CFBundleIdentifier` key of the application’s `Info.plist` file.

<a id="Discussion"></a>

## Discussion

This method is called after the document information has been saved for the specified application.

## See Also

### Opening files

- [documentInteractionController(\_:willBeginSendingToApplication:)](documentinteractioncontroller%28__willbeginsendingtoapplication_%29.md): Called when a document interaction controller’s document is about to be opened by the specified application.

# documentInteractionController:didEndSendingToApplication: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when a document interaction controller’s document has been handed off to the specified application.

## Declaration

```objectivec
- (void) documentInteractionController:(UIDocumentInteractionController *) controller didEndSendingToApplication:(NSString *) application;
```

## Parameters

- `controller`: The document interaction controller whose document is about to be opened.
- `application`: The bundle identifier of the application that is about to open the document. This value corresponds to the value in the `CFBundleIdentifier` key of the application’s `Info.plist` file.

<a id="Discussion"></a>

## Discussion

This method is called after the document information has been saved for the specified application.

## See Also

### Opening files

- [documentInteractionController:willBeginSendingToApplication:](documentinteractioncontroller%28__willbeginsendingtoapplication_%29.md): Called when a document interaction controller’s document is about to be opened by the specified application.
