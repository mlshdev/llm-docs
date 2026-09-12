> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataitem/keyspace](https://developer.apple.com/documentation/avfoundation/avmetadataitem/keyspace)

# keySpace (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The key space for the metadata item’s key.

## Declaration

```swift
var keySpace: AVMetadataKeySpace? { get }
```

<a id="Discussion"></a>

## Discussion

The key space that this property value specifies is typically the default key space for the metadata container that stores the metadata item.

AVFoundation uses key spaces to group related sets of keys. For example, the framework defines different key spaces for common keys, iTunes keys, ID3 keys, and QuickTime keys. Key spaces aid in filtering arrays of metadata items.

## See Also

### Accessing keys and key spaces

- [key](key.md): The key of the metadata item.
- [commonKey](commonkey.md): The common key of the metadata item.

# keySpace (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The key space for the metadata item’s key.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) AVMetadataKeySpace keySpace;
```

<a id="Discussion"></a>

## Discussion

The key space that this property value specifies is typically the default key space for the metadata container that stores the metadata item.

AVFoundation uses key spaces to group related sets of keys. For example, the framework defines different key spaces for common keys, iTunes keys, ID3 keys, and QuickTime keys. Key spaces aid in filtering arrays of metadata items.

## See Also

### Accessing keys and key spaces

- [key](key.md): The key of the metadata item.
- [commonKey](commonkey.md): The common key of the metadata item.
