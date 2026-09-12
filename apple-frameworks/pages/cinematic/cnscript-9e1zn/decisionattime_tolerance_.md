> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-9e1zn/decisionattime:tolerance:](https://developer.apple.com/documentation/cinematic/cnscript-9e1zn/decisionattime:tolerance:)

# decisionAtTime:tolerance:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

The closest frame to the given time within the given tolerance.

## Declaration

```objectivec
- (CNDecision *) decisionAtTime:(CMTime) time tolerance:(CMTime) tolerance;
```

## Parameters

- `time`: The time of interest.
- `tolerance`: The tolerance time.

<a id="return-value"></a>

## Return Value

The closest frame to the time of interest within the given tolerance.
