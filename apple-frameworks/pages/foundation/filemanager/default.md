> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/default](https://developer.apple.com/documentation/foundation/filemanager/default)

# default (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The shared file manager object for the process.

## Declaration

```swift
class var `default`: FileManager { get }
```

<a id="Discussion"></a>

## Discussion

This method always represents the same file manager object. If you plan to use a delegate with the file manager to receive notifications about the completion of file-based operations, you should create a new instance of [FileManager](../filemanager.md) rather than using the shared object.

## See Also

### Creating a file manager

- [init(authorization:)](init%28authorization_%29.md): Initializes a file manager object that is authorized to perform privileged file system operations.

# defaultManager (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The shared file manager object for the process.

## Declaration

```objectivec
@property (class, strong, readonly) NSFileManager * defaultManager;
```

<a id="Discussion"></a>

## Discussion

This method always represents the same file manager object. If you plan to use a delegate with the file manager to receive notifications about the completion of file-based operations, you should create a new instance of [NSFileManager](../filemanager.md) rather than using the shared object.

## See Also

### Creating a file manager

- [fileManagerWithAuthorization:](init%28authorization_%29.md): Initializes a file manager object that is authorized to perform privileged file system operations.
