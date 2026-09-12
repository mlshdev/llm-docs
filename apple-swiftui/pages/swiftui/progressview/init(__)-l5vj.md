> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/progressview/init(_:)-l5vj](https://developer.apple.com/documentation/swiftui/progressview/init(_:)-l5vj)

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a progress view for visualizing the given progress instance.

## Declaration

```swift
nonisolated init(_ progress: Progress) where Label == EmptyView, CurrentValueLabel == EmptyView
```

<a id="discussion"></a>

## Discussion

The progress view synthesizes a default label using the `localizedDescription` of the given progress instance.

## See Also

### Creating a determinate progress view

- [init(value:total:)](init%28value_total_%29.md): Conforms when `Label` conforms to `View` and `CurrentValueLabel` conforms to `View`. Creates a progress view for showing determinate progress.
- [init(\_:value:total:)](init%28__value_total_%29.md): Conforms when `Label` conforms to `View` and `CurrentValueLabel` conforms to `View`. Creates a progress view for showing determinate progress that generates its label from a localized string resource.
- [init(value:total:label:)](init%28value_total_label_%29.md): Conforms when `Label` conforms to `View` and `CurrentValueLabel` conforms to `View`. Creates a progress view for showing determinate progress, with a custom label.
- [init(value:total:label:currentValueLabel:)](init%28value_total_label_currentvaluelabel_%29.md): Conforms when `Label` conforms to `View` and `CurrentValueLabel` conforms to `View`. Creates a progress view for showing determinate progress, with a custom label.
