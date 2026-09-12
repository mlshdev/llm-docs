> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/titledsection](https://developer.apple.com/documentation/musickit/titledsection)

# TitledSection

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A section you can use to request items from the library grouped by title.

## Declaration

```swift
struct TitledSection
```

<a id="overview"></a>

## Overview

For example, when you perform a library sectioned request of albums, the library sectioned response will contain albums grouped by the first letter of their title, and the [title](titledsection/title.md) property of this section will be equal to that first letter.

## Topics

### Instance Properties

- [id](titledsection/id.md): The unique identifier for the titled section.
- [title](titledsection/title.md): The title of the section.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [MusicLibrarySectionRequestable](musiclibrarysectionrequestable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
