> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpassattachmentdescriptor/slice](https://developer.apple.com/documentation/metal/mtlrenderpassattachmentdescriptor/slice)

# slice (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The slice of the texture used for rendering to the attachment.

## Declaration

```swift
var slice: Int { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `0`.

## See Also

### Specifying the texture for the attachment

- [texture](texture.md): The texture object associated with this attachment.
- [level](level.md): The mipmap level of the texture used for rendering to the attachment.
- [depthPlane](depthplane.md): The depth plane of the texture used for rendering to the attachment.

# slice (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The slice of the texture used for rendering to the attachment.

## Declaration

```objectivec
@property (nonatomic) NSUInteger slice;
```

<a id="discussion"></a>

## Discussion

The default value is `0`.

## See Also

### Specifying the texture for the attachment

- [texture](texture.md): The texture object associated with this attachment.
- [level](level.md): The mipmap level of the texture used for rendering to the attachment.
- [depthPlane](depthplane.md): The depth plane of the texture used for rendering to the attachment.
