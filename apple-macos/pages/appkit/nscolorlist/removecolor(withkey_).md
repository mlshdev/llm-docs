> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorlist/removecolor(withkey:)](https://developer.apple.com/documentation/appkit/nscolorlist/removecolor(withkey:))

# removeColor(withKey:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the color associated with the specified key from the color list.

## Declaration

```swift
func removeColor(withKey key: NSColor.Name)
```

## Parameters

- `key`: The key for which to remove the color.

<a id="Discussion"></a>

## Discussion

This method does nothing if the receiver doesn’t contain the key. This method posts [didChangeNotification](didchangenotification.md) to the default notification center. It raises `NSColorListNotEditableException` if the receiver is not editable.

## See Also

### Managing Colors By Key

- [allKeys](allkeys.md): An array of the keys by which the color objects are stored in the color list.
- [color(withKey:)](color%28withkey_%29.md): Returns the color object associated with the specified key.
- [insertColor(\_:key:at:)](insertcolor%28__key_at_%29.md): Inserts the specified color at the specified location in the color list.
- [setColor(\_:forKey:)](setcolor%28__forkey_%29.md): Associates the specified color object with the specified key.

# removeColorWithKey: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the color associated with the specified key from the color list.

## Declaration

```objectivec
- (void) removeColorWithKey:(NSColorName) key;
```

## Parameters

- `key`: The key for which to remove the color.

<a id="Discussion"></a>

## Discussion

This method does nothing if the receiver doesn’t contain the key. This method posts [NSColorListDidChangeNotification](didchangenotification.md) to the default notification center. It raises `NSColorListNotEditableException` if the receiver is not editable.

## See Also

### Managing Colors By Key

- [allKeys](allkeys.md): An array of the keys by which the color objects are stored in the color list.
- [colorWithKey:](color%28withkey_%29.md): Returns the color object associated with the specified key.
- [insertColor:key:atIndex:](insertcolor%28__key_at_%29.md): Inserts the specified color at the specified location in the color list.
- [setColor:forKey:](setcolor%28__forkey_%29.md): Associates the specified color object with the specified key.
