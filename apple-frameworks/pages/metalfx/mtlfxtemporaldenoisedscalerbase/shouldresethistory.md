> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalfx/mtlfxtemporaldenoisedscalerbase/shouldresethistory

# shouldResetHistory (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A Boolean property indicating whether to reset history.

## Declaration

```swift
var shouldResetHistory: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to invalidate history, for example when there is a scene cut in your game.

# shouldResetHistory (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A Boolean property indicating whether to reset history.

## Declaration

```objectivec
@property (nonatomic) BOOL shouldResetHistory;
```

<a id="discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to invalidate history, for example when there is a scene cut in your game.
