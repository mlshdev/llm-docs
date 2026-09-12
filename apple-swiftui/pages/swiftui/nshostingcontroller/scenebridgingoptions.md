> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nshostingcontroller/scenebridgingoptions](https://developer.apple.com/documentation/swiftui/nshostingcontroller/scenebridgingoptions)

# sceneBridgingOptions

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The options for which aspects of the window will be managed by this controller’s hosting view.

## Declaration

```swift
@MainActor @preconcurrency var sceneBridgingOptions: NSHostingSceneBridgingOptions { get set }
```

<a id="discussion"></a>

## Discussion

`NSHostingController` will populate certain aspects of its associated window, depending on which options are specified.

For example, a hosting controller can manage its window’s toolbar by including the `.toolbars` option:

```swift
struct RootView: View {
    var body: some View {
        ContentView()
            .toolbar {
                MyToolbarContent()
            }
    }
}

let controller = NSHostingController(rootView: RootView())
controller.sceneBridgingOptions = [.toolbars]
```

When this hosting controller is set as the `contentViewController` for a window, the default value for this property will be `.all`, which includes the options for `.toolbars` and `.title`. Otherwise, the default value is `[]`.

## See Also

### Configuring the controller

- [sizeThatFits(in:)](sizethatfits%28in_%29.md): Calculates and returns the most appropriate size for the current view.
- [preferredContentSize](preferredcontentsize.md)
- [sizingOptions](sizingoptions.md): The options for how the hosting controller’s view creates and updates constraints based on the size of its SwiftUI content.
- [safeAreaRegions](safearearegions.md): The safe area regions that this view controller adds to its view.
