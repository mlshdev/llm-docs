> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmtrigger/updatename(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmtrigger/updatename(_:completionhandler:))

# updateName(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Updates the name of the trigger.

## Declaration

```swift
func updateName(_ name: String, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func updateName(_ name: String) async throws
```

## Parameters

- `name`: The new name. Must be unique within the home.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Managing Triggers

- [name](name.md): The name of the trigger.
- [isEnabled](isenabled.md): State of the trigger.
- [enable(\_:completionHandler:)](enable%28__completionhandler_%29.md): Changes the enabled state of the trigger.
- [lastFireDate](lastfiredate.md): Deprecated. The last time this trigger fired.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for this trigger.

# updateName:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Updates the name of the trigger.

## Declaration

```objectivec
- (void) updateName:(NSString *) name completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `name`: The new name. Must be unique within the home.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Managing Triggers

- [name](name.md): The name of the trigger.
- [enabled](isenabled.md): State of the trigger.
- [enable:completionHandler:](enable%28__completionhandler_%29.md): Changes the enabled state of the trigger.
- [lastFireDate](lastfiredate.md): Deprecated. The last time this trigger fired.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for this trigger.
