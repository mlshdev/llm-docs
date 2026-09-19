> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmservice/updatename(_:completionhandler:)

# updateName(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Updates the name of the service to the specified string.

## Declaration

```swift
func updateName(_ name: String, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func updateName(_ name: String) async throws
```

## Parameters

- `name`: The new name. Must not match an existing name in the home.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Identifying the service

- [name](name.md): The user specified name of the service.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for the service.

# updateName:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Updates the name of the service to the specified string.

## Declaration

```objectivec
- (void) updateName:(NSString *) name completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `name`: The new name. Must not match an existing name in the home.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Identifying the service

- [name](name.md): The user specified name of the service.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for the service.
