> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pushwindowaction/callasfunction(id:)](https://developer.apple.com/documentation/swiftui/pushwindowaction/callasfunction(id:))

# callAsFunction(id:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Pushes a window that is associated with the specified identifier.

## Declaration

```swift
@MainActor func callAsFunction(id: String)
```

## Parameters

- `id`: The identifier of the scene to present.

<a id="discussion"></a>

## Discussion

Don’t call this method directly. SwiftUI calls it when you call the [pushWindow](../environmentvalues/pushwindow.md) action with an identifier:

```swift
pushWindow(id: "viewer")
```

For information about how Swift uses the `callAsFunction()` method to simplify call site syntax, see [Methods with Special Names](https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID622) in *The Swift Programming Language*.
