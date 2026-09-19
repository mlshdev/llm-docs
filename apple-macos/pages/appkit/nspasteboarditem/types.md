> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nspasteboarditem/types

# types (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

An array of uniform type identifier strings of the data types that the receiver supports.

## Declaration

```swift
var types: [NSPasteboard.PasteboardType] { get }
```

## See Also

### Getting types

- [availableType(from:)](availabletype%28from_%29.md): Returns from a given array of types the first type within the pasteboard item, according to the ordering of types.

# types (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

An array of uniform type identifier strings of the data types that the receiver supports.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * types;
```

## See Also

### Getting types

- [availableTypeFromArray:](availabletype%28from_%29.md): Returns from a given array of types the first type within the pasteboard item, according to the ordering of types.
