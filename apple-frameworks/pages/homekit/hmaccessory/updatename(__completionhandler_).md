> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessory/updatename(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmaccessory/updatename(_:completionhandler:))

# updateName(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Changes the name of the accessory.

## Declaration

```swift
func updateName(_ name: String, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func updateName(_ name: String) async throws
```

## Parameters

- `name`: The new name.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Identifying an Accessory

- [name](name.md): The name of the accessory.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for the accessory.
- [identifier](identifier.md): Deprecated. A unique identifier for the accessory.

# updateName:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Changes the name of the accessory.

## Declaration

```objectivec
- (void) updateName:(NSString *) name completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `name`: The new name.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Identifying an Accessory

- [name](name.md): The name of the accessory.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for the accessory.
- [identifier](identifier.md): Deprecated. A unique identifier for the accessory.
