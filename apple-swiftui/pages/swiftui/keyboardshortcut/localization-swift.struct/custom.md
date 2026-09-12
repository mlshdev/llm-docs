> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/keyboardshortcut/localization-swift.struct/custom](https://developer.apple.com/documentation/swiftui/keyboardshortcut/localization-swift.struct/custom)

# custom

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Don’t use automatic shortcut remapping.

## Declaration

```swift
static let custom: KeyboardShortcut.Localization
```

<a id="discussion"></a>

## Discussion

When you use this mode, you have to take care of international use-cases separately.

## See Also

### Getting localization strategies

- [automatic](automatic.md): Remap shortcuts to their international counterparts, mirrored for right-to-left usage if appropriate.
- [withoutMirroring](withoutmirroring.md): Don’t mirror shortcuts.
