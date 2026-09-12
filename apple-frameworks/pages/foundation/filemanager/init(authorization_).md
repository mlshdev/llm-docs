> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/init(authorization:)](https://developer.apple.com/documentation/foundation/filemanager/init(authorization:))

# init(authorization:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.14+

Initializes a file manager object that is authorized to perform privileged file system operations.

## Declaration

```swift
convenience init(authorization: NSWorkspace.Authorization)
```

## See Also

### Creating a file manager

- [default](default.md): The shared file manager object for the process.

# fileManagerWithAuthorization: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.14+

Initializes a file manager object that is authorized to perform privileged file system operations.

## Declaration

```objectivec
+ (instancetype) fileManagerWithAuthorization:(NSWorkspaceAuthorization *) authorization;
```

## See Also

### Creating a file manager

- [defaultManager](default.md): The shared file manager object for the process.
