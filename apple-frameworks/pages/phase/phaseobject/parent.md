> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseobject/parent](https://developer.apple.com/documentation/phase/phaseobject/parent)

# parent (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The object that this instance positions and orients relative to in the scene.

## Declaration

```swift
weak var parent: PHASEObject? { get }
```

## See Also

### Managing the Hierarchy

- [children](children.md): Objects that position and orient in the scene relative to the given object.
- [addChild(\_:)](addchild%28__%29.md): Adds the given object as a child.
- [removeChild(\_:)](removechild%28__%29.md): Removes the given object as a child.
- [removeChildren()](removechildren%28%29.md): Removes all child objects from the given object.

# parent (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The object that this instance positions and orients relative to in the scene.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) PHASEObject * parent;
```

## See Also

### Managing the Hierarchy

- [children](children.md): Objects that position and orient in the scene relative to the given object.
- [addChild:error:](addchild%28__%29.md): Adds the given object as a child.
- [removeChild:](removechild%28__%29.md): Removes the given object as a child.
- [removeChildren](removechildren%28%29.md): Removes all child objects from the given object.
