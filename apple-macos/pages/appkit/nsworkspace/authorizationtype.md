> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/authorizationtype](https://developer.apple.com/documentation/appkit/nsworkspace/authorizationtype)

# NSWorkspace.AuthorizationType (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.14+

The types of privileged file operations that can be authorized by the user.

## Declaration

```swift
enum AuthorizationType
```

<a id="overview"></a>

## Overview

To enable your app to prompt the user for these file permissions, you must have a Privileged File Operation entitlement. If you have an app on the Mac App Store or plan to submit your app for review, you can [request this entitlement](https://developer.apple.com/go/?id=workspace-authorization).

## Topics

### Types of Authorization

- [NSWorkspace.AuthorizationType.createSymbolicLink](authorizationtype/createsymboliclink.md): Authorization for the app to create a symbolic link.
- [NSWorkspace.AuthorizationType.replaceFile](authorizationtype/replacefile.md): Authorization for the app to perform an atomic file write without changing the target file’s permissions.
- [NSWorkspace.AuthorizationType.setAttributes](authorizationtype/setattributes.md): Authorization for the app to change specific file attributes.

### Initializers

- [init(rawValue:)](authorizationtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Performing Privileged Operations

- [requestAuthorization(to:completionHandler:)](requestauthorization%28to_completionhandler_%29.md): Requests authorization to perform a privileged file operation.
- [NSWorkspace.Authorization](authorization.md): The authorization granted to the app by the user.

# NSWorkspaceAuthorizationType (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.14+

The types of privileged file operations that can be authorized by the user.

## Declaration

```objectivec
enum NSWorkspaceAuthorizationType : NSInteger;
```

<a id="overview"></a>

## Overview

To enable your app to prompt the user for these file permissions, you must have a Privileged File Operation entitlement. If you have an app on the Mac App Store or plan to submit your app for review, you can [request this entitlement](https://developer.apple.com/go/?id=workspace-authorization).

## Topics

### Types of Authorization

- [NSWorkspaceAuthorizationTypeCreateSymbolicLink](authorizationtype/createsymboliclink.md): Authorization for the app to create a symbolic link.
- [NSWorkspaceAuthorizationTypeReplaceFile](authorizationtype/replacefile.md): Authorization for the app to perform an atomic file write without changing the target file’s permissions.
- [NSWorkspaceAuthorizationTypeSetAttributes](authorizationtype/setattributes.md): Authorization for the app to change specific file attributes.

## See Also

### Performing Privileged Operations

- [requestAuthorizationOfType:completionHandler:](requestauthorization%28to_completionhandler_%29.md): Requests authorization to perform a privileged file operation.
- [NSWorkspaceAuthorization](authorization.md): The authorization granted to the app by the user.
