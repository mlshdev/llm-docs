> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseobject/removechild(_:)](https://developer.apple.com/documentation/phase/phaseobject/removechild(_:))

# removeChild(\_:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Removes the given object as a child.

## Declaration

```swift
func removeChild(_ child: PHASEObject)
```

## Parameters

- `child`: The object to remove from the [children](children.md) array.

## See Also

### Managing the Hierarchy

- [children](children.md): Objects that position and orient in the scene relative to the given object.
- [parent](parent.md): The object that this instance positions and orients relative to in the scene.
- [addChild(\_:)](addchild%28__%29.md): Adds the given object as a child.
- [removeChildren()](removechildren%28%29.md): Removes all child objects from the given object.

# removeChild: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Removes the given object as a child.

## Declaration

```objectivec
- (void) removeChild:(PHASEObject *) child;
```

## Parameters

- `child`: The object to remove from the [children](children.md) array.

## See Also

### Managing the Hierarchy

- [children](children.md): Objects that position and orient in the scene relative to the given object.
- [parent](parent.md): The object that this instance positions and orients relative to in the scene.
- [addChild:error:](addchild%28__%29.md): Adds the given object as a child.
- [removeChildren](removechildren%28%29.md): Removes all child objects from the given object.
