> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivityactivationresult/activationdisabled](https://developer.apple.com/documentation/groupactivities/groupactivityactivationresult/activationdisabled)

# GroupActivityActivationResult.activationDisabled

**Framework:** Group Activities  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A result that indicates the user disabled the automatic sharing of activities, or prefers to perform the activity locally.

## Declaration

```swift
case activationDisabled
```

<a id="discussion"></a>

## Discussion

Use the available context to determine the best way to proceed with this action. For example, instead of sharing a movie with a group, configure playback locally on the user’s device. For activities that only make sense in a group environment, you might alert the user that you can’t start the activity.

## See Also

### Getting the activation results

- [GroupActivityActivationResult.activationPreferred](activationpreferred.md): A result that indicates the user wants to share the activity with the group.
- [GroupActivityActivationResult.cancelled](cancelled.md): A result that indicates the user canceled the activation request.
