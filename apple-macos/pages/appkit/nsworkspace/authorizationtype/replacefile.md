> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/authorizationtype/replacefile](https://developer.apple.com/documentation/appkit/nsworkspace/authorizationtype/replacefile)

# NSWorkspace.AuthorizationType.replaceFile (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.14+

Authorization for the app to perform an atomic file write without changing the target file’s permissions.

## Declaration

```swift
case replaceFile
```

<a id="Discussion"></a>

## Discussion

Signifies that the user has granted authorization for [replaceItem(at:withItemAt:backupItemName:options:resultingItemURL:)](https://developer.apple.com/documentation/foundation/filemanager/replaceitem%28at:withitemat:backupitemname:options:resultingitemurl:%29). When you use a [FileManager](https://developer.apple.com/documentation/foundation/filemanager) with this authorization, the file manager ignores the `backupItemName` and `options` parameters.

## See Also

### Types of Authorization

- [NSWorkspace.AuthorizationType.createSymbolicLink](createsymboliclink.md): Authorization for the app to create a symbolic link.
- [NSWorkspace.AuthorizationType.setAttributes](setattributes.md): Authorization for the app to change specific file attributes.

# NSWorkspaceAuthorizationTypeReplaceFile (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.14+

Authorization for the app to perform an atomic file write without changing the target file’s permissions.

## Declaration

```objectivec
NSWorkspaceAuthorizationTypeReplaceFile
```

<a id="Discussion"></a>

## Discussion

Signifies that the user has granted authorization for [replaceItemAtURL:withItemAtURL:backupItemName:options:resultingItemURL:error:](https://developer.apple.com/documentation/foundation/filemanager/replaceitem%28at:withitemat:backupitemname:options:resultingitemurl:%29). When you use a [NSFileManager](https://developer.apple.com/documentation/foundation/filemanager) with this authorization, the file manager ignores the `backupItemName` and `options` parameters.

## See Also

### Types of Authorization

- [NSWorkspaceAuthorizationTypeCreateSymbolicLink](createsymboliclink.md): Authorization for the app to create a symbolic link.
- [NSWorkspaceAuthorizationTypeSetAttributes](setattributes.md): Authorization for the app to change specific file attributes.
