> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arframe/worldmappingstatus-swift.enum/limited](https://developer.apple.com/documentation/arkit/arframe/worldmappingstatus-swift.enum/limited)

# ARFrame.WorldMappingStatus.limited (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+

World tracking has not yet sufficiently mapped the area around the current device position.

## Declaration

```swift
case limited
```

<a id="Discussion"></a>

## Discussion

When the [worldMappingStatus](../worldmappingstatus-swift.property.md) of the session’s [currentFrame](../../arsession/currentframe.md) is [ARFrame.WorldMappingStatus.limited](limited.md), the session has not yet fully mapped the real-world space around the device, nor the scene visible to the camera.

Although it is possible at this time to save a world map by calling [getCurrentWorldMap(completionHandler:)](../../arsession/getcurrentworldmap%28completionhandler_%29.md), the resulting [ARWorldMap](../../arworldmap.md) is unlikely to be useful for relocalization in the real-world space near the device’s current position.

To produce a higher quality world map, wait for the user to explore more of their surroundings and the session’s status to change to [ARFrame.WorldMappingStatus.mapped](mapped.md) or [ARFrame.WorldMappingStatus.extending](extending.md).

# ARWorldMappingStatusLimited (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

World tracking has not yet sufficiently mapped the area around the current device position.

## Declaration

```objectivec
ARWorldMappingStatusLimited
```

<a id="Discussion"></a>

## Discussion

When the [worldMappingStatus](../worldmappingstatus-swift.property.md) of the session’s [currentFrame](../../arsession/currentframe.md) is [ARWorldMappingStatusLimited](limited.md), the session has not yet fully mapped the real-world space around the device, nor the scene visible to the camera.

Although it is possible at this time to save a world map by calling [getCurrentWorldMapWithCompletionHandler:](../../arsession/getcurrentworldmap%28completionhandler_%29.md), the resulting [ARWorldMap](../../arworldmap.md) is unlikely to be useful for relocalization in the real-world space near the device’s current position.

To produce a higher quality world map, wait for the user to explore more of their surroundings and the session’s status to change to [ARWorldMappingStatusMapped](mapped.md) or [ARWorldMappingStatusExtending](extending.md).
