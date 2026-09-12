> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dismisswindowaction/callasfunction(id:value:)](https://developer.apple.com/documentation/swiftui/dismisswindowaction/callasfunction(id:value:))

# callAsFunction(id:value:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Dismisses the window defined by the window group that is presenting the specified value type and that’s associated with the specified identifier.

## Declaration

```swift
@MainActor @preconcurrency func callAsFunction<D>(id: String, value: D) where D : Decodable, D : Encodable, D : Hashable
```

## Parameters

- `id`: The identifier of the scene to dismiss.
- `value`: The value which is currently presented.

<a id="discussion"></a>

## Discussion

Don’t call this method directly. SwiftUI calls it when you call the [dismissWindow](../environmentvalues/dismisswindow.md) action with an identifier and a value:

```swift
dismissWindow(id: "message", value: message.id)
```

For information about how Swift uses the `callAsFunction()` method to simplify call site syntax, see [Methods with Special Names](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/declarations#Methods-with-Special-Names) in *The Swift Programming Language*.

## See Also

### Calling the action

- [callAsFunction()](callasfunction%28%29.md): Dismisses the current window.
- [callAsFunction(id:)](callasfunction%28id_%29.md): Dismisses the window that’s associated with the specified identifier.
- [callAsFunction(value:)](callasfunction%28value_%29.md): Dismisses the window defined by the window group that is presenting the specified value type.
