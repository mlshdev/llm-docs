> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkapplicationdelegate/handle(_:)-3kqsk](https://developer.apple.com/documentation/watchkit/wkapplicationdelegate/handle(_:)-3kqsk)

# handle(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+

Responds to Handoff–related activity from Siri.

## Declaration

```swift
optional func handle(_ userActivity: NSUserActivity)
```

## Parameters

- `userActivity`: The activity object containing the data associated with the task the user was performing. Use the data to continue the user’s activity in your app on Apple Watch.

<a id="Discussion"></a>

## Discussion

WatchKit calls this method when it receives data associated with a user activity. Use this method to update your app on Apple Watch so that the user can continue the activity from where they left off.

## See Also

### Coordinating Handoff activity

- [handleUserActivity(\_:)](handleuseractivity%28__%29.md): Responds to Handoff–related activity from complications and notifications.

# handleActivity: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+

Responds to Handoff–related activity from Siri.

## Declaration

```objectivec
- (void) handleActivity:(NSUserActivity *) userActivity;
```

## Parameters

- `userActivity`: The activity object containing the data associated with the task the user was performing. Use the data to continue the user’s activity in your app on Apple Watch.

<a id="Discussion"></a>

## Discussion

WatchKit calls this method when it receives data associated with a user activity. Use this method to update your app on Apple Watch so that the user can continue the activity from where they left off.

## See Also

### Coordinating Handoff activity

- [handleUserActivity:](handleuseractivity%28__%29.md): Responds to Handoff–related activity from complications and notifications.
