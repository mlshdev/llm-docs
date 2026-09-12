> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/authorizationtype/setattributes](https://developer.apple.com/documentation/appkit/nsworkspace/authorizationtype/setattributes)

# NSWorkspace.AuthorizationType.setAttributes (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.14+

Authorization for the app to change specific file attributes.

## Declaration

```swift
case setAttributes
```

<a id="Discussion"></a>

## Discussion

Signifies that the user has granted authorization for [setAttributes(\_:ofItemAtPath:)](https://developer.apple.com/documentation/foundation/filemanager/setattributes%28_:ofitematpath:%29).

Only these attributes can be modified:

- [ownerAccountID](https://developer.apple.com/documentation/foundation/fileattributekey/owneraccountid)
- [groupOwnerAccountID](https://developer.apple.com/documentation/foundation/fileattributekey/groupowneraccountid)
- [posixPermissions](https://developer.apple.com/documentation/foundation/fileattributekey/posixpermissions)

## See Also

### Types of Authorization

- [NSWorkspace.AuthorizationType.createSymbolicLink](createsymboliclink.md): Authorization for the app to create a symbolic link.
- [NSWorkspace.AuthorizationType.replaceFile](replacefile.md): Authorization for the app to perform an atomic file write without changing the target file’s permissions.

# NSWorkspaceAuthorizationTypeSetAttributes (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.14+

Authorization for the app to change specific file attributes.

## Declaration

```objectivec
NSWorkspaceAuthorizationTypeSetAttributes
```

<a id="Discussion"></a>

## Discussion

Signifies that the user has granted authorization for [setAttributes:ofItemAtPath:error:](https://developer.apple.com/documentation/foundation/filemanager/setattributes%28_:ofitematpath:%29).

Only these attributes can be modified:

- [NSFileOwnerAccountID](https://developer.apple.com/documentation/foundation/fileattributekey/owneraccountid)
- [NSFileGroupOwnerAccountID](https://developer.apple.com/documentation/foundation/fileattributekey/groupowneraccountid)
- [NSFilePosixPermissions](https://developer.apple.com/documentation/foundation/fileattributekey/posixpermissions)

## See Also

### Types of Authorization

- [NSWorkspaceAuthorizationTypeCreateSymbolicLink](createsymboliclink.md): Authorization for the app to create a symbolic link.
- [NSWorkspaceAuthorizationTypeReplaceFile](replacefile.md): Authorization for the app to perform an atomic file write without changing the target file’s permissions.
