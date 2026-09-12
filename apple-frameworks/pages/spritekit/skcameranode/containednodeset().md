> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skcameranode/containednodeset()](https://developer.apple.com/documentation/spritekit/skcameranode/containednodeset())

# containedNodeSet() (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Finds nodes that are visible in the camera’s viewport.

## Declaration

```swift
func containedNodeSet() -> Set<SKNode>
```

<a id="return-value"></a>

## Return Value

The set of nodes that are in the same scene as the camera and contained in the camera’s viewport.

<a id="Discussion"></a>

## Discussion

The camera must be part of a scene’s node hierarchy and the scene must be presented in an view.

## See Also

### Node Visibility

- [contains(\_:)](contains%28__%29.md): Checks to see if a node is visible in the camera’s viewport.

# containedNodeSet (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Finds nodes that are visible in the camera’s viewport.

## Declaration

```objectivec
- (NSSet<SKNode *> *) containedNodeSet;
```

<a id="return-value"></a>

## Return Value

The set of nodes that are in the same scene as the camera and contained in the camera’s viewport.

<a id="Discussion"></a>

## Discussion

The camera must be part of a scene’s node hierarchy and the scene must be presented in an view.

## See Also

### Node Visibility

- [containsNode:](contains%28__%29.md): Checks to see if a node is visible in the camera’s viewport.
