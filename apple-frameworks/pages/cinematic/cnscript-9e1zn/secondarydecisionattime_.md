> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-9e1zn/secondarydecisionattime:](https://developer.apple.com/documentation/cinematic/cnscript-9e1zn/secondarydecisionattime:)

# secondaryDecisionAtTime:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

If a given time is during a focus transition, the system transitions toward a secondary decision.

## Declaration

```objectivec
- (CNDecision *) secondaryDecisionAtTime:(CMTime) time;
```

## Parameters

- `time`: The time of the focus transition.

<a id="return-value"></a>

## Return Value

The secondary decision the system is transitioning toward for the given time.
