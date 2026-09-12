> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifiltergenerator/setattributes(_:forexportedkey:)](https://developer.apple.com/documentation/coreimage/cifiltergenerator/setattributes(_:forexportedkey:))

# setAttributes(\_:forExportedKey:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets a dictionary of attributes for an exported key.

## Declaration

```swift
func setAttributes(_ attributes: [AnyHashable : Any], forExportedKey key: String)
```

## Parameters

- `attributes`: A dictionary that describes the attributes associated with the specified key.
- `key`: The exported key whose attributes you want to set.

<a id="Discussion"></a>

## Discussion

By default, the exported key inherits the attributes from its original key and target object. You can use this method to change one or more of the existing attributes for the key, such as the default value or maximum value. For more information on attributes, see [CIFilter](../cifilter-swift.class.md) and [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185).

## See Also

### Managing Exported Keys

- [exportedKeys](exportedkeys.md): Returns an array of the exported keys.
- [exportKey(\_:from:withName:)](exportkey%28__from_withname_%29.md): Exports an input or output key of an object in the filter chain.
- [removeExportedKey(\_:)](removeexportedkey%28__%29.md): Removes a key that was previously exported.

# setAttributes:forExportedKey: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets a dictionary of attributes for an exported key.

## Declaration

```objectivec
- (void) setAttributes:(NSDictionary *) attributes forExportedKey:(NSString *) key;
```

## Parameters

- `attributes`: A dictionary that describes the attributes associated with the specified key.
- `key`: The exported key whose attributes you want to set.

<a id="Discussion"></a>

## Discussion

By default, the exported key inherits the attributes from its original key and target object. You can use this method to change one or more of the existing attributes for the key, such as the default value or maximum value. For more information on attributes, see [CIFilter](../cifilter-swift.class.md) and [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185).

## See Also

### Managing Exported Keys

- [exportedKeys](exportedkeys.md): Returns an array of the exported keys.
- [exportKey:fromObject:withName:](exportkey%28__from_withname_%29.md): Exports an input or output key of an object in the filter chain.
- [removeExportedKey:](removeexportedkey%28__%29.md): Removes a key that was previously exported.
