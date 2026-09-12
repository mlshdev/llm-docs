> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpassattachmentdescriptor/level](https://developer.apple.com/documentation/metal/mtlrenderpassattachmentdescriptor/level)

# level (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The mipmap level of the texture used for rendering to the attachment.

## Declaration

```swift
var level: Int { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `0`.

## See Also

### Specifying the texture for the attachment

- [texture](texture.md): The texture object associated with this attachment.
- [slice](slice.md): The slice of the texture used for rendering to the attachment.
- [depthPlane](depthplane.md): The depth plane of the texture used for rendering to the attachment.

# level (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The mipmap level of the texture used for rendering to the attachment.

## Declaration

```objectivec
@property (nonatomic) NSUInteger level;
```

<a id="discussion"></a>

## Discussion

The default value is `0`.

## See Also

### Specifying the texture for the attachment

- [texture](texture.md): The texture object associated with this attachment.
- [slice](slice.md): The slice of the texture used for rendering to the attachment.
- [depthPlane](depthplane.md): The depth plane of the texture used for rendering to the attachment.
