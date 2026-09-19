> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/armattegenerator/generatematte(from:commandbuffer:)

# generateMatte(from:commandBuffer:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Generates alpha matte at either full resolution or half the resolution of the captured image.

## Declaration

```swift
func generateMatte(from frame: ARFrame, commandBuffer: any MTLCommandBuffer) -> any MTLTexture
```

<a id="return-value"></a>

## Return Value

An alpha matte texture at the resolution you chose at initialization.

# generateMatteFromFrame:commandBuffer: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Generates alpha matte at either full resolution or half the resolution of the captured image.

## Declaration

```objectivec
- (id<MTLTexture>) generateMatteFromFrame:(ARFrame *) frame commandBuffer:(id<MTLCommandBuffer>) commandBuffer;
```

<a id="return-value"></a>

## Return Value

An alpha matte texture at the resolution you chose at initialization.
