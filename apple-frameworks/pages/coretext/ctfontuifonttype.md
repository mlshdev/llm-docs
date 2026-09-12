> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontuifonttype](https://developer.apple.com/documentation/coretext/ctfontuifonttype)

# CTFontUIFontType (Swift)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that represent the specific user-interface purpose to specify for font creation.

## Declaration

```swift
enum CTFontUIFontType
```

<a id="overview"></a>

## Overview

Use these constants with the [CTFontCreateUIFontForLanguage(\_:\_:\_:)](ctfontcreateuifontforlanguage%28______%29.md) function to indicate the intended user interface use of the font reference to be created.

## Topics

### Constants

- [CTFontUIFontType.none](ctfontuifonttype/none.md): The user-interface font type isn’t specified.
- [CTFontUIFontType.user](ctfontuifonttype/user.md): The default font for documents and other text whose font the user can typically change.
- [CTFontUIFontType.userFixedPitch](ctfontuifonttype/userfixedpitch.md): The default font for documents and other text under the user’s control when that font is fixed-pitch.
- [CTFontUIFontType.system](ctfontuifonttype/system.md): The system font for standard user-interface items, such as button labels and menu items.
- [CTFontUIFontType.emphasizedSystem](ctfontuifonttype/emphasizedsystem.md): The system font for emphasis in alerts.
- [CTFontUIFontType.smallSystem](ctfontuifonttype/smallsystem.md): The standard small system font for informative text in alerts, column headings in lists, help tags, and small controls.
- [CTFontUIFontType.smallEmphasizedSystem](ctfontuifonttype/smallemphasizedsystem.md): The small system font for emphasis.
- [CTFontUIFontType.miniSystem](ctfontuifonttype/minisystem.md): The standard miniature system font for mini controls and utility window labels and text.
- [CTFontUIFontType.miniEmphasizedSystem](ctfontuifonttype/miniemphasizedsystem.md): The miniature system font for emphasis.
- [CTFontUIFontType.views](ctfontuifonttype/views.md): The default view font for text in lists and tables.
- [CTFontUIFontType.application](ctfontuifonttype/application.md): The default font for text documents.
- [CTFontUIFontType.label](ctfontuifonttype/label.md): The font for labels and tick marks on full-size sliders.
- [CTFontUIFontType.menuTitle](ctfontuifonttype/menutitle.md): The font for menu titles.
- [CTFontUIFontType.menuItem](ctfontuifonttype/menuitem.md): The font for menu items.
- [CTFontUIFontType.menuItemMark](ctfontuifonttype/menuitemmark.md): The font to draw menu-item marks.
- [CTFontUIFontType.menuItemCmdKey](ctfontuifonttype/menuitemcmdkey.md): The font for menu-item command-key equivalents.
- [CTFontUIFontType.windowTitle](ctfontuifonttype/windowtitle.md): The font for window titles.
- [CTFontUIFontType.pushButton](ctfontuifonttype/pushbutton.md): The font for a push button, a rounded rectangular button with a text label on it.
- [CTFontUIFontType.utilityWindowTitle](ctfontuifonttype/utilitywindowtitle.md): The font for utility window titles.
- [CTFontUIFontType.alertHeader](ctfontuifonttype/alertheader.md): The font for alert headers.
- [CTFontUIFontType.systemDetail](ctfontuifonttype/systemdetail.md): The standard system font for details.
- [CTFontUIFontType.emphasizedSystemDetail](ctfontuifonttype/emphasizedsystemdetail.md): The system font for emphasis in details.
- [CTFontUIFontType.toolbar](ctfontuifonttype/toolbar.md): The font used for labels of toolbar items.
- [CTFontUIFontType.smallToolbar](ctfontuifonttype/smalltoolbar.md): The small font for labels of toolbar items.
- [CTFontUIFontType.message](ctfontuifonttype/message.md): The font for standard interface items, such as button labels and menu items.
- [CTFontUIFontType.palette](ctfontuifonttype/palette.md): The font in tool palettes.
- [CTFontUIFontType.toolTip](ctfontuifonttype/tooltip.md): The font for tool tips.
- [CTFontUIFontType.controlContent](ctfontuifonttype/controlcontent.md): The font for contents of user-interface controls.

### Deprecated

- [kCTFontNoFontType](ctfontuifonttype/kctfontnofonttype.md): Deprecated. The user-interface font type isn’t specified.
- [kCTFontUserFontType](ctfontuifonttype/kctfontuserfonttype.md): Deprecated. The font used by default for documents and other text under the user’s control.
- [kCTFontUserFixedPitchFontType](ctfontuifonttype/kctfontuserfixedpitchfonttype.md): Deprecated. The font used by default for documents and other text under the user’s control when that font is fixed-pitch.
- [kCTFontSystemFontType](ctfontuifonttype/kctfontsystemfonttype.md): Deprecated. The system font used for standard user-interface items, such as button labels and menu items.
- [kCTFontEmphasizedSystemFontType](ctfontuifonttype/kctfontemphasizedsystemfonttype.md): Deprecated. The system font used for emphasis in alerts.
- [kCTFontSmallSystemFontType](ctfontuifonttype/kctfontsmallsystemfonttype.md): Deprecated. The standard small system font used for informative text in alerts, column headings in lists, help tags, and small controls.
- [kCTFontSmallEmphasizedSystemFontType](ctfontuifonttype/kctfontsmallemphasizedsystemfonttype.md): Deprecated. The small system font used for emphasis.
- [kCTFontMiniSystemFontType](ctfontuifonttype/kctfontminisystemfonttype.md): Deprecated. The standard miniature system font used for mini controls and utility window labels and text.
- [kCTFontMiniEmphasizedSystemFontType](ctfontuifonttype/kctfontminiemphasizedsystemfonttype.md): Deprecated. The miniature system font used for emphasis.
- [kCTFontViewsFontType](ctfontuifonttype/kctfontviewsfonttype.md): Deprecated. The view font used as the default font of text in lists and tables.
- [kCTFontApplicationFontType](ctfontuifonttype/kctfontapplicationfonttype.md): Deprecated. The default font for text documents.
- [kCTFontLabelFontType](ctfontuifonttype/kctfontlabelfonttype.md): Deprecated. The font used for labels and tick marks on full-size sliders.
- [kCTFontMenuTitleFontType](ctfontuifonttype/kctfontmenutitlefonttype.md): Deprecated. The font used for menu titles.
- [kCTFontMenuItemFontType](ctfontuifonttype/kctfontmenuitemfonttype.md): Deprecated. The font used for menu items.
- [kCTFontMenuItemMarkFontType](ctfontuifonttype/kctfontmenuitemmarkfonttype.md): Deprecated. The font used to draw menu-item marks.
- [kCTFontMenuItemCmdKeyFontType](ctfontuifonttype/kctfontmenuitemcmdkeyfonttype.md): Deprecated. The font used for menu-item command-key equivalents.
- [kCTFontWindowTitleFontType](ctfontuifonttype/kctfontwindowtitlefonttype.md): Deprecated. The font used for window titles.
- [kCTFontPushButtonFontType](ctfontuifonttype/kctfontpushbuttonfonttype.md): Deprecated. The font used for a push button, a rounded rectangular button with a text label on it.
- [kCTFontUtilityWindowTitleFontType](ctfontuifonttype/kctfontutilitywindowtitlefonttype.md): Deprecated. The font used for utility window titles.
- [kCTFontAlertHeaderFontType](ctfontuifonttype/kctfontalertheaderfonttype.md): Deprecated. The font used for alert headers.
- [kCTFontSystemDetailFontType](ctfontuifonttype/kctfontsystemdetailfonttype.md): Deprecated. The standard system font used for details.
- [kCTFontEmphasizedSystemDetailFontType](ctfontuifonttype/kctfontemphasizedsystemdetailfonttype.md): Deprecated. The system font used for emphasis in details.
- [kCTFontToolbarFontType](ctfontuifonttype/kctfonttoolbarfonttype.md): Deprecated. The font used for labels of toolbar items.
- [kCTFontSmallToolbarFontType](ctfontuifonttype/kctfontsmalltoolbarfonttype.md): Deprecated. The small font used for labels of toolbar items.
- [kCTFontMessageFontType](ctfontuifonttype/kctfontmessagefonttype.md): Deprecated. The font used for standard interface items, such as button labels and menu items.
- [kCTFontPaletteFontType](ctfontuifonttype/kctfontpalettefonttype.md): Deprecated. The font used in tool palettes.
- [kCTFontToolTipFontType](ctfontuifonttype/kctfonttooltipfonttype.md): Deprecated. The font used for tool tips.
- [kCTFontControlContentFontType](ctfontuifonttype/kctfontcontrolcontentfonttype.md): Deprecated. The font used for contents of user-interface controls.

### Initializers

- [init(rawValue:)](ctfontuifonttype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [CTFontTableTag](ctfonttabletag.md): Font table tags provide access to font table data.
- [CTFontTableOptions](ctfonttableoptions.md): Constants that describe font table options.
- [CTFontOptions](ctfontoptions.md): Options for font creation and descriptor matching.

# CTFontUIFontType (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that represent the specific user-interface purpose to specify for font creation.

## Declaration

```objectivec
enum CTFontUIFontType : uint32_t;
```

<a id="overview"></a>

## Overview

Use these constants with the [CTFontCreateUIFontForLanguage](ctfontcreateuifontforlanguage%28______%29.md) function to indicate the intended user interface use of the font reference to be created.

## Topics

### Constants

- [kCTFontUIFontNone](ctfontuifonttype/none.md): The user-interface font type isn’t specified.
- [kCTFontUIFontUser](ctfontuifonttype/user.md): The default font for documents and other text whose font the user can typically change.
- [kCTFontUIFontUserFixedPitch](ctfontuifonttype/userfixedpitch.md): The default font for documents and other text under the user’s control when that font is fixed-pitch.
- [kCTFontUIFontSystem](ctfontuifonttype/system.md): The system font for standard user-interface items, such as button labels and menu items.
- [kCTFontUIFontEmphasizedSystem](ctfontuifonttype/emphasizedsystem.md): The system font for emphasis in alerts.
- [kCTFontUIFontSmallSystem](ctfontuifonttype/smallsystem.md): The standard small system font for informative text in alerts, column headings in lists, help tags, and small controls.
- [kCTFontUIFontSmallEmphasizedSystem](ctfontuifonttype/smallemphasizedsystem.md): The small system font for emphasis.
- [kCTFontUIFontMiniSystem](ctfontuifonttype/minisystem.md): The standard miniature system font for mini controls and utility window labels and text.
- [kCTFontUIFontMiniEmphasizedSystem](ctfontuifonttype/miniemphasizedsystem.md): The miniature system font for emphasis.
- [kCTFontUIFontViews](ctfontuifonttype/views.md): The default view font for text in lists and tables.
- [kCTFontUIFontApplication](ctfontuifonttype/application.md): The default font for text documents.
- [kCTFontUIFontLabel](ctfontuifonttype/label.md): The font for labels and tick marks on full-size sliders.
- [kCTFontUIFontMenuTitle](ctfontuifonttype/menutitle.md): The font for menu titles.
- [kCTFontUIFontMenuItem](ctfontuifonttype/menuitem.md): The font for menu items.
- [kCTFontUIFontMenuItemMark](ctfontuifonttype/menuitemmark.md): The font to draw menu-item marks.
- [kCTFontUIFontMenuItemCmdKey](ctfontuifonttype/menuitemcmdkey.md): The font for menu-item command-key equivalents.
- [kCTFontUIFontWindowTitle](ctfontuifonttype/windowtitle.md): The font for window titles.
- [kCTFontUIFontPushButton](ctfontuifonttype/pushbutton.md): The font for a push button, a rounded rectangular button with a text label on it.
- [kCTFontUIFontUtilityWindowTitle](ctfontuifonttype/utilitywindowtitle.md): The font for utility window titles.
- [kCTFontUIFontAlertHeader](ctfontuifonttype/alertheader.md): The font for alert headers.
- [kCTFontUIFontSystemDetail](ctfontuifonttype/systemdetail.md): The standard system font for details.
- [kCTFontUIFontEmphasizedSystemDetail](ctfontuifonttype/emphasizedsystemdetail.md): The system font for emphasis in details.
- [kCTFontUIFontToolbar](ctfontuifonttype/toolbar.md): The font used for labels of toolbar items.
- [kCTFontUIFontSmallToolbar](ctfontuifonttype/smalltoolbar.md): The small font for labels of toolbar items.
- [kCTFontUIFontMessage](ctfontuifonttype/message.md): The font for standard interface items, such as button labels and menu items.
- [kCTFontUIFontPalette](ctfontuifonttype/palette.md): The font in tool palettes.
- [kCTFontUIFontToolTip](ctfontuifonttype/tooltip.md): The font for tool tips.
- [kCTFontUIFontControlContent](ctfontuifonttype/controlcontent.md): The font for contents of user-interface controls.

### Deprecated

- [kCTFontNoFontType](ctfontuifonttype/kctfontnofonttype.md): Deprecated. The user-interface font type isn’t specified.
- [kCTFontUserFontType](ctfontuifonttype/kctfontuserfonttype.md): Deprecated. The font used by default for documents and other text under the user’s control.
- [kCTFontUserFixedPitchFontType](ctfontuifonttype/kctfontuserfixedpitchfonttype.md): Deprecated. The font used by default for documents and other text under the user’s control when that font is fixed-pitch.
- [kCTFontSystemFontType](ctfontuifonttype/kctfontsystemfonttype.md): Deprecated. The system font used for standard user-interface items, such as button labels and menu items.
- [kCTFontEmphasizedSystemFontType](ctfontuifonttype/kctfontemphasizedsystemfonttype.md): Deprecated. The system font used for emphasis in alerts.
- [kCTFontSmallSystemFontType](ctfontuifonttype/kctfontsmallsystemfonttype.md): Deprecated. The standard small system font used for informative text in alerts, column headings in lists, help tags, and small controls.
- [kCTFontSmallEmphasizedSystemFontType](ctfontuifonttype/kctfontsmallemphasizedsystemfonttype.md): Deprecated. The small system font used for emphasis.
- [kCTFontMiniSystemFontType](ctfontuifonttype/kctfontminisystemfonttype.md): Deprecated. The standard miniature system font used for mini controls and utility window labels and text.
- [kCTFontMiniEmphasizedSystemFontType](ctfontuifonttype/kctfontminiemphasizedsystemfonttype.md): Deprecated. The miniature system font used for emphasis.
- [kCTFontViewsFontType](ctfontuifonttype/kctfontviewsfonttype.md): Deprecated. The view font used as the default font of text in lists and tables.
- [kCTFontApplicationFontType](ctfontuifonttype/kctfontapplicationfonttype.md): Deprecated. The default font for text documents.
- [kCTFontLabelFontType](ctfontuifonttype/kctfontlabelfonttype.md): Deprecated. The font used for labels and tick marks on full-size sliders.
- [kCTFontMenuTitleFontType](ctfontuifonttype/kctfontmenutitlefonttype.md): Deprecated. The font used for menu titles.
- [kCTFontMenuItemFontType](ctfontuifonttype/kctfontmenuitemfonttype.md): Deprecated. The font used for menu items.
- [kCTFontMenuItemMarkFontType](ctfontuifonttype/kctfontmenuitemmarkfonttype.md): Deprecated. The font used to draw menu-item marks.
- [kCTFontMenuItemCmdKeyFontType](ctfontuifonttype/kctfontmenuitemcmdkeyfonttype.md): Deprecated. The font used for menu-item command-key equivalents.
- [kCTFontWindowTitleFontType](ctfontuifonttype/kctfontwindowtitlefonttype.md): Deprecated. The font used for window titles.
- [kCTFontPushButtonFontType](ctfontuifonttype/kctfontpushbuttonfonttype.md): Deprecated. The font used for a push button, a rounded rectangular button with a text label on it.
- [kCTFontUtilityWindowTitleFontType](ctfontuifonttype/kctfontutilitywindowtitlefonttype.md): Deprecated. The font used for utility window titles.
- [kCTFontAlertHeaderFontType](ctfontuifonttype/kctfontalertheaderfonttype.md): Deprecated. The font used for alert headers.
- [kCTFontSystemDetailFontType](ctfontuifonttype/kctfontsystemdetailfonttype.md): Deprecated. The standard system font used for details.
- [kCTFontEmphasizedSystemDetailFontType](ctfontuifonttype/kctfontemphasizedsystemdetailfonttype.md): Deprecated. The system font used for emphasis in details.
- [kCTFontToolbarFontType](ctfontuifonttype/kctfonttoolbarfonttype.md): Deprecated. The font used for labels of toolbar items.
- [kCTFontSmallToolbarFontType](ctfontuifonttype/kctfontsmalltoolbarfonttype.md): Deprecated. The small font used for labels of toolbar items.
- [kCTFontMessageFontType](ctfontuifonttype/kctfontmessagefonttype.md): Deprecated. The font used for standard interface items, such as button labels and menu items.
- [kCTFontPaletteFontType](ctfontuifonttype/kctfontpalettefonttype.md): Deprecated. The font used in tool palettes.
- [kCTFontToolTipFontType](ctfontuifonttype/kctfonttooltipfonttype.md): Deprecated. The font used for tool tips.
- [kCTFontControlContentFontType](ctfontuifonttype/kctfontcontrolcontentfonttype.md): Deprecated. The font used for contents of user-interface controls.

## See Also

### Enumerations

- [CTFontTableTag](ctfonttabletag.md): Font table tags provide access to font table data.
- [CTFontTableOptions](ctfonttableoptions.md): Constants that describe font table options.
- [CTFontOptions](ctfontoptions.md): Options for font creation and descriptor matching.
