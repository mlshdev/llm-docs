> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutconstraint/shouldbearchived](https://developer.apple.com/documentation/appkit/nslayoutconstraint/shouldbearchived)

# shouldBeArchived (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that determines whether the constraint should be archived by its owning view.

## Declaration

```swift
var shouldBeArchived: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When a view is archived, it archives some but not all constraints in its [constraints](../nsview/constraints.md) array. The value of [shouldBeArchived](shouldbearchived.md) informs the view if a particular constraint should be archived by the view.

If a constraint is created at runtime in response to the state of the object, it isn’t appropriate to archive the constraint. Instead you archive the state that gives rise to the constraint. The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

# shouldBeArchived (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that determines whether the constraint should be archived by its owning view.

## Declaration

```objectivec
@property BOOL shouldBeArchived;
```

<a id="Discussion"></a>

## Discussion

When a view is archived, it archives some but not all constraints in its [constraints](../nsview/constraints.md) array. The value of [shouldBeArchived](shouldbearchived.md) informs the view if a particular constraint should be archived by the view.

If a constraint is created at runtime in response to the state of the object, it isn’t appropriate to archive the constraint. Instead you archive the state that gives rise to the constraint. The default value for this property is [false](https://developer.apple.com/documentation/swift/false).
