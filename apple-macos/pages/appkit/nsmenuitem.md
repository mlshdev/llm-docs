> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitem](https://developer.apple.com/documentation/appkit/nsmenuitem)

# NSMenuItem (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A command item in an app menu.

## Declaration

```swift
class NSMenuItem
```

<a id="overview"></a>

## Overview

The [NSMenuItem](nsmenuitem.md) class includes some private functionality needed to maintain binary compatibility with other components of Cocoa. Because of this fact, you can’t replace the [NSMenuItem](nsmenuitem.md) class with a different class, but you can subclass it if necessary.

## Topics

### Creating a menu item

- [init(title:action:keyEquivalent:)](nsmenuitem/init%28title_action_keyequivalent_%29.md): Returns an initialized instance of `NSMenuItem`.
- [init(coder:)](nsmenuitem/init%28coder_%29.md)

### Enabling a menu item

- [isEnabled](nsmenuitem/isenabled.md): A Boolean value that indicates whether the menu item is enabled.

### Managing hidden status

- [isHidden](nsmenuitem/ishidden.md): A Boolean value that indicates whether the menu item is hidden.
- [isHiddenOrHasHiddenAncestor](nsmenuitem/ishiddenorhashiddenancestor.md): A Boolean value that indicates whether the menu item or any of its superitems is hidden.

### Managing the target and action

- [target](nsmenuitem/target.md): The menu item’s target.
- [action](nsmenuitem/action.md): The menu item’s action-method selector.

### Managing the title

- [title](nsmenuitem/title.md): The menu item’s title.
- [attributedTitle](nsmenuitem/attributedtitle.md): A custom string for a menu item.

### Managing the tag

- [tag](nsmenuitem/tag.md): The menu item’s tag.

### Managing the state

- [state](nsmenuitem/state.md): The state of the menu item.

### Managing the image

- [image](nsmenuitem/image.md): The menu item’s image.
- [onStateImage](nsmenuitem/onstateimage.md): The image of the menu item that indicates an “on” state.
- [offStateImage](nsmenuitem/offstateimage.md): The image of the menu item that indicates an “off” state.
- [mixedStateImage](nsmenuitem/mixedstateimage.md): The image of the menu item that indicates a “mixed” state, that is, a state neither “on” nor “off.”
- [preferredImageVisibility](nsmenuitem/preferredimagevisibility.md): A menu item’s image visibility determines whether the item’s image is displayed when the menu is open. The default visibility for an item’s image is Automatic. With this value, AppKit determines whether the item’s image is visible based on system configuration. If an item’s image should be visible in all cases, regardless of macOS version or other settings, then set the image visibility to `.visible`.
- [NSMenuItem.ImageVisibility](nsmenuitem/imagevisibility.md): Values for the `preferredImageVisibility` property of NSMenuItem. When a menu item is initialized, the default value for the item’s image visibility is Automatic.

### Managing the badge

- [badge](nsmenuitem/badge.md): A badge used to provide additional quantitative information specific to the menu item, such as the number of available updates.

### Managing the section header

- [isSectionHeader](nsmenuitem/issectionheader.md): A Boolean value indicating whether the menu item is a section header.

### Managing submenus

- [submenu](nsmenuitem/submenu.md): The submenu of the menu item.
- [hasSubmenu](nsmenuitem/hassubmenu.md): A Boolean value that indicates whether the menu item has a submenu.
- [parent](nsmenuitem/parent.md): The menu item whose submenu contains the receiver.

### Managing the separator item

- [isSeparatorItem](nsmenuitem/isseparatoritem.md): A Boolean value indicating whether the menu item is a separator item.
- [separator()](nsmenuitem/separator%28%29.md): Returns a menu item that is used to separate logical groups of menu commands.

### Managing the owning menu

- [menu](nsmenuitem/menu.md): The menu item’s menu.

### Managing key equivalents

- [keyEquivalent](nsmenuitem/keyequivalent.md): The menu item’s unmodified key equivalent.
- [keyEquivalentModifierMask](nsmenuitem/keyequivalentmodifiermask.md): The menu item’s keyboard equivalent modifiers.

### Managing mnemonics

- [setTitleWithMnemonic(\_:)](nsmenuitem/settitlewithmnemonic%28__%29.md): Deprecated. Sets the title of a menu item with a character denoting an access key.

### Managing user key equivalents

- [usesUserKeyEquivalents](nsmenuitem/usesuserkeyequivalents.md): Returns a Boolean value that indicates whether menu items conform to user preferences for key equivalents.
- [userKeyEquivalent](nsmenuitem/userkeyequivalent.md): The user-assigned key equivalent for the menu item.
- [allowsAutomaticKeyEquivalentLocalization](nsmenuitem/allowsautomatickeyequivalentlocalization.md): A Boolean value that determines whether the system automatically remaps the keyboard shortcut to support localized keyboards.
- [allowsAutomaticKeyEquivalentMirroring](nsmenuitem/allowsautomatickeyequivalentmirroring.md): A Boolean value that determines whether the system automatically swaps input strings for some keyboard shortcuts when the interface direction changes.
- [allowsKeyEquivalentWhenHidden](nsmenuitem/allowskeyequivalentwhenhidden.md)

### Managing alternates

- [isAlternate](nsmenuitem/isalternate.md): A Boolean value that marks the menu item as an alternate to the previous menu item.

### Managing indentation levels

- [indentationLevel](nsmenuitem/indentationlevel.md): The menu item indentation level for the menu item.

### Managing tool tips

- [toolTip](nsmenuitem/tooltip.md): A help tag for the menu item.

### Representing an object

- [representedObject](nsmenuitem/representedobject.md): The object represented by the menu item.

### Managing the view

- [view](nsmenuitem/view.md): The content view for the menu item.

### Getting highlighted status

- [isHighlighted](nsmenuitem/ishighlighted.md): A Boolean value that indicates whether the menu item should be drawn highlighted.

### Identifying the Continuity Camera menu item

- [importFromDeviceIdentifier](nsmenuitem/importfromdeviceidentifier.md): The identifier for a Continuity Camera menu item, which takes pictures or scans documents using an iOS device.

### Type Methods

- [sectionHeader(title:)](nsmenuitem/sectionheader%28title_%29.md): Returns a menu item representing a section header for a logical grouping of menu commands.
- [sectionHeader(withTitle:)](nsmenuitem/sectionheader%28withtitle_%29.md): Deprecated. Returns a menu item representing a section header for a logical grouping of menu commands.

### Instance Properties

- [subtitle](nsmenuitem/subtitle.md)

### Type Properties

- [writingToolsItems](nsmenuitem/writingtoolsitems.md): An array of standard menu items related to Writing Tools. Each call to this method returns an array of newly allocated instances of NSMenuItem.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [NSValidatedUserInterfaceItem](nsvalidateduserinterfaceitem.md)

## See Also

### Menus

- [NSMenu](nsmenu.md): An object that manages an app’s menus.
- [NSMenuItemBadge](nsmenuitembadge.md): A control that provides additional quantitative information specific to a menu item, such as the number of available updates.
- [NSMenuDelegate](nsmenudelegate.md): The optional methods implemented by delegates of [NSMenu](nsmenu.md) objects to manage menu display and handle some events.

# NSMenuItem (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A command item in an app menu.

## Declaration

```objectivec
@interface NSMenuItem : NSObject
```

<a id="overview"></a>

## Overview

The [NSMenuItem](nsmenuitem.md) class includes some private functionality needed to maintain binary compatibility with other components of Cocoa. Because of this fact, you can’t replace the [NSMenuItem](nsmenuitem.md) class with a different class, but you can subclass it if necessary.

## Topics

### Creating a menu item

- [initWithTitle:action:keyEquivalent:](nsmenuitem/init%28title_action_keyequivalent_%29.md): Returns an initialized instance of `NSMenuItem`.
- [initWithCoder:](nsmenuitem/init%28coder_%29.md)

### Enabling a menu item

- [enabled](nsmenuitem/isenabled.md): A Boolean value that indicates whether the menu item is enabled.

### Managing hidden status

- [hidden](nsmenuitem/ishidden.md): A Boolean value that indicates whether the menu item is hidden.
- [hiddenOrHasHiddenAncestor](nsmenuitem/ishiddenorhashiddenancestor.md): A Boolean value that indicates whether the menu item or any of its superitems is hidden.

### Managing the target and action

- [target](nsmenuitem/target.md): The menu item’s target.
- [action](nsmenuitem/action.md): The menu item’s action-method selector.

### Managing the title

- [title](nsmenuitem/title.md): The menu item’s title.
- [attributedTitle](nsmenuitem/attributedtitle.md): A custom string for a menu item.

### Managing the tag

- [tag](nsmenuitem/tag.md): The menu item’s tag.

### Managing the state

- [state](nsmenuitem/state.md): The state of the menu item.

### Managing the image

- [image](nsmenuitem/image.md): The menu item’s image.
- [onStateImage](nsmenuitem/onstateimage.md): The image of the menu item that indicates an “on” state.
- [offStateImage](nsmenuitem/offstateimage.md): The image of the menu item that indicates an “off” state.
- [mixedStateImage](nsmenuitem/mixedstateimage.md): The image of the menu item that indicates a “mixed” state, that is, a state neither “on” nor “off.”
- [preferredImageVisibility](nsmenuitem/preferredimagevisibility.md): A menu item’s image visibility determines whether the item’s image is displayed when the menu is open. The default visibility for an item’s image is Automatic. With this value, AppKit determines whether the item’s image is visible based on system configuration. If an item’s image should be visible in all cases, regardless of macOS version or other settings, then set the image visibility to `.visible`.
- [NSMenuItemImageVisibility](nsmenuitem/imagevisibility.md): Values for the `preferredImageVisibility` property of NSMenuItem. When a menu item is initialized, the default value for the item’s image visibility is Automatic.

### Managing the badge

- [badge](nsmenuitem/badge.md): A badge used to provide additional quantitative information specific to the menu item, such as the number of available updates.

### Managing the section header

- [sectionHeader](nsmenuitem/issectionheader.md): A Boolean value indicating whether the menu item is a section header.
- [sectionHeaderWithTitle:](nsmenuitem/sectionheaderwithtitle_.md): Returns a menu item representing a section header for a logical grouping of menu commands.

### Managing submenus

- [submenu](nsmenuitem/submenu.md): The submenu of the menu item.
- [hasSubmenu](nsmenuitem/hassubmenu.md): A Boolean value that indicates whether the menu item has a submenu.
- [parentItem](nsmenuitem/parent.md): The menu item whose submenu contains the receiver.

### Managing the separator item

- [separatorItem](nsmenuitem/isseparatoritem.md): A Boolean value indicating whether the menu item is a separator item.
- [separatorItem](nsmenuitem/separator%28%29.md): Returns a menu item that is used to separate logical groups of menu commands.

### Managing the owning menu

- [menu](nsmenuitem/menu.md): The menu item’s menu.

### Managing key equivalents

- [keyEquivalent](nsmenuitem/keyequivalent.md): The menu item’s unmodified key equivalent.
- [keyEquivalentModifierMask](nsmenuitem/keyequivalentmodifiermask.md): The menu item’s keyboard equivalent modifiers.

### Managing mnemonics

- [setMnemonicLocation:](nsmenuitem/setmnemoniclocation_.md): Deprecated. Sets the character of the menu item title at location that is to be underlined.
- [mnemonicLocation](nsmenuitem/mnemoniclocation.md): Deprecated. Returns the position of the underlined character in the menu item title used as a mnemonic.
- [setTitleWithMnemonic:](nsmenuitem/settitlewithmnemonic%28__%29.md): Deprecated. Sets the title of a menu item with a character denoting an access key.
- [mnemonic](nsmenuitem/mnemonic.md): Deprecated. Returns the character in the menu item title that appears underlined for use as a mnemonic.

### Managing user key equivalents

- [usesUserKeyEquivalents](nsmenuitem/usesuserkeyequivalents.md): Returns a Boolean value that indicates whether menu items conform to user preferences for key equivalents.
- [userKeyEquivalent](nsmenuitem/userkeyequivalent.md): The user-assigned key equivalent for the menu item.
- [allowsAutomaticKeyEquivalentLocalization](nsmenuitem/allowsautomatickeyequivalentlocalization.md): A Boolean value that determines whether the system automatically remaps the keyboard shortcut to support localized keyboards.
- [allowsAutomaticKeyEquivalentMirroring](nsmenuitem/allowsautomatickeyequivalentmirroring.md): A Boolean value that determines whether the system automatically swaps input strings for some keyboard shortcuts when the interface direction changes.
- [allowsKeyEquivalentWhenHidden](nsmenuitem/allowskeyequivalentwhenhidden.md)

### Managing alternates

- [alternate](nsmenuitem/isalternate.md): A Boolean value that marks the menu item as an alternate to the previous menu item.

### Managing indentation levels

- [indentationLevel](nsmenuitem/indentationlevel.md): The menu item indentation level for the menu item.

### Managing tool tips

- [toolTip](nsmenuitem/tooltip.md): A help tag for the menu item.

### Representing an object

- [representedObject](nsmenuitem/representedobject.md): The object represented by the menu item.

### Managing the view

- [view](nsmenuitem/view.md): The content view for the menu item.

### Getting highlighted status

- [highlighted](nsmenuitem/ishighlighted.md): A Boolean value that indicates whether the menu item should be drawn highlighted.

### Identifying the Continuity Camera menu item

- [NSMenuItemImportFromDeviceIdentifier](nsmenuitem/importfromdeviceidentifier.md): The identifier for a Continuity Camera menu item, which takes pictures or scans documents using an iOS device.

### Instance Properties

- [subtitle](nsmenuitem/subtitle.md)

### Type Properties

- [writingToolsItems](nsmenuitem/writingtoolsitems.md): An array of standard menu items related to Writing Tools. Each call to this method returns an array of newly allocated instances of NSMenuItem.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSAccessibility](nsaccessibilityprotocol.md)
- [NSAccessibilityElement](nsaccessibilityelementprotocol.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [NSValidatedUserInterfaceItem](nsvalidateduserinterfaceitem.md)

## See Also

### Menus

- [NSMenu](nsmenu.md): An object that manages an app’s menus.
- [NSMenuItemBadge](nsmenuitembadge.md): A control that provides additional quantitative information specific to a menu item, such as the number of available updates.
- [NSMenuDelegate](nsmenudelegate.md): The optional methods implemented by delegates of [NSMenu](nsmenu.md) objects to manage menu display and handle some events.
