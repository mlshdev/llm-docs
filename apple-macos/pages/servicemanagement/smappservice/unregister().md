> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/servicemanagement/smappservice/unregister()](https://developer.apple.com/documentation/servicemanagement/smappservice/unregister())

# unregister() (Swift)

**Framework:** Service Management  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

Unregisters the service so the system no longer launches it.

## Declaration

```swift
func unregister() throws
```

<a id="Discussion"></a>

## Discussion

This is the opposite operation of [register()](register%28%29.md).

If the service corresponds to a LoginItem, LaunchAgent, or LaunchDaemon and the service is currently running it, the system terminates it. If the service corresponds to the main application, it continues running, but becomes unregistered to prevent future launches at login.

If the service is already unregistered, this method returns [kSMErrorJobNotFound](../ksmerrorjobnotfound.md).

## See Also

### Registering services

- [register()](register%28%29.md): Registers the service so it can begin launching subject to user approval.
- [unregister(completionHandler:)](unregister%28completionhandler_%29.md): Unregisters the service so the system no longer launches it and calls a completion handler you provide with the resulting error value.

# unregisterAndReturnError: (Objective-C)

**Framework:** Service Management  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

Unregisters the service so the system no longer launches it.

## Declaration

```objectivec
- (BOOL) unregisterAndReturnError:(NSError **) error;
```

## Parameters

- `error`: Upon an unsuccessful return, a new [NSError](https://developer.apple.com/documentation/foundation/nserror) object describing the error. Upon successful return, this argument is `NULL`. This argument may be `NULL`.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the service was successfully unregistered; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This is the opposite operation of [registerAndReturnError:](register%28%29.md).

If the service corresponds to a LoginItem, LaunchAgent, or LaunchDaemon and the service is currently running it, the system terminates it. If the service corresponds to the main application, it continues running, but becomes unregistered to prevent future launches at login.

If the service is already unregistered, this method returns [kSMErrorJobNotFound](../ksmerrorjobnotfound.md).

## See Also

### Registering services

- [registerAndReturnError:](register%28%29.md): Registers the service so it can begin launching subject to user approval.
- [unregisterWithCompletionHandler:](unregister%28completionhandler_%29.md): Unregisters the service so the system no longer launches it and calls a completion handler you provide with the resulting error value.
