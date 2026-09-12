> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/servicemanagement/smappservice](https://developer.apple.com/documentation/servicemanagement/smappservice)

# SMAppService (Swift)

**Framework:** Service Management  
**Kind:** Class  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

An object the framework uses to control helper executables that live inside an app’s main bundle.

## Declaration

```swift
class SMAppService
```

<a id="overview"></a>

## Overview

In macOS 13 and later, use `SMAppService` to register and control `LoginItems`, `LaunchAgents`, and `LaunchDaemons` as helper executables for your app. When converting code from earlier versions of macOS, use an `SMAppService` object and select one of the following methods depending on the type of service your helper executable provides:

- For `SMAppServices` initialized as `LoginItems`, the [register()](smappservice/register%28%29.md) and [unregister()](smappservice/unregister%28%29.md) APIs provide a replacement for [SMLoginItemSetEnabled(\_:\_:)](smloginitemsetenabled%28____%29.md).
- For `SMAppServices` initialized as `LaunchAgents`, the [register()](smappservice/register%28%29.md) and [unregister()](smappservice/unregister%28%29.md) methods provide a replacement for installing property lists in `~/Library/LaunchAgents` or `/Library/LaunchAgents`.
- For `SMAppServices` initialized as `LaunchDaemons`, the [register()](smappservice/register%28%29.md) and [unregister()](smappservice/unregister%28%29.md) methods provide a replacement for installing property lists in `/Library/LaunchDaemons`.

## Topics

### Registering services

- [register()](smappservice/register%28%29.md): Registers the service so it can begin launching subject to user approval.
- [unregister()](smappservice/unregister%28%29.md): Unregisters the service so the system no longer launches it.
- [unregister(completionHandler:)](smappservice/unregister%28completionhandler_%29.md): Unregisters the service so the system no longer launches it and calls a completion handler you provide with the resulting error value.

### Managing apps

- [mainApp](smappservice/mainapp.md): An app service object that corresponds to the main application as a login item.
- [agent(plistName:)](smappservice/agent%28plistname_%29.md): Initializes an app service object with a launch agent with the property list name you provide.
- [daemon(plistName:)](smappservice/daemon%28plistname_%29.md): Initializes an app service object with a launch daemon with the property list name you provide.
- [loginItem(identifier:)](smappservice/loginitem%28identifier_%29.md): Initializes an app service object for a login item corresponding to the bundle with the identifier you provide.

### Interacting with System Settings

- [openSystemSettingsLoginItems()](smappservice/opensystemsettingsloginitems%28%29.md): Opens System Settings to the Login Items control panel.

### Getting the state of the service

- [status](smappservice/status-swift.property.md): A property that describes registration or authorization state of the service.
- [SMAppService.Status](smappservice/status-swift.enum.md): Constants that describe the registration or authorization status of a helper executable.

### Checking authorization for earlier OS version login items

- [statusForLegacyPlist(at:)](smappservice/statusforlegacyplist%28at_%29.md): Check the authorization status of an earlier OS version login item.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Management

- [SMJobBless(\_:\_:\_:\_:)](smjobbless%28________%29.md): Deprecated. Submits the executable for the given label as a job to `launchd`.
- [Authorization Constants](authorization-constants.md): Constants that describe the ability to authorize helper executables or modify daemon applications.
- [Property List Keys](property-list-keys.md): Property list keys that describe the kinds of applications, daemons, and helper executables the framework manages.

# SMAppService (Objective-C)

**Framework:** Service Management  
**Kind:** Class  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

An object the framework uses to control helper executables that live inside an app’s main bundle.

## Declaration

```objectivec
@interface SMAppService : NSObject
```

<a id="overview"></a>

## Overview

In macOS 13 and later, use `SMAppService` to register and control `LoginItems`, `LaunchAgents`, and `LaunchDaemons` as helper executables for your app. When converting code from earlier versions of macOS, use an `SMAppService` object and select one of the following methods depending on the type of service your helper executable provides:

- For `SMAppServices` initialized as `LoginItems`, the [registerAndReturnError:](smappservice/register%28%29.md) and [unregisterAndReturnError:](smappservice/unregister%28%29.md) APIs provide a replacement for [SMLoginItemSetEnabled](smloginitemsetenabled%28____%29.md).
- For `SMAppServices` initialized as `LaunchAgents`, the [registerAndReturnError:](smappservice/register%28%29.md) and [unregisterAndReturnError:](smappservice/unregister%28%29.md) methods provide a replacement for installing property lists in `~/Library/LaunchAgents` or `/Library/LaunchAgents`.
- For `SMAppServices` initialized as `LaunchDaemons`, the [registerAndReturnError:](smappservice/register%28%29.md) and [unregisterAndReturnError:](smappservice/unregister%28%29.md) methods provide a replacement for installing property lists in `/Library/LaunchDaemons`.

## Topics

### Registering services

- [registerAndReturnError:](smappservice/register%28%29.md): Registers the service so it can begin launching subject to user approval.
- [unregisterAndReturnError:](smappservice/unregister%28%29.md): Unregisters the service so the system no longer launches it.
- [unregisterWithCompletionHandler:](smappservice/unregister%28completionhandler_%29.md): Unregisters the service so the system no longer launches it and calls a completion handler you provide with the resulting error value.

### Managing apps

- [mainAppService](smappservice/mainapp.md): An app service object that corresponds to the main application as a login item.
- [agentServiceWithPlistName:](smappservice/agent%28plistname_%29.md): Initializes an app service object with a launch agent with the property list name you provide.
- [daemonServiceWithPlistName:](smappservice/daemon%28plistname_%29.md): Initializes an app service object with a launch daemon with the property list name you provide.
- [loginItemServiceWithIdentifier:](smappservice/loginitem%28identifier_%29.md): Initializes an app service object for a login item corresponding to the bundle with the identifier you provide.

### Interacting with System Settings

- [openSystemSettingsLoginItems](smappservice/opensystemsettingsloginitems%28%29.md): Opens System Settings to the Login Items control panel.

### Getting the state of the service

- [status](smappservice/status-swift.property.md): A property that describes registration or authorization state of the service.
- [SMAppServiceStatus](smappservice/status-swift.enum.md): Constants that describe the registration or authorization status of a helper executable.

### Checking authorization for earlier OS version login items

- [statusForLegacyURL:](smappservice/statusforlegacyplist%28at_%29.md): Check the authorization status of an earlier OS version login item.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Management

- [SMJobBless](smjobbless%28________%29.md): Deprecated. Submits the executable for the given label as a job to `launchd`.
- [Authorization Constants](authorization-constants.md): Constants that describe the ability to authorize helper executables or modify daemon applications.
- [Property List Keys](property-list-keys.md): Property list keys that describe the kinds of applications, daemons, and helper executables the framework manages.
