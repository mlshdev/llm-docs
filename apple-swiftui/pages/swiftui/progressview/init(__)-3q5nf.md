> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/progressview/init(_:)-3q5nf](https://developer.apple.com/documentation/swiftui/progressview/init(_:)-3q5nf)

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a progress view for showing indeterminate progress that generates its label from a string.

## Declaration

```swift
nonisolated init<S>(_ title: S) where Label == Text, S : StringProtocol
```

## Parameters

- `title`: A string that describes the task in progress.

<a id="discussion"></a>

## Discussion

This initializer creates a [Text](../text.md) view on your behalf, and treats the title similar to [init(verbatim:)](../text/init%28verbatim_%29.md). See [Text](../text.md) for more information about localizing strings. To initialize a progress view with a localized string key, use the corresponding initializer that takes a `LocalizedStringKey` instance.

## See Also

### Creating an indeterminate progress view

- [init()](init%28%29.md): Conforms when `Label` conforms to `View` and `CurrentValueLabel` is `EmptyView`. Creates a progress view for showing indeterminate progress, without a label.
- [init(label:)](init%28label_%29.md): Conforms when `Label` conforms to `View` and `CurrentValueLabel` is `EmptyView`. Creates a progress view for showing indeterminate progress that displays a custom label.
- [init(\_:)](init%28__%29-6k5se.md): Conforms when `Label` conforms to `View` and `CurrentValueLabel` is `EmptyView`. Creates a progress view for showing indeterminate progress that generates its label from a localized string.
