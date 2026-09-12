> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nseditor-deprecated-symbols](https://developer.apple.com/documentation/appkit/nseditor-deprecated-symbols)

# NSEditor

**Interface language:** Objective-C

**Framework:** AppKit

A set of methods that controllers and UI elements can implement to manage editing.

<a id="overview"></a>

## Overview

The [NSEditor](nseditor.md) informal protocol provides a means for requesting that the receiver commit or discard any pending edits.

These methods are typically invoked on user interface elements by a controller. They can also be sent to a controller in response to a user’s attempt to save a document or quit an application.

[NSController](nscontroller.md) provides an implementation of this protocol, as do the AppKit user interface elements that support binding.

> **Important**

>  In macOS 10.7 or later, if you have enabled autosaving in your application, and your application has custom objects that implement or override the [NSEditor](nseditor.md) protocol, you must also implement [commitEditingAndReturnError:](nseditor/commiteditingwithoutpresentingerror%28%29.md) in those objects.

## Topics

### Managing editing

- [discardEditing](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/discardediting): Deprecated. Causes the receiver to discard any changes, restoring the previous values.
- [commitEditing](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/commitediting): Deprecated. Returns whether the receiver was able to commit any pending edits.
- [commitEditingAndReturnError:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/commiteditingandreturnerror:): Deprecated. Attempt to commit pending edits, returning an error in the case of failure.
- [commitEditingWithDelegate:didCommitSelector:contextInfo:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/commiteditingwithdelegate:didcommitselector:contextinfo:): Deprecated. Attempt to commit any currently edited results of the receiver.

## See Also

### Protocols

- [NSAccessibility](nsaccessibility.md): A legacy, informal protocol that Apple doesn’t recommend for active use.
- [NSEditorRegistration](nseditorregistration.md): A set of methods that controllers can implement to enable an editor view to inform the controller when it has uncommitted changes.
- [NSInputServiceProvider](nsinputserviceprovider.md)
- [NSInputServerMouseTracker](nsinputservermousetracker.md)
- [NSDrawerDelegate](nsdrawerdelegate.md): Deprecated. A set of methods that drawer delegates implement to open, close, and resize the drawer.
