> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutconstraint/priority-swift.property](https://developer.apple.com/documentation/appkit/nslayoutconstraint/priority-swift.property)

# priority (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The priority of the constraint.

## Declaration

```swift
var priority: NSLayoutConstraint.Priority { get set }
```

<a id="Discussion"></a>

## Discussion

By default, all constraints are required; this property is set to [required](priority-swift.struct/required.md) in macOS or `UILayoutPriorityRequired` in iOS.

If a constraint’s priority level is less than [required](priority-swift.struct/required.md) in macOS or `UILayoutPriorityRequired` in iOS, then it is optional. Higher priority constraints are satisfied before lower priority constraints; however, optional constraint satisfaction is not all or nothing. If a constraint `a == b` is optional, the constraint-based layout system will attempt to minimize `abs(a-b)`.

Priorities may not change from nonrequired to required, or from required to nonrequired. An exception will be thrown if a priority of [required](priority-swift.struct/required.md) in macOS or `UILayoutPriorityRequired` in iOS is changed to a lower priority, or if a lower priority is changed to a required priority after the constraints is added to a view. Changing from one optional priority to another optional priority is allowed even after the constraint is installed on a view.

Priorities must be greater than 0 and less than or equal to [required](priority-swift.struct/required.md) in macOS or `UILayoutPriorityRequired` in iOS.

## See Also

### Getting the layout priority

- [NSLayoutConstraint.Priority](priority-swift.struct.md): Layout priority used to indicate the relative importance of constraints, allowing Auto Layout to make appropriate tradeoffs when satisfying the constraints of the system as a whole.

# priority (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The priority of the constraint.

## Declaration

```objectivec
@property NSLayoutPriority priority;
```

<a id="Discussion"></a>

## Discussion

By default, all constraints are required; this property is set to [NSLayoutPriorityRequired](priority-swift.struct/required.md) in macOS or `UILayoutPriorityRequired` in iOS.

If a constraint’s priority level is less than [NSLayoutPriorityRequired](priority-swift.struct/required.md) in macOS or `UILayoutPriorityRequired` in iOS, then it is optional. Higher priority constraints are satisfied before lower priority constraints; however, optional constraint satisfaction is not all or nothing. If a constraint `a == b` is optional, the constraint-based layout system will attempt to minimize `abs(a-b)`.

Priorities may not change from nonrequired to required, or from required to nonrequired. An exception will be thrown if a priority of [NSLayoutPriorityRequired](priority-swift.struct/required.md) in macOS or `UILayoutPriorityRequired` in iOS is changed to a lower priority, or if a lower priority is changed to a required priority after the constraints is added to a view. Changing from one optional priority to another optional priority is allowed even after the constraint is installed on a view.

Priorities must be greater than 0 and less than or equal to [NSLayoutPriorityRequired](priority-swift.struct/required.md) in macOS or `UILayoutPriorityRequired` in iOS.

## See Also

### Getting the layout priority

- [NSLayoutPriority](priority-swift.struct.md): Layout priority used to indicate the relative importance of constraints, allowing Auto Layout to make appropriate tradeoffs when satisfying the constraints of the system as a whole.
