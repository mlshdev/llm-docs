> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivitydelegate/useractivitywascontinued(_:)](https://developer.apple.com/documentation/foundation/nsuseractivitydelegate/useractivitywascontinued(_:))

# userActivityWasContinued(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Notifies the delegate that the user activity was continued on another device.

## Declaration

```swift
optional func userActivityWasContinued(_ userActivity: NSUserActivity)
```

## Parameters

- `userActivity`: The user activity that was continued.

## See Also

### Managing activity continuation

- [userActivityWillSave(\_:)](useractivitywillsave%28__%29.md): Notifies the delegate that the user activity will be saved to be continued or persisted.

# userActivityWasContinued: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Notifies the delegate that the user activity was continued on another device.

## Declaration

```objectivec
- (void) userActivityWasContinued:(NSUserActivity *) userActivity;
```

## Parameters

- `userActivity`: The user activity that was continued.

## See Also

### Managing activity continuation

- [userActivityWillSave:](useractivitywillsave%28__%29.md): Notifies the delegate that the user activity will be saved to be continued or persisted.
