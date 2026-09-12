> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safetykit/saemergencyresponsemanager/dialvoicecall(tophonenumber:completionhandler:)](https://developer.apple.com/documentation/safetykit/saemergencyresponsemanager/dialvoicecall(tophonenumber:completionhandler:))

# dialVoiceCall(toPhoneNumber:completionHandler:) (Swift)

**Framework:** SafetyKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

Request the system to dial a voice call on behalf of someone involved in a crash.

## Declaration

```swift
func dialVoiceCall(toPhoneNumber phoneNumber: String, completionHandler handler: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func dialVoiceCall(toPhoneNumber phoneNumber: String) async throws -> Bool
```

## Parameters

- `phoneNumber`: The phone number to dial.
- `handler`: The completion handler invoked with the status of the voice call.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func dialVoiceCall(toPhoneNumber phoneNumber: String) async throws -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Apps running in the background or foreground can request to dial a voice call without confirmation. The system doesn’t allow emergency numbers such as 112, 911, or 999.

The system accepts requests only if the app is authorized to receive and handle Crash Detection events, and only for a limited time after a Crash Detection event occurs.

## See Also

### Placing a voice call

- [SAEmergencyResponseManager.VoiceCallStatus](voicecallstatus.md): An enumeration that defines the status of a requested voice call.
- [delegate](delegate.md): The object that receives voice call status updates and requested emergency response actions.

# dialVoiceCallToPhoneNumber:completionHandler: (Objective-C)

**Framework:** SafetyKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

Request the system to dial a voice call on behalf of someone involved in a crash.

## Declaration

```objectivec
- (void) dialVoiceCallToPhoneNumber:(NSString *) phoneNumber completionHandler:(void (^)(BOOL requestAccepted, NSError *error)) handler;
```

## Parameters

- `phoneNumber`: The phone number to dial.
- `handler`: The completion handler invoked with the status of the voice call.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func dialVoiceCall(toPhoneNumber phoneNumber: String) async throws -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Apps running in the background or foreground can request to dial a voice call without confirmation. The system doesn’t allow emergency numbers such as 112, 911, or 999.

The system accepts requests only if the app is authorized to receive and handle Crash Detection events, and only for a limited time after a Crash Detection event occurs.

## See Also

### Placing a voice call

- [SAEmergencyResponseManagerVoiceCallStatus](voicecallstatus.md): An enumeration that defines the status of a requested voice call.
- [delegate](delegate.md): The object that receives voice call status updates and requested emergency response actions.
