> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsdatastore/completeallassignedactivities(matching:)](https://developer.apple.com/documentation/classkit/clsdatastore/completeallassignedactivities(matching:))

# completeAllAssignedActivities(matching:) (Swift)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 11.0+ · visionOS 1.0+

Marks all of the assigned and active activities for the given context path as complete.

## Declaration

```swift
func completeAllAssignedActivities(matching contextPath: [String])
```

## Parameters

- `contextPath`: An array of strings that trace a path of identifiers from [mainAppContext](mainappcontext.md) to a target context with activities you want to mark as complete. The `contextPath` is the same identifier path you use for a call to the [contexts(matchingIdentifierPath:completion:)](contexts%28matchingidentifierpath_completion_%29.md) method, but affects only the last context in the path.

## Mentioned In

- [Recording student progress](../recording-student-progress.md)

<a id="Discussion"></a>

## Discussion

Schoolwork displays a per-student Done indicator to teachers, along with statistics about task completion for the entire class. Students set this indicator in their own view of the Schoolwork app. Use the [completeAllAssignedActivities(matching:)](completeallassignedactivities%28matching_%29.md) method to set the Done status programmatically.

Because you’re taking an action on behalf of the student when you call this method, Schoolwork shows the student a momentary alert in your app’s interface at that time.

Call this method only when you know that the task is complete and the student can’t or won’t work it any further because the task’s allotted time elapsed or because the student submitted all the required information to the teacher. Alternatively, if you already have a submit button in your interface, you can call this method from that button’s handler.

If a teacher reassigns content and the student marks the item done without redoing the activity, ClassKit reports the previously recorded metrics for that assignment to the teacher.

## See Also

### Accessing specific contexts and activities

- [mainAppContext](mainappcontext.md): The app’s top-level context.
- [activeContext](activecontext.md): The currently active context.
- [runningActivity](runningactivity.md): The currently running activity within the currently active context.
- [fetchActivity(for:completion:)](fetchactivity%28for_completion_%29.md): Fetches an activity for a given document so you can record progress on the associated task.

# completeAllAssignedActivitiesMatching: (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Marks all of the assigned and active activities for the given context path as complete.

## Declaration

```objectivec
- (void) completeAllAssignedActivitiesMatching:(NSArray<NSString *> *) contextPath;
```

## Parameters

- `contextPath`: An array of strings that trace a path of identifiers from [mainAppContext](mainappcontext.md) to a target context with activities you want to mark as complete. The `contextPath` is the same identifier path you use for a call to the [contextsMatchingIdentifierPath:completion:](contexts%28matchingidentifierpath_completion_%29.md) method, but affects only the last context in the path.

## Mentioned In

- [Recording student progress](../recording-student-progress.md)

<a id="Discussion"></a>

## Discussion

Schoolwork displays a per-student Done indicator to teachers, along with statistics about task completion for the entire class. Students set this indicator in their own view of the Schoolwork app. Use the [completeAllAssignedActivitiesMatching:](completeallassignedactivities%28matching_%29.md) method to set the Done status programmatically.

Because you’re taking an action on behalf of the student when you call this method, Schoolwork shows the student a momentary alert in your app’s interface at that time.

Call this method only when you know that the task is complete and the student can’t or won’t work it any further because the task’s allotted time elapsed or because the student submitted all the required information to the teacher. Alternatively, if you already have a submit button in your interface, you can call this method from that button’s handler.

If a teacher reassigns content and the student marks the item done without redoing the activity, ClassKit reports the previously recorded metrics for that assignment to the teacher.

## See Also

### Accessing specific contexts and activities

- [mainAppContext](mainappcontext.md): The app’s top-level context.
- [activeContext](activecontext.md): The currently active context.
- [runningActivity](runningactivity.md): The currently running activity within the currently active context.
- [fetchActivityForURL:completion:](fetchactivity%28for_completion_%29.md): Fetches an activity for a given document so you can record progress on the associated task.
