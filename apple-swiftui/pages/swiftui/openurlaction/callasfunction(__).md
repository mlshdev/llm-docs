> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/openurlaction/callasfunction(_:)](https://developer.apple.com/documentation/swiftui/openurlaction/callasfunction(_:))

# callAsFunction(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Opens a URL, following system conventions.

## Declaration

```swift
@MainActor @preconcurrency func callAsFunction(_ url: URL)
```

## Parameters

- `url`: The URL to open.

<a id="discussion"></a>

## Discussion

Don’t call this method directly. SwiftUI calls it when you call the [OpenURLAction](../openurlaction.md) structure that you get from the [Environment](../environment.md), using a URL as an argument:

```swift
struct OpenURLExample: View {
    @Environment(\.openURL) private var openURL

    var body: some View {
        Button {
            if let url = URL(string: "https://www.example.com") {
                openURL(url) // Implicitly calls openURL.callAsFunction(url)
            }
        } label: {
            Label("Get Help", systemImage: "person.fill.questionmark")
        }
    }
}
```

For information about how Swift uses the `callAsFunction()` method to simplify call site syntax, see [Methods with Special Names](https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID622) in *The Swift Programming Language*.

## See Also

### Calling the action

- [callAsFunction(\_:completion:)](callasfunction%28__completion_%29.md): Asynchronously opens a URL, following system conventions.
