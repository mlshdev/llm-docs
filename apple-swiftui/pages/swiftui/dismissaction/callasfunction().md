> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dismissaction/callasfunction()](https://developer.apple.com/documentation/swiftui/dismissaction/callasfunction())

# callAsFunction()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Dismisses the view if it is currently presented.

## Declaration

```swift
@MainActor @preconcurrency func callAsFunction()
```

<a id="discussion"></a>

## Discussion

Don’t call this method directly. SwiftUI calls it for you when you call the [DismissAction](../dismissaction.md) structure that you get from the [Environment](../environment.md):

```swift
private struct SheetContents: View {
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        Button("Done") {
            dismiss() // Implicitly calls dismiss.callAsFunction()
        }
    }
}
```

For information about how Swift uses the `callAsFunction()` method to simplify call site syntax, see [Methods with Special Names](https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID622) in *The Swift Programming Language*.
