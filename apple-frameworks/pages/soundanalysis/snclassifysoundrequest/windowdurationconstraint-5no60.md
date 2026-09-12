> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snclassifysoundrequest/windowdurationconstraint-5no60](https://developer.apple.com/documentation/soundanalysis/snclassifysoundrequest/windowdurationconstraint-5no60)

# windowDurationConstraint

**Framework:** Sound Analysis  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A range or list of sound duration times the request’s underlying sound classifier supports.

## Declaration

```swift
@nonobjc var windowDurationConstraint: SNTimeDurationConstraint { get }
```

<a id="Discussion"></a>

## Discussion

Configure the request’s [windowDuration](windowduration.md) property with a value that satisfies the window duration constraint.
