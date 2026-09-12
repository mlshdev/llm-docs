> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcode-release-notes/xcode-16_1-release-notes](https://developer.apple.com/documentation/xcode-release-notes/xcode-16_1-release-notes)

# Xcode 16.1 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

Xcode 16.1 includes SDKs for iOS 18.1, iPadOS 18.1, tvOS 18.1, watchOS 11.1, macOS Sequoia 15.1, and visionOS 2.1. The Xcode 16.1 release supports on-device debugging in iOS 15 and later, tvOS 15 and later, watchOS 7 and later, and visionOS. Xcode 16.1 requires a Mac running macOS Sonoma 14.5 or later.

<a id="General"></a>

### General

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Users that upgrade to Xcode 16 after having previously installed Xcode 16 Beta 6 or Xcode 16 RC may experience Developer Disk Image mounting errors when using iPhone 16 or Apple Watch Series 10 devices.  (136364979) (FB15189777)

<a id="Deprecations"></a>

#### Deprecations

- The simulator runtimes are currently available on the Apple Developer website, but will no longer be posted through the website in future updates.  Please use `xcodebuild -downloadPlatform <platform> -exportPath <path>` command to download the runtime and then `xcodebuild -importPlatform <path/simruntime.dmg>` to install it.  For more details, see [Installing and managing Simulator runtimes](https://developer.apple.com/documentation/xcode/installing-additional-simulator-runtimes).  (133776444)

<a id="App-Distribution"></a>

### App Distribution

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Some iOS apps built with Xcode 16.1 beta may have their watchOS apps uninstall or fail to launch with an error about needing an iPhone App when one already exists.  (135527507)

<a id="Camera-Control"></a>

### Camera Control

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Launching app via Camera Control button without Camera permission can result in completely black unlock screen  (133409619)
- Fixed: Installing an app with a Capture Extension while another Camera Control app is already selected might cause a momentary system crash.  (135021680)

<a id="Interface-Builder"></a>

### Interface Builder

<a id="New-Features"></a>

#### New Features

- Xcodebuild’s download platforms command now supports an optional -buildVersion  argument to request a specific released simulator runtime. The  can be a build update number or the release number. Simulator runtime version that are supported versions are iOS 16.0+, watchOS 9.0+, tvOS 16+, visionOS 1.0+.

  Example usage, to download, install and export the iOS 16.0 simulator runtime:

  xcodebuild -downloadPlatform iOS -buildVersion 16.0 -exportPath  ./SimRuntimeImages/ xcodebuild -downloadPlatform iOS -buildVersion 20A360 -exportPath  ./SimRuntimeImages/  (135989441) (FB15126412)

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: New and existing trait variations targeting 42mm watches are only applied on Series 10. Functionality to target Series 3 or older watches is missing.  (136342368) (FB15185073)

<a id="Known-Issues"></a>

#### Known Issues

- Custom app fonts may fail to be listed at the top of the custom fonts list in the Interface Builder inspector.  (100908086) (FB11662082)

  **Workaround:** Restarting Xcode will force this list to be recreated.
- IBInspectable properties are no longer accessible in Interface Builder. Current values in IB Documents are still compiled into the NIBs and used at runtime.  (135140474) (FB15011501)

<a id="Localization"></a>

### Localization

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Resolved a hang that could occur in the String Catalog Editor shortly after opening the file or building the project.  (134611283) (FB14906651)

<a id="LockedCameraCapture"></a>

### LockedCameraCapture

<a id="Known-Issues"></a>

#### Known Issues

- Logging does not appear in Xcode when debugging Capture Extensions when using “Attach to Process”.  (129785280)

  **Workaround:** Use “Attach to Process by PID or Name” in Xcode to debug Capture Extensions.

<a id="Previews"></a>

### Previews

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Previews could have failed when specifying “@” relative paths in linker arguments.  (127267024)
- Fixed: Some complex projects would time out when trying to launch a Preview.  (133734391) (FB14777005)
- Fixed: Previews could fail to find frameworks used by static libraries built with `libtool`.  (133937490) (FB14810092)
- Fixed: Previews would periodically fail with PreviewShell crash reports during preview teardown.  (136227462)

<a id="Simulator"></a>

### Simulator

<a id="Known-Issues"></a>

#### Known Issues

- On Simulator.app launch with visionOS device, “Simulated Scenes” Control for visionOS can be disabled   (136714857)

  **Workaround:** Device Restart or Simulator.app restart

<a id="Testing"></a>

### Testing

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Screen recordings will not be available when running UI tests using a scheme with a space in its name, or when producing an .xcresult bundle with a space in its path.  (122016656)
- Fixed: Expectation checking in Swift Testing is significantly slower than expected.  (133517028)
- Fixed: Workflows using Swift Testing against Mac Catalyst run destinations will crash on macOS 14.X or below.  (133854987)
- Fixed: Using `await confirmation {}` or `await withKnownIssue {}` with an actor-isolated closure fails to compile.  (134375046)

## See Also

### Xcode 16

- [Xcode 16.4 Release Notes](xcode-16_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [Xcode 16.3 Release Notes](xcode-16_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [Xcode 16.2 Release Notes](xcode-16_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [Xcode 16 Release Notes](xcode-16-release-notes.md): Update your apps to use new features, and test your apps against API changes.
