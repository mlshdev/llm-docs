> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/macos-release-notes/appkit-release-notes-for-macos-13](https://developer.apple.com/documentation/macos-release-notes/appkit-release-notes-for-macos-13)

# AppKit Release Notes for macOS Ventura 13

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

AppKit in macOS Ventura 13 includes new features, as well as API changes and deprecations.

<a id="New-Features"></a>

### New Features

<a id="NSColorWell"></a>

#### NSColorWell

- Color wells have a modernized appearance and two new styles in macOS 13. See the new [colorWellStyle](../appkit/nscolorwell/colorwellstyle.md) property and associated [NSColorWell.Style](../appkit/nscolorwell/style.md) type for more information on configuring a color well’s style.
- The two new color well styles, [NSColorWell.Style.minimal](../appkit/nscolorwell/style/minimal.md) and [NSColorWell.Style.expanded](../appkit/nscolorwell/style/expanded.md), offer a pull-down capability. By default, interacting with the well displays a popover with a palette of color choices for quick picking. Applications can customize this interaction using the new [pulldownTarget](../appkit/nscolorwell/pulldowntarget.md) and [pulldownAction](../appkit/nscolorwell/pulldownaction.md) properties.
- Borderless color wells will be deprecated in a future release. The [isBordered](../appkit/nscolorwell/isbordered.md) property has been annotated as such.

<a id="NSComboButton"></a>

#### NSComboButton

- macOS 13 introduces a new type of control: [NSComboButton](../appkit/nscombobutton.md). NSComboButton provides the functionality of a pull-down menu along with a primary action.
- NSComboButton is configurable with two styles, [NSComboButton.Style.split](../appkit/nscombobutton/style-swift.enum/split.md) and [NSComboButton.Style.unified](../appkit/nscombobutton/style-swift.enum/unified.md). Refer to the class documentation for guidance on the appearance and behavior of each case.

<a id="NSNib"></a>

#### NSNib

- The `initWithContentsOfURL` initializer (deprecated since 10.8) now throws an assertion. Use [init(nibNamed:bundle:)](../appkit/nsnib/init%28nibnamed_bundle_%29.md) instead.

<a id="NSTableView-and-NSOutlineView"></a>

#### NSTableView and NSOutlineView

- On macOS 13 and higher, changing the [autosaveName](../appkit/nstableview/autosavename-swift.property.md) property from one value to another will automatically persist autosave data for the old value before changing to the new value. Setting `autosaveName` to `nil` removes the persistence data for the previously set `autosaveName`.
- NSTableView and NSOutlineView now automatically estimate row heights for view-based table views whose delegates implement [tableView(\_:heightOfRow:)](../appkit/nstableviewdelegate/tableview%28__heightofrow_%29.md) and provide variable row heights. This provides performance improvements for table views with large numbers of rows by reducing the frequency of the calls to [tableView(\_:heightOfRow:)](../appkit/nstableviewdelegate/tableview%28__heightofrow_%29.md).

> **Note**

> To get the benefit of row height estimation, the table view must be view-based and not override [rect(ofRow:)](../appkit/nstableview/rect%28ofrow_%29.md), [row(at:)](../appkit/nstableview/row%28at_%29.md), or [rows(in:)](../appkit/nstableview/rows%28in_%29.md).

- For cell-based table views, checking Autosave Column Information in Interface Builder now correctly persists column information for columns that have automatic column identifiers.
- For apps linked against the macOS 13 SDK, [NSTableRowView](../appkit/nstablerowview.md) and subclasses that override [drawSeparator(in:)](../appkit/nstablerowview/drawseparator%28in_%29.md) now draw their separators correctly, even when displayed as floating group rows.

<a id="Deprecations"></a>

### Deprecations

<a id="NSToolbar"></a>

#### NSToolbar

- Placing an NSToolbarItem item taller than the toolbar height is not supported and will result in clipping. When drawing a custom badge, use alignmentRectInsets of the control to describe where the button is and draw within the inset area.

## See Also

### AppKit

- [AppKit Release Notes for macOS Sonoma 14](appkit-release-notes-for-macos-14.md): Update your apps to use new features, and test your apps against API changes.
- [AppKit Release Notes for macOS Monterey 12](appkit-release-notes-for-macos-12.md): Update your apps to use new features, and test your apps against API changes.
- [AppKit Release Notes for macOS Big Sur 11](appkit-release-notes-for-macos-11.md): Update your apps to use new features, and test your apps against API changes.
- [AppKit Release Notes for macOS 10.14](appkit-release-notes-for-macos-10_14.md): Update your apps to use new features, and test your apps against API changes.
