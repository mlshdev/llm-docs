> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentitem/init(_:title:subtitle:image:)](https://developer.apple.com/documentation/appintents/intentitem/init(_:title:subtitle:image:))

# init(\_:title:subtitle:image:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates an item with the specified value and visual attributes.

## Declaration

```swift
init(_ value: Value, title: LocalizedStringResource, subtitle: LocalizedStringResource? = nil, image: DisplayRepresentation.Image? = nil)
```

## Parameters

- `value`: The value the item represents.
- `title`: The item’s title.
- `subtitle`: The item’s subtitle.
- `image`: An image to display alongside the item’s title.

<a id="discussion"></a>

## Discussion

> **Note**

> The system uses the provided values even when `value` conforms to the [DisplayRepresentable](../displayrepresentable.md) protocol.
