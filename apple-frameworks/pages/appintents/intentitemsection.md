> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentitemsection](https://developer.apple.com/documentation/appintents/intentitemsection)

# IntentItemSection

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An object you use to divide dynamic options into sections.

## Declaration

```swift
struct IntentItemSection<Result> where Result : _IntentValue
```

<a id="overview"></a>

## Overview

The system returns an `IntentItemSection` within an [IntentItemCollection](intentitemcollection.md).

## Topics

### Initializers

- [init(\_:items:)](intentitemsection/init%28__items_%29-2frw8.md)
- [init(\_:items:)](intentitemsection/init%28__items_%29-8p4y0.md)
- [init(\_:itemsBuilder:)](intentitemsection/init%28__itemsbuilder_%29.md)
- [init(\_:subtitle:image:itemsBuilder:)](intentitemsection/init%28__subtitle_image_itemsbuilder_%29.md)
- [init(items:)](intentitemsection/init%28items_%29.md)
- [init(title:items:)](intentitemsection/init%28title_items_%29.md): Deprecated.

### Instance Properties

- [description](intentitemsection/description.md)
- [items](intentitemsection/items.md)

### Enumerations

- [IntentItemSection.Builder](intentitemsection/builder.md): Conforms when `Result` conforms to `_IntentValue`.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Items and collections

- [IntentItem](intentitem.md): A type describing a value returned from a dynamic options provider, plus information about how to display it to users.
- [IntentItemCollection](intentitemcollection.md): Return this object to provide an advanced list of options, optionally divided in sections.
- [IntentCollectionSize](intentcollectionsize.md)
- [IntentResponseStream](intentresponsestream.md)
