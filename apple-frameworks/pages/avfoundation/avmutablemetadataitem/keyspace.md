> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avmutablemetadataitem/keyspace

# keySpace (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The key space of the metadata item’s key.

## Declaration

```swift
var keySpace: AVMetadataKeySpace? { get set }
```

<a id="Discussion"></a>

## Discussion

The key space that this property value specifies is typically the default key space for the metadata container that stores the metadata item.

## See Also

### Accessing keys and key spaces

- [key](key.md): The key for a mutable metadata item.

# keySpace (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The key space of the metadata item’s key.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) AVMetadataKeySpace keySpace;
```

<a id="Discussion"></a>

## Discussion

The key space that this property value specifies is typically the default key space for the metadata container that stores the metadata item.

## See Also

### Accessing keys and key spaces

- [key](key.md): The key for a mutable metadata item.
