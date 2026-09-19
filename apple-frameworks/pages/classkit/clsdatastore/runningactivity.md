> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/classkit/clsdatastore/runningactivity

# runningActivity (Swift)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

The currently running activity within the currently active context.

## Declaration

```swift
var runningActivity: CLSActivity? { get }
```

## Mentioned In

- [Recording student progress](../recording-student-progress.md)

<a id="Discussion"></a>

## Discussion

This value is `nil` if there is no currently running activity.

If your deployment target is iOS 11.4 or later, you can have more than one activity running concurrently. When you do this, the [runningActivity](runningactivity.md) property holds the most recently started activity.

## See Also

### Accessing specific contexts and activities

- [mainAppContext](mainappcontext.md): The app’s top-level context.
- [activeContext](activecontext.md): The currently active context.
- [fetchActivity(for:completion:)](fetchactivity%28for_completion_%29.md): Fetches an activity for a given document so you can record progress on the associated task.
- [completeAllAssignedActivities(matching:)](completeallassignedactivities%28matching_%29.md): Marks all of the assigned and active activities for the given context path as complete.

# runningActivity (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The currently running activity within the currently active context.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) CLSActivity * runningActivity;
```

## Mentioned In

- [Recording student progress](../recording-student-progress.md)

<a id="Discussion"></a>

## Discussion

This value is `nil` if there is no currently running activity.

If your deployment target is iOS 11.4 or later, you can have more than one activity running concurrently. When you do this, the [runningActivity](runningactivity.md) property holds the most recently started activity.

## See Also

### Accessing specific contexts and activities

- [mainAppContext](mainappcontext.md): The app’s top-level context.
- [activeContext](activecontext.md): The currently active context.
- [fetchActivityForURL:completion:](fetchactivity%28for_completion_%29.md): Fetches an activity for a given document so you can record progress on the associated task.
- [completeAllAssignedActivitiesMatching:](completeallassignedactivities%28matching_%29.md): Marks all of the assigned and active activities for the given context path as complete.
