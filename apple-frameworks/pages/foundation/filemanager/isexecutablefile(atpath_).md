> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/isexecutablefile(atpath:)](https://developer.apple.com/documentation/foundation/filemanager/isexecutablefile(atpath:))

# isExecutableFile(atPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the operating system appears able to execute a specified file.

## Declaration

```swift
func isExecutableFile(atPath path: String) -> Bool
```

## Parameters

- `path`: A file path.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the current process has execute privileges for the file at `path`; otherwise [false](https://developer.apple.com/documentation/swift/false) if the process does not have execute privileges or the existence of the file could not be determined.

<a id="Discussion"></a>

## Discussion

If the file at `path` is inaccessible to your app, perhaps because it does not have search privileges for one or more parent directories, this method returns [false](https://developer.apple.com/documentation/swift/false). This method traverses symbolic links in the path. This method also uses the real user ID and group ID, as opposed to the effective user and group IDs, to determine if the file is executable.

> **Note**

>  Attempting to predicate behavior based on the current state of the file system or a particular file on the file system is not recommended. Doing so can cause odd behavior or race conditions. It’s far better to attempt an operation (such as loading a file or creating a directory), check for errors, and handle those errors gracefully than it is to try to figure out ahead of time whether the operation will succeed. For more information on file system race conditions, see [Race Conditions and Secure File Operations](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Articles/RaceConditions.html#//apple_ref/doc/uid/TP40002585) in [Secure Coding Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Introduction.html#//apple_ref/doc/uid/TP40002415).

## See Also

### Determining access to files

- [fileExists(atPath:)](fileexists%28atpath_%29.md): Returns a Boolean value that indicates whether a file or directory exists at a specified path.
- [fileExists(atPath:isDirectory:)](fileexists%28atpath_isdirectory_%29.md): Returns a Boolean value that indicates whether a file or directory exists at a specified path.
- [isReadableFile(atPath:)](isreadablefile%28atpath_%29.md): Returns a Boolean value that indicates whether the invoking object appears able to read a specified file.
- [isWritableFile(atPath:)](iswritablefile%28atpath_%29.md): Returns a Boolean value that indicates whether the invoking object appears able to write to a specified file.
- [isDeletableFile(atPath:)](isdeletablefile%28atpath_%29.md): Returns a Boolean value that indicates whether the invoking object appears able to delete a specified file.

# isExecutableFileAtPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the operating system appears able to execute a specified file.

## Declaration

```objectivec
- (BOOL) isExecutableFileAtPath:(NSString *) path;
```

## Parameters

- `path`: A file path.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the current process has execute privileges for the file at `path`; otherwise [false](https://developer.apple.com/documentation/swift/false) if the process does not have execute privileges or the existence of the file could not be determined.

<a id="Discussion"></a>

## Discussion

If the file at `path` is inaccessible to your app, perhaps because it does not have search privileges for one or more parent directories, this method returns [false](https://developer.apple.com/documentation/swift/false). This method traverses symbolic links in the path. This method also uses the real user ID and group ID, as opposed to the effective user and group IDs, to determine if the file is executable.

> **Note**

>  Attempting to predicate behavior based on the current state of the file system or a particular file on the file system is not recommended. Doing so can cause odd behavior or race conditions. It’s far better to attempt an operation (such as loading a file or creating a directory), check for errors, and handle those errors gracefully than it is to try to figure out ahead of time whether the operation will succeed. For more information on file system race conditions, see [Race Conditions and Secure File Operations](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Articles/RaceConditions.html#//apple_ref/doc/uid/TP40002585) in [Secure Coding Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Introduction.html#//apple_ref/doc/uid/TP40002415).

## See Also

### Determining access to files

- [fileExistsAtPath:](fileexists%28atpath_%29.md): Returns a Boolean value that indicates whether a file or directory exists at a specified path.
- [fileExistsAtPath:isDirectory:](fileexists%28atpath_isdirectory_%29.md): Returns a Boolean value that indicates whether a file or directory exists at a specified path.
- [isReadableFileAtPath:](isreadablefile%28atpath_%29.md): Returns a Boolean value that indicates whether the invoking object appears able to read a specified file.
- [isWritableFileAtPath:](iswritablefile%28atpath_%29.md): Returns a Boolean value that indicates whether the invoking object appears able to write to a specified file.
- [isDeletableFileAtPath:](isdeletablefile%28atpath_%29.md): Returns a Boolean value that indicates whether the invoking object appears able to delete a specified file.
