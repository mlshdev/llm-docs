> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorlist/setcolor(_:forkey:)](https://developer.apple.com/documentation/appkit/nscolorlist/setcolor(_:forkey:))

# setColor(\_:forKey:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Associates the specified color object with the specified key.

## Declaration

```swift
func setColor(_ color: NSColor, forKey key: NSColor.Name)
```

## Parameters

- `color`: The color to associate with the given key.
- `key`: The key.

<a id="Discussion"></a>

## Discussion

If the list already contains `key`, this method sets the corresponding color to `color`; otherwise, it inserts `color` at the end of the list by invoking [insertColor(\_:key:at:)](insertcolor%28__key_at_%29.md).

## See Also

### Managing Colors By Key

- [allKeys](allkeys.md): An array of the keys by which the color objects are stored in the color list.
- [color(withKey:)](color%28withkey_%29.md): Returns the color object associated with the specified key.
- [insertColor(\_:key:at:)](insertcolor%28__key_at_%29.md): Inserts the specified color at the specified location in the color list.
- [removeColor(withKey:)](removecolor%28withkey_%29.md): Removes the color associated with the specified key from the color list.

# setColor:forKey: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Associates the specified color object with the specified key.

## Declaration

```objectivec
- (void) setColor:(NSColor *) color forKey:(NSColorName) key;
```

## Parameters

- `color`: The color to associate with the given key.
- `key`: The key.

<a id="Discussion"></a>

## Discussion

If the list already contains `key`, this method sets the corresponding color to `color`; otherwise, it inserts `color` at the end of the list by invoking [insertColor:key:atIndex:](insertcolor%28__key_at_%29.md).

## See Also

### Managing Colors By Key

- [allKeys](allkeys.md): An array of the keys by which the color objects are stored in the color list.
- [colorWithKey:](color%28withkey_%29.md): Returns the color object associated with the specified key.
- [insertColor:key:atIndex:](insertcolor%28__key_at_%29.md): Inserts the specified color at the specified location in the color list.
- [removeColorWithKey:](removecolor%28withkey_%29.md): Removes the color associated with the specified key from the color list.
