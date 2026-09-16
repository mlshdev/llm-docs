> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/dropsession

# DropSession

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A description of a drop that is in progress.

## Declaration

```swift
struct DropSession
```

<a id="overview"></a>

## Overview

Read [location](dropsession/location.md) to find where the drop landed, [itemsCount](dropsession/itemscount.md) for how many items it carries, and [phase](dropsession/phase-swift.property.md) to follow the drag through its lifecycle.

The following example animates a drop at the point of the drop:

```swift
Color.pink
    .frame(width: 400, height: 400)
    .dropDestination(for: String.self) { titles, session in
        process(titles: titles)
    }
```

To follow a drag while its phases change, apply [onDropSessionUpdated(\_:)](view/ondropsessionupdated%28__%29.md).

Use [localSession](dropsession/localsession-swift.property.md) to recognize a drag that started inside your own app. It is `nil` for a drag that came from elsewhere.

## Topics

### Getting drop session details

- [id](dropsession/id-swift.property.md): The unique identifier of the drop session.
- [DropSession.ID](dropsession/id-swift.struct.md): The identifier of a drag session.
- [localSession](dropsession/localsession-swift.property.md): Provides additional information about a session if it originated within the app.
- [DropSession.LocalSession](dropsession/localsession-swift.struct.md): Describes the session originated within the app.
- [phase](dropsession/phase-swift.property.md): The phase of the current drop session.
- [DropSession.Phase](dropsession/phase-swift.enum.md): The phase of the current drop session.
- [suggestedOperations](dropsession/suggestedoperations.md): Operations suggested by the drag source.

### Getting drop details

- [itemsCount](dropsession/itemscount.md): Number of items for the drop.
- [location](dropsession/location.md): Location of drop in the local coordinate space
- [size](dropsession/size.md): Size of the drop destination view.

### Supporting reordering

- [reorderDestination(for:in:)](dropsession/reorderdestination%28for_in_%29.md): Provides the destination value of a reordering operation that occurred in the container associated with this drop destination modifier.
- [reorderDestination(for:itemID:in:)](dropsession/reorderdestination%28for_itemid_in_%29.md): Provides the destination value of a reordering operation that occurred in the container associated with this drop destination modifier.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Moving items

- [DragSession](dragsession.md): Describes the ongoing dragging session.
