> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseobject/children](https://developer.apple.com/documentation/phase/phaseobject/children)

# children (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Objects that position and orient in the scene relative to the given object.

## Declaration

```swift
var children: [PHASEObject] { get }
```

<a id="Discussion"></a>

## Discussion

To manage members of this array, use [addChild(\_:)](addchild%28__%29.md),  [removeChild(\_:)](removechild%28__%29.md), and [removeChildren()](removechildren%28%29.md).

## See Also

### Managing the Hierarchy

- [parent](parent.md): The object that this instance positions and orients relative to in the scene.
- [addChild(\_:)](addchild%28__%29.md): Adds the given object as a child.
- [removeChild(\_:)](removechild%28__%29.md): Removes the given object as a child.
- [removeChildren()](removechildren%28%29.md): Removes all child objects from the given object.

# children (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Objects that position and orient in the scene relative to the given object.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<PHASEObject *> * children;
```

<a id="Discussion"></a>

## Discussion

To manage members of this array, use [addChild:error:](addchild%28__%29.md),  [removeChild:](removechild%28__%29.md), and [removeChildren](removechildren%28%29.md).

## See Also

### Managing the Hierarchy

- [parent](parent.md): The object that this instance positions and orients relative to in the scene.
- [addChild:error:](addchild%28__%29.md): Adds the given object as a child.
- [removeChild:](removechild%28__%29.md): Removes the given object as a child.
- [removeChildren](removechildren%28%29.md): Removes all child objects from the given object.
