> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/navigationbarbackbuttonhidden(_:)](https://developer.apple.com/documentation/swiftui/view/navigationbarbackbuttonhidden(_:))

# navigationBarBackButtonHidden(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Hides the navigation bar back button for the view.

## Declaration

```swift
nonisolated func navigationBarBackButtonHidden(_ hidesBackButton: Bool = true) -> some View

```

## Parameters

- `hidesBackButton`: A Boolean value that indicates whether to hide the back button. The default value is `true`.

<a id="discussion"></a>

## Discussion

Use `navigationBarBackButtonHidden(_:)` to hide the back button for this view.

This modifier only takes effect when this view is inside of and visible within a [NavigationStack](../navigationstack.md) or a [NavigationSplitView](../navigationsplitview.md) in narrow size classes.

The example below demonstrates how to hide the navigation back button for a view within a navigation stack:

```swift
NavigationStack {
   List {
       NavigationLink("Mint") {
           Color.mint
               .navigationBarBackButtonHidden()
       }
   }
   .navigationTitle("Colors")
}
```

## See Also

### Configuring the navigation bar

- [navigationBarTitleDisplayMode(\_:)](navigationbartitledisplaymode%28__%29.md): Configures the title display mode for this view.
- [NavigationBarItem](../navigationbaritem.md): A configuration for a navigation bar that represents a view at the top of a navigation stack.
