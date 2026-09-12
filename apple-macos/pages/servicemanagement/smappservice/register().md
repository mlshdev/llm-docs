> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/servicemanagement/smappservice/register()](https://developer.apple.com/documentation/servicemanagement/smappservice/register())

# register() (Swift)

**Framework:** Service Management  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

Registers the service so it can begin launching subject to user approval.

## Declaration

```swift
func register() throws
```

<a id="Discussion"></a>

## Discussion

The registration process applies to the following rules, depending upon the type of service:

- If the service corresponds to a LoginItem bundle, the helper starts immediately and on subsequent logins. If the helper crashes or exits with a non-zero status, the system relaunches it.
- If the service corresponds to the main application, the application launches on subsequent logins.
- If the service corresponds to a LaunchAgent, the LaunchAgent is immediately bootstrapped and may begin running. In addition LaunchAgents registered with this method bootstrap on each subsequent login.
- If an app needs to register a LaunchAgent for multiple users, you must call the API once per user while that user is running the app.
- If the service corresponds to a LaunchDaemon, the system won’t bootstrap the LaunchDaemon until an admin approves the LaunchDaemon in System Preferences. The system bootstraps LaunchDaemons registered with this method and approved by an admin on each subsequent boot.

If the service is already registered, this method returns [kSMErrorAlreadyRegistered](../ksmerroralreadyregistered.md).

If the service isn’t approved by the user, this method returns [kSMErrorLaunchDeniedByUser](../ksmerrorlaunchdeniedbyuser.md).

## See Also

### Registering services

- [unregister()](unregister%28%29.md): Unregisters the service so the system no longer launches it.
- [unregister(completionHandler:)](unregister%28completionhandler_%29.md): Unregisters the service so the system no longer launches it and calls a completion handler you provide with the resulting error value.

# registerAndReturnError: (Objective-C)

**Framework:** Service Management  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

Registers the service so it can begin launching subject to user approval.

## Declaration

```objectivec
- (BOOL) registerAndReturnError:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the service was successfully registered; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The registration process applies to the following rules, depending upon the type of service:

- If the service corresponds to a LoginItem bundle, the helper starts immediately and on subsequent logins. If the helper crashes or exits with a non-zero status, the system relaunches it.
- If the service corresponds to the main application, the application launches on subsequent logins.
- If the service corresponds to a LaunchAgent, the LaunchAgent is immediately bootstrapped and may begin running. In addition LaunchAgents registered with this method bootstrap on each subsequent login.
- If an app needs to register a LaunchAgent for multiple users, you must call the API once per user while that user is running the app.
- If the service corresponds to a LaunchDaemon, the system won’t bootstrap the LaunchDaemon until an admin approves the LaunchDaemon in System Preferences. The system bootstraps LaunchDaemons registered with this method and approved by an admin on each subsequent boot.

If the service is already registered, this method returns [kSMErrorAlreadyRegistered](../ksmerroralreadyregistered.md).

If the service isn’t approved by the user, this method returns [kSMErrorLaunchDeniedByUser](../ksmerrorlaunchdeniedbyuser.md).

## See Also

### Registering services

- [unregisterAndReturnError:](unregister%28%29.md): Unregisters the service so the system no longer launches it.
- [unregisterWithCompletionHandler:](unregister%28completionhandler_%29.md): Unregisters the service so the system no longer launches it and calls a completion handler you provide with the resulting error value.
