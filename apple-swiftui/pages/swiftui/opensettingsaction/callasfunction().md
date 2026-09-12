> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/opensettingsaction/callasfunction()](https://developer.apple.com/documentation/swiftui/opensettingsaction/callasfunction())

# callAsFunction()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Opens the window associated to the [Settings](../settings.md) scene defined by this app, if one exists.

## Declaration

```swift
@MainActor @preconcurrency func callAsFunction()
```

<a id="discussion"></a>

## Discussion

Calling this action when the window is already open will order it to the front.

Don’t call this method directly. SwiftUI calls it when you call the [openSettings](../environmentvalues/opensettings.md) action:

```swift
openSettings()
```

For information about how Swift uses the `callAsFunction()` method to simplify call site syntax, see [Methods with Special Names](https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID622) in *The Swift Programming Language*.
