> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiclibrarysection](https://developer.apple.com/documentation/musickit/musiclibrarysection)

# MusicLibrarySection

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A section for a library sectioned response.

## Declaration

```swift
@dynamicMemberLookup struct MusicLibrarySection<SectionType, MusicItemType> where SectionType : MusicLibrarySectionRequestable, MusicItemType : MusicLibraryRequestable
```

<a id="overview"></a>

## Overview

Your app can access any property of the requested section type directly on this library section object.

Your app can also access the items contained in a library section with the [items](musiclibrarysection/items.md) property.

## Topics

### Instance Properties

- [items](musiclibrarysection/items.md): A collection of items that correspond to the children of the section.

### Subscripts

- [subscript(dynamicMember:)](musiclibrarysection/subscript%28dynamicmember_%29.md): A subscript that allows your app to access any property of the requested section type directly on this library section object.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
