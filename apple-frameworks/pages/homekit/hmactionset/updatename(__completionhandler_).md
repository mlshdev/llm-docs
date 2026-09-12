> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmactionset/updatename(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmactionset/updatename(_:completionhandler:))

# updateName(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Updates the name of the action set.

## Declaration

```swift
func updateName(_ name: String, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func updateName(_ name: String) async throws
```

## Parameters

- `name`: The new name; must not be `nil`.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Identifiying an action set

- [uniqueIdentifier](uniqueidentifier.md): The action set’s unique identifier.
- [name](name.md): The name of the action set.

# updateName:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Updates the name of the action set.

## Declaration

```objectivec
- (void) updateName:(NSString *) name completionHandler:(HMErrorBlock) completion;
```

## Parameters

- `name`: The new name; must not be `nil`.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Identifiying an action set

- [uniqueIdentifier](uniqueidentifier.md): The action set’s unique identifier.
- [name](name.md): The name of the action set.
