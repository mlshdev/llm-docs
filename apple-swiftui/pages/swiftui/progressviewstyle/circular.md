> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/progressviewstyle/circular](https://developer.apple.com/documentation/swiftui/progressviewstyle/circular)

# circular

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The style of a progress view that uses a circular gauge to indicate the partial completion of an activity.

## Declaration

```swift
@export(implementation) nonisolated static var circular: CircularProgressViewStyle { get }
```

<a id="discussion"></a>

## Discussion

On watchOS, and in widgets and complications, a circular progress view appears as a gauge with the [accessoryCircularCapacity](../gaugestyle/accessorycircularcapacity.md) style. If the progress view is indeterminate, the gauge is empty.

In cases where no determinate circular progress view style is available, circular progress views use an indeterminate style.

## See Also

### Getting built-in progress view styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultProgressViewStyle`. The default progress view style in the current context of the view being styled.
- [linear](linear.md): Conforms when `Self` is `LinearProgressViewStyle`. A progress view that visually indicates its progress using a horizontal bar.
