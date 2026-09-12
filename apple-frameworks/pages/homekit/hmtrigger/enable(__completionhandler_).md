> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmtrigger/enable(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmtrigger/enable(_:completionhandler:))

# enable(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Changes the enabled state of the trigger.

## Declaration

```swift
func enable(_ enable: Bool, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func enable(_ enable: Bool) async throws
```

## Parameters

- `enable`: `TRUE` to enable the trigger, [false](https://developer.apple.com/documentation/swift/false) to disable it.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

Triggers can only be enabled when they are in a home. You add triggers to a home using the [addTrigger(\_:completionHandler:)](../hmhome/addtrigger%28__completionhandler_%29.md) method of [HMHome](../hmhome.md).

When a trigger is enabled its firing conditions are checked for validity and the system starts tracking the trigger and when it will next fire.

In addition to having valid firing conditions, to be successfully enabled a trigger must have at least one action set associated with it, and every action set associated with the trigger must have at least one action.

## See Also

### Managing Triggers

- [name](name.md): The name of the trigger.
- [updateName(\_:completionHandler:)](updatename%28__completionhandler_%29.md): Updates the name of the trigger.
- [isEnabled](isenabled.md): State of the trigger.
- [lastFireDate](lastfiredate.md): Deprecated. The last time this trigger fired.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for this trigger.

# enable:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Changes the enabled state of the trigger.

## Declaration

```objectivec
- (void) enable:(BOOL) enable completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `enable`: `TRUE` to enable the trigger, [false](https://developer.apple.com/documentation/swift/false) to disable it.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

Triggers can only be enabled when they are in a home. You add triggers to a home using the [addTrigger:completionHandler:](../hmhome/addtrigger%28__completionhandler_%29.md) method of [HMHome](../hmhome.md).

When a trigger is enabled its firing conditions are checked for validity and the system starts tracking the trigger and when it will next fire.

In addition to having valid firing conditions, to be successfully enabled a trigger must have at least one action set associated with it, and every action set associated with the trigger must have at least one action.

## See Also

### Managing Triggers

- [name](name.md): The name of the trigger.
- [updateName:completionHandler:](updatename%28__completionhandler_%29.md): Updates the name of the trigger.
- [enabled](isenabled.md): State of the trigger.
- [lastFireDate](lastfiredate.md): Deprecated. The last time this trigger fired.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for this trigger.
