> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalfx/mtlfxtemporaldenoisedscalerbase/fence

# fence (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

An optional fence that this denoiser scaler waits for and updates.

## Declaration

```swift
var fence: (any MTLFence)? { get set }
```

<a id="discussion"></a>

## Discussion

Use this property for synchronizing access to untracked resources.

# fence (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

An optional fence that this denoiser scaler waits for and updates.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLFence> fence;
```

<a id="discussion"></a>

## Discussion

Use this property for synchronizing access to untracked resources.
