> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/preferencepanes/nspreferencepane](https://developer.apple.com/documentation/preferencepanes/nspreferencepane)

# NSPreferencePane (Swift)

**Framework:** Preference Panes  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

The interface for providing preference panes to System Preferences or other apps.

## Declaration

```swift
class NSPreferencePane
```

<a id="overview"></a>

## Overview

Preference panes are subclasses of [NSPreferencePane](nspreferencepane.md), packaged up in bundles and loaded by a preference application, such as System Preferences. These bundles have a suffix of `.prefPane`. Bundles intended for use by System Preferences are located in the `Library/PreferencePanes` directories of the various file system domains. See the chapter [About the macOS File System](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html#//apple_ref/doc/uid/TP40010672-CH2-SW14) in [File System Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010672) for information about domains.

The preference pane bundle normally contains a nib file with the user interface for modifying user preferences. The nib file contains a window assigned to the \_window outlet of the preference pane instance (the nib’s File’s Owner). The `NSPreferencePane` implementation of [loadMainView()](nspreferencepane/loadmainview%28%29.md), invoked by the preference application, loads the nib file and uses the content view of \_window as the preference pane’s main view. Override this method if you need a different technique for creating the user interface.

The [NSPreferencePane](nspreferencepane.md) subclass is responsible for initializing the user interface with the current preference settings and recording any modifications the user makes. Through a series of `will...`, `did...`, and `should...` methods, the preference application notifies the preference pane when the pane is selected (displayed) and deselected, allowing the pane to perform the necessary actions at the appropriate times. Implement these methods (and any additional target-action methods connected to the interface) as needed to produce the desired behavior for your preference pane.

Preference panes support Help menu items. Specify global help menu items in your bundle’s `Info.plist` file under the `NSPrefPaneHelpAnchors` key. To add dynamic help items, implement the [updateHelpMenu(with:)](nspreferencepane/updatehelpmenu%28with_%29.md) method.

## Topics

### Initializing the Preference Pane

- [init(bundle:)](nspreferencepane/init%28bundle_%29.md): Initializes a preference pane with the specified bundle.

### Loading the Main View

- [loadMainView()](nspreferencepane/loadmainview%28%29.md): Loads the preference pane’s user interface into its main view.
- [assignMainView()](nspreferencepane/assignmainview%28%29.md): Locates and assigns the preference pane’s main view from the nib file loaded by [loadMainView()](nspreferencepane/loadmainview%28%29.md).
- [mainViewDidLoad()](nspreferencepane/mainviewdidload%28%29.md): Notifies the preference pane that the main view is set up and prepared to be displayed.

### Getting the Bundle Information

- [bundle](nspreferencepane/bundle.md): The preference pane’s bundle.
- [mainNibName](nspreferencepane/mainnibname.md): The name of the preference pane’s nib file.
- [mainView](nspreferencepane/mainview.md): The main view of the preference pane.

### Selecting and Deselecting the Preference Pane

- [willSelect()](nspreferencepane/willselect%28%29.md): Notifies the preference pane that the main app is about to display the preference pane’s main view.
- [didSelect()](nspreferencepane/didselect%28%29.md): Notifies the preference pane that the main app has just displayed the preference pane’s main view.
- [willUnselect()](nspreferencepane/willunselect%28%29.md): Notifies the preference pane that the main app is about to stop displaying the preference pane’s main view.
- [didUnselect()](nspreferencepane/didunselect%28%29.md): Notifies the preference pane that the main app has just stopped displaying the preference pane’s main view.
- [isSelected](nspreferencepane/isselected.md): A Boolean value that indicates whether the preference pane is currently selected.
- [shouldUnselect](nspreferencepane/shouldunselect.md): A Boolean value that indicates whether the preference pane is able to be deselected.
- [NSPreferencePaneUnselectReply](nspreferencepaneunselectreply.md): Constants that indicate the preference pane’s availability to be deselected.
- [reply(toShouldUnselect:)](nspreferencepane/reply%28toshouldunselect_%29.md): Notifies the main application of the preference pane’s ability to be deselected.

### Handling keyboard focus

- [firstKeyView](nspreferencepane/firstkeyview.md): The first view in the keyboard focus chain.
- [initialKeyView](nspreferencepane/initialkeyview.md): The view that should have keyboard focus when the pane is selected.
- [lastKeyView](nspreferencepane/lastkeyview.md): The last view in the keyboard focus chain.
- [autoSaveTextFields](nspreferencepane/autosavetextfields.md): A Boolean value that indicates whether text fields save their values before changing preference panes.

### Help Menu support

- [updateHelpMenu(with:)](nspreferencepane/updatehelpmenu%28with_%29.md): Updates the help menu.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# NSPreferencePane (Objective-C)

**Framework:** Preference Panes  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

The interface for providing preference panes to System Preferences or other apps.

## Declaration

```objectivec
@interface NSPreferencePane : NSObject
```

<a id="overview"></a>

## Overview

Preference panes are subclasses of [NSPreferencePane](nspreferencepane.md), packaged up in bundles and loaded by a preference application, such as System Preferences. These bundles have a suffix of `.prefPane`. Bundles intended for use by System Preferences are located in the `Library/PreferencePanes` directories of the various file system domains. See the chapter [About the macOS File System](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html#//apple_ref/doc/uid/TP40010672-CH2-SW14) in [File System Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010672) for information about domains.

The preference pane bundle normally contains a nib file with the user interface for modifying user preferences. The nib file contains a window assigned to the \_window outlet of the preference pane instance (the nib’s File’s Owner). The `NSPreferencePane` implementation of [loadMainView](nspreferencepane/loadmainview%28%29.md), invoked by the preference application, loads the nib file and uses the content view of \_window as the preference pane’s main view. Override this method if you need a different technique for creating the user interface.

The [NSPreferencePane](nspreferencepane.md) subclass is responsible for initializing the user interface with the current preference settings and recording any modifications the user makes. Through a series of `will...`, `did...`, and `should...` methods, the preference application notifies the preference pane when the pane is selected (displayed) and deselected, allowing the pane to perform the necessary actions at the appropriate times. Implement these methods (and any additional target-action methods connected to the interface) as needed to produce the desired behavior for your preference pane.

Preference panes support Help menu items. Specify global help menu items in your bundle’s `Info.plist` file under the `NSPrefPaneHelpAnchors` key. To add dynamic help items, implement the [updateHelpMenuWithArray:](nspreferencepane/updatehelpmenu%28with_%29.md) method.

## Topics

### Initializing the Preference Pane

- [initWithBundle:](nspreferencepane/init%28bundle_%29.md): Initializes a preference pane with the specified bundle.

### Loading the Main View

- [loadMainView](nspreferencepane/loadmainview%28%29.md): Loads the preference pane’s user interface into its main view.
- [assignMainView](nspreferencepane/assignmainview%28%29.md): Locates and assigns the preference pane’s main view from the nib file loaded by [loadMainView](nspreferencepane/loadmainview%28%29.md).
- [mainViewDidLoad](nspreferencepane/mainviewdidload%28%29.md): Notifies the preference pane that the main view is set up and prepared to be displayed.

### Getting the Bundle Information

- [bundle](nspreferencepane/bundle.md): The preference pane’s bundle.
- [mainNibName](nspreferencepane/mainnibname.md): The name of the preference pane’s nib file.
- [mainView](nspreferencepane/mainview.md): The main view of the preference pane.

### Selecting and Deselecting the Preference Pane

- [willSelect](nspreferencepane/willselect%28%29.md): Notifies the preference pane that the main app is about to display the preference pane’s main view.
- [didSelect](nspreferencepane/didselect%28%29.md): Notifies the preference pane that the main app has just displayed the preference pane’s main view.
- [willUnselect](nspreferencepane/willunselect%28%29.md): Notifies the preference pane that the main app is about to stop displaying the preference pane’s main view.
- [didUnselect](nspreferencepane/didunselect%28%29.md): Notifies the preference pane that the main app has just stopped displaying the preference pane’s main view.
- [selected](nspreferencepane/isselected.md): A Boolean value that indicates whether the preference pane is currently selected.
- [shouldUnselect](nspreferencepane/shouldunselect.md): A Boolean value that indicates whether the preference pane is able to be deselected.
- [NSPreferencePaneUnselectReply](nspreferencepaneunselectreply.md): Constants that indicate the preference pane’s availability to be deselected.
- [replyToShouldUnselect:](nspreferencepane/reply%28toshouldunselect_%29.md): Notifies the main application of the preference pane’s ability to be deselected.

### Handling keyboard focus

- [firstKeyView](nspreferencepane/firstkeyview.md): The first view in the keyboard focus chain.
- [initialKeyView](nspreferencepane/initialkeyview.md): The view that should have keyboard focus when the pane is selected.
- [lastKeyView](nspreferencepane/lastkeyview.md): The last view in the keyboard focus chain.
- [autoSaveTextFields](nspreferencepane/autosavetextfields.md): A Boolean value that indicates whether text fields save their values before changing preference panes.

### Help Menu support

- [updateHelpMenuWithArray:](nspreferencepane/updatehelpmenu%28with_%29.md): Updates the help menu.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)
