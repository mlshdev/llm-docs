> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexture/iosurface](https://developer.apple.com/documentation/metal/mtltexture/iosurface)

# iosurface (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+

A reference to the underlying surface instance for the texture, if applicable.

## Declaration

```swift
var iosurface: IOSurfaceRef? { get }
```

<a id="discussion"></a>

## Discussion

The property’s value is `nil` for textures that don’t come from an [IOSurface](../../iosurface/iosurface.md) instance.

## See Also

### Getting information about the IOSurface the texture was created from

- [iosurfacePlane](iosurfaceplane.md): The number of a plane within the underlying surface instance for the texture, if applicable.

# iosurface (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+

A reference to the underlying surface instance for the texture, if applicable.

## Declaration

```objectivec
@property (readonly, nullable) IOSurfaceRef iosurface;
```

<a id="discussion"></a>

## Discussion

The property’s value is `nil` for textures that don’t come from an [IOSurface](../../iosurface/iosurface.md) instance.

## See Also

### Getting information about the IOSurface the texture was created from

- [iosurfacePlane](iosurfaceplane.md): The number of a plane within the underlying surface instance for the texture, if applicable.
