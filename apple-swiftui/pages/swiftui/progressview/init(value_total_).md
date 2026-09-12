> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/progressview/init(value:total:)](https://developer.apple.com/documentation/swiftui/progressview/init(value:total:))

# init(value:total:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a progress view for showing determinate progress.

## Declaration

```swift
nonisolated init<V>(value: V?, total: V = 1.0) where Label == EmptyView, CurrentValueLabel == EmptyView, V : BinaryFloatingPoint
```

## Parameters

- `value`: The completed amount of the task to this point, in a range of `0.0` to `total`, or `nil` if the progress is indeterminate.
- `total`: The full amount representing the complete scope of the task, meaning the task is complete if `value` equals `total`. The default value is `1.0`.

<a id="discussion"></a>

## Discussion

If the value is non-`nil`, but outside the range of `0.0` through `total`, the progress view pins the value to those limits, rounding to the nearest possible bound. A value of `nil` represents indeterminate progress, in which case the progress view ignores `total`.

## See Also

### Creating a determinate progress view

- [init(\_:)](init%28__%29-l5vj.md): Conforms when `Label` conforms to `View` and `CurrentValueLabel` conforms to `View`. Creates a progress view for visualizing the given progress instance.
- [init(\_:value:total:)](init%28__value_total_%29.md): Conforms when `Label` conforms to `View` and `CurrentValueLabel` conforms to `View`. Creates a progress view for showing determinate progress that generates its label from a localized string resource.
- [init(value:total:label:)](init%28value_total_label_%29.md): Conforms when `Label` conforms to `View` and `CurrentValueLabel` conforms to `View`. Creates a progress view for showing determinate progress, with a custom label.
- [init(value:total:label:currentValueLabel:)](init%28value_total_label_currentvaluelabel_%29.md): Conforms when `Label` conforms to `View` and `CurrentValueLabel` conforms to `View`. Creates a progress view for showing determinate progress, with a custom label.
