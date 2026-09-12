> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorlist/allkeys](https://developer.apple.com/documentation/appkit/nscolorlist/allkeys)

# allKeys (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of the keys by which the color objects are stored in the color list.

## Declaration

```swift
var allKeys: [NSColor.Name] { get }
```

## See Also

### Managing Colors By Key

- [color(withKey:)](color%28withkey_%29.md): Returns the color object associated with the specified key.
- [insertColor(\_:key:at:)](insertcolor%28__key_at_%29.md): Inserts the specified color at the specified location in the color list.
- [removeColor(withKey:)](removecolor%28withkey_%29.md): Removes the color associated with the specified key from the color list.
- [setColor(\_:forKey:)](setcolor%28__forkey_%29.md): Associates the specified color object with the specified key.

# allKeys (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of the keys by which the color objects are stored in the color list.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * allKeys;
```

## See Also

### Managing Colors By Key

- [colorWithKey:](color%28withkey_%29.md): Returns the color object associated with the specified key.
- [insertColor:key:atIndex:](insertcolor%28__key_at_%29.md): Inserts the specified color at the specified location in the color list.
- [removeColorWithKey:](removecolor%28withkey_%29.md): Removes the color associated with the specified key from the color list.
- [setColor:forKey:](setcolor%28__forkey_%29.md): Associates the specified color object with the specified key.
