> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseducker/gain](https://developer.apple.com/documentation/phase/phaseducker/gain)

# gain (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The amount of volume reduction.

## Declaration

```swift
var gain: Double { get }
```

<a id="Discussion"></a>

## Discussion

When source and target sounds play simultaneously, the value of this property determines the amount that the listener can hear the target sound.  A value of `0` results in full attenuation, and `1` results in no attenuation. The framework clamps the value to the range between `0` and `1`.

## See Also

### Configuring Volume Reduction

- [identifier](identifier.md): A unique value for the ducker.
- [isActive](isactive.md): A Boolean value that determines whether the ducker reduces sound.
- [attackTime](attacktime.md): The amount of time for sound reduction to reach maximum strength.
- [attackCurve](attackcurve.md): A mathematical curve that shapes transition progress as sound reduction begins.
- [releaseTime](releasetime.md): The amount of time to transition from maximum sound reduction to no reduction.
- [releaseCurve](releasecurve.md): A mathematical curve that shapes transition progress as sound reduction ends.

# gain (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The amount of volume reduction.

## Declaration

```objectivec
@property (nonatomic, readonly) double gain;
```

<a id="Discussion"></a>

## Discussion

When source and target sounds play simultaneously, the value of this property determines the amount that the listener can hear the target sound.  A value of `0` results in full attenuation, and `1` results in no attenuation. The framework clamps the value to the range between `0` and `1`.

## See Also

### Configuring Volume Reduction

- [identifier](identifier.md): A unique value for the ducker.
- [active](isactive.md): A Boolean value that determines whether the ducker reduces sound.
- [attackTime](attacktime.md): The amount of time for sound reduction to reach maximum strength.
- [attackCurve](attackcurve.md): A mathematical curve that shapes transition progress as sound reduction begins.
- [releaseTime](releasetime.md): The amount of time to transition from maximum sound reduction to no reduction.
- [releaseCurve](releasecurve.md): A mathematical curve that shapes transition progress as sound reduction ends.
