> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/adopting-declarative-content-blocking-in-safari-web-extensions](https://developer.apple.com/documentation/safariservices/adopting-declarative-content-blocking-in-safari-web-extensions)

# Adopting Declarative Content Blocking in Safari Web Extensions

**Interface languages:** Swift, Objective-C

**Framework:** Safari Services  
**Kind:** Sample Code  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · Xcode 13.0+

Block web content with your web extension using the declarative net request API.

<a id="Overview"></a>

## Overview

> **Note**

> This sample code project is associated with WWDC21 session [10027: Explore Safari Web Extension Improvements](https://developer.apple.com/wwdc21/10027/).

<a id="Configure-the-Sample-Code-Project"></a>

### Configure the Sample Code Project

Before you run the sample code project in Xcode:

On macOS:

1. Open Safari and choose Develop \> Allow Unsigned Extensions.
2. In the project settings in Xcode, select the Blocker (macOS) target.
3. Click the Signing & Capabilities tab.
4. For Signing Certificate, choose Sign to Run Locally. (Leave Team set to None.)
5. Repeat steps 3 and 4 for the Blocker Extension (macOS) target.

On iOS, to run on a device:

1. In the project settings in Xcode, select the Blocker (iOS) target.
2. Click the Signing & Capabilities tab.
3. Select a development team.
4. Repeat the above steps for the Blocker Extension (iOS) target.

## See Also

### Blocking content

- [Blocking content with your Safari web extension](blocking-content-with-your-safari-web-extension.md): Build content blocking with declarative net request into your Safari web extension.
