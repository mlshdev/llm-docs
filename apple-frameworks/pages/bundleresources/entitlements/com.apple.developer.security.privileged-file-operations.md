> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.security.privileged-file-operations](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.security.privileged-file-operations)

# Privileged File Operations (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.15+

An entitlement that permits apps to create symbolic links, replace files, and set file attributes.

## Details

`com.apple.developer.security.privileged-file-operations`

<a id="Discussion"></a>

## Discussion

Add this entitlement to your app before you call [requestAuthorization(to:completionHandler:)](https://developer.apple.com/documentation/appkit/nsworkspace/requestauthorization%28to:completionhandler:%29) to request permission to perform privileged file operations. If someone grants your app permission, pass the authorization you receive to [init(authorization:)](../../foundation/filemanager/init%28authorization_%29.md) and use the [FileManager](../../foundation/filemanager.md) you create to perform the operation.

To request this entitlement for your app, [fill out the request form](https://developer.apple.com/contact/request/privileged-file-operations/).

## See Also

### Files and media

- [App Sandbox Entitlement](com.apple.security.app-sandbox.md): A Boolean value that indicates whether the app may use access control technology to contain damage to the system and user data if an app is compromised.
- [com.apple.security.files.user-selected.read-only](com.apple.security.files.user-selected.read-only.md): A Boolean value that indicates whether the app may have read-only access to files the user has selected using an Open or Save dialog.
- [com.apple.security.files.user-selected.read-write](com.apple.security.files.user-selected.read-write.md): A Boolean value that indicates whether the app may have read-write access to files the user has selected using an Open or Save dialog.
- [com.apple.security.files.downloads.read-only](com.apple.security.files.downloads.read-only.md): A Boolean value that indicates whether the app may have read-only access to the Downloads folder.
- [com.apple.security.files.downloads.read-write](com.apple.security.files.downloads.read-write.md): A Boolean value that indicates whether the app may have read-write access to the Downloads folder.
- [com.apple.security.assets.pictures.read-only](com.apple.security.assets.pictures.read-only.md): A Boolean value that indicates whether the app may have read-only access to the Pictures folder.
- [com.apple.security.assets.pictures.read-write](com.apple.security.assets.pictures.read-write.md): A Boolean value that indicates whether the app may have read-write access to the Pictures folder.
- [com.apple.security.assets.music.read-only](com.apple.security.assets.music.read-only.md): A Boolean value that indicates whether the app may have read-only access to the Music folder.
- [com.apple.security.assets.music.read-write](com.apple.security.assets.music.read-write.md): A Boolean value that indicates whether the app may have read-write access to the Music folder.
- [com.apple.security.assets.movies.read-only](com.apple.security.assets.movies.read-only.md): A Boolean value that indicates whether the app may have read-only access to the Movies folder.
- [com.apple.security.assets.movies.read-write](com.apple.security.assets.movies.read-write.md): A Boolean value that indicates whether the app may have read-write access to the Movies folder.
- [All files entitlement](com.apple.security.files.all.md): Deprecated. A Boolean value that indicates whether the app may have access to all files.
- [Data Protection Entitlement](com.apple.developer.default-data-protection.md): The level of data protection for sensitive user data when an app accesses it on a device.

# Privileged File Operations (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.15+

An entitlement that permits apps to create symbolic links, replace files, and set file attributes.

## Details

`com.apple.developer.security.privileged-file-operations`

<a id="Discussion"></a>

## Discussion

Add this entitlement to your app before you call [requestAuthorizationOfType:completionHandler:](https://developer.apple.com/documentation/appkit/nsworkspace/requestauthorization%28to:completionhandler:%29) to request permission to perform privileged file operations. If someone grants your app permission, pass the authorization you receive to [fileManagerWithAuthorization:](../../foundation/filemanager/init%28authorization_%29.md) and use the [NSFileManager](../../foundation/filemanager.md) you create to perform the operation.

To request this entitlement for your app, [fill out the request form](https://developer.apple.com/contact/request/privileged-file-operations/).

## See Also

### Files and media

- [App Sandbox Entitlement](com.apple.security.app-sandbox.md): A Boolean value that indicates whether the app may use access control technology to contain damage to the system and user data if an app is compromised.
- [com.apple.security.files.user-selected.read-only](com.apple.security.files.user-selected.read-only.md): A Boolean value that indicates whether the app may have read-only access to files the user has selected using an Open or Save dialog.
- [com.apple.security.files.user-selected.read-write](com.apple.security.files.user-selected.read-write.md): A Boolean value that indicates whether the app may have read-write access to files the user has selected using an Open or Save dialog.
- [com.apple.security.files.downloads.read-only](com.apple.security.files.downloads.read-only.md): A Boolean value that indicates whether the app may have read-only access to the Downloads folder.
- [com.apple.security.files.downloads.read-write](com.apple.security.files.downloads.read-write.md): A Boolean value that indicates whether the app may have read-write access to the Downloads folder.
- [com.apple.security.assets.pictures.read-only](com.apple.security.assets.pictures.read-only.md): A Boolean value that indicates whether the app may have read-only access to the Pictures folder.
- [com.apple.security.assets.pictures.read-write](com.apple.security.assets.pictures.read-write.md): A Boolean value that indicates whether the app may have read-write access to the Pictures folder.
- [com.apple.security.assets.music.read-only](com.apple.security.assets.music.read-only.md): A Boolean value that indicates whether the app may have read-only access to the Music folder.
- [com.apple.security.assets.music.read-write](com.apple.security.assets.music.read-write.md): A Boolean value that indicates whether the app may have read-write access to the Music folder.
- [com.apple.security.assets.movies.read-only](com.apple.security.assets.movies.read-only.md): A Boolean value that indicates whether the app may have read-only access to the Movies folder.
- [com.apple.security.assets.movies.read-write](com.apple.security.assets.movies.read-write.md): A Boolean value that indicates whether the app may have read-write access to the Movies folder.
- [All files entitlement](com.apple.security.files.all.md): Deprecated. A Boolean value that indicates whether the app may have access to all files.
- [Data Protection Entitlement](com.apple.developer.default-data-protection.md): The level of data protection for sensitive user data when an app accesses it on a device.
