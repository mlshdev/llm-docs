> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/macos-release-notes/appkit-release-notes-for-macos-12](https://developer.apple.com/documentation/macos-release-notes/appkit-release-notes-for-macos-12)

# AppKit Release Notes for macOS Monterey 12

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

AppKit in macOS Monterey 12 includes new features, as well as API changes and deprecations.

<a id="New-Features"></a>

### New Features

<a id="NSButton"></a>

#### NSButton

- Buttons no longer highlight using the accent color when clicked. Before using any subclass that performs custom drawing, inspect the button cell’s `interiorBackgroundStyle` property to determine if the bezel draws in a normal or emphasized state.
- Buttons now support custom tinting with the [bezelColor](../appkit/nsbutton/bezelcolor.md) property. This property — previously applied only in the Touch Bar — now functions for all in-window buttons using the `NSButtonTypeMomentaryPushIn` style.

<a id="NSSlider"></a>

#### NSSlider

- When clicking on the track, for linear sliders, circular sliders, or dial, the slider now animates to the new value.
- You can now tint sliders with colorful track fills using the [trackFillColor](../appkit/nsslider/trackfillcolor.md) property. This property now functions for all in-window sliders.

<a id="NSSegmentedControl"></a>

#### NSSegmentedControl

- Segmented controls now support custom tinting via the [selectedSegmentBezelColor](../appkit/nssegmentedcontrol/selectedsegmentbezelcolor.md) property. This property now functions for all in-window segmented control styles that draw colorful selected segments.

<a id="NSPopover"></a>

#### NSPopover

- [NSPopover](../appkit/nspopover.md) has a new animation when appearing and dismissing.

<a id="Symbol-Images"></a>

#### Symbol Images

- SF Symbols now support layered symbol images. Layered symbol images use an updated data format to annotate each path element of the symbol with a level in a hierarchy: primary, secondary, tertiary, and so on. At draw time, AppKit can assign different colors to each layer of the symbol using new APIs on [NSImage.SymbolConfiguration](../appkit/nsimage/symbolconfiguration-swift.class.md). Many system-provided symbol images redesigned to include layered versions.
- [NSImage.SymbolConfiguration](../appkit/nsimage/symbolconfiguration-swift.class.md) now supports merging two configurations with [applying(\_:)](https://developer.apple.com/documentation/uikit/uiimage/configuration-swift.class/applying%28_:%29) method.
- [NSImage](../appkit/nsimage.md) now includes a read-only property, [NSImage.SymbolConfiguration](../appkit/nsimage/symbolconfiguration-swift.class.md), for its current symbol configuration. You can use this property to configure other symbol images to match a reference image, or to merge an image’s existing configuration with a set of new configuration options.

<a id="Restorable-State"></a>

#### Restorable State

- To enable secure coding for a restorable state, implement [applicationSupportsSecureRestorableState(\_:)](../appkit/nsapplicationdelegate/applicationsupportssecurerestorablestate%28__%29.md). When opted in:

  - The system requires classes passed to [restorationClass](../appkit/nswindow/restorationclass.md) to explicitly conform to [NSWindowRestoration](../appkit/nswindowrestoration.md).
  - Set [requiresSecureCoding](https://developer.apple.com/documentation/foundation/nscoder/requiressecurecoding) to `true` and the [decodingFailurePolicy](https://developer.apple.com/documentation/foundation/nscoder/decodingfailurepolicy-swift.property) to [NSCoder.DecodingFailurePolicy.setErrorAndReturn](https://developer.apple.com/documentation/foundation/nscoder/decodingfailurepolicy-swift.enum/seterrorandreturn) for any coder the following implementations or overrides use [decodingFailurePolicy](https://developer.apple.com/documentation/foundation/nscoder/decodingfailurepolicy-swift.property) set to [NSCoder.DecodingFailurePolicy.setErrorAndReturn](https://developer.apple.com/documentation/foundation/nscoder/decodingfailurepolicy-swift.enum/seterrorandreturn):

    - [restoreWindow(withIdentifier:state:completionHandler:)](../appkit/nswindowrestoration/restorewindow%28withidentifier_state_completionhandler_%29.md)
    - [restoreWindow(withIdentifier:state:completionHandler:)](../appkit/nsapplication/restorewindow%28withidentifier_state_completionhandler_%29.md)
    - [encodeRestorableState(with:)](../appkit/nsresponder/encoderestorablestate%28with_%29.md)
    - [encodeRestorableState(with:backgroundQueue:)](../appkit/nsresponder/encoderestorablestate%28with_backgroundqueue_%29.md)
    - [restoreState(with:)](../appkit/nsresponder/restorestate%28with_%29.md)
    - [restoreWindow(withIdentifier:state:completionHandler:)](../appkit/nsdocument/restorewindow%28withidentifier_state_completionhandler_%29.md)
    - [encodeRestorableState(with:)](../appkit/nsdocument/encoderestorablestate%28with_%29.md)
    - [encodeRestorableState(with:backgroundQueue:)](../appkit/nsdocument/encoderestorablestate%28with_backgroundqueue_%29.md)
    - [restoreState(with:)](../appkit/nsdocument/restorestate%28with_%29.md)
  - Additionally, [restorableStateKeyPaths](../appkit/nsdocument/restorablestatekeypaths.md) must only point at `NSSecureCoding`-compliant values and you need to implement [allowedClasses(forRestorableStateKeyPath:)](../appkit/nsdocument/allowedclasses%28forrestorablestatekeypath_%29.md) to specify the type of the object.

<a id="NSMenu"></a>

#### NSMenu

- The new user preference “Automatically hide and show the menu bar in full screen” in Dock & Menu Bar preferences is enabled by default. In macOS Monterey 12, the user can choose to disable this setting to always show the menu bar in full screen spaces. Standard full screen windows are resized to fit below the menu bar. Some apps assume a full screen-sized window, and don’t work well with this setting.

<a id="NSTableView"></a>

#### NSTableView

- 20-point spacing precedes each group row to make the separation between sections more visible. Source lists have a similar, but smaller, 13-point spacing. This applies to the [NSTableView.Style.inset](../appkit/nstableview/style-swift.enum/inset.md) and [NSTableView.Style.fullWidth](../appkit/nstableview/style-swift.enum/fullwidth.md) effective styles in apps linked against the macOS 12 SDK. [NSTableView.Style.plain](../appkit/nstableview/style-swift.enum/plain.md) doesn’t display the spacing.
- The floating group row transition — previously a push transition — instantly replaces the new floating group row. It occurs when the `x-height` of the group row’s label meets the bottom of a currently floating group row.

<a id="NSOutlineView"></a>

#### NSOutlineView

- The disclosure button now aligns with the cell view’s [firstBaselineOffsetFromTop](../appkit/nsview/firstbaselineoffsetfromtop.md). The system overrides it in [NSTableCellView](../appkit/nstablecellview.md) so it matches the baseline of its [textField](../appkit/nstablecellview/textfield.md) (assuming `textfield` sets the baseline). Overriding the property and returning `0` reverts to the previous behavior.
- When collapsing several items, the [selectionDidChangeNotification](../appkit/nsoutlineview/selectiondidchangenotification.md) only posts once. Previously, it posted once per collapsed item.

<a id="NSOpenPanel"></a>

#### NSOpenPanel

- Setting [canChooseFiles](../appkit/nsopenpanel/canchoosefiles.md) to `false` automatically disabled files, but all of the directory contents were sent to [panel(\_:shouldEnable:)](../appkit/nsopensavepaneldelegate/panel%28__shouldenable_%29.md) or [panel:shouldShowFilename:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/panel:shouldshowfilename:). In macOS Monterey 12, files aren’t sent to the delegate methods unless `canChooseFiles` is `true`. In addition, file packages are excluded unless `treatsFilePackagesAsDirectoriesis` is `true`. This change allows optimization in the delegate method.

<a id="TextKit-2"></a>

#### TextKit 2

- TextKit 2 introduces a new text layout engine and its associated API. You can use TextKit 2  alongside the existing [TextKit](../appkit/textkit.md) API.
- [NSTextContentStorage](https://developer.apple.com/documentation/uikit/nstextcontentstorage) and [NSTextLayoutManager](https://developer.apple.com/documentation/uikit/nstextlayoutmanager) are the two main controller objects superseding [NSTextStorage](../appkit/nstextstorage.md) and [NSLayoutManager](../appkit/nslayoutmanager.md) respectively. [NSTextParagraph](https://developer.apple.com/documentation/uikit/nstextparagraph) managed by `NSTextContentStorage` represents a paragraph of text. `NSTextLayoutManager` stores the layout information in its model objects: [NSTextLayoutFragment](https://developer.apple.com/documentation/uikit/nstextlayoutfragment) and [NSTextLineFragment](https://developer.apple.com/documentation/uikit/nstextlinefragment).
- In TextKit 2, [NSTextSelection](https://developer.apple.com/documentation/uikit/nstextselection) encapsulates information associated with a text selection while [NSTextSelectionNavigation](https://developer.apple.com/documentation/uikit/nstextselectionnavigation) manipulates and converts the selection object based on keyboard and mouse navigation actions.

## See Also

### AppKit

- [AppKit Release Notes for macOS Sonoma 14](appkit-release-notes-for-macos-14.md): Update your apps to use new features, and test your apps against API changes.
- [AppKit Release Notes for macOS Ventura 13](appkit-release-notes-for-macos-13.md): Update your apps to use new features, and test your apps against API changes.
- [AppKit Release Notes for macOS Big Sur 11](appkit-release-notes-for-macos-11.md): Update your apps to use new features, and test your apps against API changes.
- [AppKit Release Notes for macOS 10.14](appkit-release-notes-for-macos-10_14.md): Update your apps to use new features, and test your apps against API changes.
