> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionpoint/identifier](https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/identifier)

# AppExtensionPoint.Identifier

**Framework:** ExtensionFoundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

The details of an extension point that your app extension supports.

## Declaration

```swift
struct Identifier
```

## Mentioned In

- [Building an app extension to support a host app](../building-an-app-extension-to-support-a-host-app.md)

<a id="overview"></a>

## Overview

When creating a binding in your app extension, use this type to specify the extension point details. When binding to a host app’s extension point, always initialize this type with the host app’s bundle identifier and extension point name.

## Topics

### Creating an identifier attribute

- [init(\_:)](identifier/init%28__%29.md): Creates an identifier for binding to a system-defined extension point.
- [init(host:name:)](identifier/init%28host_name_%29.md): Creates an identifier for binding to a host app’s extension point.

## See Also

### Binding to an extension point

- [AppExtensionPoint.Bind](bind.md): A property wrapper that binds an app extension to an extension point of a host app.
