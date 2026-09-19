> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cndetection-c.class/detectionid

# detectionID

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

An unique identifier assigned by the Cinematic script to all detections of the same subject and detection type across time.

## Declaration

```objectivec
@property (readonly) CNDetectionID detectionID;
```

<a id="Discussion"></a>

## Discussion

When you build a custom detection tract and add it to the script, the system assigns the detection ID.
