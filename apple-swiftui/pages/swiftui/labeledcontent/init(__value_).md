> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/labeledcontent/init(_:value:)](https://developer.apple.com/documentation/swiftui/labeledcontent/init(_:value:))

# init(\_:value:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a labeled informational view.

## Declaration

```swift
init<S1, S2>(_ title: S1, value: S2) where S1 : StringProtocol, S2 : StringProtocol
```

## Parameters

- `title`: A string that describes the purpose of the view.
- `value`: The value being labeled.

<a id="discussion"></a>

## Discussion

This initializer creates a [Text](../text.md) label on your behalf, and treats the title similar to [init(\_:)](../text/init%28__%29.md). See `Text` for more information about localizing strings.

```swift
Form {
    ForEach(person.pet) { pet in
        LabeledContent(pet.species, value: pet.name)
    }
}
```

## See Also

### Creating labeled content

- [init(\_:content:)](init%28__content_%29.md): Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates a labeled view that generates its label from a localized string key.
- [init(content:label:)](init%28content_label_%29.md): Conforms when `Label` conforms to `View` and `Content` conforms to `View`. Creates a standard labeled element, with a view that conveys the value of the element and a label.
- [init(\_:value:format:)](init%28__value_format_%29.md): Conforms when `Label` is `Text` and `Content` is `Text`. Creates a labeled informational view from a formatted value.
- [init(\_:)](init%28__%29.md): Conforms when `Label` is `LabeledContentStyleConfiguration.Label` and `Content` is `LabeledContentStyleConfiguration.Content`. Creates labeled content based on a labeled content style configuration.
