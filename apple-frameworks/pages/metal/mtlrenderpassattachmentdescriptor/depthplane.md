> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpassattachmentdescriptor/depthplane](https://developer.apple.com/documentation/metal/mtlrenderpassattachmentdescriptor/depthplane)

# depthPlane (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The depth plane of the texture used for rendering to the attachment.

## Declaration

```swift
var depthPlane: Int { get set }
```

<a id="discussion"></a>

## Discussion

If the texture isn’t a 3D texture, then Metal ignores this property.

The default value is `0`.

## See Also

### Specifying the texture for the attachment

- [texture](texture.md): The texture object associated with this attachment.
- [level](level.md): The mipmap level of the texture used for rendering to the attachment.
- [slice](slice.md): The slice of the texture used for rendering to the attachment.

# depthPlane (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The depth plane of the texture used for rendering to the attachment.

## Declaration

```objectivec
@property (nonatomic) NSUInteger depthPlane;
```

<a id="discussion"></a>

## Discussion

If the texture isn’t a 3D texture, then Metal ignores this property.

The default value is `0`.

## See Also

### Specifying the texture for the attachment

- [texture](texture.md): The texture object associated with this attachment.
- [level](level.md): The mipmap level of the texture used for rendering to the attachment.
- [slice](slice.md): The slice of the texture used for rendering to the attachment.
