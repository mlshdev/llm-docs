> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdataasset/typeidentifier](https://developer.apple.com/documentation/appkit/nsdataasset/typeidentifier)

# typeIdentifier (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The uniform type identifier for the data asset.

## Declaration

```swift
var typeIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

A uniform type identifier is a string for identifying the type of data. This UTI is the same as the one specified in the asset catalog. For more information, see [Uniform Type Identifiers Overview](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_intro/understand_utis_intro.html#//apple_ref/doc/uid/TP40001319).

## See Also

### Getting data asset information

- [name](name-swift.property.md): The name of the data set in the asset catalog.
- [NSDataAsset.Name](name-swift.typealias.md): The name of a data asset.

# typeIdentifier (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The uniform type identifier for the data asset.

## Declaration

```objectivec
@property (copy, readonly) NSString * typeIdentifier;
```

<a id="Discussion"></a>

## Discussion

A uniform type identifier is a string for identifying the type of data. This UTI is the same as the one specified in the asset catalog. For more information, see [Uniform Type Identifiers Overview](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_intro/understand_utis_intro.html#//apple_ref/doc/uid/TP40001319).

## See Also

### Getting data asset information

- [name](name-swift.property.md): The name of the data set in the asset catalog.
- [NSDataAssetName](name-swift.typealias.md): The name of a data asset.
