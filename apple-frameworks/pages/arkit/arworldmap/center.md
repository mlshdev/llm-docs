> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arworldmap/center](https://developer.apple.com/documentation/arkit/arworldmap/center)

# center (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+

The center point of the world map’s space-mapping data, relative to the world coordinate origin of the session the map was recorded in.

## Declaration

```swift
var center: simd_float3 { get }
```

<a id="Discussion"></a>

## Discussion

The [extent](extent.md) and [center](center.md) properties together define a bounding box for the data recorded in the world map.

## See Also

### Examining a World Map

- [anchors](anchors.md): The set of anchors recorded in the world map.
- [extent](extent.md): The size of the world map’s space-mapping data, relative to the world coordinate origin of the session the map was recorded in.

# center (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+

The center point of the world map’s space-mapping data, relative to the world coordinate origin of the session the map was recorded in.

## Declaration

```objectivec
@property (nonatomic, readonly) simd_float3 center;
```

<a id="Discussion"></a>

## Discussion

The [extent](extent.md) and [center](center.md) properties together define a bounding box for the data recorded in the world map.

## See Also

### Examining a World Map

- [anchors](anchors.md): The set of anchors recorded in the world map.
- [extent](extent.md): The size of the world map’s space-mapping data, relative to the world coordinate origin of the session the map was recorded in.
