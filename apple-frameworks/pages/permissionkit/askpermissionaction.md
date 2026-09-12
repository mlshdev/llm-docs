> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/askpermissionaction](https://developer.apple.com/documentation/permissionkit/askpermissionaction)

# AskPermissionAction

**Framework:** PermissionKit  
**Kind:** Structure  
**Availability:** iOS 26.5+ · iPadOS 26.5+ · Mac Catalyst 26.5+ · macOS 26.5+ · visionOS 26.5+

An action that sends a permission question to a parent or guardian.

## Declaration

```swift
struct AskPermissionAction
```

<a id="overview"></a>

## Overview

Use the `EnvironmentValues/askPermission` environment value to get an instance of this action, then call the instance to send a permission question. You can call the instance directly because it defines a [callAsFunction(\_:)](askpermissionaction/callasfunction%28__%29.md) method.

For example:

```swift
struct MyView: View {
    @Environment(\.askPermission) private var askPermission

    var body: some View {
        Button("Ask Permission") {
            try await askPermission(question)
        }
    }
}
```

## Topics

### Instance Methods

- [callAsFunction(\_:)](askpermissionaction/callasfunction%28__%29.md): Sends a permission question to a parent or guardian.
