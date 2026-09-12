> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cndecision-c.class/initwithtime:detectiongroupid:strong:](https://developer.apple.com/documentation/cinematic/cndecision-c.class/initwithtime:detectiongroupid:strong:)

# initWithTime:detectionGroupID:strong:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Makes a decision to focus on the detection with the given unique detection.

## Declaration

```objectivec
- (instancetype) initWithTime:(CMTime) time detectionGroupID:(CNDetectionGroupID) detectionGroupID strong:(BOOL) isStrong;
```

## Parameters

- `time`: The first presentation time which the subject should be in focus.
- `detectionGroupID`: The unique detection representing the detection to focus on if this isn’t a group decision.
- `isStrong`: A flag representing whether this is a strong decision or not. A strong decision keeps focus for as long as possible.

<a id="return-value"></a>

## Return Value

Creates an object representing a decision to focus on the detection with the given unique detection.

<a id="Discussion"></a>

## Discussion

A strong decision keeps focus for as long as possible on the detected subject.
