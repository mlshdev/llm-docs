> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/updateuseractivitystate(_:)](https://developer.apple.com/documentation/appkit/nsresponder/updateuseractivitystate(_:))

# updateUserActivityState(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Updates the state of the given user activity.

## Declaration

```swift
func updateUserActivityState(_ userActivity: NSUserActivity)
```

## Parameters

- `userActivity`: The user activity to be updated.

<a id="Discussion"></a>

## Discussion

Subclasses override this method to update the state of the supplied `userActivity`. Add state representing the user’s activity into `userActivity` using its [addUserInfoEntries(from:)](https://developer.apple.com/documentation/foundation/nsuseractivity/adduserinfoentries%28from:%29) method. When the state is dirty, set the [needsSave](https://developer.apple.com/documentation/foundation/nsuseractivity/needssave) property to [true](https://developer.apple.com/documentation/swift/true).

When an [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) object managed by AppKit is updated, an empty `userInfo` dictionary is given to the user activity, and all of the objects associated with the user activity are sent an [NSResponder](../nsresponder.md) message.

## See Also

### Related Documentation

- [NSResponder](../nsresponder.md): An abstract class that forms the basis of event and command processing in AppKit.

### Supporting User Activities

- [userActivity](useractivity.md): An object encapsulating a user activity supported by this responder.

# updateUserActivityState: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Updates the state of the given user activity.

## Declaration

```objectivec
- (void) updateUserActivityState:(NSUserActivity *) userActivity;
```

## Parameters

- `userActivity`: The user activity to be updated.

<a id="Discussion"></a>

## Discussion

Subclasses override this method to update the state of the supplied `userActivity`. Add state representing the user’s activity into `userActivity` using its [addUserInfoEntriesFromDictionary:](https://developer.apple.com/documentation/foundation/nsuseractivity/adduserinfoentries%28from:%29) method. When the state is dirty, set the [needsSave](https://developer.apple.com/documentation/foundation/nsuseractivity/needssave) property to [true](https://developer.apple.com/documentation/swift/true).

When an [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) object managed by AppKit is updated, an empty `userInfo` dictionary is given to the user activity, and all of the objects associated with the user activity are sent an [NSResponder](../nsresponder.md) message.

## See Also

### Related Documentation

- [NSResponder](../nsresponder.md): An abstract class that forms the basis of event and command processing in AppKit.

### Supporting User Activities

- [userActivity](useractivity.md): An object encapsulating a user activity supported by this responder.
