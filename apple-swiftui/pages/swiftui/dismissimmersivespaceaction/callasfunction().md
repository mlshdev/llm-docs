> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dismissimmersivespaceaction/callasfunction()](https://developer.apple.com/documentation/swiftui/dismissimmersivespaceaction/callasfunction())

# callAsFunction()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 1.0+

Dismisses the currently opened immersive space.

## Declaration

```swift
@MainActor func callAsFunction() async
```

<a id="discussion"></a>

## Discussion

Don’t call this method directly. SwiftUI calls it when you call the [dismissImmersiveSpace](../environmentvalues/dismissimmersivespace.md) action:

```swift
await dismissImmersiveSpace()
```

For information about how Swift uses the `callAsFunction()` method to simplify call site syntax, see [Methods with Special Names](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/declarations/#Methods-with-Special-Names) in *The Swift Programming Language*.
