> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvos-release-notes/apple-tv-software-7_3-release-notes](https://developer.apple.com/documentation/tvos-release-notes/apple-tv-software-7_3-release-notes)

# Apple TV Software 7.3 Release Notes

**Kind:** Article

Test AirPlay with your apps and test features for Apple TV (3rd generation).

<a id="overview"></a>

## Overview

Apple TV Software 7.3 provides support for testing AirPlay from your apps to Apple TV (3rd generation) only.

> **Note**

> You can include console logs for Apple TV (3rd generation) when filing bug reports by using a Micro-USB cable connected to your development Mac. For more information on including console logs, see [Apple TV Console Logging](https://download.developer.apple.com/iOS/tvOS_Logs/Apple_TV_Console_Logging_Instructions.pdf).

<a id="Set-Up-with-Device"></a>

### Set Up with Device

<a id="Known-Issues"></a>

#### Known Issues

- iOS device setup might not initiate when using a device running iOS 12. (49118658)

  **Workaround:** Manually enter your network information and Apple ID to complete setup.

<a id="Two-Factor-Authentication"></a>

### Two-Factor Authentication

<a id="Known-Issues"></a>

#### Known Issues

- You may receive an error when first signing in to an Apple ID with two-factor authentication enabled. (44959672)

  **Workaround:** Get your verification code then re-enter your password followed by the six-digit code directly into the password field.
