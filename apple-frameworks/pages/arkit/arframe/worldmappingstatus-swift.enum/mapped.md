> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arframe/worldmappingstatus-swift.enum/mapped](https://developer.apple.com/documentation/arkit/arframe/worldmappingstatus-swift.enum/mapped)

# ARFrame.WorldMappingStatus.mapped (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+

World tracking has adequately mapped the visible area.

## Declaration

```swift
case mapped
```

## Mentioned In

- [Managing Session Life Cycle and Tracking Quality](../../managing-session-life-cycle-and-tracking-quality.md)

<a id="Discussion"></a>

## Discussion

When the [worldMappingStatus](../worldmappingstatus-swift.property.md) of the session’s [currentFrame](../../arsession/currentframe.md) is [ARFrame.WorldMappingStatus.mapped](mapped.md), the session has produced a high-fidelity internal map of the real-world space around the device’s current position and the scene visible to the camera.

This status provides the highest reliability for relocalizing to a saved world map, provided that:

1. You call [getCurrentWorldMap(completionHandler:)](../../arsession/getcurrentworldmap%28completionhandler_%29.md) to save the world map while the status of the [currentFrame](../../arsession/currentframe.md) is [ARFrame.WorldMappingStatus.mapped](mapped.md).
2. When you run a new session (later or on another device) from that [ARWorldMap](../../arworldmap.md), the device running the new session is at a real-world position and orientation similar to that when the world map was saved.

# ARWorldMappingStatusMapped (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

World tracking has adequately mapped the visible area.

## Declaration

```objectivec
ARWorldMappingStatusMapped
```

## Mentioned In

- [Managing Session Life Cycle and Tracking Quality](../../managing-session-life-cycle-and-tracking-quality.md)

<a id="Discussion"></a>

## Discussion

When the [worldMappingStatus](../worldmappingstatus-swift.property.md) of the session’s [currentFrame](../../arsession/currentframe.md) is [ARWorldMappingStatusMapped](mapped.md), the session has produced a high-fidelity internal map of the real-world space around the device’s current position and the scene visible to the camera.

This status provides the highest reliability for relocalizing to a saved world map, provided that:

1. You call [getCurrentWorldMapWithCompletionHandler:](../../arsession/getcurrentworldmap%28completionhandler_%29.md) to save the world map while the status of the [currentFrame](../../arsession/currentframe.md) is [ARWorldMappingStatusMapped](mapped.md).
2. When you run a new session (later or on another device) from that [ARWorldMap](../../arworldmap.md), the device running the new session is at a real-world position and orientation similar to that when the world map was saved.
