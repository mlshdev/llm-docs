> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/labeledcontent/init(_:value:format:)](https://developer.apple.com/documentation/swiftui/labeledcontent/init(_:value:format:))

# init(\_:value:format:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a labeled informational view from a formatted value.

## Declaration

```swift
init<F>(_ titleKey: LocalizedStringKey, value: F.FormatInput, format: F) where F : FormatStyle, F.FormatInput : Equatable, F.FormatOutput == String
```

## Parameters

- `titleKey`: The key for the view’s localized title, that describes the purpose of the view.
- `value`: The value being labeled.
- `format`: A format style of type `F` to convert the underlying value of type `F.FormatInput` to a string representation.

<a id="discussion"></a>

## Discussion

This initializer creates a [Text](../text.md) label on your behalf, and treats the localized key similar to [init(\_:tableName:bundle:comment:)](../text/init%28__tablename_bundle_comment_%29.md). See `Text` for more information about localizing strings.

```swift
Form {
    LabeledContent("Age", value: person.age, format: .number)
    LabeledContent("Height", value: person.height,
        format: .measurement(width: .abbreviated))
}
```

## See Also

### Creating labeled content

- [init(\_:content:)](init%28__content_%29.md): Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates a labeled view that generates its label from a localized string key.
- [init(content:label:)](init%28content_label_%29.md): Conforms when `Label` conforms to `View` and `Content` conforms to `View`. Creates a standard labeled element, with a view that conveys the value of the element and a label.
- [init(\_:value:)](init%28__value_%29.md): Conforms when `Label` is `Text` and `Content` is `Text`. Creates a labeled informational view.
- [init(\_:)](init%28__%29.md): Conforms when `Label` is `LabeledContentStyleConfiguration.Label` and `Content` is `LabeledContentStyleConfiguration.Content`. Creates labeled content based on a labeled content style configuration.
