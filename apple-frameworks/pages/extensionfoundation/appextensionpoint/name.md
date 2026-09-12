> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionpoint/name](https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/name)

# AppExtensionPoint.Name

**Framework:** ExtensionFoundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

A type that defines the name of an extension point.

## Declaration

```swift
struct Name
```

## Mentioned In

- [Adding support for app extensions to your app](../adding-support-for-app-extensions-to-your-app.md)

<a id="overview"></a>

## Overview

Add this type to each extension point definition you create in your host app. Provide a unique string for each of your app’s extension points. App extensions that want to bind to the extension point include this name in their binding.

## Topics

### Creating a name attribute

- [init(\_:)](name/init%28__%29.md): Initializes the name type with the specified string.

## See Also

### Declaring an extension point

- [AppExtensionPoint.Definition](definition.md): A property wrapper that a host app uses to declare the extension points it supports.
- [AppExtensionPoint.UserInterface](userinterface.md): A type with that indicates whether the extension point displays UI from an app extension.
- [AppExtensionPoint.EnhancedSecurity](enhancedsecurity.md): A type that indicates whether an extension point requires extra security.
- [AppExtensionPoint.Scope](scope.md): A type that regulates which app extensions may access an extension point.
- [AppExtensionPoint.Attribute](attribute.md): An interface that marks a type as an extension point attribute.
