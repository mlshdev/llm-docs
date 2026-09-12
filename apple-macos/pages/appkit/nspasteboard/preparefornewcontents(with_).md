> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/preparefornewcontents(with:)](https://developer.apple.com/documentation/appkit/nspasteboard/preparefornewcontents(with:))

# prepareForNewContents(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Prepares the pasteboard to receive new contents, removing the existing pasteboard contents.

## Declaration

```swift
func prepareForNewContents(with options: NSPasteboard.ContentsOptions = []) -> Int
```

## See Also

### Preparing the pasteboard for content

- [NSPasteboard.ContentsOptions](contentsoptions.md): Options for preparing the pasteboard.

# prepareForNewContentsWithOptions: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Prepares the pasteboard to receive new contents, removing the existing pasteboard contents.

## Declaration

```objectivec
- (NSInteger) prepareForNewContentsWithOptions:(NSPasteboardContentsOptions) options;
```

## See Also

### Preparing the pasteboard for content

- [NSPasteboardContentsOptions](contentsoptions.md): Options for preparing the pasteboard.
