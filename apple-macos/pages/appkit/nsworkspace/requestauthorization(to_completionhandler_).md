> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/requestauthorization(to:completionhandler:)](https://developer.apple.com/documentation/appkit/nsworkspace/requestauthorization(to:completionhandler:))

# requestAuthorization(to:completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Requests authorization to perform a privileged file operation.

## Declaration

```swift
func requestAuthorization(to type: NSWorkspace.AuthorizationType, completionHandler: @escaping @Sendable (NSWorkspace.Authorization?, (any Error)?) -> Void)
```

```swift
func requestAuthorization(to type: NSWorkspace.AuthorizationType) async throws -> NSWorkspace.Authorization
```

## Parameters

- `type`: The type of file operation to perform.
- `completionHandler`: The completion handler to call when the authorization request is completed.

  The completion handler takes two parameters:

  - **authorization**: The authorization granted for this app. Use it when creating a new [FileManager](https://developer.apple.com/documentation/foundation/filemanager) with [init(authorization:)](https://developer.apple.com/documentation/foundation/filemanager/init%28authorization:%29).
  - **error**: `nil` if the app is authorized; otherwise, a pointer to the authorization error.

<a id="Discussion"></a>

## Discussion

## See Also

### Performing Privileged Operations

- [NSWorkspace.Authorization](authorization.md): The authorization granted to the app by the user.
- [NSWorkspace.AuthorizationType](authorizationtype.md): The types of privileged file operations that can be authorized by the user.

# requestAuthorizationOfType:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Requests authorization to perform a privileged file operation.

## Declaration

```objectivec
- (void) requestAuthorizationOfType:(NSWorkspaceAuthorizationType) type completionHandler:(void (^)(NSWorkspaceAuthorization *authorization, NSError *error)) completionHandler;
```

## Parameters

- `type`: The type of file operation to perform.
- `completionHandler`: The completion handler to call when the authorization request is completed.

  The completion handler takes two parameters:

  - **authorization**: The authorization granted for this app. Use it when creating a new [NSFileManager](https://developer.apple.com/documentation/foundation/filemanager) with [fileManagerWithAuthorization:](https://developer.apple.com/documentation/foundation/filemanager/init%28authorization:%29).
  - **error**: `nil` if the app is authorized; otherwise, a pointer to the authorization error.

<a id="Discussion"></a>

## Discussion

## See Also

### Performing Privileged Operations

- [NSWorkspaceAuthorization](authorization.md): The authorization granted to the app by the user.
- [NSWorkspaceAuthorizationType](authorizationtype.md): The types of privileged file operations that can be authorized by the user.
