> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsdatastore/activecontext](https://developer.apple.com/documentation/classkit/clsdatastore/activecontext)

# activeContext (Swift)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

The currently active context.

## Declaration

```swift
var activeContext: CLSContext? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if there is no currently active context.

To activate a context when a student begins working on the content that the context represents, call its [becomeActive()](../clscontext/becomeactive%28%29.md) method. To deactivate a context when the student finishes, call its [resignActive()](../clscontext/resignactive%28%29.md) function. Only one context may be active at a time. If you activate a context, the system automatically causes any previously active context to resign.

## See Also

### Accessing specific contexts and activities

- [mainAppContext](mainappcontext.md): The app’s top-level context.
- [runningActivity](runningactivity.md): The currently running activity within the currently active context.
- [fetchActivity(for:completion:)](fetchactivity%28for_completion_%29.md): Fetches an activity for a given document so you can record progress on the associated task.
- [completeAllAssignedActivities(matching:)](completeallassignedactivities%28matching_%29.md): Marks all of the assigned and active activities for the given context path as complete.

# activeContext (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The currently active context.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) CLSContext * activeContext;
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if there is no currently active context.

To activate a context when a student begins working on the content that the context represents, call its [becomeActive](../clscontext/becomeactive%28%29.md) method. To deactivate a context when the student finishes, call its [resignActive](../clscontext/resignactive%28%29.md) function. Only one context may be active at a time. If you activate a context, the system automatically causes any previously active context to resign.

## See Also

### Accessing specific contexts and activities

- [mainAppContext](mainappcontext.md): The app’s top-level context.
- [runningActivity](runningactivity.md): The currently running activity within the currently active context.
- [fetchActivityForURL:completion:](fetchactivity%28for_completion_%29.md): Fetches an activity for a given document so you can record progress on the associated task.
- [completeAllAssignedActivitiesMatching:](completeallassignedactivities%28matching_%29.md): Marks all of the assigned and active activities for the given context path as complete.
