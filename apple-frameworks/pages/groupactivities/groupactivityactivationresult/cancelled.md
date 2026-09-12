> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivityactivationresult/cancelled](https://developer.apple.com/documentation/groupactivities/groupactivityactivationresult/cancelled)

# GroupActivityActivationResult.cancelled

**Framework:** Group Activities  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A result that indicates the user canceled the activation request.

## Declaration

```swift
case cancelled
```

<a id="discussion"></a>

## Discussion

When you receive this result, ignore the activity.

## See Also

### Getting the activation results

- [GroupActivityActivationResult.activationPreferred](activationpreferred.md): A result that indicates the user wants to share the activity with the group.
- [GroupActivityActivationResult.activationDisabled](activationdisabled.md): A result that indicates the user disabled the automatic sharing of activities, or prefers to perform the activity locally.
