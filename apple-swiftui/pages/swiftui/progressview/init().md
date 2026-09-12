> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/progressview/init()](https://developer.apple.com/documentation/swiftui/progressview/init())

# init()

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a progress view for showing indeterminate progress, without a label.

## Declaration

```swift
nonisolated init() where Label == EmptyView
```

## See Also

### Creating an indeterminate progress view

- [init(label:)](init%28label_%29.md): Conforms when `Label` conforms to `View` and `CurrentValueLabel` is `EmptyView`. Creates a progress view for showing indeterminate progress that displays a custom label.
- [init(\_:)](init%28__%29-6k5se.md): Conforms when `Label` conforms to `View` and `CurrentValueLabel` is `EmptyView`. Creates a progress view for showing indeterminate progress that generates its label from a localized string.
- [init(\_:)](init%28__%29-3q5nf.md): Conforms when `Label` conforms to `View` and `CurrentValueLabel` is `EmptyView`. Creates a progress view for showing indeterminate progress that generates its label from a string.
