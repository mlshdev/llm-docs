> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/disabling-the-pull-down-gesture-for-a-sheet](https://developer.apple.com/documentation/uikit/disabling-the-pull-down-gesture-for-a-sheet)

# Disabling the pull-down gesture for a sheet (Swift)

**Framework:** UIKit  
**Kind:** Sample Code  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · Xcode 12.3+

Ensure a positive user experience when presenting a view controller as a sheet.

<a id="Overview"></a>

## Overview

By default, a user can use a pull-down gesture to dismiss a view controller that presents as a sheet. UIKit allows you to disable the pull-down gesture in situations where using it might cause the user to lose data or recent changes. It’s also possible to explain why the user is unable to dismiss the view controller presentation by presenting an instance of [UIAlertController](uialertcontroller.md).

<a id="Disable-the-ability-to-dismiss-a-presentation"></a>

### Disable the ability to dismiss a presentation

To disable dismissal of a view controller presentation, set [isModalInPresentation](uiviewcontroller/ismodalinpresentation.md) to `true`.

```swift
// If there are unsaved changes, enable the Save button and disable the ability to
// dismiss using the pull-down gesture.
saveButton.isEnabled = hasChanges
isModalInPresentation = hasChanges
```

It’s also possible to return `false` from the presentation delegate’s [presentationControllerShouldDismiss(\_:)](uiadaptivepresentationcontrollerdelegate/presentationcontrollershoulddismiss%28__%29.md) method. However, the system doesn’t call this method if [isModalInPresentation](uiviewcontroller/ismodalinpresentation.md) is `true` or when dismissing the presentation programmatically.

<a id="Explain-why-the-user-cant-dismiss-a-presentation"></a>

### Explain why the user can’t dismiss a presentation

To perform an action when the user attempts to dismiss a presentation that has disabled dismissal, set the presentation’s delegate as the code below shows:

```swift
// Set the editViewController to be the delegate of the presentationController for this presentation.
// editViewController can then respond to attempted dismissals.
navigationController.presentationController?.delegate = editViewController
```

After setting the delegate, implement [presentationControllerDidAttemptToDismiss(\_:)](uiadaptivepresentationcontrollerdelegate/presentationcontrollerdidattempttodismiss%28__%29.md) and perform the action. The example below shows the presentation of an instance of [UIAlertController](uialertcontroller.md):

```swift
func presentationControllerDidAttemptToDismiss(_ presentationController: UIPresentationController) {
    // The system calls this delegate method whenever the user attempts to pull
    // down to dismiss and `isModalInPresentation` is false.
    // Clarify the user's intent by asking whether they want to cancel or save.
    confirmCancel(showingSave: true)
}

// MARK: - Cancellation Confirmation

func confirmCancel(showingSave: Bool) {
    // Present a UIAlertController as an action sheet to have the user confirm losing any
    // recent changes.
    let alert = UIAlertController(title: nil, message: nil, preferredStyle: .actionSheet)
    
    // Only ask if the user wants to save if they attempt to pull to dismiss, not if they tap Cancel.
    if showingSave {
        alert.addAction(UIAlertAction(title: "Save", style: .default) { _ in
            self.delegate?.editViewControllerDidFinish(self)
        })
    }
    
    alert.addAction(UIAlertAction(title: "Discard Changes", style: .destructive) { _ in
        self.delegate?.editViewControllerDidCancel(self)
    })
    
    alert.addAction(UIAlertAction(title: "Cancel", style: .cancel, handler: nil))
    
    // If presenting the alert controller as a popover, point the popover at the Cancel button.
    alert.popoverPresentationController?.barButtonItem = cancelButton
    
    present(alert, animated: true, completion: nil)
}
```

## See Also

### Presentation management

- [UIPresentationController](uipresentationcontroller.md): An object that manages the transition animations and the presentation of view controllers onscreen.
- [UISheetPresentationController](uisheetpresentationcontroller.md): A presentation controller that manages the appearance and behavior of a sheet.

# Disabling the pull-down gesture for a sheet (Objective-C)

**Framework:** UIKit  
**Kind:** Sample Code  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · Xcode 12.3+

Ensure a positive user experience when presenting a view controller as a sheet.

<a id="Overview"></a>

## Overview

By default, a user can use a pull-down gesture to dismiss a view controller that presents as a sheet. UIKit allows you to disable the pull-down gesture in situations where using it might cause the user to lose data or recent changes. It’s also possible to explain why the user is unable to dismiss the view controller presentation by presenting an instance of [UIAlertController](uialertcontroller.md).

<a id="Disable-the-ability-to-dismiss-a-presentation"></a>

### Disable the ability to dismiss a presentation

To disable dismissal of a view controller presentation, set [modalInPresentation](uiviewcontroller/ismodalinpresentation.md) to `true`.

```swift
// If there are unsaved changes, enable the Save button and disable the ability to
// dismiss using the pull-down gesture.
saveButton.isEnabled = hasChanges
isModalInPresentation = hasChanges
```

It’s also possible to return `false` from the presentation delegate’s [presentationControllerShouldDismiss:](uiadaptivepresentationcontrollerdelegate/presentationcontrollershoulddismiss%28__%29.md) method. However, the system doesn’t call this method if [modalInPresentation](uiviewcontroller/ismodalinpresentation.md) is `true` or when dismissing the presentation programmatically.

<a id="Explain-why-the-user-cant-dismiss-a-presentation"></a>

### Explain why the user can’t dismiss a presentation

To perform an action when the user attempts to dismiss a presentation that has disabled dismissal, set the presentation’s delegate as the code below shows:

```swift
// Set the editViewController to be the delegate of the presentationController for this presentation.
// editViewController can then respond to attempted dismissals.
navigationController.presentationController?.delegate = editViewController
```

After setting the delegate, implement [presentationControllerDidAttemptToDismiss:](uiadaptivepresentationcontrollerdelegate/presentationcontrollerdidattempttodismiss%28__%29.md) and perform the action. The example below shows the presentation of an instance of [UIAlertController](uialertcontroller.md):

```swift
func presentationControllerDidAttemptToDismiss(_ presentationController: UIPresentationController) {
    // The system calls this delegate method whenever the user attempts to pull
    // down to dismiss and `isModalInPresentation` is false.
    // Clarify the user's intent by asking whether they want to cancel or save.
    confirmCancel(showingSave: true)
}

// MARK: - Cancellation Confirmation

func confirmCancel(showingSave: Bool) {
    // Present a UIAlertController as an action sheet to have the user confirm losing any
    // recent changes.
    let alert = UIAlertController(title: nil, message: nil, preferredStyle: .actionSheet)
    
    // Only ask if the user wants to save if they attempt to pull to dismiss, not if they tap Cancel.
    if showingSave {
        alert.addAction(UIAlertAction(title: "Save", style: .default) { _ in
            self.delegate?.editViewControllerDidFinish(self)
        })
    }
    
    alert.addAction(UIAlertAction(title: "Discard Changes", style: .destructive) { _ in
        self.delegate?.editViewControllerDidCancel(self)
    })
    
    alert.addAction(UIAlertAction(title: "Cancel", style: .cancel, handler: nil))
    
    // If presenting the alert controller as a popover, point the popover at the Cancel button.
    alert.popoverPresentationController?.barButtonItem = cancelButton
    
    present(alert, animated: true, completion: nil)
}
```

## See Also

### Presentation management

- [UIPresentationController](uipresentationcontroller.md): An object that manages the transition animations and the presentation of view controllers onscreen.
- [UISheetPresentationController](uisheetpresentationcontroller.md): A presentation controller that manages the appearance and behavior of a sheet.
