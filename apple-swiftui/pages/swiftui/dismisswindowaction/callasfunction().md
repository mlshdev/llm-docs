> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dismisswindowaction/callasfunction()](https://developer.apple.com/documentation/swiftui/dismisswindowaction/callasfunction())

# callAsFunction()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Dismisses the current window.

## Declaration

```swift
@MainActor @preconcurrency func callAsFunction()
```

<a id="discussion"></a>

## Discussion

Don’t call this method directly. SwiftUI calls it when you call the [dismissWindow](../environmentvalues/dismisswindow.md) action:

```swift
dismissWindow()
```

For information about how Swift uses the `callAsFunction()` method to simplify call site syntax, see [Methods with Special Names](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/declarations#Methods-with-Special-Names) in *The Swift Programming Language*.

## See Also

### Calling the action

- [callAsFunction(id:)](callasfunction%28id_%29.md): Dismisses the window that’s associated with the specified identifier.
- [callAsFunction(id:value:)](callasfunction%28id_value_%29.md): Dismisses the window defined by the window group that is presenting the specified value type and that’s associated with the specified identifier.
- [callAsFunction(value:)](callasfunction%28value_%29.md): Dismisses the window defined by the window group that is presenting the specified value type.
