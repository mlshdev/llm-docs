> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkpath/radius](https://developer.apple.com/documentation/gameplaykit/gkpath/radius)

# radius (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The radius of the path.

## Declaration

```swift
var radius: Float { get set }
```

<a id="Discussion"></a>

## Discussion

This property defines the space occupied by the path—think of this space as the area created by sweeping a circle (or sphere, for 3D paths) of the specified along the path from vertex to vertex. Agents with path-related goals will attempt to move to or stay within this area.

## See Also

### Managing a Path’s Attributes

- [isCyclical](iscyclical.md): A Boolean value that determines whether the path loops around on itself (that is, the path’s end point connects to its start point).

# radius (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The radius of the path.

## Declaration

```objectivec
@property (nonatomic, assign) float radius;
```

<a id="Discussion"></a>

## Discussion

This property defines the space occupied by the path—think of this space as the area created by sweeping a circle (or sphere, for 3D paths) of the specified along the path from vertex to vertex. Agents with path-related goals will attempt to move to or stay within this area.

## See Also

### Managing a Path’s Attributes

- [cyclical](iscyclical.md): A Boolean value that determines whether the path loops around on itself (that is, the path’s end point connects to its start point).
