> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdataasset/typeidentifier](https://developer.apple.com/documentation/uikit/nsdataasset/typeidentifier)

# typeIdentifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

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

- [name](name.md): The name of the data set in the asset catalog.
- [NSDataAssetName](../nsdataassetname.md): The name of a data asset.

# typeIdentifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The uniform type identifier for the data asset.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * typeIdentifier;
```

<a id="Discussion"></a>

## Discussion

A uniform type identifier is a string for identifying the type of data. This UTI is the same as the one specified in the asset catalog. For more information, see [Uniform Type Identifiers Overview](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_intro/understand_utis_intro.html#//apple_ref/doc/uid/TP40001319).

## See Also

### Getting data asset information

- [name](name.md): The name of the data set in the asset catalog.
- [NSDataAssetName](../nsdataassetname.md): The name of a data asset.
