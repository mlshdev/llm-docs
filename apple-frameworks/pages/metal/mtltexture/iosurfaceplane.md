> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexture/iosurfaceplane](https://developer.apple.com/documentation/metal/mtltexture/iosurfaceplane)

# iosurfacePlane (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+

The number of a plane within the underlying surface instance for the texture, if applicable.

## Declaration

```swift
var iosurfacePlane: Int { get }
```

<a id="discussion"></a>

## Discussion

The plane number applies to the [iosurfacePlane](iosurfaceplane.md) property when it isn’t `nil`. The property’s value defaults to `0` for textures that don’t come from an [IOSurface](../../iosurface/iosurface.md) instance.

## See Also

### Getting information about the IOSurface the texture was created from

- [iosurface](iosurface.md): A reference to the underlying surface instance for the texture, if applicable.

# iosurfacePlane (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+

The number of a plane within the underlying surface instance for the texture, if applicable.

## Declaration

```objectivec
@property (readonly) NSUInteger iosurfacePlane;
```

<a id="discussion"></a>

## Discussion

The plane number applies to the [iosurfacePlane](iosurfaceplane.md) property when it isn’t `nil`. The property’s value defaults to `0` for textures that don’t come from an [IOSurface](../../iosurface/iosurface.md) instance.

## See Also

### Getting information about the IOSurface the texture was created from

- [iosurface](iosurface.md): A reference to the underlying surface instance for the texture, if applicable.
