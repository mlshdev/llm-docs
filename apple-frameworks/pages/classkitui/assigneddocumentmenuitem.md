> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkitui/assigneddocumentmenuitem](https://developer.apple.com/documentation/classkitui/assigneddocumentmenuitem)

# AssignedDocumentMenuItem

**Framework:** ClassKit UI  
**Kind:** Class  
**Availability:** macOS 26.4+

A menu item that provides assigned document submission functionality.

## Declaration

```swift
@objc class AssignedDocumentMenuItem
```

<a id="overview"></a>

## Overview

`AssignedDocumentMenuItem` enables students to submit and withdraw assigned documents directly from AppKit menus. The menu element loads asynchronously, fetching document metadata from ClassKit and displaying the appropriate action based on the current submission status. The element shows an in-line spinner during both initial loading and submission processing.

The following example shows how to create an assigned document menu item and customize its behavior with validation and completion actions:

```swift
let menuItem = AssignedDocumentMenuItem(
    documentURL: documentURL,
    willSubmit: { url in
        // Validate the assigned document before submission
        guard await validateDocument(url) else {
            await showAlert("Please complete all sections before submitting")
            return false // Prevents submission
        }
        return true // Allows submission to continue
    },
    didSubmit: { url in
        // Handle successful submission
        logEvent("Assigned document submitted successfully!")
    }
)
// Add the configured item to the menu
menu.addItem(menuItem)
```

## Topics

### Initializers

- [init(documentURL:willSubmit:didSubmit:willWithdraw:didWithdraw:)](assigneddocumentmenuitem/init%28documenturl_willsubmit_didsubmit_willwithdraw_didwithdraw_%29.md): Creates a menu item for assigned document submission.

## Relationships

### Inherits From

- [NSMenuItem](https://developer.apple.com/documentation/appkit/nsmenuitem)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol)
- [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [NSValidatedUserInterfaceItem](https://developer.apple.com/documentation/appkit/nsvalidateduserinterfaceitem)

## See Also

### Submitting assigned documents

- [AssignedDocumentSubmissionButton](assigneddocumentsubmissionbutton.md): A button that provides submission functionality for the assigned document.
- [AssignedDocumentDeferredMenuElement](assigneddocumentdeferredmenuelement.md): A deferred menu element that provides assigned document submission functionality.
