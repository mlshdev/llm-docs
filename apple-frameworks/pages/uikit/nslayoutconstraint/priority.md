> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutconstraint/priority](https://developer.apple.com/documentation/uikit/nslayoutconstraint/priority)

# priority (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The priority of the constraint.

## Declaration

```swift
var priority: UILayoutPriority { get set }
```

<a id="Discussion"></a>

## Discussion

By default, all constraints are required; this property is set to [required](https://developer.apple.com/documentation/appkit/nslayoutconstraint/priority-swift.struct/required) in macOS or `UILayoutPriorityRequired` in iOS.

If a constraint’s priority level is less than [required](https://developer.apple.com/documentation/appkit/nslayoutconstraint/priority-swift.struct/required) in macOS or `UILayoutPriorityRequired` in iOS, then it is optional. Higher priority constraints are satisfied before lower priority constraints; however, optional constraint satisfaction is not all or nothing. If a constraint `a == b` is optional, the constraint-based layout system will attempt to minimize `abs(a-b)`.

Priorities may not change from nonrequired to required, or from required to nonrequired. An exception will be thrown if a priority of [required](https://developer.apple.com/documentation/appkit/nslayoutconstraint/priority-swift.struct/required) in macOS or `UILayoutPriorityRequired` in iOS is changed to a lower priority, or if a lower priority is changed to a required priority after the constraints is added to a view. Changing from one optional priority to another optional priority is allowed even after the constraint is installed on a view.

Priorities must be greater than 0 and less than or equal to [required](https://developer.apple.com/documentation/appkit/nslayoutconstraint/priority-swift.struct/required) in macOS or `UILayoutPriorityRequired` in iOS.

## See Also

### Getting the layout priority

- [UILayoutPriority](../uilayoutpriority.md): The layout priority is used to indicate to the constraint-based layout system which constraints are more important, allowing the system to make appropriate tradeoffs when satisfying the constraints of the system as a whole.
- [NSLayoutConstraint.Priority](https://developer.apple.com/documentation/appkit/nslayoutconstraint/priority-swift.struct): Layout priority used to indicate the relative importance of constraints, allowing Auto Layout to make appropriate tradeoffs when satisfying the constraints of the system as a whole.

# priority (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The priority of the constraint.

## Declaration

```objectivec
@property UILayoutPriority priority;
```

<a id="Discussion"></a>

## Discussion

By default, all constraints are required; this property is set to [NSLayoutPriorityRequired](https://developer.apple.com/documentation/appkit/nslayoutconstraint/priority-swift.struct/required) in macOS or `UILayoutPriorityRequired` in iOS.

If a constraint’s priority level is less than [NSLayoutPriorityRequired](https://developer.apple.com/documentation/appkit/nslayoutconstraint/priority-swift.struct/required) in macOS or `UILayoutPriorityRequired` in iOS, then it is optional. Higher priority constraints are satisfied before lower priority constraints; however, optional constraint satisfaction is not all or nothing. If a constraint `a == b` is optional, the constraint-based layout system will attempt to minimize `abs(a-b)`.

Priorities may not change from nonrequired to required, or from required to nonrequired. An exception will be thrown if a priority of [NSLayoutPriorityRequired](https://developer.apple.com/documentation/appkit/nslayoutconstraint/priority-swift.struct/required) in macOS or `UILayoutPriorityRequired` in iOS is changed to a lower priority, or if a lower priority is changed to a required priority after the constraints is added to a view. Changing from one optional priority to another optional priority is allowed even after the constraint is installed on a view.

Priorities must be greater than 0 and less than or equal to [NSLayoutPriorityRequired](https://developer.apple.com/documentation/appkit/nslayoutconstraint/priority-swift.struct/required) in macOS or `UILayoutPriorityRequired` in iOS.

## See Also

### Getting the layout priority

- [UILayoutPriority](../uilayoutpriority.md): The layout priority is used to indicate to the constraint-based layout system which constraints are more important, allowing the system to make appropriate tradeoffs when satisfying the constraints of the system as a whole.
- [NSLayoutPriority](https://developer.apple.com/documentation/appkit/nslayoutconstraint/priority-swift.struct): Layout priority used to indicate the relative importance of constraints, allowing Auto Layout to make appropriate tradeoffs when satisfying the constraints of the system as a whole.
