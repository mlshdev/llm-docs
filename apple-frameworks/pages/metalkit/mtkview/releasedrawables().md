> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/releasedrawables()](https://developer.apple.com/documentation/metalkit/mtkview/releasedrawables())

# releaseDrawables() (Swift)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Releases the [depthStencilTexture](depthstenciltexture.md) and [multisampleColorTexture](multisamplecolortexture.md) objects.

## Declaration

```swift
func releaseDrawables()
```

<a id="Discussion"></a>

## Discussion

Call this method when your app is moving to the background or when the view won’t display content for a significant period of time. The texture objects that this class creates consume a large amount of memory, so freeing them makes that memory available to other parts of your app.

# releaseDrawables (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Releases the [depthStencilTexture](depthstenciltexture.md) and [multisampleColorTexture](multisamplecolortexture.md) objects.

## Declaration

```objectivec
- (void) releaseDrawables;
```

<a id="Discussion"></a>

## Discussion

Call this method when your app is moving to the background or when the view won’t display content for a significant period of time. The texture objects that this class creates consume a large amount of memory, so freeing them makes that memory available to other parts of your app.
