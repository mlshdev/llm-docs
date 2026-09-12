> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/progressviewstyle/automatic](https://developer.apple.com/documentation/swiftui/progressviewstyle/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The default progress view style in the current context of the view being styled.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency static var automatic: DefaultProgressViewStyle { get }
```

<a id="discussion"></a>

## Discussion

The default style represents the recommended style based on the original initialization parameters of the progress view, and the progress view’s context within the view hierarchy.

## See Also

### Getting built-in progress view styles

- [circular](circular.md): Conforms when `Self` is `CircularProgressViewStyle`. The style of a progress view that uses a circular gauge to indicate the partial completion of an activity.
- [linear](linear.md): Conforms when `Self` is `LinearProgressViewStyle`. A progress view that visually indicates its progress using a horizontal bar.
