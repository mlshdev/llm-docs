> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseobject/removechildren()](https://developer.apple.com/documentation/phase/phaseobject/removechildren())

# removeChildren() (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Removes all child objects from the given object.

## Declaration

```swift
func removeChildren()
```

<a id="Discussion"></a>

## Discussion

This function removes all members from the [children](children.md) array.

## See Also

### Managing the Hierarchy

- [children](children.md): Objects that position and orient in the scene relative to the given object.
- [parent](parent.md): The object that this instance positions and orients relative to in the scene.
- [addChild(\_:)](addchild%28__%29.md): Adds the given object as a child.
- [removeChild(\_:)](removechild%28__%29.md): Removes the given object as a child.

# removeChildren (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Removes all child objects from the given object.

## Declaration

```objectivec
- (void) removeChildren;
```

<a id="Discussion"></a>

## Discussion

This function removes all members from the [children](children.md) array.

## See Also

### Managing the Hierarchy

- [children](children.md): Objects that position and orient in the scene relative to the given object.
- [parent](parent.md): The object that this instance positions and orients relative to in the scene.
- [addChild:error:](addchild%28__%29.md): Adds the given object as a child.
- [removeChild:](removechild%28__%29.md): Removes the given object as a child.
