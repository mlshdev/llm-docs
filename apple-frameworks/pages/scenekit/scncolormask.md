> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncolormask](https://developer.apple.com/documentation/scenekit/scncolormask)

# SCNColorMask (Swift)

**Framework:** SceneKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

## Declaration

```swift
struct SCNColorMask
```

## Topics

### Initializers

- [init(rawValue:)](scncolormask/init%28rawvalue_%29.md): Deprecated.

### Type Properties

- [all](scncolormask/all.md)
- [alpha](scncolormask/alpha.md)
- [blue](scncolormask/blue.md)
- [green](scncolormask/green.md)
- [red](scncolormask/red.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Managing Render Targets

- [writesToDepthBuffer](scnmaterial/writestodepthbuffer.md): A Boolean value that determines whether SceneKit produces depth information when rendering the material.
- [readsFromDepthBuffer](scnmaterial/readsfromdepthbuffer.md): A Boolean value that determines whether SceneKit uses depth information when rendering the material.
- [colorBufferWriteMask](scnmaterial/colorbufferwritemask.md)

# SCNColorMask (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

## Declaration

```objectivec
enum SCNColorMask : NSInteger;
```

## Topics

### Enumeration Cases

- [SCNColorMaskNone](scncolormask/scncolormasknone.md): Deprecated.
- [SCNColorMaskAll](scncolormask/all.md)
- [SCNColorMaskAlpha](scncolormask/alpha.md)
- [SCNColorMaskBlue](scncolormask/blue.md)
- [SCNColorMaskGreen](scncolormask/green.md)
- [SCNColorMaskRed](scncolormask/red.md)

## See Also

### Managing Render Targets

- [writesToDepthBuffer](scnmaterial/writestodepthbuffer.md): A Boolean value that determines whether SceneKit produces depth information when rendering the material.
- [readsFromDepthBuffer](scnmaterial/readsfromdepthbuffer.md): A Boolean value that determines whether SceneKit uses depth information when rendering the material.
- [colorBufferWriteMask](scnmaterial/colorbufferwritemask.md)
