> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetcarlockstatusintenthandling/resolvelocked(for:with:)](https://developer.apple.com/documentation/intents/insetcarlockstatusintenthandling/resolvelocked(for:with:))

# resolveLocked(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the requested lock status (locked or unlocked).

## Declaration

```swift
optional func resolveLocked(for intent: INSetCarLockStatusIntent, with completion: @escaping @Sendable (INBooleanResolutionResult) -> Void)
```

```swift
optional func resolveLocked(for intent: INSetCarLockStatusIntent) async -> INBooleanResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the requested lock status (locked or unlocked).

<a id="Discussion"></a>

## Discussion

Implement this method to verify the requested lock status. This status is a Boolean value: [true](https://developer.apple.com/documentation/swift/true) indicates that the car should be locked, [false](https://developer.apple.com/documentation/swift/false) indicates it should be unlocked.

## See Also

### Resolving the Intent Parameters

- [resolveCarName(for:with:)](resolvecarname%28for_with_%29.md): Resolves the name of the user’s car.

# resolveLockedForSetCarLockStatus:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the requested lock status (locked or unlocked).

## Declaration

```objectivec
- (void) resolveLockedForSetCarLockStatus:(INSetCarLockStatusIntent *) intent withCompletion:(void (^)(INBooleanResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the requested lock status (locked or unlocked).

<a id="Discussion"></a>

## Discussion

Implement this method to verify the requested lock status. This status is a Boolean value: [true](https://developer.apple.com/documentation/swift/true) indicates that the car should be locked, [false](https://developer.apple.com/documentation/swift/false) indicates it should be unlocked.

## See Also

### Resolving the Intent Parameters

- [resolveCarNameForSetCarLockStatus:withCompletion:](resolvecarname%28for_with_%29.md): Resolves the name of the user’s car.
