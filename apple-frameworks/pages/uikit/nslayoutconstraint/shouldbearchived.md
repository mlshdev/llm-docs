> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutconstraint/shouldbearchived](https://developer.apple.com/documentation/uikit/nslayoutconstraint/shouldbearchived)

# shouldBeArchived (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that determines whether the constraint should be archived by its owning view.

## Declaration

```swift
var shouldBeArchived: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When a view is archived, it archives some but not all constraints in its [constraints](../uiview/constraints.md) array. The value of [shouldBeArchived](shouldbearchived.md) informs the view if a particular constraint should be archived by the view.

If a constraint is created at runtime in response to the state of the object, it isn’t appropriate to archive the constraint. Instead you archive the state that gives rise to the constraint. The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

# shouldBeArchived (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that determines whether the constraint should be archived by its owning view.

## Declaration

```objectivec
@property BOOL shouldBeArchived;
```

<a id="Discussion"></a>

## Discussion

When a view is archived, it archives some but not all constraints in its [constraints](../uiview/constraints.md) array. The value of [shouldBeArchived](shouldbearchived.md) informs the view if a particular constraint should be archived by the view.

If a constraint is created at runtime in response to the state of the object, it isn’t appropriate to archive the constraint. Instead you archive the state that gives rise to the constraint. The default value for this property is [false](https://developer.apple.com/documentation/swift/false).
