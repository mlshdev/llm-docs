> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pushwindowaction/callasfunction(value:)](https://developer.apple.com/documentation/swiftui/pushwindowaction/callasfunction(value:))

# callAsFunction(value:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Pushes a window defined by a window group that presents the type of the specified value.

## Declaration

```swift
@MainActor func callAsFunction<D>(value: D) where D : Decodable, D : Encodable, D : Hashable
```

## Parameters

- `value`: The value to present.

<a id="discussion"></a>

## Discussion

Don’t call this method directly. SwiftUI calls it when you call the [pushWindow](../environmentvalues/pushwindow.md) action with a value:

```swift
pushWindow(value: video.id)
```

For information about how Swift uses the `callAsFunction()` method to simplify call site syntax, see [Methods with Special Names](https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID622) in *The Swift Programming Language*.
