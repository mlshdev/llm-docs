> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseducker/releasecurve](https://developer.apple.com/documentation/phase/phaseducker/releasecurve)

# releaseCurve (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A mathematical curve that shapes transition progress as sound reduction ends.

## Declaration

```swift
var releaseCurve: PHASECurveType { get }
```

<a id="Discussion"></a>

## Discussion

This mathematical curve shapes signal progress during the time it takes to transition from maximum sound reduction to no reduction.

## See Also

### Configuring Volume Reduction

- [gain](gain.md): The amount of volume reduction.
- [identifier](identifier.md): A unique value for the ducker.
- [isActive](isactive.md): A Boolean value that determines whether the ducker reduces sound.
- [attackTime](attacktime.md): The amount of time for sound reduction to reach maximum strength.
- [attackCurve](attackcurve.md): A mathematical curve that shapes transition progress as sound reduction begins.
- [releaseTime](releasetime.md): The amount of time to transition from maximum sound reduction to no reduction.

# releaseCurve (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A mathematical curve that shapes transition progress as sound reduction ends.

## Declaration

```objectivec
@property (nonatomic, readonly) PHASECurveType releaseCurve;
```

<a id="Discussion"></a>

## Discussion

This mathematical curve shapes signal progress during the time it takes to transition from maximum sound reduction to no reduction.

## See Also

### Configuring Volume Reduction

- [gain](gain.md): The amount of volume reduction.
- [identifier](identifier.md): A unique value for the ducker.
- [active](isactive.md): A Boolean value that determines whether the ducker reduces sound.
- [attackTime](attacktime.md): The amount of time for sound reduction to reach maximum strength.
- [attackCurve](attackcurve.md): A mathematical curve that shapes transition progress as sound reduction begins.
- [releaseTime](releasetime.md): The amount of time to transition from maximum sound reduction to no reduction.
