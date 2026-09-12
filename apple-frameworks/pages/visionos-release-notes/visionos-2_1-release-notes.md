> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionos-release-notes/visionos-2_1-release-notes](https://developer.apple.com/documentation/visionos-release-notes/visionos-2_1-release-notes)

# visionOS 2.1 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

The visionOS 2.1 SDK provides support for developing apps for Apple Vision Pro devices running visionOS 2.1. The SDK comes bundled with Xcode 16.1, available from the Mac App Store. For information on the compatibility requirements for Xcode 16.1, see [Xcode 16.1 Release Notes](https://developer.apple.com/documentation/Xcode-Release-Notes/xcode-16_1-release-notes).

<a id="Apple-Music"></a>

### Apple Music

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Apple Music songs and music videos may fail to play.  (137634483) (FB15445431)

<a id="Keynote"></a>

### Keynote

<a id="Known-Issues"></a>

#### Known Issues

- Presenter controls are inaccessible or difficult to access while presenting. This issue impacts the ability to bring up the Light Table to navigate to a different slide, bring up the Drawing Tools and Presenter Display, access the Live Video source, access the presenters list when using Multi-Presenter, enable/disable Auto Dimming, access the Slideshow Tips and advance the presentation/go back a slide.  (134967350)

  **Workaround:** Tap to advance the presentation. Long press then swipe to the right to go back a slide. Access the Slideshow Tips using Keynote Help via the Help menu in the app toolbar.

<a id="RealityKit-Graphics"></a>

### RealityKit Graphics

<a id="Known-Issues"></a>

#### Known Issues

- When a translucent SwiftUI view and translucent `ModelEntity` are positioned at the same point in space using `RealityViewAttachment`, a visual flickering may occur.  (135906908)

  **Workaround:** Add a `ModelSortGroupComponent` to the ModelEntity and set its `group` using [ModelSortGroup.PlanarUIPlacement](https://developer.apple.com/documentation/realitykit/modelsortgroup/planaruiplacement-swift.enum?changes=_9)

<a id="StoreKit"></a>

### StoreKit

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: In StoreKit Testing in Xcode, the offer identifier in the subscription renewal info might be reported incorrectly for offer codes.  (133774710)

<a id="Swift-Charts"></a>

### Swift Charts

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Any project that utilizes Swift Charts fails to build when targeting iOS, macOS, or visionOS.  (135905498)

<a id="SwiftUI"></a>

### SwiftUI

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Scene restoration launches the incorrect scene.  (132497400)
- Fixed: On iOS, tvOS, and visionOS, `View.navigationSplitViewColumnWidth` (all overloads) does not produce an effect if applied after the `NavigationSplitView` is created.  (135434989)
- Fixed: Using `if #available` in @WidgetBundleBuilder and @SceneBuilder crashes on prior OS versions due to “unknown OS version.”  (136098106)

<a id="Voice-Memos"></a>

### Voice Memos

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Users are unable to rename a voice memo while recording.  (136603559)

## See Also

### visionOS 2

- [visionOS 2.6 Release Notes](visionos-2_6-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [visionOS 2.5 Release Notes](visionos-2_5-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [visionOS 2.4 Release Notes](visionos-2_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [visionOS 2.3 Release Notes](visionos-2_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [visionOS 2.2 Release Notes](visionos-2_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [visionOS 2 Release Notes](visionos-2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
