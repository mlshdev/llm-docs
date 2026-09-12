> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataitem/commonkey](https://developer.apple.com/documentation/avfoundation/avmetadataitem/commonkey)

# commonKey (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The common key of the metadata item.

## Declaration

```swift
var commonKey: AVMetadataKey? { get }
```

<a id="Discussion"></a>

## Discussion

This value contains the key that most closely corresponds to the [key](key.md) property, but that belongs to the common key space. You can use this key to locate metadata items irrespective of the underlying media format.

If the value of the [keySpace](keyspace.md) property is [common](../avmetadatakeyspace/common.md), this property value contains the same key as the [key](key.md) property.

## See Also

### Accessing keys and key spaces

- [key](key.md): The key of the metadata item.
- [keySpace](keyspace.md): The key space for the metadata item’s key.

# commonKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The common key of the metadata item.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) AVMetadataKey commonKey;
```

<a id="Discussion"></a>

## Discussion

This value contains the key that most closely corresponds to the [key](key.md) property, but that belongs to the common key space. You can use this key to locate metadata items irrespective of the underlying media format.

If the value of the [keySpace](keyspace.md) property is [AVMetadataKeySpaceCommon](../avmetadatakeyspace/common.md), this property value contains the same key as the [key](key.md) property.

## See Also

### Accessing keys and key spaces

- [key](key.md): The key of the metadata item.
- [keySpace](keyspace.md): The key space for the metadata item’s key.
