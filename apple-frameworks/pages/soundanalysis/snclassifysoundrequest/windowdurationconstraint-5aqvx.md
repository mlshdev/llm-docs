> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/soundanalysis/snclassifysoundrequest/windowdurationconstraint-5aqvx

# windowDurationConstraint

**Interface language:** Objective-C

**Framework:** Sound Analysis  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A range or list of sound duration times the request’s underlying sound classifier supports.

## Declaration

```objectivec
@property (strong, readonly) SNTimeDurationConstraint * windowDurationConstraint;
```

<a id="Discussion"></a>

## Discussion

Configure the request’s [windowDuration](windowduration.md) property with a value that satisfies the window duration constraint.

## See Also

### Instance Properties

- [SNTimeDurationConstraint](../sntimedurationconstraint-c.class.md): Defines the time duration windows the request’s underlying sound classifier accepts with a range, or an array, of durations.
