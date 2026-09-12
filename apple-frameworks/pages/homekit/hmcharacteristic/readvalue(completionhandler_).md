> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristic/readvalue(completionhandler:)](https://developer.apple.com/documentation/homekit/hmcharacteristic/readvalue(completionhandler:))

# readValue(completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Reads the value for the characteristic.

## Declaration

```swift
func readValue(completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func readValue() async throws
```

## Parameters

- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

The value is available from the [value](value.md) property after completion of the request.

## See Also

### Controlling a characteristic

- [value](value.md): The current value of the characteristic.
- [writeValue(\_:completionHandler:)](writevalue%28__completionhandler_%29.md): Modifies the value of the characteristic.
- [updateAuthorizationData(\_:completionHandler:)](updateauthorizationdata%28__completionhandler_%29.md): Sets or clears authorization data used when writing to the characteristic.

# readValueWithCompletionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Reads the value for the characteristic.

## Declaration

```objectivec
- (void) readValueWithCompletionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

The value is available from the [value](value.md) property after completion of the request.

## See Also

### Controlling a characteristic

- [value](value.md): The current value of the characteristic.
- [writeValue:completionHandler:](writevalue%28__completionhandler_%29.md): Modifies the value of the characteristic.
- [updateAuthorizationData:completionHandler:](updateauthorizationdata%28__completionhandler_%29.md): Sets or clears authorization data used when writing to the characteristic.
