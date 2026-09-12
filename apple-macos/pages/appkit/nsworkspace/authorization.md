> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/authorization](https://developer.apple.com/documentation/appkit/nsworkspace/authorization)

# NSWorkspace.Authorization (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.14+

The authorization granted to the app by the user.

## Declaration

```swift
class Authorization
```

<a id="overview"></a>

## Overview

To enable your app to prompt the user for these file permissions, you must have a Privileged File Operation entitlement. If you have an app on the Mac App Store or plan to submit your app for review, you can [request this entitlement](https://developer.apple.com/go/?id=workspace-authorization).

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

### Performing Privileged Operations

- [requestAuthorization(to:completionHandler:)](requestauthorization%28to_completionhandler_%29.md): Requests authorization to perform a privileged file operation.
- [NSWorkspace.AuthorizationType](authorizationtype.md): The types of privileged file operations that can be authorized by the user.

# NSWorkspaceAuthorization (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.14+

The authorization granted to the app by the user.

## Declaration

```objectivec
@interface NSWorkspaceAuthorization : NSObject
```

<a id="overview"></a>

## Overview

To enable your app to prompt the user for these file permissions, you must have a Privileged File Operation entitlement. If you have an app on the Mac App Store or plan to submit your app for review, you can [request this entitlement](https://developer.apple.com/go/?id=workspace-authorization).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Performing Privileged Operations

- [requestAuthorizationOfType:completionHandler:](requestauthorization%28to_completionhandler_%29.md): Requests authorization to perform a privileged file operation.
- [NSWorkspaceAuthorizationType](authorizationtype.md): The types of privileged file operations that can be authorized by the user.
