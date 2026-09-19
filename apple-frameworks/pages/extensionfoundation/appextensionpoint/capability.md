> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/capability

# AppExtensionPoint.Capability

**Framework:** ExtensionFoundation  
**Kind:** Protocol  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 1.1+ · watchOS 26.2+

An interface that marks a type as an extension capability.

## Declaration

```swift
protocol Capability : Identifiable where Self.ID == String
```

<a id="overview"></a>

## Overview

Types adopt this protocol if they comprise part of an extension’s capabilities.

## Relationships

### Inherits From

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
