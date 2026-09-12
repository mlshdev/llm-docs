> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arframe/worldmappingstatus-swift.enum/notavailable](https://developer.apple.com/documentation/arkit/arframe/worldmappingstatus-swift.enum/notavailable)

# ARFrame.WorldMappingStatus.notAvailable (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+

No world map is available.

## Declaration

```swift
case notAvailable
```

<a id="Discussion"></a>

## Discussion

When the [worldMappingStatus](../worldmappingstatus-swift.property.md) of the session’s [currentFrame](../../arsession/currentframe.md) is [ARFrame.WorldMappingStatus.notAvailable](notavailable.md), the session has no internal map of the real-world space around the device, nor the scene visible to the camera. Calling [getCurrentWorldMap(completionHandler:)](../../arsession/getcurrentworldmap%28completionhandler_%29.md) at this time results in an error.

This status occurs shortly after starting a new session. To save or share a world map, wait for the user to explore their surroundings and the session’s status to change to [ARFrame.WorldMappingStatus.mapped](mapped.md) or [ARFrame.WorldMappingStatus.extending](extending.md).

# ARWorldMappingStatusNotAvailable (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

No world map is available.

## Declaration

```objectivec
ARWorldMappingStatusNotAvailable
```

<a id="Discussion"></a>

## Discussion

When the [worldMappingStatus](../worldmappingstatus-swift.property.md) of the session’s [currentFrame](../../arsession/currentframe.md) is [ARWorldMappingStatusNotAvailable](notavailable.md), the session has no internal map of the real-world space around the device, nor the scene visible to the camera. Calling [getCurrentWorldMapWithCompletionHandler:](../../arsession/getcurrentworldmap%28completionhandler_%29.md) at this time results in an error.

This status occurs shortly after starting a new session. To save or share a world map, wait for the user to explore their surroundings and the session’s status to change to [ARWorldMappingStatusMapped](mapped.md) or [ARWorldMappingStatusExtending](extending.md).
