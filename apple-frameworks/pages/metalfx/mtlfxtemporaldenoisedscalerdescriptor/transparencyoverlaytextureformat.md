> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporaldenoisedscalerdescriptor/transparencyoverlaytextureformat](https://developer.apple.com/documentation/metalfx/mtlfxtemporaldenoisedscalerdescriptor/transparencyoverlaytextureformat)

# transparencyOverlayTextureFormat (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · tvOS 18.0+

The pixel format of the input transparency overlay texture for the scaler you create with this descriptor.

## Declaration

```swift
var transparencyOverlayTextureFormat: MTLPixelFormat { get set }
```

<a id="discussion"></a>

## Discussion

You typically set this to a 4-channel RGBA texture format.

# transparencyOverlayTextureFormat (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · tvOS 18.0+

The pixel format of the input transparency overlay texture for the scaler you create with this descriptor.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLPixelFormat transparencyOverlayTextureFormat;
```

<a id="discussion"></a>

## Discussion

You typically set this to a 4-channel RGBA texture format.
