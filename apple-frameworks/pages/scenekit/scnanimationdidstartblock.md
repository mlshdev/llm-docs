> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/scenekit/scnanimationdidstartblock

# SCNAnimationDidStartBlock (Swift)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

## Declaration

```swift
typealias SCNAnimationDidStartBlock = (SCNAnimation, any SCNAnimatable) -> Void
```

## See Also

### Supporting Types

- [SCNAnimationDidStopBlock](scnanimationdidstopblock.md)

# SCNAnimationDidStartBlock (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef void (^)(SCNAnimation *, id<SCNAnimatable>) SCNAnimationDidStartBlock;
```

## See Also

### Supporting Types

- [SCNAnimationDidStopBlock](scnanimationdidstopblock.md)
