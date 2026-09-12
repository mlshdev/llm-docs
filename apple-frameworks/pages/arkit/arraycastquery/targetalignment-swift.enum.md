> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arraycastquery/targetalignment-swift.enum](https://developer.apple.com/documentation/arkit/arraycastquery/targetalignment-swift.enum)

# ARRaycastQuery.TargetAlignment (Swift)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A specification that indicates a target’s alignment with respect to gravity

## Declaration

```swift
enum TargetAlignment
```

<a id="Discussion"></a>

## Discussion

A raycast ignores potential targets with an alignment different than the one you specify in the raycast query.

## Topics

### Enumeration Cases

- [ARRaycastQuery.TargetAlignment.any](targetalignment-swift.enum/any.md): The case that indicates a target may be aligned in any way with respect to gravity.
- [ARRaycastQuery.TargetAlignment.horizontal](targetalignment-swift.enum/horizontal.md): The case that indicates a target is aligned horizontally with respect to gravity.
- [ARRaycastQuery.TargetAlignment.vertical](targetalignment-swift.enum/vertical.md): The case that indicates a target is aligned vertically with respect to gravity.

### Initializers

- [init(rawValue:)](targetalignment-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying the Target

- [target](target-swift.property.md): A plane type that allows the raycast to terminate if it’s encountered.
- [ARRaycastQuery.Target](target-swift.enum.md): The types of surface you allow a raycast to intersect with.
- [targetAlignment](targetalignment-swift.property.md): The target’s alignment with respect to gravity.

# ARRaycastTargetAlignment (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS

A specification that indicates a target’s alignment with respect to gravity

## Declaration

```objectivec
enum ARRaycastTargetAlignment : NSInteger;
```

<a id="Discussion"></a>

## Discussion

A raycast ignores potential targets with an alignment different than the one you specify in the raycast query.

## Topics

### Enumeration Cases

- [ARRaycastTargetAlignmentAny](targetalignment-swift.enum/any.md): The case that indicates a target may be aligned in any way with respect to gravity.
- [ARRaycastTargetAlignmentHorizontal](targetalignment-swift.enum/horizontal.md): The case that indicates a target is aligned horizontally with respect to gravity.
- [ARRaycastTargetAlignmentVertical](targetalignment-swift.enum/vertical.md): The case that indicates a target is aligned vertically with respect to gravity.

## See Also

### Specifying the Target

- [target](target-swift.property.md): A plane type that allows the raycast to terminate if it’s encountered.
- [ARRaycastTarget](target-swift.enum.md): The types of surface you allow a raycast to intersect with.
- [targetAlignment](targetalignment-swift.property.md): The target’s alignment with respect to gravity.
