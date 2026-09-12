> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifiltergenerator/removeexportedkey(_:)](https://developer.apple.com/documentation/coreimage/cifiltergenerator/removeexportedkey(_:))

# removeExportedKey(\_:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Removes a key that was previously exported.

## Declaration

```swift
func removeExportedKey(_ exportedKeyName: String)
```

## Parameters

- `exportedKeyName`: The name of the key you want to remove.

## See Also

### Managing Exported Keys

- [exportedKeys](exportedkeys.md): Returns an array of the exported keys.
- [exportKey(\_:from:withName:)](exportkey%28__from_withname_%29.md): Exports an input or output key of an object in the filter chain.
- [setAttributes(\_:forExportedKey:)](setattributes%28__forexportedkey_%29.md): Sets a dictionary of attributes for an exported key.

# removeExportedKey: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Removes a key that was previously exported.

## Declaration

```objectivec
- (void) removeExportedKey:(NSString *) exportedKeyName;
```

## Parameters

- `exportedKeyName`: The name of the key you want to remove.

## See Also

### Managing Exported Keys

- [exportedKeys](exportedkeys.md): Returns an array of the exported keys.
- [exportKey:fromObject:withName:](exportkey%28__from_withname_%29.md): Exports an input or output key of an object in the filter chain.
- [setAttributes:forExportedKey:](setattributes%28__forexportedkey_%29.md): Sets a dictionary of attributes for an exported key.
