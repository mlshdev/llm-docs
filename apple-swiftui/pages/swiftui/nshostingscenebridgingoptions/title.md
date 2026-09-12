> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nshostingscenebridgingoptions/title](https://developer.apple.com/documentation/swiftui/nshostingscenebridgingoptions/title)

# title

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 14.0+

The hosting view’s associated window will have its title and subtitle populated with the values provided to the `navigationTitle(_:)` and `navigationSubtitle(_:)` modifiers, respectively.

## Declaration

```swift
static let title: NSHostingSceneBridgingOptions
```

<a id="discussion"></a>

## Discussion

Title bars populated in this manner overwrite any values set using AppKit.

## See Also

### Geting bridging options

- [all](all.md): The hosting view’s associated window will have both its title bars and toolbars populated with values from their respective modifiers.
- [toolbars](toolbars.md): The hosting view’s associated window will have its toolbar populated with any items provided to the `toolbar(content:)` modifier.
