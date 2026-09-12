> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/adopting-new-safari-web-extension-apis](https://developer.apple.com/documentation/safariservices/adopting-new-safari-web-extension-apis)

# Adopting New Safari Web Extension APIs

**Interface languages:** Swift, Objective-C

**Framework:** Safari Services  
**Kind:** Sample Code  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · Xcode 13.0+

Improve your web extension in Safari with a non-persistent background page and new tab-override customization.

<a id="Overview"></a>

## Overview

> **Note**

> This sample code project is associated with WWDC21 sessions [10027: Explore Safari Web Extension Improvements](https://developer.apple.com/wwdc21/10027/); and [10104: Meet Safari Web Extensions on iOS](https://developer.apple.com/wwdc21/10104/).

<a id="Configure-the-Sample-Code-Project"></a>

### Configure the Sample Code Project

Before you run the sample code project in Xcode:

On macOS:

1. Open Safari and choose Develop \> Allow Unsigned Extensions.
2. In the project settings in Xcode, select the Sea Creator (macOS) target.
3. Click the Signing & Capabilities tab.
4. For Signing Certificate, choose Sign to Run Locally. (Leave Team set to None.)
5. Repeat steps 3 and 4 for the Sea Creator Extension (macOS) target.

On iOS, to run on a device:

1. In the project settings in Xcode, select the Sea Creator (iOS) target.
2. Click the Signing & Capabilities tab.
3. Select a development team.
4. Repeat the above steps for the Sea Creator Extension (iOS) target.

## See Also

### Extension improvements

- [Optimizing your web extension for Safari](optimizing-your-web-extension-for-safari.md): Support Dark Mode, reduce memory and power usage, and ensure feature compatibility to improve your web extension experience in Safari and web apps.
- [Syncing Safari web extensions across devices and platforms](syncing-safari-web-extensions-across-devices-and-platforms.md): Let users install your extension on one device and then use and manage the extension on all their other iOS and macOS devices.
- [Assessing your Safari web extension’s browser compatibility](assessing-your-safari-web-extension-s-browser-compatibility.md): Review your Safari web extension implementation plan, manifest keys, and JavaScript API usage for compatibility with other browsers.
- [Troubleshooting your Safari web extension](troubleshooting-your-safari-web-extension.md): Use developer resources to investigate and resolve common problems with Safari web extensions.
