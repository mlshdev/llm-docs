> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexture/issparse](https://developer.apple.com/documentation/metal/mtltexture/issparse)

# isSparse (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether this is a sparse texture.

## Declaration

```swift
var isSparse: Bool { get }
```

```swift
optional var isSparse: Bool { get }
```

## See Also

### Querying sparse properties

- [firstMipmapInTail](firstmipmapintail.md): The index of the first mipmap in the tail.
- [tailSizeInBytes](tailsizeinbytes.md): The size of the sparse texture tail, in bytes.

# isSparse (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether this is a sparse texture.

## Declaration

```objectivec
@property (readonly) BOOL isSparse;
```

## See Also

### Querying sparse properties

- [firstMipmapInTail](firstmipmapintail.md): The index of the first mipmap in the tail.
- [tailSizeInBytes](tailsizeinbytes.md): The size of the sparse texture tail, in bytes.
