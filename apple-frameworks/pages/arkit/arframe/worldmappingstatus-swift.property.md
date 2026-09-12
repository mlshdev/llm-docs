> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arframe/worldmappingstatus-swift.property](https://developer.apple.com/documentation/arkit/arframe/worldmappingstatus-swift.property)

# worldMappingStatus (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+

The feasibility of generating or relocalizing a world map for this frame.

## Declaration

```swift
var worldMappingStatus: ARFrame.WorldMappingStatus { get }
```

<a id="Discussion"></a>

## Discussion

Every world-tracking session builds an internal world map, which ARKit uses to determine the device’s position in the user’s environment. You can save a snapshot of that internal state as an [ARWorldMap](../arworldmap.md) object, which you can use later to resume the saved session or share between devices to create a multiuser AR experience.

While you can call [getCurrentWorldMap(completionHandler:)](../arsession/getcurrentworldmap%28completionhandler_%29.md) at any time during a session, some times are better than others. Use this property to determine whether the session currently has enough data to generate a useful [ARWorldMap](../arworldmap.md) or if it’s better to wait for the session to map more of the user’s local environment first.

## See Also

### Checking world-mapping status

- [ARFrame.WorldMappingStatus](worldmappingstatus-swift.enum.md): A value describing the world mapping status for the area visible in a given frame.

# worldMappingStatus (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+

The feasibility of generating or relocalizing a world map for this frame.

## Declaration

```objectivec
@property (nonatomic, readonly) ARWorldMappingStatus worldMappingStatus;
```

<a id="Discussion"></a>

## Discussion

Every world-tracking session builds an internal world map, which ARKit uses to determine the device’s position in the user’s environment. You can save a snapshot of that internal state as an [ARWorldMap](../arworldmap.md) object, which you can use later to resume the saved session or share between devices to create a multiuser AR experience.

While you can call [getCurrentWorldMapWithCompletionHandler:](../arsession/getcurrentworldmap%28completionhandler_%29.md) at any time during a session, some times are better than others. Use this property to determine whether the session currently has enough data to generate a useful [ARWorldMap](../arworldmap.md) or if it’s better to wait for the session to map more of the user’s local environment first.

## See Also

### Checking world-mapping status

- [ARWorldMappingStatus](worldmappingstatus-swift.enum.md): A value describing the world mapping status for the area visible in a given frame.
