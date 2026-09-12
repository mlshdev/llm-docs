> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmservicegroup/removeservice(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmservicegroup/removeservice(_:completionhandler:))

# removeService(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Removes a service from the service group.

## Declaration

```swift
func removeService(_ service: HMService, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func removeService(_ service: HMService) async throws
```

## Parameters

- `service`: The service to remove.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Managing Service Groups

- [name](name.md): The name of the service group.
- [uniqueIdentifier](uniqueidentifier.md): The unique identifier for the service group.
- [updateName(\_:completionHandler:)](updatename%28__completionhandler_%29.md): Updates the name of the service group.
- [services](services.md): Array of the services in the service group.
- [addService(\_:completionHandler:)](addservice%28__completionhandler_%29.md): Adds a new service to the service group.

# removeService:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Removes a service from the service group.

## Declaration

```objectivec
- (void) removeService:(HMService *) service completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `service`: The service to remove.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Managing Service Groups

- [name](name.md): The name of the service group.
- [uniqueIdentifier](uniqueidentifier.md): The unique identifier for the service group.
- [updateName:completionHandler:](updatename%28__completionhandler_%29.md): Updates the name of the service group.
- [services](services.md): Array of the services in the service group.
- [addService:completionHandler:](addservice%28__completionhandler_%29.md): Adds a new service to the service group.
