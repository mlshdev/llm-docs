> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/macos-release-notes/macos-big-sur-11_1-release-notes](https://developer.apple.com/documentation/macos-release-notes/macos-big-sur-11_1-release-notes)

# macOS Big Sur 11.1 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

The macOS 11.1 SDK provides support to develop apps for Macs running macOS Big Sur 11.1. The SDK comes bundled with Xcode 12.3, available from the Mac App Store. For information on the compatibility requirements for Xcode 12.3, see [Xcode 12.3 Release Notes](https://developer.apple.com/documentation/xcode-release-notes/xcode-12_3-release-notes).

<a id="AppKit"></a>

### AppKit

<a id="Resolved-Issues"></a>

#### Resolved Issues

- [NSToolbar](../appkit/nstoolbar.md) controls now draw the background correctly when you click or roll over them. (71592628)

<a id="Mac-Catalyst"></a>

### Mac Catalyst

<a id="New-Features"></a>

#### New Features

- iOS & iPadOS apps with non-resizable windows can now enter full-screen mode. (70103920)

<a id="Known-Issues"></a>

#### Known Issues

- When you present a view controller with page sheet or form sheet presentation style, the size of the view controller’s root view is, by default, determined by the value returned from the presented view controller’s [preferredContentSize](https://developer.apple.com/documentation/uikit/uiviewcontroller/preferredcontentsize) method and the view is not resizable. You can arrange for the presented view controller to be resizable by using Auto Layout to specify the maximum and minimum sizes of its root view. To enable this, set the [canResizeToFitContent](https://developer.apple.com/documentation/uikit/uiwindow/canresizetofitcontent) property of the application’s main window to YES. One way to do this is to override the [willMove(toWindow:)](https://developer.apple.com/documentation/uikit/uiview/willmove%28towindow:%29) or [didMoveToWindow()](https://developer.apple.com/documentation/uikit/uiview/didmovetowindow%28%29) methods of a view in the main view controller. (65254666)

  For example:

  ```swift
  - (void)willMoveToWindow:(UIWindow *)newWindow {
      [super willMoveToWindow:newWindow];
      newWindow.canResizeToFitContent = YES;
  }
  ```

## See Also

### macOS 11

- [macOS Big Sur 11.5 Release Notes](macos-big-sur-11_5-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Big Sur 11.4 Release Notes](macos-big-sur-11_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Big Sur 11.3 Release Notes](macos-big-sur-11_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Big Sur 11.2 Release Notes](macos-big-sur-11_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Big Sur 11.0.1 Release Notes](macos-big-sur-11_0_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Big Sur 11.0.1 Universal Apps Release Notes](macos-big-sur-11_0_1-universal-apps-release-notes.md): Update your apps to support Macs with Apple silicon.
- [macOS Big Sur 11.0.1 iOS & iPadOS Apps on Mac Release Notes](macos-big-sur-11_0_1-ios-ipados-apps-on-mac-release-notes.md): Considerations for running iPhone and iPad apps on Macs with Apple silicon.
