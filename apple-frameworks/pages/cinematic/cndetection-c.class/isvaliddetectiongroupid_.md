> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cndetection-c.class/isvaliddetectiongroupid:](https://developer.apple.com/documentation/cinematic/cndetection-c.class/isvaliddetectiongroupid:)

# isValidDetectionGroupID:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Determines whether a given detection group ID is valid.

## Declaration

```objectivec
+ (BOOL) isValidDetectionGroupID:(CNDetectionGroupID) detectionGroupID;
```

## Parameters

- `detectionGroupID`: A unique identifier assigned by the cinematic script to all detections of the same subject and related detection types across time.

<a id="return-value"></a>

## Return Value

A flag that represents whether a given detection group ID is valid.
