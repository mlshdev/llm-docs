> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseducker/identifier](https://developer.apple.com/documentation/phase/phaseducker/identifier)

# identifier (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A unique value for the ducker.

## Declaration

```swift
var identifier: String { get }
```

## See Also

### Configuring Volume Reduction

- [gain](gain.md): The amount of volume reduction.
- [isActive](isactive.md): A Boolean value that determines whether the ducker reduces sound.
- [attackTime](attacktime.md): The amount of time for sound reduction to reach maximum strength.
- [attackCurve](attackcurve.md): A mathematical curve that shapes transition progress as sound reduction begins.
- [releaseTime](releasetime.md): The amount of time to transition from maximum sound reduction to no reduction.
- [releaseCurve](releasecurve.md): A mathematical curve that shapes transition progress as sound reduction ends.

# identifier (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A unique value for the ducker.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * identifier;
```

## See Also

### Configuring Volume Reduction

- [gain](gain.md): The amount of volume reduction.
- [active](isactive.md): A Boolean value that determines whether the ducker reduces sound.
- [attackTime](attacktime.md): The amount of time for sound reduction to reach maximum strength.
- [attackCurve](attackcurve.md): A mathematical curve that shapes transition progress as sound reduction begins.
- [releaseTime](releasetime.md): The amount of time to transition from maximum sound reduction to no reduction.
- [releaseCurve](releasecurve.md): A mathematical curve that shapes transition progress as sound reduction ends.
