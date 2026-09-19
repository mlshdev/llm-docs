> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phaseducker/attacktime

# attackTime (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The amount of time for sound reduction to reach maximum strength.

## Declaration

```swift
var attackTime: Double { get }
```

## See Also

### Configuring Volume Reduction

- [gain](gain.md): The amount of volume reduction.
- [identifier](identifier.md): A unique value for the ducker.
- [isActive](isactive.md): A Boolean value that determines whether the ducker reduces sound.
- [attackCurve](attackcurve.md): A mathematical curve that shapes transition progress as sound reduction begins.
- [releaseTime](releasetime.md): The amount of time to transition from maximum sound reduction to no reduction.
- [releaseCurve](releasecurve.md): A mathematical curve that shapes transition progress as sound reduction ends.

# attackTime (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The amount of time for sound reduction to reach maximum strength.

## Declaration

```objectivec
@property (nonatomic, readonly) double attackTime;
```

## See Also

### Configuring Volume Reduction

- [gain](gain.md): The amount of volume reduction.
- [identifier](identifier.md): A unique value for the ducker.
- [active](isactive.md): A Boolean value that determines whether the ducker reduces sound.
- [attackCurve](attackcurve.md): A mathematical curve that shapes transition progress as sound reduction begins.
- [releaseTime](releasetime.md): The amount of time to transition from maximum sound reduction to no reduction.
- [releaseCurve](releasecurve.md): A mathematical curve that shapes transition progress as sound reduction ends.
