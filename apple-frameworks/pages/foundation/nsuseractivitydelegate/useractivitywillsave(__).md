> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivitydelegate/useractivitywillsave(_:)](https://developer.apple.com/documentation/foundation/nsuseractivitydelegate/useractivitywillsave(_:))

# userActivityWillSave(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Notifies the delegate that the user activity will be saved to be continued or persisted.

## Declaration

```swift
optional func userActivityWillSave(_ userActivity: NSUserActivity)
```

## Parameters

- `userActivity`: The user activity to update.

<a id="Discussion"></a>

## Discussion

The delegate overrides this method to update the activity with current state.

## See Also

### Managing activity continuation

- [userActivityWasContinued(\_:)](useractivitywascontinued%28__%29.md): Notifies the delegate that the user activity was continued on another device.

# userActivityWillSave: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Notifies the delegate that the user activity will be saved to be continued or persisted.

## Declaration

```objectivec
- (void) userActivityWillSave:(NSUserActivity *) userActivity;
```

## Parameters

- `userActivity`: The user activity to update.

<a id="Discussion"></a>

## Discussion

The delegate overrides this method to update the activity with current state.

## See Also

### Managing activity continuation

- [userActivityWasContinued:](useractivitywascontinued%28__%29.md): Notifies the delegate that the user activity was continued on another device.
