> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/armattegenerator/init(device:matteresolution:)

# init(device:matteResolution:) (Swift)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Creates an AR matte generator.

## Declaration

```swift
init(device: any MTLDevice, matteResolution: ARMatteGenerator.Resolution)
```

<a id="Discussion"></a>

## Discussion

To create matte textures in real-time, create this object once and reuse it every frame.

# initWithDevice:matteResolution: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Creates an AR matte generator.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device matteResolution:(ARMatteResolution) matteResolution;
```

<a id="Discussion"></a>

## Discussion

To create matte textures in real-time, create this object once and reuse it every frame.
