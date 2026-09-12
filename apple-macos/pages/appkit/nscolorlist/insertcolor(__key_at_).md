> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorlist/insertcolor(_:key:at:)](https://developer.apple.com/documentation/appkit/nscolorlist/insertcolor(_:key:at:))

# insertColor(\_:key:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Inserts the specified color at the specified location in the color list.

## Declaration

```swift
func insertColor(_ color: NSColor, key: NSColor.Name, at loc: Int)
```

## Parameters

- `color`: The color to add to the color list.
- `key`: The key with which to associate the color.
- `loc`: The location in the color list at which to place the specified color. Locations are numbered starting with 0.

<a id="Discussion"></a>

## Discussion

If the list already contains a color with the same key at a different location, it’s removed from the old location. This method posts [didChangeNotification](didchangenotification.md) to the default notification center. It raises `NSColorListNotEditableException` if the color list isn’t editable.

## See Also

### Managing Colors By Key

- [allKeys](allkeys.md): An array of the keys by which the color objects are stored in the color list.
- [color(withKey:)](color%28withkey_%29.md): Returns the color object associated with the specified key.
- [removeColor(withKey:)](removecolor%28withkey_%29.md): Removes the color associated with the specified key from the color list.
- [setColor(\_:forKey:)](setcolor%28__forkey_%29.md): Associates the specified color object with the specified key.

# insertColor:key:atIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Inserts the specified color at the specified location in the color list.

## Declaration

```objectivec
- (void) insertColor:(NSColor *) color key:(NSColorName) key atIndex:(NSUInteger) loc;
```

## Parameters

- `color`: The color to add to the color list.
- `key`: The key with which to associate the color.
- `loc`: The location in the color list at which to place the specified color. Locations are numbered starting with 0.

<a id="Discussion"></a>

## Discussion

If the list already contains a color with the same key at a different location, it’s removed from the old location. This method posts [NSColorListDidChangeNotification](didchangenotification.md) to the default notification center. It raises `NSColorListNotEditableException` if the color list isn’t editable.

## See Also

### Managing Colors By Key

- [allKeys](allkeys.md): An array of the keys by which the color objects are stored in the color list.
- [colorWithKey:](color%28withkey_%29.md): Returns the color object associated with the specified key.
- [removeColorWithKey:](removecolor%28withkey_%29.md): Removes the color associated with the specified key from the color list.
- [setColor:forKey:](setcolor%28__forkey_%29.md): Associates the specified color object with the specified key.
