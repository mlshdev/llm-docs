> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenu/identifier-swift.struct](https://developer.apple.com/documentation/uikit/uimenu/identifier-swift.struct)

# UIMenu.Identifier (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Constants you use to identify an app’s standard menus.

## Declaration

```swift
struct Identifier
```

<a id="overview"></a>

## Overview

Use these constants to identify [UIMenu](../uimenu.md) objects containing standard configurations.

When creating a custom menu identifier, provide a reverse domain name string value, such as `UIMenu.Identifier("com.example.apple-samplecode.MenubarSample.reloadMenu")`.

## Topics

### Top-level menus

- [application](identifier-swift.struct/application.md): The standard app menu.
- [file](identifier-swift.struct/file.md): The standard File menu.
- [edit](identifier-swift.struct/edit.md): The standard Edit menu.
- [view](identifier-swift.struct/view.md): The standard View menu.
- [window](identifier-swift.struct/window.md): The standard Window menu.
- [help](identifier-swift.struct/help.md): The standard Help menu.

### App menu commands

- [about](identifier-swift.struct/about.md): The About menu.
- [preferences](identifier-swift.struct/preferences.md): The Preferences menu.
- [services](identifier-swift.struct/services.md): The Services menu.
- [hide](identifier-swift.struct/hide.md): The Hide menu.
- [quit](identifier-swift.struct/quit.md): The Quit menu.

### File menus

- [newItem](identifier-swift.struct/newitem.md): New item menu
- [newScene](identifier-swift.struct/newscene.md): Deprecated. The New Scene menu.
- [openRecent](identifier-swift.struct/openrecent.md): The Open Recent menu.
- [open](identifier-swift.struct/open.md): The Open menu.
- [close](identifier-swift.struct/close.md): The Close menu.
- [print](identifier-swift.struct/print.md): The Print menu.
- [document](identifier-swift.struct/document.md): The Document menu.

### Edit menus

- [undoRedo](identifier-swift.struct/undoredo.md): The Undo/Redo menu.
- [standardEdit](identifier-swift.struct/standardedit.md): The standard Edit menu.
- [find](identifier-swift.struct/find.md): The Find menu.
- [findPanel](identifier-swift.struct/findpanel.md): Find panel menu (Find, Find and Replace, Find Next, Find Previous)
- [replace](identifier-swift.struct/replace.md): The Replace menu.
- [share](identifier-swift.struct/share.md): The Share menu.
- [textStyle](identifier-swift.struct/textstyle.md): The Text Style menu.
- [spelling](identifier-swift.struct/spelling.md): The Spelling menu.
- [spellingPanel](identifier-swift.struct/spellingpanel.md): The Spelling Panel menu.
- [spellingOptions](identifier-swift.struct/spellingoptions.md): The Spelling Options menu.
- [substitutions](identifier-swift.struct/substitutions.md): The Substitutions menu.
- [substitutionsPanel](identifier-swift.struct/substitutionspanel.md): The Substitutions Panel menu.
- [substitutionOptions](identifier-swift.struct/substitutionoptions.md): The Substitutions Options menu.
- [transformations](identifier-swift.struct/transformations.md): The Transformations menu.
- [speech](identifier-swift.struct/speech.md): The Speech menu.
- [lookup](identifier-swift.struct/lookup.md): The Lookup menu.
- [learn](identifier-swift.struct/learn.md): The Learn menu.
- [format](identifier-swift.struct/format.md): The Format menu.
- [font](identifier-swift.struct/font.md): The Font menu.
- [textSize](identifier-swift.struct/textsize.md): The Text Size menu.
- [textColor](identifier-swift.struct/textcolor.md): The Text Color menu.
- [textStylePasteboard](identifier-swift.struct/textstylepasteboard.md): The Text Style Pasteboard menu.
- [text](identifier-swift.struct/text.md): The Text menu.
- [autoFill](identifier-swift.struct/autofill.md): The AutoFill menu.
- [writingDirection](identifier-swift.struct/writingdirection.md): The Writing Direction menu.
- [alignment](identifier-swift.struct/alignment.md): The Alignment menu.

### View menus

- [toolbar](identifier-swift.struct/toolbar.md): The Toolbar menu group.
- [sidebar](identifier-swift.struct/sidebar.md): The Sidebar menu group.
- [fullscreen](identifier-swift.struct/fullscreen.md): The Full Screen menu.

### Window menus

- [minimizeAndZoom](identifier-swift.struct/minimizeandzoom.md): The Minimize and Zoom menu.
- [bringAllToFront](identifier-swift.struct/bringalltofront.md): The Bring All to Front menu.

### Root menu

- [root](identifier-swift.struct/root.md): The root menu.

### Initializers

- [init(\_:)](identifier-swift.struct/init%28__%29.md): Creates a menu identifier.
- [init(rawValue:)](identifier-swift.struct/init%28rawvalue_%29.md): Creates a menu identifier with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a menu object

- [init(title:image:identifier:options:children:)](init%28title_image_identifier_options_children_%29.md): Creates a new menu with the specified values.
- [init(title:subtitle:image:identifier:options:children:)](init%28title_subtitle_image_identifier_options_children_%29.md): Creates a new menu with the specified title, subtitle, image, identifier, menu options, and child elements.
- [init(title:subtitle:image:identifier:options:preferredElementSize:children:)](init%28title_subtitle_image_identifier_options_preferredelementsize_children_%29.md): Creates a new menu with the specified title, subtitle, image, identifier, menu options, element size, and child elements.
- [UIMenu.Options](options-swift.struct.md): Options you use to configure a menu’s appearance.
- [init(coder:)](init%28coder_%29.md): Creates a menu from data in an unarchiver.

# UIMenuIdentifier (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Constants you use to identify an app’s standard menus.

## Declaration

```objectivec
typedef NSString * UIMenuIdentifier;
```

<a id="overview"></a>

## Overview

Use these constants to identify [UIMenu](../uimenu.md) objects containing standard configurations.

When creating a custom menu identifier, provide a reverse domain name string value, such as `UIMenu.Identifier("com.example.apple-samplecode.MenubarSample.reloadMenu")`.

## Topics

### Top-level menus

- [UIMenuApplication](identifier-swift.struct/application.md): The standard app menu.
- [UIMenuFile](identifier-swift.struct/file.md): The standard File menu.
- [UIMenuEdit](identifier-swift.struct/edit.md): The standard Edit menu.
- [UIMenuView](identifier-swift.struct/view.md): The standard View menu.
- [UIMenuWindow](identifier-swift.struct/window.md): The standard Window menu.
- [UIMenuHelp](identifier-swift.struct/help.md): The standard Help menu.

### App menu commands

- [UIMenuAbout](identifier-swift.struct/about.md): The About menu.
- [UIMenuPreferences](identifier-swift.struct/preferences.md): The Preferences menu.
- [UIMenuServices](identifier-swift.struct/services.md): The Services menu.
- [UIMenuHide](identifier-swift.struct/hide.md): The Hide menu.
- [UIMenuQuit](identifier-swift.struct/quit.md): The Quit menu.

### File menus

- [UIMenuNewItem](identifier-swift.struct/newitem.md): New item menu
- [UIMenuNewScene](identifier-swift.struct/newscene.md): Deprecated. The New Scene menu.
- [UIMenuOpenRecent](identifier-swift.struct/openrecent.md): The Open Recent menu.
- [UIMenuOpen](identifier-swift.struct/open.md): The Open menu.
- [UIMenuClose](identifier-swift.struct/close.md): The Close menu.
- [UIMenuPrint](identifier-swift.struct/print.md): The Print menu.
- [UIMenuDocument](identifier-swift.struct/document.md): The Document menu.

### Edit menus

- [UIMenuUndoRedo](identifier-swift.struct/undoredo.md): The Undo/Redo menu.
- [UIMenuStandardEdit](identifier-swift.struct/standardedit.md): The standard Edit menu.
- [UIMenuFind](identifier-swift.struct/find.md): The Find menu.
- [UIMenuFindPanel](identifier-swift.struct/findpanel.md): Find panel menu (Find, Find and Replace, Find Next, Find Previous)
- [UIMenuReplace](identifier-swift.struct/replace.md): The Replace menu.
- [UIMenuShare](identifier-swift.struct/share.md): The Share menu.
- [UIMenuTextStyle](identifier-swift.struct/textstyle.md): The Text Style menu.
- [UIMenuSpelling](identifier-swift.struct/spelling.md): The Spelling menu.
- [UIMenuSpellingPanel](identifier-swift.struct/spellingpanel.md): The Spelling Panel menu.
- [UIMenuSpellingOptions](identifier-swift.struct/spellingoptions.md): The Spelling Options menu.
- [UIMenuSubstitutions](identifier-swift.struct/substitutions.md): The Substitutions menu.
- [UIMenuSubstitutionsPanel](identifier-swift.struct/substitutionspanel.md): The Substitutions Panel menu.
- [UIMenuSubstitutionOptions](identifier-swift.struct/substitutionoptions.md): The Substitutions Options menu.
- [UIMenuTransformations](identifier-swift.struct/transformations.md): The Transformations menu.
- [UIMenuSpeech](identifier-swift.struct/speech.md): The Speech menu.
- [UIMenuLookup](identifier-swift.struct/lookup.md): The Lookup menu.
- [UIMenuLearn](identifier-swift.struct/learn.md): The Learn menu.
- [UIMenuFormat](identifier-swift.struct/format.md): The Format menu.
- [UIMenuFont](identifier-swift.struct/font.md): The Font menu.
- [UIMenuTextSize](identifier-swift.struct/textsize.md): The Text Size menu.
- [UIMenuTextColor](identifier-swift.struct/textcolor.md): The Text Color menu.
- [UIMenuTextStylePasteboard](identifier-swift.struct/textstylepasteboard.md): The Text Style Pasteboard menu.
- [UIMenuText](identifier-swift.struct/text.md): The Text menu.
- [UIMenuAutoFill](identifier-swift.struct/autofill.md): The AutoFill menu.
- [UIMenuWritingDirection](identifier-swift.struct/writingdirection.md): The Writing Direction menu.
- [UIMenuAlignment](identifier-swift.struct/alignment.md): The Alignment menu.

### View menus

- [UIMenuToolbar](identifier-swift.struct/toolbar.md): The Toolbar menu group.
- [UIMenuSidebar](identifier-swift.struct/sidebar.md): The Sidebar menu group.
- [UIMenuFullscreen](identifier-swift.struct/fullscreen.md): The Full Screen menu.

### Window menus

- [UIMenuMinimizeAndZoom](identifier-swift.struct/minimizeandzoom.md): The Minimize and Zoom menu.
- [UIMenuBringAllToFront](identifier-swift.struct/bringalltofront.md): The Bring All to Front menu.

### Root menu

- [UIMenuRoot](identifier-swift.struct/root.md): The root menu.

## See Also

### Creating a menu object

- [menuWithChildren:](menuwithchildren_.md): Creates a new menu with the specified child elements.
- [menuWithTitle:children:](menuwithtitle_children_.md): Creates a menu with the specified title and child menu elements.
- [menuWithTitle:image:identifier:options:children:](menuwithtitle_image_identifier_options_children_.md): Creates a new menu with the specified values.
- [UIMenuOptions](options-swift.struct.md): Options you use to configure a menu’s appearance.
- [initWithCoder:](init%28coder_%29.md): Creates a menu from data in an unarchiver.
