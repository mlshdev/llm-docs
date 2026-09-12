> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionpoint/enhancedsecurity](https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/enhancedsecurity)

# AppExtensionPoint.EnhancedSecurity

**Framework:** ExtensionFoundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

A type that indicates whether an extension point requires extra security.

## Declaration

```swift
struct EnhancedSecurity
```

## Mentioned In

- [Building an app extension to support a host app](../building-an-app-extension-to-support-a-host-app.md)

<a id="overview"></a>

## Overview

Add the `EnhancedSecurity` type to your extension point definition to indicate its security requirements. Initialize the type with a value of `true` if you require app extensions to run in a highly restrictive sandbox, or `false` if you don’t. For more information about configuring the sandbox environment, see [Enabling enhanced security for your app](https://developer.apple.com/documentation/xcode/enabling-enhanced-security-for-your-app).

## Topics

### Creating a security attribute

- [init(\_:)](enhancedsecurity/init%28__%29.md): Initializes the type with the specified Boolean value.

## Relationships

### Conforms To

- [AppExtensionPoint.Attribute](attribute.md)

## See Also

### Declaring an extension point

- [AppExtensionPoint.Definition](definition.md): A property wrapper that a host app uses to declare the extension points it supports.
- [AppExtensionPoint.Name](name.md): A type that defines the name of an extension point.
- [AppExtensionPoint.UserInterface](userinterface.md): A type with that indicates whether the extension point displays UI from an app extension.
- [AppExtensionPoint.Scope](scope.md): A type that regulates which app extensions may access an extension point.
- [AppExtensionPoint.Attribute](attribute.md): An interface that marks a type as an extension point attribute.
