> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsdatastore/mainappcontext](https://developer.apple.com/documentation/classkit/clsdatastore/mainappcontext)

# mainAppContext (Swift)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

The app’s top-level context.

## Declaration

```swift
var mainAppContext: CLSContext { get }
```

<a id="Discussion"></a>

## Discussion

Every app has exactly one top-level context that acts as the root node in a hierarchy of contexts that you define. Its identifier is the app’s bundle identifier. You can neither create nor destroy this context.

## See Also

### Accessing specific contexts and activities

- [activeContext](activecontext.md): The currently active context.
- [runningActivity](runningactivity.md): The currently running activity within the currently active context.
- [fetchActivity(for:completion:)](fetchactivity%28for_completion_%29.md): Fetches an activity for a given document so you can record progress on the associated task.
- [completeAllAssignedActivities(matching:)](completeallassignedactivities%28matching_%29.md): Marks all of the assigned and active activities for the given context path as complete.

# mainAppContext (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The app’s top-level context.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) CLSContext * mainAppContext;
```

<a id="Discussion"></a>

## Discussion

Every app has exactly one top-level context that acts as the root node in a hierarchy of contexts that you define. Its identifier is the app’s bundle identifier. You can neither create nor destroy this context.

## See Also

### Accessing specific contexts and activities

- [activeContext](activecontext.md): The currently active context.
- [runningActivity](runningactivity.md): The currently running activity within the currently active context.
- [fetchActivityForURL:completion:](fetchactivity%28for_completion_%29.md): Fetches an activity for a given document so you can record progress on the associated task.
- [completeAllAssignedActivitiesMatching:](completeallassignedactivities%28matching_%29.md): Marks all of the assigned and active activities for the given context path as complete.
