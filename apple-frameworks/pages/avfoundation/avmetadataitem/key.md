> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataitem/key](https://developer.apple.com/documentation/avfoundation/avmetadataitem/key)

# key (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The key of the metadata item.

## Declaration

```swift
@NSCopying var key: (any NSCopying & NSObjectProtocol)? { get }
```

<a id="Discussion"></a>

## Discussion

The key property contains the true key used to identify the contents of the metadata item. This value is specific to the key space of the metadata item.

## See Also

### Accessing keys and key spaces

- [commonKey](commonkey.md): The common key of the metadata item.
- [keySpace](keyspace.md): The key space for the metadata item’s key.

# key (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The key of the metadata item.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) id<NSCopying,NSObject> key;
```

<a id="Discussion"></a>

## Discussion

The key property contains the true key used to identify the contents of the metadata item. This value is specific to the key space of the metadata item.

## See Also

### Accessing keys and key spaces

- [commonKey](commonkey.md): The common key of the metadata item.
- [keySpace](keyspace.md): The key space for the metadata item’s key.
