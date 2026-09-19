> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/permissionkit/askcenter/shared

# shared

**Framework:** PermissionKit  
**Kind:** Type Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

The shared instance you use to send permission requests and receive responses.

## Declaration

```swift
static let shared: AskCenter
```

<a id="Overview"></a>

## Overview

Use this singleton instance to access all [AskCenter](../askcenter.md) functionality. The system maintains this shared instance across your app’s lifecycle and ensures consistent handling of permission requests and responses.

```swift
 let center = AskCenter.shared
 try await center.ask(permissionQuestion)
```
