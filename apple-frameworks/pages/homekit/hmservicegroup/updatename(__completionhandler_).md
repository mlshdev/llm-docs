> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmservicegroup/updatename(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmservicegroup/updatename(_:completionhandler:))

# updateName(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Updates the name of the service group.

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

### Managing Service Groups

- [name](name.md): The name of the service group.
- [uniqueIdentifier](uniqueidentifier.md): The unique identifier for the service group.
- [services](services.md): Array of the services in the service group.
- [addService(\_:completionHandler:)](addservice%28__completionhandler_%29.md): Adds a new service to the service group.
- [removeService(\_:completionHandler:)](removeservice%28__completionhandler_%29.md): Removes a service from the service group.

# updateName:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Updates the name of the service group.

## Declaration

```objectivec
- (void) updateName:(NSString *) name completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `name`: The new name; must not be `nil`.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Managing Service Groups

- [name](name.md): The name of the service group.
- [uniqueIdentifier](uniqueidentifier.md): The unique identifier for the service group.
- [services](services.md): Array of the services in the service group.
- [addService:completionHandler:](addservice%28__completionhandler_%29.md): Adds a new service to the service group.
- [removeService:completionHandler:](removeservice%28__completionhandler_%29.md): Removes a service from the service group.
