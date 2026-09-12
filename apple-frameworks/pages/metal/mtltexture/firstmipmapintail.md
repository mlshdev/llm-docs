> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexture/firstmipmapintail](https://developer.apple.com/documentation/metal/mtltexture/firstmipmapintail)

# firstMipmapInTail (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The index of the first mipmap in the tail.

## Declaration

```swift
var firstMipmapInTail: Int { get }
```

```swift
optional var firstMipmapInTail: Int { get }
```

<a id="discussion"></a>

## Discussion

In a sparse texture, the *tail* is a collection of mipmaps at higher index values that are mapped as a single block of memory. When you map this mipmap into your sparse texture, Metal also maps mipmap levels with larger index values.

## See Also

### Querying sparse properties

- [isSparse](issparse.md): A Boolean value that indicates whether this is a sparse texture.
- [tailSizeInBytes](tailsizeinbytes.md): The size of the sparse texture tail, in bytes.

# firstMipmapInTail (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The index of the first mipmap in the tail.

## Declaration

```objectivec
@property (readonly) NSUInteger firstMipmapInTail;
```

<a id="discussion"></a>

## Discussion

In a sparse texture, the *tail* is a collection of mipmaps at higher index values that are mapped as a single block of memory. When you map this mipmap into your sparse texture, Metal also maps mipmap levels with larger index values.

## See Also

### Querying sparse properties

- [isSparse](issparse.md): A Boolean value that indicates whether this is a sparse texture.
- [tailSizeInBytes](tailsizeinbytes.md): The size of the sparse texture tail, in bytes.
