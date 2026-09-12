> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/armattegenerator/init(device:matteresolution:)](https://developer.apple.com/documentation/arkit/armattegenerator/init(device:matteresolution:))

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
