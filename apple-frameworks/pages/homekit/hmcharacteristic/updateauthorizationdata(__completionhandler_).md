> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristic/updateauthorizationdata(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmcharacteristic/updateauthorizationdata(_:completionhandler:))

# updateAuthorizationData(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Sets or clears authorization data used when writing to the characteristic.

## Declaration

```swift
func updateAuthorizationData(_ data: Data?, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func updateAuthorizationData(_ data: Data?) async throws
```

## Parameters

- `data`: New authorization data to use. Pass `nil` to remove authorization data.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Controlling a characteristic

- [value](value.md): The current value of the characteristic.
- [readValue(completionHandler:)](readvalue%28completionhandler_%29.md): Reads the value for the characteristic.
- [writeValue(\_:completionHandler:)](writevalue%28__completionhandler_%29.md): Modifies the value of the characteristic.

# updateAuthorizationData:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Sets or clears authorization data used when writing to the characteristic.

## Declaration

```objectivec
- (void) updateAuthorizationData:(NSData *) data completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `data`: New authorization data to use. Pass `nil` to remove authorization data.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Controlling a characteristic

- [value](value.md): The current value of the characteristic.
- [readValueWithCompletionHandler:](readvalue%28completionhandler_%29.md): Reads the value for the characteristic.
- [writeValue:completionHandler:](writevalue%28__completionhandler_%29.md): Modifies the value of the characteristic.
