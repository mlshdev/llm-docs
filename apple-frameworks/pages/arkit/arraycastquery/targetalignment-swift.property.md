> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arraycastquery/targetalignment-swift.property](https://developer.apple.com/documentation/arkit/arraycastquery/targetalignment-swift.property)

# targetAlignment (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The target’s alignment with respect to gravity.

## Declaration

```swift
var targetAlignment: ARRaycastQuery.TargetAlignment { get }
```

<a id="Discussion"></a>

## Discussion

The available options are horizontal, vertical, or any.

## See Also

### Specifying the Target

- [target](target-swift.property.md): A plane type that allows the raycast to terminate if it’s encountered.
- [ARRaycastQuery.Target](target-swift.enum.md): The types of surface you allow a raycast to intersect with.
- [ARRaycastQuery.TargetAlignment](targetalignment-swift.enum.md): A specification that indicates a target’s alignment with respect to gravity

# targetAlignment (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The target’s alignment with respect to gravity.

## Declaration

```objectivec
@property (nonatomic, readonly) ARRaycastTargetAlignment targetAlignment;
```

<a id="Discussion"></a>

## Discussion

The available options are horizontal, vertical, or any.

## See Also

### Specifying the Target

- [target](target-swift.property.md): A plane type that allows the raycast to terminate if it’s encountered.
- [ARRaycastTarget](target-swift.enum.md): The types of surface you allow a raycast to intersect with.
- [ARRaycastTargetAlignment](targetalignment-swift.enum.md): A specification that indicates a target’s alignment with respect to gravity
