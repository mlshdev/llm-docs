> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/anymapcontent](https://developer.apple.com/documentation/mapkit/anymapcontent)

# AnyMapContent

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · macOS 14.5+ · tvOS 17.5+ · visionOS 1.2+ · watchOS 10.5+

A type-erased map content.

## Declaration

```swift
@MainActor @preconcurrency struct AnyMapContent
```

<a id="overview"></a>

## Overview

An `AnyMapContent` allows changing the type of content used in a given map view.

## Topics

### Initializers

- [init(\_:)](anymapcontent/init%28__%29.md): Create an instance that type-erases `base`.

## Relationships

### Conforms To

- [MapContent](mapcontent.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
