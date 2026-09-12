> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseobject/addchild(_:)](https://developer.apple.com/documentation/phase/phaseobject/addchild(_:))

# addChild(\_:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Adds the given object as a child.

## Declaration

```swift
func addChild(_ child: PHASEObject) throws
```

## Parameters

- `child`: The object to add to the [children](children.md) array.

## Mentioned In

- [Playing sound from a location in a 3D scene](../playing-sound-from-a-location-in-a-3d-scene.md)

<a id="Discussion"></a>

## Discussion

This function throws an error if `child` already has a different parent.

## See Also

### Managing the Hierarchy

- [children](children.md): Objects that position and orient in the scene relative to the given object.
- [parent](parent.md): The object that this instance positions and orients relative to in the scene.
- [removeChild(\_:)](removechild%28__%29.md): Removes the given object as a child.
- [removeChildren()](removechildren%28%29.md): Removes all child objects from the given object.

# addChild:error: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Adds the given object as a child.

## Declaration

```objectivec
- (BOOL) addChild:(PHASEObject *) child error:(NSError **) error;
```

## Parameters

- `child`: The object to add to the [children](children.md) array.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

## Mentioned In

- [Playing sound from a location in a 3D scene](../playing-sound-from-a-location-in-a-3d-scene.md)

<a id="Discussion"></a>

## Discussion

This function throws an error if `child` already has a different parent.

## See Also

### Managing the Hierarchy

- [children](children.md): Objects that position and orient in the scene relative to the given object.
- [parent](parent.md): The object that this instance positions and orients relative to in the scene.
- [removeChild:](removechild%28__%29.md): Removes the given object as a child.
- [removeChildren](removechildren%28%29.md): Removes all child objects from the given object.
