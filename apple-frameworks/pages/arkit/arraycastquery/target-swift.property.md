> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arraycastquery/target-swift.property](https://developer.apple.com/documentation/arkit/arraycastquery/target-swift.property)

# target (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A plane type that allows the raycast to terminate if it’s encountered.

## Declaration

```swift
var target: ARRaycastQuery.Target { get }
```

<a id="Discussion"></a>

## Discussion

The available target types are plane, infinite plane, and estimated plane.

## See Also

### Specifying the Target

- [ARRaycastQuery.Target](target-swift.enum.md): The types of surface you allow a raycast to intersect with.
- [targetAlignment](targetalignment-swift.property.md): The target’s alignment with respect to gravity.
- [ARRaycastQuery.TargetAlignment](targetalignment-swift.enum.md): A specification that indicates a target’s alignment with respect to gravity

# target (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A plane type that allows the raycast to terminate if it’s encountered.

## Declaration

```objectivec
@property (nonatomic, readonly) ARRaycastTarget target;
```

<a id="Discussion"></a>

## Discussion

The available target types are plane, infinite plane, and estimated plane.

## See Also

### Specifying the Target

- [ARRaycastTarget](target-swift.enum.md): The types of surface you allow a raycast to intersect with.
- [targetAlignment](targetalignment-swift.property.md): The target’s alignment with respect to gravity.
- [ARRaycastTargetAlignment](targetalignment-swift.enum.md): A specification that indicates a target’s alignment with respect to gravity
