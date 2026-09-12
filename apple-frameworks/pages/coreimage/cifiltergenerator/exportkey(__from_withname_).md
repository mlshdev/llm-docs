> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifiltergenerator/exportkey(_:from:withname:)](https://developer.apple.com/documentation/coreimage/cifiltergenerator/exportkey(_:from:withname:))

# exportKey(\_:from:withName:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Exports an input or output key of an object in the filter chain.

## Declaration

```swift
func exportKey(_ key: String, from targetObject: Any, withName exportedKeyName: String?)
```

## Parameters

- `key`: The key to export from the target object (for example, `inputImage`).
- `targetObject`: The object associated with the key (for example, the filter).
- `exportedKeyName`: A unique name to use for the exported key. Pass `nil` to use the original key name.

<a id="Discussion"></a>

## Discussion

When you create a [CIFilter](../cifilter-swift.class.md) object from a [CIFilterGenerator](../cifiltergenerator.md) object, you might want the filter client to be able to set some of the parameters associated with the filter chain. You can make a parameter settable by  exporting the key associated with the parameter. If the exported key represents an input parameter of the filter, the key is exported as an input key. If the key represents an output parameter, it is exported as an output key.

## See Also

### Managing Exported Keys

- [exportedKeys](exportedkeys.md): Returns an array of the exported keys.
- [removeExportedKey(\_:)](removeexportedkey%28__%29.md): Removes a key that was previously exported.
- [setAttributes(\_:forExportedKey:)](setattributes%28__forexportedkey_%29.md): Sets a dictionary of attributes for an exported key.

# exportKey:fromObject:withName: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Exports an input or output key of an object in the filter chain.

## Declaration

```objectivec
- (void) exportKey:(NSString *) key fromObject:(id) targetObject withName:(NSString *) exportedKeyName;
```

## Parameters

- `key`: The key to export from the target object (for example, `inputImage`).
- `targetObject`: The object associated with the key (for example, the filter).
- `exportedKeyName`: A unique name to use for the exported key. Pass `nil` to use the original key name.

<a id="Discussion"></a>

## Discussion

When you create a [CIFilter](../cifilter-swift.class.md) object from a [CIFilterGenerator](../cifiltergenerator.md) object, you might want the filter client to be able to set some of the parameters associated with the filter chain. You can make a parameter settable by  exporting the key associated with the parameter. If the exported key represents an input parameter of the filter, the key is exported as an input key. If the key represents an output parameter, it is exported as an output key.

## See Also

### Managing Exported Keys

- [exportedKeys](exportedkeys.md): Returns an array of the exported keys.
- [removeExportedKey:](removeexportedkey%28__%29.md): Removes a key that was previously exported.
- [setAttributes:forExportedKey:](setattributes%28__forexportedkey_%29.md): Sets a dictionary of attributes for an exported key.
