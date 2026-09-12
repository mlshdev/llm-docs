> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorlist/color(withkey:)](https://developer.apple.com/documentation/appkit/nscolorlist/color(withkey:))

# color(withKey:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the color object associated with the specified key.

## Declaration

```swift
func color(withKey key: NSColor.Name) -> NSColor?
```

## Parameters

- `key`: The key for which to retrieve the color.

<a id="return-value"></a>

## Return Value

The color associated with the given key or `nil` if there is none.

## See Also

### Managing Colors By Key

- [allKeys](allkeys.md): An array of the keys by which the color objects are stored in the color list.
- [insertColor(\_:key:at:)](insertcolor%28__key_at_%29.md): Inserts the specified color at the specified location in the color list.
- [removeColor(withKey:)](removecolor%28withkey_%29.md): Removes the color associated with the specified key from the color list.
- [setColor(\_:forKey:)](setcolor%28__forkey_%29.md): Associates the specified color object with the specified key.

# colorWithKey: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the color object associated with the specified key.

## Declaration

```objectivec
- (NSColor *) colorWithKey:(NSColorName) key;
```

## Parameters

- `key`: The key for which to retrieve the color.

<a id="return-value"></a>

## Return Value

The color associated with the given key or `nil` if there is none.

## See Also

### Managing Colors By Key

- [allKeys](allkeys.md): An array of the keys by which the color objects are stored in the color list.
- [insertColor:key:atIndex:](insertcolor%28__key_at_%29.md): Inserts the specified color at the specified location in the color list.
- [removeColorWithKey:](removecolor%28withkey_%29.md): Removes the color associated with the specified key from the color list.
- [setColor:forKey:](setcolor%28__forkey_%29.md): Associates the specified color object with the specified key.
