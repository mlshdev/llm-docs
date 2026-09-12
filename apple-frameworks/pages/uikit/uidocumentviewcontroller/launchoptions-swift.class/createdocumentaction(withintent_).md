> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentviewcontroller/launchoptions-swift.class/createdocumentaction(withintent:)](https://developer.apple.com/documentation/uikit/uidocumentviewcontroller/launchoptions-swift.class/createdocumentaction(withintent:))

# createDocumentAction(withIntent:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Creates an action that uses the specified intent.

## Declaration

```swift
class func createDocumentAction(withIntent intent: UIDocument.CreationIntent) -> UIAction
```

## Parameters

- `intent`: An intent that defines how your app creates the document.

## Mentioned In

- [Customizing a document-based app’s launch experience](../../customizing-a-document-based-app-s-launch-experience.md)

<a id="Discussion"></a>

## Discussion

Use this method to create an action that you can assign to your [primaryAction](primaryaction.md) or [secondaryAction](secondaryaction.md). When the system triggers the action, it calls your [UIDocumentBrowserViewControllerDelegate](../../uidocumentbrowserviewcontrollerdelegate.md) object’s [documentBrowser(\_:didRequestDocumentCreationWithHandler:)](../../uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didrequestdocumentcreationwithhandler_%29.md) method. For more information, see [Customizing a document-based app’s launch experience](../../customizing-a-document-based-app-s-launch-experience.md).

# createDocumentActionWithIntent: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Creates an action that uses the specified intent.

## Declaration

```objectivec
+ (UIAction *) createDocumentActionWithIntent:(UIDocumentCreationIntent) intent;
```

## Parameters

- `intent`: An intent that defines how your app creates the document.

## Mentioned In

- [Customizing a document-based app’s launch experience](../../customizing-a-document-based-app-s-launch-experience.md)

<a id="Discussion"></a>

## Discussion

Use this method to create an action that you can assign to your [primaryAction](primaryaction.md) or [secondaryAction](secondaryaction.md). When the system triggers the action, it calls your [UIDocumentBrowserViewControllerDelegate](../../uidocumentbrowserviewcontrollerdelegate.md) object’s [documentBrowser:didRequestDocumentCreationWithHandler:](../../uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didrequestdocumentcreationwithhandler_%29.md) method. For more information, see [Customizing a document-based app’s launch experience](../../customizing-a-document-based-app-s-launch-experience.md).
