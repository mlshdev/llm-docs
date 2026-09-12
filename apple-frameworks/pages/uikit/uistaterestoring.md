> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistaterestoring](https://developer.apple.com/documentation/uikit/uistaterestoring)

# UIStateRestoring (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Methods for adding objects to your state restoration archives.

## Declaration

```swift
@MainActor protocol UIStateRestoring : NSObjectProtocol
```

## Mentioned In

- [About the UI preservation process](about-the-ui-preservation-process.md)

<a id="overview"></a>

## Overview

You can add state restoring objects to an archive directly or by referencing them from another object that’s preserved, such as a view controller. The methods of the protocol let you save enough information about the object to find or recreate it during the next launch cycle.

When adopting this protocol in your custom objects, you must also remember to register those objects using the [registerObject(forStateRestoration:restorationIdentifier:)](uiapplication/registerobject%28forstaterestoration_restorationidentifier_%29.md) method of the [UIApplication](uiapplication.md) class. You don’t need to register views or view controllers explicitly because UIKit registers those objects automatically. View controllers adopt this protocol so that they may be used as the restoration parent of one of your custom objects.

## Topics

### Accessing the object information

- [restorationParent](uistaterestoring/restorationparent.md): The parent object used to scope the current object.
- [objectRestorationClass](uistaterestoring/objectrestorationclass.md): The class responsible for creating this object when restoring the app’s state.

### Encoding and decoding the object

- [encodeRestorableState(with:)](uistaterestoring/encoderestorablestate%28with_%29.md): Encodes state-related information for the object.
- [decodeRestorableState(with:)](uistaterestoring/decoderestorablestate%28with_%29.md): Decodes and restores state-related information for the object.
- [applicationFinishedRestoringState()](uistaterestoring/applicationfinishedrestoringstate%28%29.md): Called after all objects have had a chance to decode their state.

### Constants

- [State restoration keys](state-restoration-keys.md): Keys that are available in restoration archives.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UIActivityViewController](uiactivityviewcontroller.md)
- [UIAlertController](uialertcontroller.md)
- [UICloudSharingController](uicloudsharingcontroller.md)
- [UICollectionViewController](uicollectionviewcontroller.md)
- [UIColorPickerViewController](uicolorpickerviewcontroller.md)
- [UIDocumentBrowserViewController](uidocumentbrowserviewcontroller.md)
- [UIDocumentMenuViewController](uidocumentmenuviewcontroller.md)
- [UIDocumentPickerExtensionViewController](uidocumentpickerextensionviewcontroller.md)
- [UIDocumentPickerViewController](uidocumentpickerviewcontroller.md)
- [UIDocumentViewController](uidocumentviewcontroller.md)
- [UIFontPickerViewController](uifontpickerviewcontroller.md)
- [UIImagePickerController](uiimagepickercontroller.md)
- [UIInputViewController](uiinputviewcontroller.md)
- [UINavigationController](uinavigationcontroller.md)
- [UIPageViewController](uipageviewcontroller.md)
- [UIReferenceLibraryViewController](uireferencelibraryviewcontroller.md)
- [UISearchContainerViewController](uisearchcontainerviewcontroller.md)
- [UISearchController](uisearchcontroller.md)
- [UISplitViewController](uisplitviewcontroller.md)
- [UITabBarController](uitabbarcontroller.md)
- [UITableViewController](uitableviewcontroller.md)
- [UITextFormattingViewController](uitextformattingviewcontroller.md)
- [UIVideoEditorController](uivideoeditorcontroller.md)
- [UIViewController](uiviewcontroller.md)

## See Also

### Interface restoration

- [Restoring your app’s state](restoring-your-app-s-state.md): Provide continuity for the user by preserving current activities.
- [Restoring your app’s state with SwiftUI](https://developer.apple.com/documentation/swiftui/restoring-your-app-s-state-with-swiftui): Provide app continuity for users by preserving their current activities.
- [Preserving your app’s UI across launches](preserving-your-app-s-ui-across-launches.md): Return your app to its previous state after the system terminates it.
- [UIViewControllerRestoration](uiviewcontrollerrestoration.md): The methods that objects adopt so that they can act as a restoration class for view controllers during state restoration.
- [UIObjectRestoration](uiobjectrestoration.md): The interface that restoration classes use to restore preserved objects.

# UIStateRestoring (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Methods for adding objects to your state restoration archives.

## Declaration

```objectivec
@protocol UIStateRestoring <NSObject>
```

## Mentioned In

- [About the UI preservation process](about-the-ui-preservation-process.md)

<a id="overview"></a>

## Overview

You can add state restoring objects to an archive directly or by referencing them from another object that’s preserved, such as a view controller. The methods of the protocol let you save enough information about the object to find or recreate it during the next launch cycle.

When adopting this protocol in your custom objects, you must also remember to register those objects using the [registerObjectForStateRestoration:restorationIdentifier:](uiapplication/registerobject%28forstaterestoration_restorationidentifier_%29.md) method of the [UIApplication](uiapplication.md) class. You don’t need to register views or view controllers explicitly because UIKit registers those objects automatically. View controllers adopt this protocol so that they may be used as the restoration parent of one of your custom objects.

## Topics

### Accessing the object information

- [restorationParent](uistaterestoring/restorationparent.md): The parent object used to scope the current object.
- [objectRestorationClass](uistaterestoring/objectrestorationclass.md): The class responsible for creating this object when restoring the app’s state.

### Encoding and decoding the object

- [encodeRestorableStateWithCoder:](uistaterestoring/encoderestorablestate%28with_%29.md): Encodes state-related information for the object.
- [decodeRestorableStateWithCoder:](uistaterestoring/decoderestorablestate%28with_%29.md): Decodes and restores state-related information for the object.
- [applicationFinishedRestoringState](uistaterestoring/applicationfinishedrestoringstate%28%29.md): Called after all objects have had a chance to decode their state.

### Constants

- [State restoration keys](state-restoration-keys.md): Keys that are available in restoration archives.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UIViewController](uiviewcontroller.md)

## See Also

### Interface restoration

- [Restoring your app’s state](restoring-your-app-s-state.md): Provide continuity for the user by preserving current activities.
- [Restoring your app’s state with SwiftUI](https://developer.apple.com/documentation/swiftui/restoring-your-app-s-state-with-swiftui): Provide app continuity for users by preserving their current activities.
- [Preserving your app’s UI across launches](preserving-your-app-s-ui-across-launches.md): Return your app to its previous state after the system terminates it.
- [UIViewControllerRestoration](uiviewcontrollerrestoration.md): The methods that objects adopt so that they can act as a restoration class for view controllers during state restoration.
- [UIObjectRestoration](uiobjectrestoration.md): The interface that restoration classes use to restore preserved objects.
