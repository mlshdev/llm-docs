> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentitem](https://developer.apple.com/documentation/appintents/intentitem)

# IntentItem

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type describing a value returned from a dynamic options provider, plus information about how to display it to users.

## Declaration

```swift
struct IntentItem<Value> where Value : _IntentValue
```

## Topics

### Initializers

- [init(\_:)](intentitem/init%28__%29.md): Initialize an `IntentItem` and use `displayRepresentation` from `value`
- [init(\_:title:subtitle:image:)](intentitem/init%28__title_subtitle_image_%29.md): Creates an item with the specified value and visual attributes.

### Instance Properties

- [description](intentitem/description.md)
- [value](intentitem/value.md)

### Enumerations

- [IntentItem.Builder](intentitem/builder.md): Conforms when `Value` conforms to `_IntentValue`.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Items and collections

- [IntentItemCollection](intentitemcollection.md): Return this object to provide an advanced list of options, optionally divided in sections.
- [IntentItemSection](intentitemsection.md): An object you use to divide dynamic options into sections.
- [IntentCollectionSize](intentcollectionsize.md)
- [IntentResponseStream](intentresponsestream.md)
