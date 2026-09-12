> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/openwindowaction/callasfunction(id:sharingbehavior:)](https://developer.apple.com/documentation/swiftui/openwindowaction/callasfunction(id:sharingbehavior:))

# callAsFunction(id:sharingBehavior:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Opens a window that’s associated with the specified identifier, using the specified sharing sharingBehavior..

## Declaration

```swift
@MainActor func callAsFunction(id: String, sharingBehavior: OpenWindowAction.SharingBehavior) async throws
```

## Parameters

- `id`: The identifier of the scene to present.
- `sharingBehavior`: The sharing behavior for the opened window.

<a id="discussion"></a>

## Discussion

If sharingBehavior is requested or required, the window is shared if there is an available sharingSession and the person using your app confirms the offer to share. If sharingBehavior is requested and the window is not shared, it is opened normally. If sharingBehavior is required and the window is not shared, it is not opened, and an error is thrown. Regardless of sharingBehavior, an error is thrown if the window fails to open.

Don’t call this method directly. SwiftUI calls it when you call the [openWindow](../environmentvalues/openwindow.md) action with an identifier:

```swift
try await openWindow(id: "message", sharingBehavior: .requested)
```

For information about how Swift uses the `callAsFunction()` method to simplify call site syntax, see [Methods with Special Names](https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID622) in *The Swift Programming Language*.
