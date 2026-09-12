> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifiltergenerator/exportedkeys](https://developer.apple.com/documentation/coreimage/cifiltergenerator/exportedkeys)

# exportedKeys (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns an array of the exported keys.

## Declaration

```swift
var exportedKeys: [AnyHashable : Any] { get }
```

<a id="return-value"></a>

## Return Value

An array of dictionaries that describe the exported key and target object. See [kCIFilterGeneratorExportedKey](../kcifiltergeneratorexportedkey.md), [kCIFilterGeneratorExportedKeyTargetObject](../kcifiltergeneratorexportedkeytargetobject.md),  and [kCIFilterGeneratorExportedKey](../kcifiltergeneratorexportedkey.md) for keys used in the dictionary.

<a id="Discussion"></a>

## Discussion

This method returns the keys that you exported using the [exportKey(\_:from:withName:)](exportkey%28__from_withname_%29.md) method or that were exported before being written to the file from which you read the filter chain.

## See Also

### Managing Exported Keys

- [exportKey(\_:from:withName:)](exportkey%28__from_withname_%29.md): Exports an input or output key of an object in the filter chain.
- [removeExportedKey(\_:)](removeexportedkey%28__%29.md): Removes a key that was previously exported.
- [setAttributes(\_:forExportedKey:)](setattributes%28__forexportedkey_%29.md): Sets a dictionary of attributes for an exported key.

# exportedKeys (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns an array of the exported keys.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDictionary * exportedKeys;
```

<a id="return-value"></a>

## Return Value

An array of dictionaries that describe the exported key and target object. See [kCIFilterGeneratorExportedKey](../kcifiltergeneratorexportedkey.md), [kCIFilterGeneratorExportedKeyTargetObject](../kcifiltergeneratorexportedkeytargetobject.md),  and [kCIFilterGeneratorExportedKey](../kcifiltergeneratorexportedkey.md) for keys used in the dictionary.

<a id="Discussion"></a>

## Discussion

This method returns the keys that you exported using the [exportKey:fromObject:withName:](exportkey%28__from_withname_%29.md) method or that were exported before being written to the file from which you read the filter chain.

## See Also

### Managing Exported Keys

- [exportKey:fromObject:withName:](exportkey%28__from_withname_%29.md): Exports an input or output key of an object in the filter chain.
- [removeExportedKey:](removeexportedkey%28__%29.md): Removes a key that was previously exported.
- [setAttributes:forExportedKey:](setattributes%28__forexportedkey_%29.md): Sets a dictionary of attributes for an exported key.
