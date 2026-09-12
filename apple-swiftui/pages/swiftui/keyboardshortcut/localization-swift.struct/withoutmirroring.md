> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/keyboardshortcut/localization-swift.struct/withoutmirroring](https://developer.apple.com/documentation/swiftui/keyboardshortcut/localization-swift.struct/withoutmirroring)

# withoutMirroring

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Don’t mirror shortcuts.

## Declaration

```swift
static let withoutMirroring: KeyboardShortcut.Localization
```

<a id="discussion"></a>

## Discussion

Use this for shortcuts that always have a specific directionality, like aligning something on the right.

Don’t use this option for navigational shortcuts like “Go Back” because navigation is flipped in right-to-left contexts.

## See Also

### Getting localization strategies

- [automatic](automatic.md): Remap shortcuts to their international counterparts, mirrored for right-to-left usage if appropriate.
- [custom](custom.md): Don’t use automatic shortcut remapping.
