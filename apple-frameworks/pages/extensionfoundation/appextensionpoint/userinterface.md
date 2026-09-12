> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionpoint/userinterface](https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/userinterface)

# AppExtensionPoint.UserInterface

**Framework:** ExtensionFoundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 1.1+

A type with that indicates whether the extension point displays UI from an app extension.

## Declaration

```swift
struct UserInterface
```

<a id="overview"></a>

## Overview

Add a `UserInterface` type in an extension point definition and initialize it with a Boolean value. Specify `true` if your extension point supports custom UI or `false` if it doesn’t.

## Topics

### Creating a user-interface attribute

- [init(\_:)](userinterface/init%28__%29.md): Initializes the type with the specified Boolean value.

### Getting the value

- [value](userinterface/value.md)

## Relationships

### Conforms To

- [AppExtensionPoint.Attribute](attribute.md)

## See Also

### Declaring an extension point

- [AppExtensionPoint.Definition](definition.md): A property wrapper that a host app uses to declare the extension points it supports.
- [AppExtensionPoint.Name](name.md): A type that defines the name of an extension point.
- [AppExtensionPoint.EnhancedSecurity](enhancedsecurity.md): A type that indicates whether an extension point requires extra security.
- [AppExtensionPoint.Scope](scope.md): A type that regulates which app extensions may access an extension point.
- [AppExtensionPoint.Attribute](attribute.md): An interface that marks a type as an extension point attribute.
