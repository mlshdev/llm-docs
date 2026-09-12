> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nshostingscenebridgingoptions/toolbars](https://developer.apple.com/documentation/swiftui/nshostingscenebridgingoptions/toolbars)

# toolbars

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 14.0+

The hosting view’s associated window will have its toolbar populated with any items provided to the `toolbar(content:)` modifier.

## Declaration

```swift
static let toolbars: NSHostingSceneBridgingOptions
```

<a id="discussion"></a>

## Discussion

Toolbars populated in this manner overwrite any toolbar set on the window using AppKit.

## See Also

### Geting bridging options

- [all](all.md): The hosting view’s associated window will have both its title bars and toolbars populated with values from their respective modifiers.
- [title](title.md): The hosting view’s associated window will have its title and subtitle populated with the values provided to the `navigationTitle(_:)` and `navigationSubtitle(_:)` modifiers, respectively.
