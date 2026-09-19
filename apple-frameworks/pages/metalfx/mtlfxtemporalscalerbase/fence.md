> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalfx/mtlfxtemporalscalerbase/fence

# fence (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

An optional fence that you provide to synchronize your app’s untracked resources.

## Declaration

```swift
var fence: (any MTLFence)? { get set }
```

# fence (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS · visionOS 1.0+

An optional fence that you provide to synchronize your app’s untracked resources.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLFence> fence;
```
