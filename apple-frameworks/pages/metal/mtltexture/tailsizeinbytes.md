> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexture/tailsizeinbytes](https://developer.apple.com/documentation/metal/mtltexture/tailsizeinbytes)

# tailSizeInBytes (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The size of the sparse texture tail, in bytes.

## Declaration

```swift
var tailSizeInBytes: Int { get }
```

```swift
optional var tailSizeInBytes: Int { get }
```

## See Also

### Querying sparse properties

- [isSparse](issparse.md): A Boolean value that indicates whether this is a sparse texture.
- [firstMipmapInTail](firstmipmapintail.md): The index of the first mipmap in the tail.

# tailSizeInBytes (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The size of the sparse texture tail, in bytes.

## Declaration

```objectivec
@property (readonly) NSUInteger tailSizeInBytes;
```

## See Also

### Querying sparse properties

- [isSparse](issparse.md): A Boolean value that indicates whether this is a sparse texture.
- [firstMipmapInTail](firstmipmapintail.md): The index of the first mipmap in the tail.
