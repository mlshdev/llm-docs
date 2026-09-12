> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/containerbackgroundplacement/navigation](https://developer.apple.com/documentation/swiftui/containerbackgroundplacement/navigation)

# navigation

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · watchOS 10.0+

A background placement inside a [NavigationStack](../navigationstack.md) or [NavigationSplitView](../navigationsplitview.md).

## Declaration

```swift
static let navigation: ContainerBackgroundPlacement
```

<a id="discussion"></a>

## Discussion

For translucent backgrounds in a navigation split view, combine this placement with [navigationSplitView](navigationsplitview.md).

```swift
NavigationSplitView {
     … sidebar …
    .containerBackground(.thinMaterial, for: .navigation)
    .containerBackground(Color.green, for: .navigationSplitView)
} detail: {
    // … detail …
    .containerBackground(.thickMaterial, for: .navigation)
}
```

## See Also

### Getting placements

- [tabView](tabview.md): A background placement inside a [TabView](../tabview.md).
- [widget](widget.md): The container background placement for a widget.
