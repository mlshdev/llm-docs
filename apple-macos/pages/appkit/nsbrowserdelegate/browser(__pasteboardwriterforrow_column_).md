> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:pasteboardwriterforrow:column:)

# browser(\_:pasteboardWriterForRow:column:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

## Declaration

```swift
@MainActor optional func browser(_ browser: NSBrowser, pasteboardWriterForRow row: Int, column: Int) -> (any NSPasteboardWriting)?
```

# browser:pasteboardWriterForRow:column: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

## Declaration

```objectivec
- (id<NSPasteboardWriting>) browser:(NSBrowser *) browser pasteboardWriterForRow:(NSInteger) row column:(NSInteger) column;
```
