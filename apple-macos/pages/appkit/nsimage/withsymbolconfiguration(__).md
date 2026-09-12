> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/withsymbolconfiguration(_:)](https://developer.apple.com/documentation/appkit/nsimage/withsymbolconfiguration(_:))

# withSymbolConfiguration(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Creates a new symbol image with the specified configuration.

## Declaration

```swift
func withSymbolConfiguration(_ configuration: NSImage.SymbolConfiguration) -> NSImage?
```

## Parameters

- `configuration`: The configuration details to apply.

## See Also

### Creating Symbol Images

- [NSImage.SymbolConfiguration](symbolconfiguration-swift.class.md): An object that contains the specific font, style, and weight attributes to apply to a symbol image.

# imageWithSymbolConfiguration: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Creates a new symbol image with the specified configuration.

## Declaration

```objectivec
- (NSImage *) imageWithSymbolConfiguration:(NSImageSymbolConfiguration *) configuration;
```

## Parameters

- `configuration`: The configuration details to apply.

## See Also

### Creating Symbol Images

- [NSImageSymbolConfiguration](symbolconfiguration-swift.class.md): An object that contains the specific font, style, and weight attributes to apply to a symbol image.
