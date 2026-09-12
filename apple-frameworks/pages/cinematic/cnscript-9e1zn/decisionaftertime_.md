> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-9e1zn/decisionaftertime:](https://developer.apple.com/documentation/cinematic/cnscript-9e1zn/decisionaftertime:)

# decisionAfterTime:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

The decision that occurs after the given time.

## Declaration

```objectivec
- (CNDecision *) decisionAfterTime:(CMTime) time;
```

## Parameters

- `time`: The time of the decision to occur after.

<a id="return-value"></a>

## Return Value

The decision that occurred after the given time.

<a id="Discussion"></a>

## Discussion

Pass the time of an existing decision to find the next one.
