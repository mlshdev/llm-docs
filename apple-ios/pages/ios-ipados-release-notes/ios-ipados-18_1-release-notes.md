> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/ios-ipados-release-notes/ios-ipados-18_1-release-notes](https://developer.apple.com/documentation/ios-ipados-release-notes/ios-ipados-18_1-release-notes)

# iOS & iPadOS 18.1 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

The iOS & iPadOS 18.1 SDK provides support to develop apps for iPhone and iPad running iOS & iPadOS 18.1. The SDK comes bundled with Xcode 16.1, available from the Mac App Store. For information on the compatibility requirements for Xcode 16.1, see [Xcode 16.1 Release Notes](https://developer.apple.com/documentation/Xcode-Release-Notes/xcode-16_1-release-notes).

<a id="General"></a>

### General

<a id="Known-Issues"></a>

#### Known Issues

- Updating from iOS & iPadOS 18 beta 5 to iOS & iPadOS 18.1 beta 1 is not currently supported and will be available in a future iOS & iPadOS 18.1 beta.  (133235636)

<a id="App-Intents"></a>

### App Intents

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Apps that support universal links might not open normally and instead open the browser when the user navigates to a URL provided by the `OpenURLIntent` or `URLRepresentableIntent` APIs.  (133764689) (FB14784347)

<a id="Apple-Intelligence"></a>

### Apple Intelligence

<a id="New-Features"></a>

#### New Features

- When using Apple Intelligence, the new Siri UI might fail to render full screen on large CarPlay displays.  (131586542)

<a id="AVFoundation"></a>

### AVFoundation

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: AVCaptureIndexPicker instances initialized with -initWithLocalizedTitle:symbolName:numberOfIndexes can appear in Camera Controls overlay.  (135734701)
- Fixed: AVCaptureControls from LockedCameraCapture extensions can appear in Camera Controls overlay.  (135844632) (FB15108682)
- Fixed: VSampleBufferDisplayLayer can show content from LockedCameraCapture extensions.  (135851476)

<a id="Camera-Control"></a>

### Camera Control

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Installing an app with a Capture Extension while another Camera Control app is already selected might cause a momentary system crash.  (135021680)

<a id="Files"></a>

### Files

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Creating local files in the Files app fails in the visionOS 2 and iOS 18 simulators if the host is not upgraded to macOS Sequoia Beta.  (132561244)

<a id="HealthKit"></a>

### HealthKit

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: With the introduction of Swift 6 this year, developers who update their projects to use Swift 6 might have issues with their apps, which can lead to app crashes when executing a variety of HealthKit API calls.  (131794283)

<a id="Lock-Screen"></a>

### Lock Screen

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: When on Lock Screen, pulling down to invoke Spotlight does not work.  (133404809)

<a id="Mail"></a>

### Mail

<a id="Known-Issues"></a>

#### Known Issues

- Upgrading from iOS 18.0 beta 5 to iOS 18.1 beta might cause all Mail to redownload.  (132930689)

<a id="Messages"></a>

### Messages

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Sending attachments via RCS might not work after swapping SIMs.  (136209940)

<a id="Siri"></a>

### Siri

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Siri result snippets might appear in the wrong position.  (135035793)

<a id="Spotlight"></a>

### Spotlight

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Icons in Spotlight might not match icons on the Home Screen.  (134088480)

<a id="StoreKit"></a>

### StoreKit

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: The transaction of a successful purchase on the default win-back offer redemption sheet might not appear on Transaction.updates sequence until the next app launch.  (133575987)
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
- Fixed: In apps compiled against SDKs prior to iOS 18.0 and visionOS 2.0, explicit arrow edges are not respected when the app is run on iOS 18.1 or visionOS 2.1. Apps compiled against any macOS SDK will still have the arrow edge respected.  (133295608)
- On iOS 18.0, there is a known issue where passing `nil` to the `.preferredColorScheme` modifier, after the preferred color scheme is set by a different view in the hierarchy, does not trigger the system color scheme to change. Starting in iOS 18.1, when `nil` is passed to the `.preferredColorScheme` modifier, the view indicates no preference for the color scheme and thus uses the system color scheme.

  ```
   .preferredColorScheme(isDarkMode ? .dark : nil)
  ```

  The view with the above modifier applied prefers dark mode when `isDarkMode` is set to `true` but otherwise defers to the color scheme as determined by the system.  (133689390) (FB14768320)
- Fixed: On iOS, tvOS, and visionOS, `View.navigationSplitViewColumnWidth` (all overloads) does not produce an effect if applied after the `NavigationSplitView` is created.  (135434989)
- Fixed: Using `if #available` in @WidgetBundleBuilder and @SceneBuilder crashes on prior OS versions due to “unknown OS version.”  (136098106)

<a id="Telephony"></a>

### Telephony

<a id="Known-Issues"></a>

#### Known Issues

- On some managed and supervised devices, the RCS messaging service might not be blocked as expected although the MDM restriction of `allowRCSMessaging` is installed successfully.  (137974410)

<a id="WidgetKit"></a>

### WidgetKit

<a id="New-Features"></a>

#### New Features

- A control’s default tint will be set to the App/ extension’s accent color, if a tint is not specified explicitly using the `tint(_:)` modifier. If neither is specified, the control’s tint will be the default system blue tint.  (131662481)

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Rectangular complications and Watch-specific custom Live Activity views use the wrong font metrics, causing title2 and title3 to render much larger than intended and largeTitle to render much smaller than intended. Additionally, custom Live Activity views use the wrong default font (SF Pro instead of SF Compact).  (135831317)

## See Also

### iOS & iPadOS 18

- [iOS & iPadOS 18.6 Release Notes](ios-ipados-18_6-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 18.5 Release Notes](ios-ipados-18_5-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 18.4 Release Notes](ios-ipados-18_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 18.3 Release Notes](ios-ipados-18_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 18.2 Release Notes](ios-ipados-18_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 18 Release Notes](ios-ipados-18-release-notes.md): Update your apps to use new features, and test your apps against API changes.
