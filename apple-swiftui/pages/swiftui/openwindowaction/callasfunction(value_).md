> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/openwindowaction/callasfunction(value:)](https://developer.apple.com/documentation/swiftui/openwindowaction/callasfunction(value:))

# callAsFunction(value:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Opens a window defined by a window group that presents the type of the specified value.

## Declaration

```swift
@MainActor @preconcurrency func callAsFunction<D>(value: D) where D : Decodable, D : Encodable, D : Hashable
```

## Parameters

- `value`: The value to present.

<a id="discussion"></a>

## Discussion

Don’t call this method directly. SwiftUI calls it when you call the [openWindow](../environmentvalues/openwindow.md) action with a value:

```swift
openWindow(value: message.id)
```

For information about how Swift uses the `callAsFunction()` method to simplify call site syntax, see [Methods with Special Names](https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID622) in *The Swift Programming Language*.

## See Also

### Calling the action

- [callAsFunction(id:)](callasfunction%28id_%29.md): Opens a window that’s associated with the specified identifier.
- [callAsFunction(id:value:)](callasfunction%28id_value_%29.md): Opens a window defined by the window group that presents the specified value type and that’s associated with the specified identifier.
