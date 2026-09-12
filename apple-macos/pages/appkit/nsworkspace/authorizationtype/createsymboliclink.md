> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/authorizationtype/createsymboliclink](https://developer.apple.com/documentation/appkit/nsworkspace/authorizationtype/createsymboliclink)

# NSWorkspace.AuthorizationType.createSymbolicLink (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.14+

Authorization for the app to create a symbolic link.

## Declaration

```swift
case createSymbolicLink
```

<a id="Discussion"></a>

## Discussion

Signifies that the user has granted authorization for [createSymbolicLink(at:withDestinationURL:)](https://developer.apple.com/documentation/foundation/filemanager/createsymboliclink%28at:withdestinationurl:%29).

## See Also

### Types of Authorization

- [NSWorkspace.AuthorizationType.replaceFile](replacefile.md): Authorization for the app to perform an atomic file write without changing the target file’s permissions.
- [NSWorkspace.AuthorizationType.setAttributes](setattributes.md): Authorization for the app to change specific file attributes.

# NSWorkspaceAuthorizationTypeCreateSymbolicLink (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.14+

Authorization for the app to create a symbolic link.

## Declaration

```objectivec
NSWorkspaceAuthorizationTypeCreateSymbolicLink
```

<a id="Discussion"></a>

## Discussion

Signifies that the user has granted authorization for [createSymbolicLinkAtURL:withDestinationURL:error:](https://developer.apple.com/documentation/foundation/filemanager/createsymboliclink%28at:withdestinationurl:%29).

## See Also

### Types of Authorization

- [NSWorkspaceAuthorizationTypeReplaceFile](replacefile.md): Authorization for the app to perform an atomic file write without changing the target file’s permissions.
- [NSWorkspaceAuthorizationTypeSetAttributes](setattributes.md): Authorization for the app to change specific file attributes.
