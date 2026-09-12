> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityprotocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)

# NSAccessibilityProtocol (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

The complete list of properties and methods for accessible elements.

## Declaration

```swift
protocol NSAccessibilityProtocol : NSObjectProtocol
```

<a id="overview"></a>

## Overview

To be accessible, an app must provide information to the assistive app about its user interface and capabilities. There are three ways that apps and assistive apps interact:

- Informational properties. [NSAccessibilityProtocol](nsaccessibilityprotocol.md) defines a number of properties that provide information about your view or control. If you’re working with a subclass of a standard AppKit view or control, you can either set the desired property or override its getters and setters. By default, overriding only the getter tells the assistive app that it has read-only access to the property. Overriding the setter tells the assistive app that it also has write access to the property.
- Action methods. [NSAccessibilityProtocol](nsaccessibilityprotocol.md) also defines a number of methods that simulate button presses, mouse clicks, and selections in your view or control. By implementing these methods, you give assistive apps the ability to drive your view or control.
- Notifications. Your view or control may need to let the assistive app know when changes occur. [NSAccessibility.Notification](nsaccessibility-swift.struct/notification.md) defines a number of notifications that you can send using the [post(element:notification:)](nsaccessibility-swift.struct/post%28element_notification_%29.md) method. The role-specific protocols don’t include these notifications; however, standard AppKit controls already send appropriate messages for their standard usage patterns. You typically need to send your own notifications only when you’re creating a custom control or when you’re using a standard control in a nonstandard way.

If you’re using standard AppKit user interface elements, much of the work has been done for you. AppKit views and controls adopt the [NSAccessibilityProtocol](nsaccessibilityprotocol.md) protocol by default. In particular, [NSView](nsview.md), [NSWindow](nswindow.md), [NSCell](nscell.md), and [NSDrawer](nsdrawer.md) provide a default implementation for all the properties and methods in this protocol. In some cases, you may need to modify these default values to better represent your app, to provide additional context, or to modify the user’s flow through the app.

If you’re using custom view or control subclasses, you need to add the appropriate informational properties, action methods, and notifications. You do this by adopting a role-specific protocol instead of [NSAccessibilityProtocol](nsaccessibilityprotocol.md). See [Custom Controls](custom-controls.md).

If you’re using custom user interface elements that don’t inherit from [NSView](nsview.md) or one of the other accessibility-enabled AppKit classes, subclass the [NSAccessibilityElement](nsaccessibilityelement-swift.class.md) class instead of adopting instead of [NSAccessibilityProtocol](nsaccessibilityprotocol.md).

<a id="Customizing-User-Interface-Elements"></a>

### Customizing User Interface Elements

Often, you can adjust how an assistive app interacts with your user interface element without creating a custom subclass. If a user interface element inherits from [NSView](nsview.md) or one of the other accessibility-enabled AppKit classes, you can customize it by:

- Setting its accessibility values using any of the setter methods in the [NSAccessibilityProtocol](nsaccessibilityprotocol.md) protocol.
- Overriding any of the properties or methods in the [NSAccessibilityProtocol](nsaccessibilityprotocol.md) protocol with a custom implementation.

If you override a getter method, the system lets assistive apps call your getter. This can be particularly useful when managing dynamic properties because you can calculate their current value on demand instead of trying to update the property in response to a change.

If you override a setter method, the system lets assistive apps both read and modify that property.

You can control which accessor methods the assistive app can use by overriding [isAccessibilitySelectorAllowed(\_:)](nsaccessibilityprotocol/isaccessibilityselectorallowed%28__%29.md). Return [true](https://developer.apple.com/documentation/swift/true) if the assistive app can call the selector; otherwise, return [false](https://developer.apple.com/documentation/swift/false).

## Topics

### Configuring accessibility

- [isAccessibilityElement()](nsaccessibilityprotocol/isaccessibilityelement%28%29.md): Returns a Boolean value that determines whether the accessibility element participates in the accessibility hierarchy.
- [setAccessibilityElement(\_:)](nsaccessibilityprotocol/setaccessibilityelement%28__%29.md): Sets a Boolean value that determines whether the accessibility element participates in the accessibility hierarchy.
- [isAccessibilityEnabled()](nsaccessibilityprotocol/isaccessibilityenabled%28%29.md): Returns a Boolean value that determines whether the accessibility element responds to user events.
- [setAccessibilityEnabled(\_:)](nsaccessibilityprotocol/setaccessibilityenabled%28__%29.md): Sets a Boolean value that determines whether the accessibility element responds to user events.
- [accessibilityFrame()](nsaccessibilityprotocol/accessibilityframe%28%29.md): Returns the accessibility element’s frame in screen coordinates.
- [setAccessibilityFrame(\_:)](nsaccessibilityprotocol/setaccessibilityframe%28__%29.md): Sets the accessibility element’s frame in screen coordinates.
- [accessibilityHelp()](nsaccessibilityprotocol/accessibilityhelp%28%29.md): Returns the help text for the accessibility element.
- [setAccessibilityHelp(\_:)](nsaccessibilityprotocol/setaccessibilityhelp%28__%29.md): Sets the help text for the accessibility element.
- [accessibilityLabel()](nsaccessibilityprotocol/accessibilitylabel%28%29.md): Returns a short description of the accessibility element.
- [setAccessibilityLabel(\_:)](nsaccessibilityprotocol/setaccessibilitylabel%28__%29.md): Sets a short description of the accessibility element.
- [accessibilityTitle()](nsaccessibilityprotocol/accessibilitytitle%28%29.md): Returns the title of the accessibility element—for example, a button’s visible text.
- [setAccessibilityTitle(\_:)](nsaccessibilityprotocol/setaccessibilitytitle%28__%29.md): Sets the title of the accessibility element.
- [accessibilityValue()](nsaccessibilityprotocol/accessibilityvalue%28%29.md): Returns the accessibility element’s value.
- [setAccessibilityValue(\_:)](nsaccessibilityprotocol/setaccessibilityvalue%28__%29.md): Sets the accessibility element’s value.
- [isAccessibilitySelectorAllowed(\_:)](nsaccessibilityprotocol/isaccessibilityselectorallowed%28__%29.md): Returns a Boolean value that indicates whether assistive apps can invoke the specified selector on the accessibility element.

### Setting content and values

- [accessibilityContents()](nsaccessibilityprotocol/accessibilitycontents%28%29.md): Returns the contents of the current accessibility element.
- [setAccessibilityContents(\_:)](nsaccessibilityprotocol/setaccessibilitycontents%28__%29.md): Sets the contents of the current accessibility element.
- [accessibilityCriticalValue()](nsaccessibilityprotocol/accessibilitycriticalvalue%28%29.md): Returns the critical value for the level indicator.
- [setAccessibilityCriticalValue(\_:)](nsaccessibilityprotocol/setaccessibilitycriticalvalue%28__%29.md): Sets the critical value for the level indicator.
- [accessibilityIdentifier()](nsaccessibilityprotocol/accessibilityidentifier%28%29.md): Returns the accessibility element’s identity.
- [setAccessibilityIdentifier(\_:)](nsaccessibilityprotocol/setaccessibilityidentifier%28__%29.md): Sets the accessibility element’s identity.
- [accessibilityMaxValue()](nsaccessibilityprotocol/accessibilitymaxvalue%28%29.md): Returns the maximum value for the accessibility element.
- [setAccessibilityMaxValue(\_:)](nsaccessibilityprotocol/setaccessibilitymaxvalue%28__%29.md): Sets the maximum value for the accessibility element.
- [accessibilityMinValue()](nsaccessibilityprotocol/accessibilityminvalue%28%29.md): Returns the minimum value for the accessibility element.
- [setAccessibilityMinValue(\_:)](nsaccessibilityprotocol/setaccessibilityminvalue%28__%29.md): Sets the minimum value for the accessibility element.
- [accessibilityOrientation()](nsaccessibilityprotocol/accessibilityorientation%28%29.md): Returns the orientation of the accessibility element.
- [setAccessibilityOrientation(\_:)](nsaccessibilityprotocol/setaccessibilityorientation%28__%29.md): Sets the orientation of the accessibility element.
- [isAccessibilityProtectedContent()](nsaccessibilityprotocol/isaccessibilityprotectedcontent%28%29.md): Returns a Boolean value that determines whether the accessibility element contains protected content.
- [setAccessibilityProtectedContent(\_:)](nsaccessibilityprotocol/setaccessibilityprotectedcontent%28__%29.md): Sets a Boolean value that determines whether the accessibility element contains protected content.
- [isAccessibilitySelected()](nsaccessibilityprotocol/isaccessibilityselected%28%29.md): Returns a Boolean value that determines whether the accessibility element is currently in a selected state.
- [setAccessibilitySelected(\_:)](nsaccessibilityprotocol/setaccessibilityselected%28__%29.md): Sets a Boolean value that determines whether the accessibility element is currently in a selected state.
- [accessibilityURL()](nsaccessibilityprotocol/accessibilityurl%28%29.md): Returns the URL for the accessibility element.
- [setAccessibilityURL(\_:)](nsaccessibilityprotocol/setaccessibilityurl%28__%29.md): Sets the URL for the accessibility element.
- [accessibilityValueDescription()](nsaccessibilityprotocol/accessibilityvaluedescription%28%29.md): Returns the human-readable description of the accessibility element’s value.
- [setAccessibilityValueDescription(\_:)](nsaccessibilityprotocol/setaccessibilityvaluedescription%28__%29.md): Sets the human-readable description of the accessibility element’s value.
- [accessibilityWarningValue()](nsaccessibilityprotocol/accessibilitywarningvalue%28%29.md): Returns the warning value for the level indicator.
- [setAccessibilityWarningValue(\_:)](nsaccessibilityprotocol/setaccessibilitywarningvalue%28__%29.md): Sets the warning value for the level indicator.
- [NSAccessibilityOrientation](nsaccessibilityorientation.md): Values that indicate the orientation of accessibility elements, such as scroll bars and split views.

### Determining relationships

- [accessibilityChildren()](nsaccessibilityprotocol/accessibilitychildren%28%29.md): Returns the child accessibility elements in the accessibility hierarchy.
- [setAccessibilityChildren(\_:)](nsaccessibilityprotocol/setaccessibilitychildren%28__%29.md): Sets the child accessibility elements in the accessibility hierarchy.
- [accessibilityChildrenInNavigationOrder()](nsaccessibilityprotocol/accessibilitychildreninnavigationorder%28%29.md): Returns the array of child accessibility elements in order for linear navigation.
- [setAccessibilityChildrenInNavigationOrder(\_:)](nsaccessibilityprotocol/setaccessibilitychildreninnavigationorder%28__%29.md): Sets the array of child accessibility elements in order for linear navigation.
- [accessibilityParent()](nsaccessibilityprotocol/accessibilityparent%28%29.md): Returns the accessibility element’s parent in the accessibility hierarchy.
- [setAccessibilityParent(\_:)](nsaccessibilityprotocol/setaccessibilityparent%28__%29.md): Sets the accessibility element’s parent in the accessibility hierarchy.
- [accessibilitySelectedChildren()](nsaccessibilityprotocol/accessibilityselectedchildren%28%29.md): Returns the accessibility element’s currently selected children.
- [setAccessibilitySelectedChildren(\_:)](nsaccessibilityprotocol/setaccessibilityselectedchildren%28__%29.md): Sets the accessibility element’s currently selected children.
- [accessibilityTopLevelUIElement()](nsaccessibilityprotocol/accessibilitytopleveluielement%28%29.md): Returns the top-level element that contains the accessibility element.
- [setAccessibilityTopLevelUIElement(\_:)](nsaccessibilityprotocol/setaccessibilitytopleveluielement%28__%29.md): Sets the top-level element that contains the accessibility element.
- [accessibilityVisibleChildren()](nsaccessibilityprotocol/accessibilityvisiblechildren%28%29.md): Returns the accessibility element’s visible child accessibility elements.
- [setAccessibilityVisibleChildren(\_:)](nsaccessibilityprotocol/setaccessibilityvisiblechildren%28__%29.md): Sets the accessibility element’s visible child accessibility elements.

### Setting the focus

- [accessibilityApplicationFocusedUIElement()](nsaccessibilityprotocol/accessibilityapplicationfocuseduielement%28%29.md): Returns the child accessibility element with the current focus.
- [setAccessibilityApplicationFocusedUIElement(\_:)](nsaccessibilityprotocol/setaccessibilityapplicationfocuseduielement%28__%29.md): Sets the child accessibility element with the current focus.
- [isAccessibilityFocused()](nsaccessibilityprotocol/isaccessibilityfocused%28%29.md): Returns a Boolean value that determines whether the accessibility element has the keyboard focus.
- [setAccessibilityFocused(\_:)](nsaccessibilityprotocol/setaccessibilityfocused%28__%29.md): Sets a Boolean value that determines whether the accessibility element has the keyboard focus.
- [accessibilityFocusedWindow()](nsaccessibilityprotocol/accessibilityfocusedwindow%28%29.md): Returns the child window with the current focus.
- [setAccessibilityFocusedWindow(\_:)](nsaccessibilityprotocol/setaccessibilityfocusedwindow%28__%29.md): Sets the child window with the current focus.
- [accessibilitySharedFocusElements()](nsaccessibilityprotocol/accessibilitysharedfocuselements%28%29.md): Returns the array of elements that shares the keyboard focus with the accessibility element.
- [setAccessibilitySharedFocusElements(\_:)](nsaccessibilityprotocol/setaccessibilitysharedfocuselements%28__%29.md): Sets the array of elements that shares the keyboard focus with the accessibility element.

### Assigning roles

- [isAccessibilityRequired()](nsaccessibilityprotocol/isaccessibilityrequired%28%29.md): Returns a Boolean value that determines whether the accessibility element must have content for successful submission of a form.
- [setAccessibilityRequired(\_:)](nsaccessibilityprotocol/setaccessibilityrequired%28__%29.md): Sets a Boolean value that determines whether the accessibility element must have content for successful submission of a form.
- [accessibilityRole()](nsaccessibilityprotocol/accessibilityrole%28%29.md): Returns the type of interface element that the accessibility element represents.
- [setAccessibilityRole(\_:)](nsaccessibilityprotocol/setaccessibilityrole%28__%29.md): Sets the type of interface element that the accessibility element represents.
- [accessibilityRoleDescription()](nsaccessibilityprotocol/accessibilityroledescription%28%29.md): Returns a localized, human-intelligible description of the accessibility element’s role, such as *radio button*.
- [setAccessibilityRoleDescription(\_:)](nsaccessibilityprotocol/setaccessibilityroledescription%28__%29.md): Sets the localized, human-intelligible description of the accessibility element’s role, such as *radio button*.
- [accessibilitySubrole()](nsaccessibilityprotocol/accessibilitysubrole%28%29.md): Returns the specialized interface element type that the accessibility element represents.
- [setAccessibilitySubrole(\_:)](nsaccessibilityprotocol/setaccessibilitysubrole%28__%29.md): Sets the specialized interface element type that the accessibility element represents.
- [NSAccessibility.Role](nsaccessibility-swift.struct/role.md): Values that describe types of objects that accessibility elements represent.
- [NSAccessibility.Subrole](nsaccessibility-swift.struct/subrole.md): Values that describe specialized object subtypes that accessibility elements represent.

### Assigning actions

- [accessibilityCustomActions()](nsaccessibilityprotocol/accessibilitycustomactions%28%29.md): Returns the custom actions of the current accessibility element.
- [setAccessibilityCustomActions(\_:)](nsaccessibilityprotocol/setaccessibilitycustomactions%28__%29.md): Sets the custom actions of the current accessibility element.
- [NSAccessibilityCustomAction](nsaccessibilitycustomaction.md): A custom action to perform on an accessible object.

### Assigning rotors

- [accessibilityCustomRotors()](nsaccessibilityprotocol/accessibilitycustomrotors%28%29.md): Returns the custom rotors of the current accessibility element.
- [setAccessibilityCustomRotors(\_:)](nsaccessibilityprotocol/setaccessibilitycustomrotors%28__%29.md): Sets the custom rotors of the current accessibility element.
- [NSAccessibilityCustomRotor](nsaccessibilitycustomrotor.md): A context-sensitive function that helps VoiceOver users find the next instance of a related accessibility element.

### Configuring text elements

- [accessibilityInsertionPointLineNumber()](nsaccessibilityprotocol/accessibilityinsertionpointlinenumber%28%29.md): Returns the line number that contains the insertion point.
- [setAccessibilityInsertionPointLineNumber(\_:)](nsaccessibilityprotocol/setaccessibilityinsertionpointlinenumber%28__%29.md): Sets the line number that contains the insertion point.
- [accessibilityNumberOfCharacters()](nsaccessibilityprotocol/accessibilitynumberofcharacters%28%29.md): Returns the number of characters in the text.
- [setAccessibilityNumberOfCharacters(\_:)](nsaccessibilityprotocol/setaccessibilitynumberofcharacters%28__%29.md): Sets the number of characters in the text.
- [accessibilityPlaceholderValue()](nsaccessibilityprotocol/accessibilityplaceholdervalue%28%29.md): Returns the placeholder value for the accessibility element.
- [setAccessibilityPlaceholderValue(\_:)](nsaccessibilityprotocol/setaccessibilityplaceholdervalue%28__%29.md): Sets the placeholder value for the accessibility element.
- [accessibilitySelectedText()](nsaccessibilityprotocol/accessibilityselectedtext%28%29.md): Returns the currently selected text.
- [setAccessibilitySelectedText(\_:)](nsaccessibilityprotocol/setaccessibilityselectedtext%28__%29.md): Sets the currently selected text.
- [accessibilitySelectedTextRange()](nsaccessibilityprotocol/accessibilityselectedtextrange%28%29.md): Returns the range of the currently selected text.
- [setAccessibilitySelectedTextRange(\_:)](nsaccessibilityprotocol/setaccessibilityselectedtextrange%28__%29.md): Sets the range of the currently selected text.
- [accessibilitySelectedTextRanges()](nsaccessibilityprotocol/accessibilityselectedtextranges%28%29.md): Returns an array of ranges for the currently selected text.
- [setAccessibilitySelectedTextRanges(\_:)](nsaccessibilityprotocol/setaccessibilityselectedtextranges%28__%29.md): Sets an array of ranges for the currently selected text.
- [accessibilitySharedCharacterRange()](nsaccessibilityprotocol/accessibilitysharedcharacterrange%28%29.md): Returns the range of characters that the accessibility element displays.
- [setAccessibilitySharedCharacterRange(\_:)](nsaccessibilityprotocol/setaccessibilitysharedcharacterrange%28__%29.md): Sets the range of characters that the accessibility element displays.
- [accessibilitySharedTextUIElements()](nsaccessibilityprotocol/accessibilitysharedtextuielements%28%29.md): Returns the other elements that share text with the accessibility element.
- [setAccessibilitySharedTextUIElements(\_:)](nsaccessibilityprotocol/setaccessibilitysharedtextuielements%28__%29.md): Sets the other elements that share text with the accessibility element.
- [accessibilityVisibleCharacterRange()](nsaccessibilityprotocol/accessibilityvisiblecharacterrange%28%29.md): Returns the range of visible characters in the document.
- [setAccessibilityVisibleCharacterRange(\_:)](nsaccessibilityprotocol/setaccessibilityvisiblecharacterrange%28__%29.md): Sets the range of visible characters in the document.
- [accessibilityString(for:)](nsaccessibilityprotocol/accessibilitystring%28for_%29.md): Returns the substring for the specified range.
- [accessibilityAttributedString(for:)](nsaccessibilityprotocol/accessibilityattributedstring%28for_%29.md): Returns the attributed substring for the specified range of characters.
- [accessibilityRTF(for:)](nsaccessibilityprotocol/accessibilityrtf%28for_%29.md): Returns the rich text format (RTF) data that describes the specified range of characters.
- [accessibilityFrame(for:)](nsaccessibilityprotocol/accessibilityframe%28for_%29.md): Returns the rectangle that encloses the specified range of characters.
- [accessibilityLine(for:)](nsaccessibilityprotocol/accessibilityline%28for_%29.md): Returns the line number for the line that contains the specified character index.
- [accessibilityRange(for:)](nsaccessibilityprotocol/accessibilityrange%28for_%29-6kv3.md): Returns the range of characters for the glyph that includes the specified character.
- [accessibilityStyleRange(for:)](nsaccessibilityprotocol/accessibilitystylerange%28for_%29.md): Returns a range of characters that all have the same style as the specified character.
- [accessibilityRange(forLine:)](nsaccessibilityprotocol/accessibilityrange%28forline_%29.md): Returns the range of characters in the specified line.
- [accessibilityRange(for:)](nsaccessibilityprotocol/accessibilityrange%28for_%29-1iudm.md): Returns the range of characters for the glyph at the specified point.

### Configuring windows

- [accessibilityActivationPoint()](nsaccessibilityprotocol/accessibilityactivationpoint%28%29.md): Returns the activation point for the user interface element.
- [setAccessibilityActivationPoint(\_:)](nsaccessibilityprotocol/setaccessibilityactivationpoint%28__%29.md): Sets the activation point for the user interface element.
- [isAccessibilityAlternateUIVisible()](nsaccessibilityprotocol/isaccessibilityalternateuivisible%28%29.md): Returns the Boolean value that determines whether the accessibility element’s alternative UI is currently visible.
- [setAccessibilityAlternateUIVisible(\_:)](nsaccessibilityprotocol/setaccessibilityalternateuivisible%28__%29.md): Sets the Boolean value that determines whether the accessibility element’s alternative UI is currently visible.
- [accessibilityCancelButton()](nsaccessibilityprotocol/accessibilitycancelbutton%28%29.md): Returns the child accessibility element that represents the window’s cancel button.
- [setAccessibilityCancelButton(\_:)](nsaccessibilityprotocol/setaccessibilitycancelbutton%28__%29.md): Sets the child accessibility element that represents the window’s cancel button.
- [accessibilityCloseButton()](nsaccessibilityprotocol/accessibilityclosebutton%28%29.md): Returns the child accessibility element that represents the window’s close button.
- [setAccessibilityCloseButton(\_:)](nsaccessibilityprotocol/setaccessibilityclosebutton%28__%29.md): Sets the child accessibility element that represents the window’s close button.
- [accessibilityDefaultButton()](nsaccessibilityprotocol/accessibilitydefaultbutton%28%29.md): Returns the child accessibility element that represents the window’s default button.
- [setAccessibilityDefaultButton(\_:)](nsaccessibilityprotocol/setaccessibilitydefaultbutton%28__%29.md): Sets the child accessibility element that represents the window’s default button.
- [accessibilityFullScreenButton()](nsaccessibilityprotocol/accessibilityfullscreenbutton%28%29.md): Returns the child accessibility element that represents the window’s full-screen button.
- [setAccessibilityFullScreenButton(\_:)](nsaccessibilityprotocol/setaccessibilityfullscreenbutton%28__%29.md): Sets the child accessibility element that represents the window’s full-screen button.
- [accessibilityGrowArea()](nsaccessibilityprotocol/accessibilitygrowarea%28%29.md): Returns the child accessibility element that represents the window’s grow area.
- [setAccessibilityGrowArea(\_:)](nsaccessibilityprotocol/setaccessibilitygrowarea%28__%29.md): Sets the child accessibility element that represents the window’s grow area.
- [isAccessibilityMain()](nsaccessibilityprotocol/isaccessibilitymain%28%29.md): Returns a Boolean value that determines whether the window is the app’s main window.
- [setAccessibilityMain(\_:)](nsaccessibilityprotocol/setaccessibilitymain%28__%29.md): Sets a Boolean value that determines whether the window is the app’s main window.
- [accessibilityMinimizeButton()](nsaccessibilityprotocol/accessibilityminimizebutton%28%29.md): Returns the child accessibility element that represents the window’s minimize button.
- [setAccessibilityMinimizeButton(\_:)](nsaccessibilityprotocol/setaccessibilityminimizebutton%28__%29.md): Sets the child accessibility element that represents the window’s minimize button.
- [isAccessibilityMinimized()](nsaccessibilityprotocol/isaccessibilityminimized%28%29.md): Returns the Boolean value that determines whether the window is in a minimized state.
- [setAccessibilityMinimized(\_:)](nsaccessibilityprotocol/setaccessibilityminimized%28__%29.md): Sets the Boolean value that determines whether the window is in a minimized state.
- [isAccessibilityModal()](nsaccessibilityprotocol/isaccessibilitymodal%28%29.md): Returns a Boolean value that determines whether the window is modal.
- [setAccessibilityModal(\_:)](nsaccessibilityprotocol/setaccessibilitymodal%28__%29.md): Sets a Boolean value that determines whether the window is modal.
- [accessibilityProxy()](nsaccessibilityprotocol/accessibilityproxy%28%29.md): Returns the child accessibility element that represents the window’s proxy icon.
- [setAccessibilityProxy(\_:)](nsaccessibilityprotocol/setaccessibilityproxy%28__%29.md): Sets the child accessibility element that represents the window’s proxy icon.
- [accessibilityShownMenu()](nsaccessibilityprotocol/accessibilityshownmenu%28%29.md): Returns the menu currently displaying for the accessibility element.
- [setAccessibilityShownMenu(\_:)](nsaccessibilityprotocol/setaccessibilityshownmenu%28__%29.md): Sets the menu currently displaying for the accessibility element.
- [accessibilityToolbarButton()](nsaccessibilityprotocol/accessibilitytoolbarbutton%28%29.md): Returns the child accessibility element that represents the window’s toolbar button.
- [setAccessibilityToolbarButton(\_:)](nsaccessibilityprotocol/setaccessibilitytoolbarbutton%28__%29.md): Sets the child accessibility element that represents the window’s toolbar button.
- [accessibilityWindow()](nsaccessibilityprotocol/accessibilitywindow%28%29.md): Returns the window that contains the accessibility element.
- [setAccessibilityWindow(\_:)](nsaccessibilityprotocol/setaccessibilitywindow%28__%29.md): Sets the window that contains the accessibility element.
- [accessibilityZoomButton()](nsaccessibilityprotocol/accessibilityzoombutton%28%29.md): Returns the child accessibility element that represents the window’s zoom button.
- [setAccessibilityZoomButton(\_:)](nsaccessibilityprotocol/setaccessibilityzoombutton%28__%29.md): Sets the child accessibility element that represents the window’s zoom button.

### Managing apps

- [accessibilityExtrasMenuBar()](nsaccessibilityprotocol/accessibilityextrasmenubar%28%29.md): Returns the icon for the app’s menu bar extra.
- [setAccessibilityExtrasMenuBar(\_:)](nsaccessibilityprotocol/setaccessibilityextrasmenubar%28__%29.md): Sets the icon for the app’s menu bar extra.
- [isAccessibilityFrontmost()](nsaccessibilityprotocol/isaccessibilityfrontmost%28%29.md): Returns a Boolean value that determines whether the app is the frontmost app.
- [setAccessibilityFrontmost(\_:)](nsaccessibilityprotocol/setaccessibilityfrontmost%28__%29.md): Sets a Boolean value that determines whether the app is the frontmost app.
- [isAccessibilityHidden()](nsaccessibilityprotocol/isaccessibilityhidden%28%29.md): Returns a Boolean value that determines whether the app is in a hidden state.
- [setAccessibilityHidden(\_:)](nsaccessibilityprotocol/setaccessibilityhidden%28__%29.md): Sets a Boolean value that determines whether the app is in a hidden state.
- [accessibilityMainWindow()](nsaccessibilityprotocol/accessibilitymainwindow%28%29.md): Returns the app’s main window.
- [setAccessibilityMainWindow(\_:)](nsaccessibilityprotocol/setaccessibilitymainwindow%28__%29.md): Sets the app’s main window.
- [accessibilityMenuBar()](nsaccessibilityprotocol/accessibilitymenubar%28%29.md): Returns the app’s menu bar.
- [setAccessibilityMenuBar(\_:)](nsaccessibilityprotocol/setaccessibilitymenubar%28__%29.md): Sets the app’s menu bar.
- [accessibilityWindows()](nsaccessibilityprotocol/accessibilitywindows%28%29.md): Returns an array that contains all the app’s windows.
- [setAccessibilityWindows(\_:)](nsaccessibilityprotocol/setaccessibilitywindows%28__%29.md): Sets the array that contains all the app’s windows.

### Configuring grid views

- [accessibilityColumnCount()](nsaccessibilityprotocol/accessibilitycolumncount%28%29.md): Returns the number of columns in the accessibility element’s grid.
- [setAccessibilityColumnCount(\_:)](nsaccessibilityprotocol/setaccessibilitycolumncount%28__%29.md): Sets the number of columns in the accessibility element’s grid.
- [isAccessibilityOrderedByRow()](nsaccessibilityprotocol/isaccessibilityorderedbyrow%28%29.md): Returns a Boolean value that determines whether the accessibility element’s grid is in row major order or in column major order.
- [setAccessibilityOrderedByRow(\_:)](nsaccessibilityprotocol/setaccessibilityorderedbyrow%28__%29.md): Sets a Boolean value that determines whether the element’s grid is in row major order or in column major order.
- [accessibilityRowCount()](nsaccessibilityprotocol/accessibilityrowcount%28%29.md): Returns the number of rows in the accessibility element’s grid.
- [setAccessibilityRowCount(\_:)](nsaccessibilityprotocol/setaccessibilityrowcount%28__%29.md): Sets the number of rows in the accessibility element’s grid.

### Configuring scroll views

- [accessibilityHorizontalScrollBar()](nsaccessibilityprotocol/accessibilityhorizontalscrollbar%28%29.md): Returns the horizontal scroll bar for the scroll view.
- [setAccessibilityHorizontalScrollBar(\_:)](nsaccessibilityprotocol/setaccessibilityhorizontalscrollbar%28__%29.md): Sets the horizontal scroll bar for the scroll view.
- [accessibilityVerticalScrollBar()](nsaccessibilityprotocol/accessibilityverticalscrollbar%28%29.md): Returns the vertical scroll bar for the scroll view.
- [setAccessibilityVerticalScrollBar(\_:)](nsaccessibilityprotocol/setaccessibilityverticalscrollbar%28__%29.md): Sets the vertical scroll bar for the scroll view.

### Configuring table and outline views

- [accessibilityColumnHeaderUIElements()](nsaccessibilityprotocol/accessibilitycolumnheaderuielements%28%29.md): Returns the column header accessibility elements for the table or outline.
- [setAccessibilityColumnHeaderUIElements(\_:)](nsaccessibilityprotocol/setaccessibilitycolumnheaderuielements%28__%29.md): Sets the column header accessibility elements for the table or outline.
- [accessibilityColumns()](nsaccessibilityprotocol/accessibilitycolumns%28%29.md): Returns the column accessibility elements for the table or outline.
- [setAccessibilityColumns(\_:)](nsaccessibilityprotocol/setaccessibilitycolumns%28__%29.md): Sets the column accessibility elements for the table or outline.
- [accessibilityColumnTitles()](nsaccessibilityprotocol/accessibilitycolumntitles%28%29.md): Returns the column titles for the accessibility element.
- [setAccessibilityColumnTitles(\_:)](nsaccessibilityprotocol/setaccessibilitycolumntitles%28__%29.md): Sets the column titles for the accessibility element.
- [isAccessibilityExpanded()](nsaccessibilityprotocol/isaccessibilityexpanded%28%29.md): Returns a Boolean value that determines whether the accessibility element is in an expanded state.
- [setAccessibilityExpanded(\_:)](nsaccessibilityprotocol/setaccessibilityexpanded%28__%29.md): Sets a Boolean value that determines whether accessibility element is in an expanded state.
- [accessibilityHeader()](nsaccessibilityprotocol/accessibilityheader%28%29.md): Returns the header for the table view.
- [setAccessibilityHeader(\_:)](nsaccessibilityprotocol/setaccessibilityheader%28__%29.md): Sets the header for the table view.
- [accessibilityIndex()](nsaccessibilityprotocol/accessibilityindex%28%29.md): Returns the index of the row or column that the accessibility element represents.
- [setAccessibilityIndex(\_:)](nsaccessibilityprotocol/setaccessibilityindex%28__%29.md): Sets the index of the row or column that the accessibility element represents.
- [accessibilityRowHeaderUIElements()](nsaccessibilityprotocol/accessibilityrowheaderuielements%28%29.md): Returns the row header accessibility elements for the table or outline.
- [setAccessibilityRowHeaderUIElements(\_:)](nsaccessibilityprotocol/setaccessibilityrowheaderuielements%28__%29.md): Sets the row header accessibility elements for the table or outline.
- [accessibilityRows()](nsaccessibilityprotocol/accessibilityrows%28%29.md): Returns the row accessibility elements for the table or outline.
- [setAccessibilityRows(\_:)](nsaccessibilityprotocol/setaccessibilityrows%28__%29.md): Sets the row accessibility elements for the table or outline.
- [accessibilitySelectedColumns()](nsaccessibilityprotocol/accessibilityselectedcolumns%28%29.md): Returns the currently selected columns for the table or outline.
- [setAccessibilitySelectedColumns(\_:)](nsaccessibilityprotocol/setaccessibilityselectedcolumns%28__%29.md): Sets the currently selected columns for the table or outline.
- [accessibilitySelectedRows()](nsaccessibilityprotocol/accessibilityselectedrows%28%29.md): Returns the currently selected rows for the table or outline.
- [setAccessibilitySelectedRows(\_:)](nsaccessibilityprotocol/setaccessibilityselectedrows%28__%29.md): Sets the currently selected rows for the table or outline.
- [accessibilitySortDirection()](nsaccessibilityprotocol/accessibilitysortdirection%28%29.md): Returns the accessibility element’s sort direction.
- [setAccessibilitySortDirection(\_:)](nsaccessibilityprotocol/setaccessibilitysortdirection%28__%29.md): Sets the accessibility element’s sort direction.
- [accessibilityVisibleColumns()](nsaccessibilityprotocol/accessibilityvisiblecolumns%28%29.md): Returns the visible columns for the table or outline.
- [setAccessibilityVisibleColumns(\_:)](nsaccessibilityprotocol/setaccessibilityvisiblecolumns%28__%29.md): Sets the visible columns for the table or outline.
- [accessibilityVisibleRows()](nsaccessibilityprotocol/accessibilityvisiblerows%28%29.md): Returns the visible rows for the table or outline.
- [setAccessibilityVisibleRows(\_:)](nsaccessibilityprotocol/setaccessibilityvisiblerows%28__%29.md): Sets the visible rows for the table or outline.
- [NSAccessibilitySortDirection](nsaccessibilitysortdirection.md): Values that indicate the sort direction of a column.

### Configuring outline rows

- [isAccessibilityDisclosed()](nsaccessibilityprotocol/isaccessibilitydisclosed%28%29.md): Returns a Boolean value that determines whether the row is disclosing other rows.
- [setAccessibilityDisclosed(\_:)](nsaccessibilityprotocol/setaccessibilitydisclosed%28__%29.md): Sets a Boolean value that determines whether the row is disclosing other rows.
- [accessibilityDisclosedByRow()](nsaccessibilityprotocol/accessibilitydisclosedbyrow%28%29.md): Returns the row disclosing the current row.
- [setAccessibilityDisclosedByRow(\_:)](nsaccessibilityprotocol/setaccessibilitydisclosedbyrow%28__%29.md): Sets the row disclosing the current row.
- [accessibilityDisclosedRows()](nsaccessibilityprotocol/accessibilitydisclosedrows%28%29.md): Returns the rows that the current row discloses.
- [setAccessibilityDisclosedRows(\_:)](nsaccessibilityprotocol/setaccessibilitydisclosedrows%28__%29.md): Sets the rows that the current row discloses.
- [accessibilityDisclosureLevel()](nsaccessibilityprotocol/accessibilitydisclosurelevel%28%29.md): Returns the indention level for the row.
- [setAccessibilityDisclosureLevel(\_:)](nsaccessibilityprotocol/setaccessibilitydisclosurelevel%28__%29.md): Sets the indention level for the row.

### Configuring cell-based tables

- [accessibilityColumnIndexRange()](nsaccessibilityprotocol/accessibilitycolumnindexrange%28%29.md): Returns the column index range of the cell.
- [setAccessibilityColumnIndexRange(\_:)](nsaccessibilityprotocol/setaccessibilitycolumnindexrange%28__%29.md): Sets the column index range of the cell.
- [accessibilityRowIndexRange()](nsaccessibilityprotocol/accessibilityrowindexrange%28%29.md): Returns the row index range of the cell.
- [setAccessibilityRowIndexRange(\_:)](nsaccessibilityprotocol/setaccessibilityrowindexrange%28__%29.md): Sets the row index range of the cell.
- [accessibilitySelectedCells()](nsaccessibilityprotocol/accessibilityselectedcells%28%29.md): Returns the currently selected cells for the table.
- [setAccessibilitySelectedCells(\_:)](nsaccessibilityprotocol/setaccessibilityselectedcells%28__%29.md): Sets the currently selected cells for the table.
- [accessibilityVisibleCells()](nsaccessibilityprotocol/accessibilityvisiblecells%28%29.md): Returns the visible cells for the table.
- [setAccessibilityVisibleCells(\_:)](nsaccessibilityprotocol/setaccessibilityvisiblecells%28__%29.md): Sets the visible cells for the table.
- [accessibilityCell(forColumn:row:)](nsaccessibilityprotocol/accessibilitycell%28forcolumn_row_%29.md): Returns the cell at the specified column and row.

### Configuring layout

- [accessibilityHandles()](nsaccessibilityprotocol/accessibilityhandles%28%29.md): Returns the drag handle elements for the layout item element.
- [setAccessibilityHandles(\_:)](nsaccessibilityprotocol/setaccessibilityhandles%28__%29.md): Sets the drag handle accessibility elements for the layout item element.
- [accessibilityHorizontalUnits()](nsaccessibilityprotocol/accessibilityhorizontalunits%28%29.md): Returns the units that the layout area uses for horizontal values.
- [setAccessibilityHorizontalUnits(\_:)](nsaccessibilityprotocol/setaccessibilityhorizontalunits%28__%29.md): Sets the units that the layout area uses for horizontal values.
- [accessibilityHorizontalUnitDescription()](nsaccessibilityprotocol/accessibilityhorizontalunitdescription%28%29.md): Returns the description of the layout area’s horizontal units.
- [setAccessibilityHorizontalUnitDescription(\_:)](nsaccessibilityprotocol/setaccessibilityhorizontalunitdescription%28__%29.md): Sets the description of the layout area’s horizontal units.
- [accessibilityVerticalUnits()](nsaccessibilityprotocol/accessibilityverticalunits%28%29.md): Returns the units that the layout area uses for vertical values.
- [setAccessibilityVerticalUnits(\_:)](nsaccessibilityprotocol/setaccessibilityverticalunits%28__%29.md): Sets the units that the layout area uses for vertical values.
- [accessibilityVerticalUnitDescription()](nsaccessibilityprotocol/accessibilityverticalunitdescription%28%29.md): Returns the description of the layout area’s vertical units.
- [setAccessibilityVerticalUnitDescription(\_:)](nsaccessibilityprotocol/setaccessibilityverticalunitdescription%28__%29.md): Sets the description of the layout area’s vertical units.
- [accessibilityLayoutPoint(forScreenPoint:)](nsaccessibilityprotocol/accessibilitylayoutpoint%28forscreenpoint_%29.md): Converts the provided point in screen coordinates to a point in the layout area’s coordinate system.
- [accessibilityLayoutSize(forScreenSize:)](nsaccessibilityprotocol/accessibilitylayoutsize%28forscreensize_%29.md): Converts the provided size in screen coordinates to a size in the layout area’s coordinate system.
- [accessibilityScreenPoint(forLayoutPoint:)](nsaccessibilityprotocol/accessibilityscreenpoint%28forlayoutpoint_%29.md): Converts the provided point in the layout area’s coordinates to a point in the screen’s coordinate system.
- [accessibilityScreenSize(forLayoutSize:)](nsaccessibilityprotocol/accessibilityscreensize%28forlayoutsize_%29.md): Converts the provided size in the layout area’s coordinates to a size in the screen’s coordinate system.

### Configuring sliders

- [accessibilityAllowedValues()](nsaccessibilityprotocol/accessibilityallowedvalues%28%29.md): Returns the allowed values for the slider accessibility element.
- [setAccessibilityAllowedValues(\_:)](nsaccessibilityprotocol/setaccessibilityallowedvalues%28__%29.md): Sets the allowed values for the slider accessibility element.
- [accessibilityLabelUIElements()](nsaccessibilityprotocol/accessibilitylabeluielements%28%29.md): Returns the child label elements for the slider accessibility element.
- [setAccessibilityLabelUIElements(\_:)](nsaccessibilityprotocol/setaccessibilitylabeluielements%28__%29.md): Sets the child label elements for the slider accessibility element.
- [accessibilityLabelValue()](nsaccessibilityprotocol/accessibilitylabelvalue%28%29.md): Returns the value of the label accessibility element.
- [setAccessibilityLabelValue(\_:)](nsaccessibilityprotocol/setaccessibilitylabelvalue%28__%29.md): Sets the value of the label accessibility element.

### Configuring split views

- [accessibilityNextContents()](nsaccessibilityprotocol/accessibilitynextcontents%28%29.md): Returns the contents that follow the divider accessibility element.
- [setAccessibilityNextContents(\_:)](nsaccessibilityprotocol/setaccessibilitynextcontents%28__%29.md): Sets the contents that follow the divider accessibility element.
- [accessibilityPreviousContents()](nsaccessibilityprotocol/accessibilitypreviouscontents%28%29.md): Returns the contents that precede the divider accessibility element.
- [setAccessibilityPreviousContents(\_:)](nsaccessibilityprotocol/setaccessibilitypreviouscontents%28__%29.md): Sets the contents that precede the divider accessibility element.
- [accessibilitySplitters()](nsaccessibilityprotocol/accessibilitysplitters%28%29.md): Returns an array that contains the views and splitter bar from the split view.
- [setAccessibilitySplitters(\_:)](nsaccessibilityprotocol/setaccessibilitysplitters%28__%29.md): Sets the array that contains the views and splitter bar from the split view.

### Configuring tabs and toolbars

- [accessibilityOverflowButton()](nsaccessibilityprotocol/accessibilityoverflowbutton%28%29.md): Returns the overflow button for the toolbar.
- [setAccessibilityOverflowButton(\_:)](nsaccessibilityprotocol/setaccessibilityoverflowbutton%28__%29.md): Sets the overflow button for the toolbar.
- [accessibilityTabs()](nsaccessibilityprotocol/accessibilitytabs%28%29.md): Returns the tab accessibility elements for the tab view.
- [setAccessibilityTabs(\_:)](nsaccessibilityprotocol/setaccessibilitytabs%28__%29.md): Sets the tab accessibility elements for the tab view.

### Configuring ruler views

- [accessibilityMarkerGroupUIElement()](nsaccessibilityprotocol/accessibilitymarkergroupuielement%28%29.md): Returns the user interface element that functions as a marker group for the ruler accessibility element.
- [setAccessibilityMarkerGroupUIElement(\_:)](nsaccessibilityprotocol/setaccessibilitymarkergroupuielement%28__%29.md): Sets the user interface element that functions as a marker group for the ruler accessibility element.
- [accessibilityMarkerTypeDescription()](nsaccessibilityprotocol/accessibilitymarkertypedescription%28%29.md): Returns the human-readable description of the marker type.
- [setAccessibilityMarkerTypeDescription(\_:)](nsaccessibilityprotocol/setaccessibilitymarkertypedescription%28__%29.md): Sets the human-readable description of the marker type.
- [accessibilityMarkerUIElements()](nsaccessibilityprotocol/accessibilitymarkeruielements%28%29.md): Returns the array of marker accessibility elements for the ruler.
- [setAccessibilityMarkerUIElements(\_:)](nsaccessibilityprotocol/setaccessibilitymarkeruielements%28__%29.md): Sets the array of marker accessibility elements for the ruler.
- [accessibilityMarkerValues()](nsaccessibilityprotocol/accessibilitymarkervalues%28%29.md): Returns the marker values for the ruler.
- [setAccessibilityMarkerValues(\_:)](nsaccessibilityprotocol/setaccessibilitymarkervalues%28__%29.md): Sets the marker values for the ruler.
- [accessibilityRulerMarkerType()](nsaccessibilityprotocol/accessibilityrulermarkertype%28%29.md): Returns the type of markers for the ruler.
- [setAccessibilityRulerMarkerType(\_:)](nsaccessibilityprotocol/setaccessibilityrulermarkertype%28__%29.md): Sets the type of markers for the ruler.
- [accessibilityUnits()](nsaccessibilityprotocol/accessibilityunits%28%29.md): Returns the units for the ruler.
- [setAccessibilityUnits(\_:)](nsaccessibilityprotocol/setaccessibilityunits%28__%29.md): Sets the units used for the ruler.
- [accessibilityUnitDescription()](nsaccessibilityprotocol/accessibilityunitdescription%28%29.md): Returns the human-readable description of the ruler’s units.
- [setAccessibilityUnitDescription(\_:)](nsaccessibilityprotocol/setaccessibilityunitdescription%28__%29.md): Sets the human-readable description of the ruler’s units.
- [NSAccessibilityRulerMarkerType](nsaccessibilityrulermarkertype.md): Values that indicate the marker type of an accessibility element.
- [NSAccessibilityUnits](nsaccessibilityunits.md): Values that indicate the unit values of a ruler or layout area.

### Managing documents and editing

- [accessibilityDocument()](nsaccessibilityprotocol/accessibilitydocument%28%29.md): Returns the URL for the file that the accessibility element represents.
- [setAccessibilityDocument(\_:)](nsaccessibilityprotocol/setaccessibilitydocument%28__%29.md): Sets the URL for the file that the accessibility element represents.
- [isAccessibilityEdited()](nsaccessibilityprotocol/isaccessibilityedited%28%29.md): Returns a Boolean value that indicates whether the accessibility element is in an edited state.
- [setAccessibilityEdited(\_:)](nsaccessibilityprotocol/setaccessibilityedited%28__%29.md): Sets a Boolean value that indicates whether the accessibility element is in an edited state.
- [accessibilityFilename()](nsaccessibilityprotocol/accessibilityfilename%28%29.md): Returns the filename for the file that the accessibility element represents.
- [setAccessibilityFilename(\_:)](nsaccessibilityprotocol/setaccessibilityfilename%28__%29.md): Sets the filename for the file that the accessibility element represents.

### Configuring linkage elements

- [accessibilityLinkedUIElements()](nsaccessibilityprotocol/accessibilitylinkeduielements%28%29.md): Returns the elements that have links with the accessibility element.
- [setAccessibilityLinkedUIElements(\_:)](nsaccessibilityprotocol/setaccessibilitylinkeduielements%28__%29.md): Sets the elements that have links with the accessibility element.
- [accessibilityServesAsTitleForUIElements()](nsaccessibilityprotocol/accessibilityservesastitleforuielements%28%29.md): Returns the list of elements that the accessibility element is a title for.
- [setAccessibilityServesAsTitleForUIElements(\_:)](nsaccessibilityprotocol/setaccessibilityservesastitleforuielements%28__%29.md): Sets the list of elements that the accessibility element is a title for.
- [accessibilityTitleUIElement()](nsaccessibilityprotocol/accessibilitytitleuielement%28%29.md): Returns the static text element that represents the accessibility element’s title.
- [setAccessibilityTitleUIElement(\_:)](nsaccessibilityprotocol/setaccessibilitytitleuielement%28__%29.md): Sets the static text element that represents the accessibility element’s title.

### Configuring search fields

- [accessibilityClearButton()](nsaccessibilityprotocol/accessibilityclearbutton%28%29.md): Returns the clear button for the search field.
- [setAccessibilityClearButton(\_:)](nsaccessibilityprotocol/setaccessibilityclearbutton%28__%29.md): Sets the clear button for the search field.
- [accessibilitySearchButton()](nsaccessibilityprotocol/accessibilitysearchbutton%28%29.md): Returns the search button for the search field.
- [setAccessibilitySearchButton(\_:)](nsaccessibilityprotocol/setaccessibilitysearchbutton%28__%29.md): Sets the search button for the search field.
- [accessibilitySearchMenu()](nsaccessibilityprotocol/accessibilitysearchmenu%28%29.md): Returns the search menu for the search field.
- [setAccessibilitySearchMenu(\_:)](nsaccessibilityprotocol/setaccessibilitysearchmenu%28__%29.md): Sets the search menu for the search field.

### Confirming and canceling operations

- [accessibilityPerformCancel()](nsaccessibilityprotocol/accessibilityperformcancel%28%29.md): Cancels the current operation.
- [accessibilityPerformConfirm()](nsaccessibilityprotocol/accessibilityperformconfirm%28%29.md): Simulates pressing Return in the accessibility element.

### Selecting elements

- [accessibilityPerformPick()](nsaccessibilityprotocol/accessibilityperformpick%28%29.md): Selects the accessibility element.
- [accessibilityPerformPress()](nsaccessibilityprotocol/accessibilityperformpress%28%29.md): Simulates clicking the accessibility element.

### Searching elements

- [NSAccessibilitySearchCurrentElementKey](nsaccessibilitysearchcurrentelementkey.md)
- [NSAccessibilitySearchCurrentRangeKey](nsaccessibilitysearchcurrentrangekey.md)
- [NSAccessibilitySearchDirectionKey](nsaccessibilitysearchdirectionkey.md)
- [NSAccessibilitySearchDirectionNext](nsaccessibilitysearchdirectionnext.md)
- [NSAccessibilitySearchDirectionPrevious](nsaccessibilitysearchdirectionprevious.md)
- [NSAccessibilitySearchKey](nsaccessibilitysearchkey.md)

### Showing user interface elements

- [accessibilityPerformShowAlternateUI()](nsaccessibilityprotocol/accessibilityperformshowalternateui%28%29.md): Displays the accessibility element’s alternative UI.
- [accessibilityPerformShowDefaultUI()](nsaccessibilityprotocol/accessibilityperformshowdefaultui%28%29.md): Returns to the accessibility element’s original UI.
- [accessibilityPerformShowMenu()](nsaccessibilityprotocol/accessibilityperformshowmenu%28%29.md): Displays the menu accessibility element.
- [accessibilityPerformRaise()](nsaccessibilityprotocol/accessibilityperformraise%28%29.md): Brings the window to the front.

### Incrementing, decrementing, and deleting values

- [accessibilityIncrementButton()](nsaccessibilityprotocol/accessibilityincrementbutton%28%29.md): Returns the increment button for the stepper accessibility element.
- [setAccessibilityIncrementButton(\_:)](nsaccessibilityprotocol/setaccessibilityincrementbutton%28__%29.md): Sets the increment button for the stepper accessibility element.
- [accessibilityDecrementButton()](nsaccessibilityprotocol/accessibilitydecrementbutton%28%29.md): Returns the decrement button for the stepper accessibility element.
- [setAccessibilityDecrementButton(\_:)](nsaccessibilityprotocol/setaccessibilitydecrementbutton%28__%29.md): Sets the decrement button for the stepper accessibility element.
- [accessibilityPerformIncrement()](nsaccessibilityprotocol/accessibilityperformincrement%28%29.md): Increments the accessibility element’s value.
- [accessibilityPerformDecrement()](nsaccessibilityprotocol/accessibilityperformdecrement%28%29.md): Decrements the accessibility element’s value.
- [accessibilityPerformDelete()](nsaccessibilityprotocol/accessibilityperformdelete%28%29.md): Deletes the accessibility element’s value.

### Managing notifications

Notifications alert assistive apps to changes in the user interface’s state.

- [post(element:notification:)](nsaccessibility-swift.struct/post%28element_notification_%29.md): Sends a notification to any observing assistive apps.
- [post(element:notification:userInfo:)](nsaccessibility-swift.struct/post%28element_notification_userinfo_%29.md): Sends a notification and an optional user info dictionary to any observing assistive apps.
- [NSAccessibility.Notification](nsaccessibility-swift.struct/notification.md): The name of the notification.
- [NSAccessibility.NotificationUserInfoKey](nsaccessibility-swift.struct/notificationuserinfokey.md): The key in the user info dictionary for a notification.

### Handling errors

- [ErrorCodeExceptionInfo](nsaccessibility-swift.struct/errorcodeexceptioninfo.md): An integer error code for debugging.

### Supporting types

- [NSAccessibility](nsaccessibility-swift.struct.md): A namespace for accessibility symbols for AppKit apps.

### Instance methods

- [accessibilityAttributedUserInputLabels()](nsaccessibilityprotocol/accessibilityattributeduserinputlabels%28%29.md)
- [accessibilityUserInputLabels()](nsaccessibilityprotocol/accessibilityuserinputlabels%28%29.md)
- [setAccessibilityAttributedUserInputLabels(\_:)](nsaccessibilityprotocol/setaccessibilityattributeduserinputlabels%28__%29.md)
- [setAccessibilityUserInputLabels(\_:)](nsaccessibilityprotocol/setaccessibilityuserinputlabels%28__%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSAccessibilityElement](nsaccessibilityelement-swift.class.md)
- [NSActionCell](nsactioncell.md)
- [NSApplication](nsapplication.md)
- [NSBackgroundExtensionView](nsbackgroundextensionview.md)
- [NSBox](nsbox.md)
- [NSBrowser](nsbrowser.md)
- [NSBrowserCell](nsbrowsercell.md)
- [NSButton](nsbutton.md)
- [NSButtonCell](nsbuttoncell.md)
- [NSCell](nscell.md)
- [NSClipView](nsclipview.md)
- [NSCollectionView](nscollectionview.md)
- [NSColorPanel](nscolorpanel.md)
- [NSColorWell](nscolorwell.md)
- [NSComboBox](nscombobox.md)
- [NSComboBoxCell](nscomboboxcell.md)
- [NSComboButton](nscombobutton.md)
- [NSControl](nscontrol.md)
- [NSDatePicker](nsdatepicker.md)
- [NSDatePickerCell](nsdatepickercell.md)
- [NSDrawer](nsdrawer.md)
- [NSFontPanel](nsfontpanel.md)
- [NSForm](nsform.md)
- [NSFormCell](nsformcell.md)
- [NSGlassEffectContainerView](nsglasseffectcontainerview.md)
- [NSGlassEffectView](nsglasseffectview.md)
- [NSGridView](nsgridview.md)
- [NSImageCell](nsimagecell.md)
- [NSImageView](nsimageview.md)
- [NSLevelIndicator](nslevelindicator.md)
- [NSLevelIndicatorCell](nslevelindicatorcell.md)
- [NSMatrix](nsmatrix.md)
- [NSMenu](nsmenu.md)
- [NSMenuItem](nsmenuitem.md)
- [NSMenuItemCell](nsmenuitemcell.md)
- [NSOpenGLView](nsopenglview.md)
- [NSOpenPanel](nsopenpanel.md)
- [NSOutlineView](nsoutlineview.md)
- [NSPanel](nspanel.md)
- [NSPathCell](nspathcell.md)
- [NSPathComponentCell](nspathcomponentcell.md)
- [NSPathControl](nspathcontrol.md)
- [NSPopUpButton](nspopupbutton.md)
- [NSPopUpButtonCell](nspopupbuttoncell.md)
- [NSPopover](nspopover.md)
- [NSPredicateEditor](nspredicateeditor.md)
- [NSProgressIndicator](nsprogressindicator.md)
- [NSRuleEditor](nsruleeditor.md)
- [NSRulerView](nsrulerview.md)
- [NSSavePanel](nssavepanel.md)
- [NSScrollView](nsscrollview.md)
- [NSScroller](nsscroller.md)
- [NSScrubber](nsscrubber.md)
- [NSScrubberArrangedView](nsscrubberarrangedview.md)
- [NSScrubberImageItemView](nsscrubberimageitemview.md)
- [NSScrubberItemView](nsscrubberitemview.md)
- [NSScrubberSelectionView](nsscrubberselectionview.md)
- [NSScrubberTextItemView](nsscrubbertextitemview.md)
- [NSSearchField](nssearchfield.md)
- [NSSearchFieldCell](nssearchfieldcell.md)
- [NSSecureTextField](nssecuretextfield.md)
- [NSSecureTextFieldCell](nssecuretextfieldcell.md)
- [NSSegmentedCell](nssegmentedcell.md)
- [NSSegmentedControl](nssegmentedcontrol.md)
- [NSSlider](nsslider.md)
- [NSSliderAccessory](nsslideraccessory.md)
- [NSSliderCell](nsslidercell.md)
- [NSSplitView](nssplitview.md)
- [NSStackView](nsstackview.md)
- [NSStatusBarButton](nsstatusbarbutton.md)
- [NSStepper](nsstepper.md)
- [NSStepperCell](nssteppercell.md)
- [NSSwitch](nsswitch.md)
- [NSTabView](nstabview.md)
- [NSTableCellView](nstablecellview.md)
- [NSTableHeaderCell](nstableheadercell.md)
- [NSTableHeaderView](nstableheaderview.md)
- [NSTableRowView](nstablerowview.md)
- [NSTableView](nstableview.md)
- [NSText](nstext.md)
- [NSTextAttachmentCell](nstextattachmentcell-swift.class.md)
- [NSTextField](nstextfield.md)
- [NSTextFieldCell](nstextfieldcell.md)
- [NSTextInsertionIndicator](nstextinsertionindicator.md)
- [NSTextView](nstextview.md)
- [NSTokenField](nstokenfield.md)
- [NSTokenFieldCell](nstokenfieldcell.md)
- [NSView](nsview.md)
- [NSVisualEffectView](nsvisualeffectview.md)
- [NSWindow](nswindow.md)

## See Also

### AppKit Elements

- [NSAccessibility](nsaccessibility-swift.struct.md): A namespace for accessibility symbols for AppKit apps.

# NSAccessibility (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

The complete list of properties and methods for accessible elements.

## Declaration

```objectivec
@protocol NSAccessibility <NSObject>
```

<a id="overview"></a>

## Overview

To be accessible, an app must provide information to the assistive app about its user interface and capabilities. There are three ways that apps and assistive apps interact:

- Informational properties. [NSAccessibility](nsaccessibilityprotocol.md) defines a number of properties that provide information about your view or control. If you’re working with a subclass of a standard AppKit view or control, you can either set the desired property or override its getters and setters. By default, overriding only the getter tells the assistive app that it has read-only access to the property. Overriding the setter tells the assistive app that it also has write access to the property.
- Action methods. [NSAccessibility](nsaccessibilityprotocol.md) also defines a number of methods that simulate button presses, mouse clicks, and selections in your view or control. By implementing these methods, you give assistive apps the ability to drive your view or control.
- Notifications. Your view or control may need to let the assistive app know when changes occur. [NSAccessibilityNotificationName](nsaccessibility-swift.struct/notification.md) defines a number of notifications that you can send using the [NSAccessibilityPostNotification](nsaccessibility-swift.struct/post%28element_notification_%29.md) method. The role-specific protocols don’t include these notifications; however, standard AppKit controls already send appropriate messages for their standard usage patterns. You typically need to send your own notifications only when you’re creating a custom control or when you’re using a standard control in a nonstandard way.

If you’re using standard AppKit user interface elements, much of the work has been done for you. AppKit views and controls adopt the [NSAccessibility](nsaccessibilityprotocol.md) protocol by default. In particular, [NSView](nsview.md), [NSWindow](nswindow.md), [NSCell](nscell.md), and [NSDrawer](nsdrawer.md) provide a default implementation for all the properties and methods in this protocol. In some cases, you may need to modify these default values to better represent your app, to provide additional context, or to modify the user’s flow through the app.

If you’re using custom view or control subclasses, you need to add the appropriate informational properties, action methods, and notifications. You do this by adopting a role-specific protocol instead of [NSAccessibility](nsaccessibilityprotocol.md). See [Custom Controls](custom-controls.md).

If you’re using custom user interface elements that don’t inherit from [NSView](nsview.md) or one of the other accessibility-enabled AppKit classes, subclass the [NSAccessibilityElement](nsaccessibilityelement-swift.class.md) class instead of adopting instead of [NSAccessibility](nsaccessibilityprotocol.md).

<a id="Customizing-User-Interface-Elements"></a>

### Customizing User Interface Elements

Often, you can adjust how an assistive app interacts with your user interface element without creating a custom subclass. If a user interface element inherits from [NSView](nsview.md) or one of the other accessibility-enabled AppKit classes, you can customize it by:

- Setting its accessibility values using any of the setter methods in the [NSAccessibility](nsaccessibilityprotocol.md) protocol.
- Overriding any of the properties or methods in the [NSAccessibility](nsaccessibilityprotocol.md) protocol with a custom implementation.

If you override a getter method, the system lets assistive apps call your getter. This can be particularly useful when managing dynamic properties because you can calculate their current value on demand instead of trying to update the property in response to a change.

If you override a setter method, the system lets assistive apps both read and modify that property.

You can control which accessor methods the assistive app can use by overriding [isAccessibilitySelectorAllowed:](nsaccessibilityprotocol/isaccessibilityselectorallowed%28__%29.md). Return [true](https://developer.apple.com/documentation/swift/true) if the assistive app can call the selector; otherwise, return [false](https://developer.apple.com/documentation/swift/false).

## Topics

### Configuring accessibility

- [isAccessibilitySelectorAllowed:](nsaccessibilityprotocol/isaccessibilityselectorallowed%28__%29.md): Returns a Boolean value that indicates whether assistive apps can invoke the specified selector on the accessibility element.
- [accessibilityElement](nsaccessibility-c.protocol/accessibilityelement.md): A Boolean value that determines whether the accessibility element participates in the accessibility hierarchy.
- [accessibilityEnabled](nsaccessibility-c.protocol/accessibilityenabled.md): A Boolean value that determines whether the accessibility element responds to user events.
- [accessibilityFrame](nsaccessibility-c.protocol/accessibilityframe.md): The accessibility element’s frame in screen coordinates.
- [accessibilityHelp](nsaccessibility-c.protocol/accessibilityhelp.md): The help text for the accessibility element.
- [accessibilityLabel](nsaccessibility-c.protocol/accessibilitylabel.md): A short description of the accessibility element.
- [accessibilityTitle](nsaccessibility-c.protocol/accessibilitytitle.md): The title of the accessibility element—for example, a button’s visible text.
- [accessibilityValue](nsaccessibility-c.protocol/accessibilityvalue.md): The accessibility element’s value.

### Setting content and values

- [accessibilityContents](nsaccessibility-c.protocol/accessibilitycontents.md): The contents of the current accessibility element.
- [accessibilityCriticalValue](nsaccessibility-c.protocol/accessibilitycriticalvalue.md): The critical value for the level indicator.
- [accessibilityIdentifier](nsaccessibility-c.protocol/accessibilityidentifier.md): The accessibility element’s identity.
- [accessibilityMaxValue](nsaccessibility-c.protocol/accessibilitymaxvalue.md): The maximum value for the accessibility element.
- [accessibilityMinValue](nsaccessibility-c.protocol/accessibilityminvalue.md): The minimum value for the accessibility element.
- [accessibilityOrientation](nsaccessibility-c.protocol/accessibilityorientation.md): The orientation of the accessibility element.
- [accessibilityProtectedContent](nsaccessibility-c.protocol/accessibilityprotectedcontent.md): A Boolean value that determines whether the accessibility element contains protected content.
- [accessibilitySelected](nsaccessibility-c.protocol/accessibilityselected.md): A Boolean value that determines whether the accessibility element is currently in a selected state.
- [accessibilityURL](nsaccessibility-c.protocol/accessibilityurl.md): The URL for the accessibility element.
- [accessibilityValueDescription](nsaccessibility-c.protocol/accessibilityvaluedescription.md): A human-readable description of the accessibility element’s value.
- [accessibilityWarningValue](nsaccessibility-c.protocol/accessibilitywarningvalue.md): The warning value for the level indicator.
- [NSAccessibilityOrientation](nsaccessibilityorientation.md): Values that indicate the orientation of accessibility elements, such as scroll bars and split views.

### Determining relationships

- [accessibilityChildren](nsaccessibility-c.protocol/accessibilitychildren.md): The child accessibility elements in the accessibility hierarchy.
- [accessibilityChildrenInNavigationOrder](nsaccessibility-c.protocol/accessibilitychildreninnavigationorder.md): An array of child accessibility elements in order for linear navigation.
- [accessibilityParent](nsaccessibility-c.protocol/accessibilityparent.md): The accessibility element’s parent in the accessibility hierarchy.
- [accessibilitySelectedChildren](nsaccessibility-c.protocol/accessibilityselectedchildren.md): The accessibility element’s currently selected children.
- [accessibilityTopLevelUIElement](nsaccessibility-c.protocol/accessibilitytopleveluielement.md): The top-level element that contains the accessibility element.
- [accessibilityVisibleChildren](nsaccessibility-c.protocol/accessibilityvisiblechildren.md): The accessibility element’s visible child accessibility elements.

### Setting the focus

- [accessibilityApplicationFocusedUIElement](nsaccessibility-c.protocol/accessibilityapplicationfocuseduielement.md): The child accessibility element with the current focus.
- [accessibilityFocused](nsaccessibility-c.protocol/accessibilityfocused.md): A Boolean value that determines whether the accessibility element has the keyboard focus.
- [accessibilityFocusedWindow](nsaccessibility-c.protocol/accessibilityfocusedwindow.md): The child window with the current focus.
- [accessibilitySharedFocusElements](nsaccessibility-c.protocol/accessibilitysharedfocuselements.md): An array of elements that shares the keyboard focus with the accessibility element.

### Assigning roles

- [accessibilityRequired](nsaccessibility-c.protocol/accessibilityrequired.md): A Boolean value that determines whether the accessibility element must have content for successful submission of a form.
- [accessibilityRole](nsaccessibility-c.protocol/accessibilityrole.md): The type of interface element that the accessibility element represents.
- [accessibilityRoleDescription](nsaccessibility-c.protocol/accessibilityroledescription.md): A localized, human-intelligible description of the accessibility element’s role, such as *radio button*.
- [accessibilitySubrole](nsaccessibility-c.protocol/accessibilitysubrole.md): The specialized interface element type that the accessibility element represents.
- [NSAccessibilityRole](nsaccessibility-swift.struct/role.md): Values that describe types of objects that accessibility elements represent.
- [NSAccessibilitySubrole](nsaccessibility-swift.struct/subrole.md): Values that describe specialized object subtypes that accessibility elements represent.

### Assigning actions

- [accessibilityCustomActions](nsaccessibility-c.protocol/accessibilitycustomactions.md): The custom actions of the current accessibility element.
- [NSAccessibilityCustomAction](nsaccessibilitycustomaction.md): A custom action to perform on an accessible object.

### Assigning rotors

- [accessibilityCustomRotors](nsaccessibility-c.protocol/accessibilitycustomrotors.md): The custom rotors of the current accessibility element.
- [NSAccessibilityCustomRotor](nsaccessibilitycustomrotor.md): A context-sensitive function that helps VoiceOver users find the next instance of a related accessibility element.

### Configuring text elements

- [accessibilityStringForRange:](nsaccessibilityprotocol/accessibilitystring%28for_%29.md): Returns the substring for the specified range.
- [accessibilityAttributedStringForRange:](nsaccessibilityprotocol/accessibilityattributedstring%28for_%29.md): Returns the attributed substring for the specified range of characters.
- [accessibilityRTFForRange:](nsaccessibilityprotocol/accessibilityrtf%28for_%29.md): Returns the rich text format (RTF) data that describes the specified range of characters.
- [accessibilityFrameForRange:](nsaccessibilityprotocol/accessibilityframe%28for_%29.md): Returns the rectangle that encloses the specified range of characters.
- [accessibilityLineForIndex:](nsaccessibilityprotocol/accessibilityline%28for_%29.md): Returns the line number for the line that contains the specified character index.
- [accessibilityRangeForIndex:](nsaccessibilityprotocol/accessibilityrange%28for_%29-6kv3.md): Returns the range of characters for the glyph that includes the specified character.
- [accessibilityStyleRangeForIndex:](nsaccessibilityprotocol/accessibilitystylerange%28for_%29.md): Returns a range of characters that all have the same style as the specified character.
- [accessibilityRangeForLine:](nsaccessibilityprotocol/accessibilityrange%28forline_%29.md): Returns the range of characters in the specified line.
- [accessibilityRangeForPosition:](nsaccessibilityprotocol/accessibilityrange%28for_%29-1iudm.md): Returns the range of characters for the glyph at the specified point.

### Configuring windows

- [accessibilityActivationPoint](nsaccessibility-c.protocol/accessibilityactivationpoint.md): The activation point for the user interface element.
- [accessibilityAlternateUIVisible](nsaccessibility-c.protocol/accessibilityalternateuivisible.md): A Boolean value that determines whether the accessibility element’s alternative UI is currently visible.
- [accessibilityCancelButton](nsaccessibility-c.protocol/accessibilitycancelbutton.md): The child accessibility element that represents the window’s cancel button.
- [accessibilityCloseButton](nsaccessibility-c.protocol/accessibilityclosebutton.md): The child accessibility element that represents the window’s close button.
- [accessibilityDefaultButton](nsaccessibility-c.protocol/accessibilitydefaultbutton.md): The child accessibility element that represents the window’s default button.
- [accessibilityFullScreenButton](nsaccessibility-c.protocol/accessibilityfullscreenbutton.md): The child accessibility element that represents the window’s full-screen button.
- [accessibilityGrowArea](nsaccessibility-c.protocol/accessibilitygrowarea.md): The child accessibility element that represents the window’s grow area.
- [accessibilityMain](nsaccessibility-c.protocol/accessibilitymain.md): A Boolean value that determines whether the window is the app’s main window.
- [accessibilityMinimizeButton](nsaccessibility-c.protocol/accessibilityminimizebutton.md): The child accessibility element that represents the window’s minimize button.
- [accessibilityMinimized](nsaccessibility-c.protocol/accessibilityminimized.md): A Boolean value that determines whether this window is in a minimized state.
- [accessibilityModal](nsaccessibility-c.protocol/accessibilitymodal.md): A Boolean value that determines whether the window is modal.
- [accessibilityProxy](nsaccessibility-c.protocol/accessibilityproxy.md): The child accessibility element that represents the window’s proxy icon.
- [accessibilityShownMenu](nsaccessibility-c.protocol/accessibilityshownmenu.md): The menu currently displaying for the accessibility element.
- [accessibilityToolbarButton](nsaccessibility-c.protocol/accessibilitytoolbarbutton.md): The child accessibility element that represents the window’s toolbar button.
- [accessibilityWindow](nsaccessibility-c.protocol/accessibilitywindow.md): The window that contains the accessibility element.
- [accessibilityZoomButton](nsaccessibility-c.protocol/accessibilityzoombutton.md): The child accessibility element that represents the window’s zoom button.

### Managing apps

- [accessibilityExtrasMenuBar](nsaccessibility-c.protocol/accessibilityextrasmenubar.md): The icon for the app’s menu bar extra.
- [accessibilityFrontmost](nsaccessibility-c.protocol/accessibilityfrontmost.md): A Boolean value that determines whether the app is the frontmost app.
- [accessibilityHidden](nsaccessibility-c.protocol/accessibilityhidden.md): A Boolean value that determines whether the app is in a hidden state.
- [accessibilityMainWindow](nsaccessibility-c.protocol/accessibilitymainwindow.md): The app’s main window.
- [accessibilityMenuBar](nsaccessibility-c.protocol/accessibilitymenubar.md): The app’s menu bar.
- [accessibilityWindows](nsaccessibility-c.protocol/accessibilitywindows.md): An array that contains all the app’s windows.

### Configuring grid views

- [accessibilityColumnCount](nsaccessibility-c.protocol/accessibilitycolumncount.md): The number of columns in the accessibility element’s grid.
- [accessibilityOrderedByRow](nsaccessibility-c.protocol/accessibilityorderedbyrow.md): A Boolean value that determines whether the accessibility element’s grid is in row major order or in column major order.
- [accessibilityRowCount](nsaccessibility-c.protocol/accessibilityrowcount.md): The number of rows in the accessibility element’s grid.

### Configuring scroll views

- [accessibilityHorizontalScrollBar](nsaccessibility-c.protocol/accessibilityhorizontalscrollbar.md): The horizontal scroll bar for the scroll view.
- [accessibilityVerticalScrollBar](nsaccessibility-c.protocol/accessibilityverticalscrollbar.md): The vertical scroll bar for the scroll view.

### Configuring table and outline views

- [accessibilityColumnHeaderUIElements](nsaccessibility-c.protocol/accessibilitycolumnheaderuielements.md): The column header accessibility elements for the table or outline.
- [accessibilityColumns](nsaccessibility-c.protocol/accessibilitycolumns.md): The column accessibility elements for the table or outline.
- [accessibilityColumnTitles](nsaccessibility-c.protocol/accessibilitycolumntitles.md): The column titles for the accessibility element.
- [accessibilityExpanded](nsaccessibility-c.protocol/accessibilityexpanded.md): A Boolean value that determines whether the accessibility element is in an expanded state.
- [accessibilityHeader](nsaccessibility-c.protocol/accessibilityheader.md): The header for the table view.
- [accessibilityIndex](nsaccessibility-c.protocol/accessibilityindex.md): The index of the row or column that the accessibility element represents.
- [accessibilityRowHeaderUIElements](nsaccessibility-c.protocol/accessibilityrowheaderuielements.md): The row header accessibility elements for the table or outline.
- [accessibilityRows](nsaccessibility-c.protocol/accessibilityrows.md): The row accessibility elements for the table or outline.
- [accessibilitySelectedColumns](nsaccessibility-c.protocol/accessibilityselectedcolumns.md): The currently selected columns for the table or outline.
- [accessibilitySelectedRows](nsaccessibility-c.protocol/accessibilityselectedrows.md): The currently selected rows for the table or outline.
- [accessibilitySortDirection](nsaccessibility-c.protocol/accessibilitysortdirection.md): The accessibility element’s sort direction.
- [accessibilityVisibleColumns](nsaccessibility-c.protocol/accessibilityvisiblecolumns.md): The visible columns for the table or outline.
- [accessibilityVisibleRows](nsaccessibility-c.protocol/accessibilityvisiblerows.md): The visible rows for the table or outline.
- [NSAccessibilitySortDirection](nsaccessibilitysortdirection.md): Values that indicate the sort direction of a column.

### Configuring outline rows

- [accessibilityDisclosed](nsaccessibility-c.protocol/accessibilitydisclosed.md): A Boolean value that determines whether the row is disclosing other rows.
- [accessibilityDisclosedByRow](nsaccessibility-c.protocol/accessibilitydisclosedbyrow.md): The row disclosing the current row.
- [accessibilityDisclosedRows](nsaccessibility-c.protocol/accessibilitydisclosedrows.md): The rows that the current row discloses.
- [accessibilityDisclosureLevel](nsaccessibility-c.protocol/accessibilitydisclosurelevel.md): The indention level for the row.

### Configuring cell-based tables

- [accessibilityCellForColumn:row:](nsaccessibilityprotocol/accessibilitycell%28forcolumn_row_%29.md): Returns the cell at the specified column and row.
- [accessibilityColumnIndexRange](nsaccessibility-c.protocol/accessibilitycolumnindexrange.md): The column index range of the cell.
- [accessibilityRowIndexRange](nsaccessibility-c.protocol/accessibilityrowindexrange.md): The row index range of the cell.
- [accessibilitySelectedCells](nsaccessibility-c.protocol/accessibilityselectedcells.md): The currently selected cells for the table.
- [accessibilityVisibleCells](nsaccessibility-c.protocol/accessibilityvisiblecells.md): The visible cells for the table.

### Configuring layout

- [accessibilityLayoutPointForScreenPoint:](nsaccessibilityprotocol/accessibilitylayoutpoint%28forscreenpoint_%29.md): Converts the provided point in screen coordinates to a point in the layout area’s coordinate system.
- [accessibilityLayoutSizeForScreenSize:](nsaccessibilityprotocol/accessibilitylayoutsize%28forscreensize_%29.md): Converts the provided size in screen coordinates to a size in the layout area’s coordinate system.
- [accessibilityScreenPointForLayoutPoint:](nsaccessibilityprotocol/accessibilityscreenpoint%28forlayoutpoint_%29.md): Converts the provided point in the layout area’s coordinates to a point in the screen’s coordinate system.
- [accessibilityScreenSizeForLayoutSize:](nsaccessibilityprotocol/accessibilityscreensize%28forlayoutsize_%29.md): Converts the provided size in the layout area’s coordinates to a size in the screen’s coordinate system.
- [accessibilityHandles](nsaccessibility-c.protocol/accessibilityhandles.md): The drag handle accessibility elements for the layout item element.
- [accessibilityHorizontalUnits](nsaccessibility-c.protocol/accessibilityhorizontalunits.md): The units that the layout area uses for horizontal values.
- [accessibilityHorizontalUnitDescription](nsaccessibility-c.protocol/accessibilityhorizontalunitdescription.md): A description of the layout area’s horizontal units.
- [accessibilityVerticalUnits](nsaccessibility-c.protocol/accessibilityverticalunits.md): The units that the layout area uses for vertical values.
- [accessibilityVerticalUnitDescription](nsaccessibility-c.protocol/accessibilityverticalunitdescription.md): A description of the layout area’s vertical units.

### Configuring sliders

- [accessibilityAllowedValues](nsaccessibility-c.protocol/accessibilityallowedvalues.md): The allowed values for the slider accessibility element.
- [accessibilityLabelUIElements](nsaccessibility-c.protocol/accessibilitylabeluielements.md): The child label elements for the slider accessibility element.
- [accessibilityLabelValue](nsaccessibility-c.protocol/accessibilitylabelvalue.md): The value of the label accessibility element.

### Configuring split views

- [accessibilityNextContents](nsaccessibility-c.protocol/accessibilitynextcontents.md): The contents that follow the divider accessibility element.
- [accessibilityPreviousContents](nsaccessibility-c.protocol/accessibilitypreviouscontents.md): The contents that precede the divider accessibility element.
- [accessibilitySplitters](nsaccessibility-c.protocol/accessibilitysplitters.md): An array that contains the views and splitter bar from the split view.

### Configuring tabs and toolbars

- [accessibilityOverflowButton](nsaccessibility-c.protocol/accessibilityoverflowbutton.md): The overflow button for the toolbar.
- [accessibilityTabs](nsaccessibility-c.protocol/accessibilitytabs.md): The tab accessibility elements for the tab view.

### Configuring ruler views

- [accessibilityMarkerGroupUIElement](nsaccessibility-c.protocol/accessibilitymarkergroupuielement.md): The user interface element that functions as a marker group for the ruler accessibility element.
- [accessibilityMarkerTypeDescription](nsaccessibility-c.protocol/accessibilitymarkertypedescription.md): A human-readable description of the marker type.
- [accessibilityMarkerUIElements](nsaccessibility-c.protocol/accessibilitymarkeruielements.md): An array of marker accessibility elements for the ruler.
- [accessibilityMarkerValues](nsaccessibility-c.protocol/accessibilitymarkervalues.md): The marker values for the ruler.
- [accessibilityRulerMarkerType](nsaccessibility-c.protocol/accessibilityrulermarkertype.md): The type of markers for the ruler.
- [accessibilityUnits](nsaccessibility-c.protocol/accessibilityunits.md): The units for the ruler.
- [accessibilityUnitDescription](nsaccessibility-c.protocol/accessibilityunitdescription.md): A human-readable description of the ruler’s units.
- [NSAccessibilityRulerMarkerType](nsaccessibilityrulermarkertype.md): Values that indicate the marker type of an accessibility element.
- [NSAccessibilityUnits](nsaccessibilityunits.md): Values that indicate the unit values of a ruler or layout area.

### Managing documents and editing

- [accessibilityDocument](nsaccessibility-c.protocol/accessibilitydocument.md): The URL for the file that the accessibility element represents.
- [accessibilityEdited](nsaccessibility-c.protocol/accessibilityedited.md): A Boolean value that indicates whether the accessibility element is in an edited state.
- [accessibilityFilename](nsaccessibility-c.protocol/accessibilityfilename.md): The filename for the file that the accessibility element represents.

### Configuring linkage elements

- [accessibilityLinkedUIElements](nsaccessibility-c.protocol/accessibilitylinkeduielements.md): The elements that have links with the accessibility element.
- [accessibilityServesAsTitleForUIElements](nsaccessibility-c.protocol/accessibilityservesastitleforuielements.md): The list of elements that the accessibility element is a title for.
- [accessibilityTitleUIElement](nsaccessibility-c.protocol/accessibilitytitleuielement.md): A static text element that represents the accessibility element’s title.

### Configuring search fields

- [accessibilityClearButton](nsaccessibility-c.protocol/accessibilityclearbutton.md): The clear button for the search field.
- [accessibilitySearchButton](nsaccessibility-c.protocol/accessibilitysearchbutton.md): The search button for the search field.
- [accessibilitySearchMenu](nsaccessibility-c.protocol/accessibilitysearchmenu.md): The search menu for the search field.

### Confirming and canceling operations

- [accessibilityPerformCancel](nsaccessibilityprotocol/accessibilityperformcancel%28%29.md): Cancels the current operation.
- [accessibilityPerformConfirm](nsaccessibilityprotocol/accessibilityperformconfirm%28%29.md): Simulates pressing Return in the accessibility element.

### Selecting elements

- [accessibilityPerformPick](nsaccessibilityprotocol/accessibilityperformpick%28%29.md): Selects the accessibility element.
- [accessibilityPerformPress](nsaccessibilityprotocol/accessibilityperformpress%28%29.md): Simulates clicking the accessibility element.

### Searching elements

- [NSAccessibilitySearchCurrentElementKey](nsaccessibilitysearchcurrentelementkey.md)
- [NSAccessibilitySearchCurrentRangeKey](nsaccessibilitysearchcurrentrangekey.md)
- [NSAccessibilitySearchDirectionKey](nsaccessibilitysearchdirectionkey.md)
- [NSAccessibilitySearchDirectionNext](nsaccessibilitysearchdirectionnext.md)
- [NSAccessibilitySearchDirectionPrevious](nsaccessibilitysearchdirectionprevious.md)
- [NSAccessibilitySearchKey](nsaccessibilitysearchkey.md)

### Showing user interface elements

- [accessibilityPerformShowAlternateUI](nsaccessibilityprotocol/accessibilityperformshowalternateui%28%29.md): Displays the accessibility element’s alternative UI.
- [accessibilityPerformShowDefaultUI](nsaccessibilityprotocol/accessibilityperformshowdefaultui%28%29.md): Returns to the accessibility element’s original UI.
- [accessibilityPerformShowMenu](nsaccessibilityprotocol/accessibilityperformshowmenu%28%29.md): Displays the menu accessibility element.
- [accessibilityPerformRaise](nsaccessibilityprotocol/accessibilityperformraise%28%29.md): Brings the window to the front.

### Incrementing, decrementing, and deleting values

- [accessibilityPerformIncrement](nsaccessibilityprotocol/accessibilityperformincrement%28%29.md): Increments the accessibility element’s value.
- [accessibilityPerformDecrement](nsaccessibilityprotocol/accessibilityperformdecrement%28%29.md): Decrements the accessibility element’s value.
- [accessibilityPerformDelete](nsaccessibilityprotocol/accessibilityperformdelete%28%29.md): Deletes the accessibility element’s value.

### Managing notifications

Notifications alert assistive apps to changes in the user interface’s state.

- [NSAccessibilityPostNotification](nsaccessibility-swift.struct/post%28element_notification_%29.md): Sends a notification to any observing assistive apps.
- [NSAccessibilityPostNotificationWithUserInfo](nsaccessibility-swift.struct/post%28element_notification_userinfo_%29.md): Sends a notification and an optional user info dictionary to any observing assistive apps.
- [NSAccessibilityNotificationName](nsaccessibility-swift.struct/notification.md): The name of the notification.
- [NSAccessibilityNotificationUserInfoKey](nsaccessibility-swift.struct/notificationuserinfokey.md): The key in the user info dictionary for a notification.

### Handling errors

- [NSAccessibilityErrorCodeExceptionInfo](nsaccessibility-swift.struct/errorcodeexceptioninfo.md): An integer error code for debugging.

### Instance methods

- [accessibilityAttributedUserInputLabels](nsaccessibility-c.protocol/accessibilityattributeduserinputlabels.md)
- [accessibilityUserInputLabels](nsaccessibility-c.protocol/accessibilityuserinputlabels.md)

### Instance Properties

- [accessibilityDecrementButton](nsaccessibility-c.protocol/accessibilitydecrementbutton.md): The decrement button for the stepper accessibility element.
- [accessibilityIncrementButton](nsaccessibility-c.protocol/accessibilityincrementbutton.md): The increment button for the stepper accessibility element.
- [accessibilityInsertionPointLineNumber](nsaccessibility-c.protocol/accessibilityinsertionpointlinenumber.md): The line number that contains the insertion point.
- [accessibilityNumberOfCharacters](nsaccessibility-c.protocol/accessibilitynumberofcharacters.md): The number of characters in the text.
- [accessibilityPlaceholderValue](nsaccessibility-c.protocol/accessibilityplaceholdervalue.md): The placeholder value for the accessibility element.
- [accessibilitySelectedText](nsaccessibility-c.protocol/accessibilityselectedtext.md): The currently selected text.
- [accessibilitySelectedTextRange](nsaccessibility-c.protocol/accessibilityselectedtextrange.md): The range of the currently selected text.
- [accessibilitySelectedTextRanges](nsaccessibility-c.protocol/accessibilityselectedtextranges.md): An array of ranges for the currently selected text.
- [accessibilitySharedCharacterRange](nsaccessibility-c.protocol/accessibilitysharedcharacterrange.md): The range of characters that the accessibility element displays.
- [accessibilitySharedTextUIElements](nsaccessibility-c.protocol/accessibilitysharedtextuielements.md): Other elements that share text with the accessibility element.
- [accessibilityVisibleCharacterRange](nsaccessibility-c.protocol/accessibilityvisiblecharacterrange.md): The range of visible characters in the document.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSAccessibilityElement](nsaccessibilityelement-swift.class.md)
- [NSApplication](nsapplication.md)
- [NSCell](nscell.md)
- [NSDrawer](nsdrawer.md)
- [NSMenu](nsmenu.md)
- [NSMenuItem](nsmenuitem.md)
- [NSPopover](nspopover.md)
- [NSSliderAccessory](nsslideraccessory.md)
- [NSView](nsview.md)
- [NSWindow](nswindow.md)
