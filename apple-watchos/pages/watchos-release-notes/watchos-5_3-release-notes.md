> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchos-release-notes/watchos-5_3-release-notes](https://developer.apple.com/documentation/watchos-release-notes/watchos-5_3-release-notes)

# watchOS 5.3 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="overview"></a>

## Overview

The watchOS 5.3 SDK provides support for developing watchOS apps for Apple Watch devices running watchOS 5.3. The SDK comes bundled with Xcode 10.3 available from the Mac App Store. For information on the compatibility requirements for Xcode 10.3, see [Xcode 10.3 Release Notes](https://developer.apple.com/documentation/xcode-release-notes/xcode-10_3-release-notes).

<a id="General"></a>

### General

<a id="Known-Issues"></a>

#### Known Issues

- Devices running watchOS 5.3 don’t appear as available for development in Xcode 10.2.1. (50638444)

  **Workaround:** Run the following command in Terminal:

  ```
  defaults write com.apple.dt.Xcode Enable43515398 -bool YES
  ```

## See Also

### watchOS 5

- [watchOS 5.1.3 Release Notes](watchos-5_1_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [watchOS 5.1 Release Notes](watchos-5_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [watchOS 5 Release Notes](watchos-5-release-notes.md): Update your apps to use new features, and test your apps against API changes.
