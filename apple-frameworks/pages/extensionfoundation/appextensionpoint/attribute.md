> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionpoint/attribute](https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/attribute)

# AppExtensionPoint.Attribute

**Framework:** ExtensionFoundation  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

An interface that marks a type as an extension point attribute.

## Declaration

```swift
protocol Attribute
```

<a id="overview"></a>

## Overview

Types adopt this protocol if they comprise part of an extension point definition.

## Relationships

### Conforming Types

- [AppExtensionPoint.EnhancedSecurity](enhancedsecurity.md)
- [AppExtensionPoint.Scope](scope.md)
- [AppExtensionPoint.UserInterface](userinterface.md)

## See Also

### Declaring an extension point

- [AppExtensionPoint.Definition](definition.md): A property wrapper that a host app uses to declare the extension points it supports.
- [AppExtensionPoint.Name](name.md): A type that defines the name of an extension point.
- [AppExtensionPoint.UserInterface](userinterface.md): A type with that indicates whether the extension point displays UI from an app extension.
- [AppExtensionPoint.EnhancedSecurity](enhancedsecurity.md): A type that indicates whether an extension point requires extra security.
- [AppExtensionPoint.Scope](scope.md): A type that regulates which app extensions may access an extension point.
