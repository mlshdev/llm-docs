> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clscontext/createnewactivity()](https://developer.apple.com/documentation/classkit/clscontext/createnewactivity())

# createNewActivity() (Swift)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

Creates and returns a new activity instance for the context.

## Declaration

```swift
func createNewActivity() -> CLSActivity
```

<a id="return-value"></a>

## Return Value

A new activity.

## Mentioned In

- [Recording student progress](../recording-student-progress.md)

<a id="Discussion"></a>

## Discussion

Use this method to create a new activity for a context every time a person makes a new attempt at a task. Afterward, use the returned value, or retrieve it by accessing the context’s [currentActivity](currentactivity.md) property. However, don’t store a reference to the activity as a class property because the underlying object may change from time to time as the framework performs network synchronization.

When you call this method on a context that already has an activity, the old activity is stopped and ceases to be accessible to your app, although its data remains in the network.

## See Also

### Creating activities

- [currentActivity](currentactivity.md): The activity available for recording progress.

# createNewActivity (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates and returns a new activity instance for the context.

## Declaration

```objectivec
- (CLSActivity *) createNewActivity;
```

<a id="return-value"></a>

## Return Value

A new activity.

## Mentioned In

- [Recording student progress](../recording-student-progress.md)

<a id="Discussion"></a>

## Discussion

Use this method to create a new activity for a context every time a person makes a new attempt at a task. Afterward, use the returned value, or retrieve it by accessing the context’s [currentActivity](currentactivity.md) property. However, don’t store a reference to the activity as a class property because the underlying object may change from time to time as the framework performs network synchronization.

When you call this method on a context that already has an activity, the old activity is stopped and ceases to be accessible to your app, although its data remains in the network.

## See Also

### Creating activities

- [currentActivity](currentactivity.md): The activity available for recording progress.
