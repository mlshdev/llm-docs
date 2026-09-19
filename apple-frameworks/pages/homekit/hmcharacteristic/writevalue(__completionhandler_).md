> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmcharacteristic/writevalue(_:completionhandler:)

# writeValue(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Modifies the value of the characteristic.

## Declaration

```swift
func writeValue(_ value: Any?, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeValue(_ value: Any?) async throws
```

## Parameters

- `value`: The new value.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Controlling a characteristic

- [value](value.md): The current value of the characteristic.
- [readValue(completionHandler:)](readvalue%28completionhandler_%29.md): Reads the value for the characteristic.
- [updateAuthorizationData(\_:completionHandler:)](updateauthorizationdata%28__completionhandler_%29.md): Sets or clears authorization data used when writing to the characteristic.

# writeValue:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Modifies the value of the characteristic.

## Declaration

```objectivec
- (void) writeValue:(id) value completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `value`: The new value.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Controlling a characteristic

- [value](value.md): The current value of the characteristic.
- [readValueWithCompletionHandler:](readvalue%28completionhandler_%29.md): Reads the value for the characteristic.
- [updateAuthorizationData:completionHandler:](updateauthorizationdata%28__completionhandler_%29.md): Sets or clears authorization data used when writing to the characteristic.
