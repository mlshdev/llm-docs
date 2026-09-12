> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/fileexists(atpath:isdirectory:)](https://developer.apple.com/documentation/foundation/filemanager/fileexists(atpath:isdirectory:))

# fileExists(atPath:isDirectory:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether a file or directory exists at a specified path.

## Declaration

```swift
func fileExists(atPath path: String, isDirectory: UnsafeMutablePointer<ObjCBool>?) -> Bool
```

## Parameters

- `path`: The path of a file or directory. If `path` begins with a tilde (`~`), it must first be expanded with [expandingTildeInPath](../nsstring/expandingtildeinpath.md), or this method will return [false](https://developer.apple.com/documentation/swift/false).
- `isDirectory`: Upon return, contains [true](https://developer.apple.com/documentation/swift/true) if `path` is a directory or if the final path element is a symbolic link that points to a directory; otherwise, contains [false](https://developer.apple.com/documentation/swift/false). If `path` doesn’t exist, this value is undefined upon return. Pass `NULL` if you do not need this information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a file at the specified path exists, or [false](https://developer.apple.com/documentation/swift/false) if the file’s does not exist or its existence could not be determined.

<a id="Discussion"></a>

## Discussion

If the file at `path` is inaccessible to your app, perhaps because one or more parent directories are inaccessible, this method returns [false](https://developer.apple.com/documentation/swift/false). If the final element in `path` specifies a symbolic link, this method traverses the link and returns [true](https://developer.apple.com/documentation/swift/true) or [false](https://developer.apple.com/documentation/swift/false) based on the existence of the file at the link destination.

If you need to further determine whether `path` is a package, use the [isFilePackage(atPath:)](https://developer.apple.com/documentation/appkit/nsworkspace/isfilepackage%28atpath:%29) method of [NSWorkspace](https://developer.apple.com/documentation/appkit/nsworkspace).

The following example code gets an array that identifies the fonts in the user’s fonts directory:

```objc
NSArray *subpaths;
BOOL isDir;
 
NSArray *paths = NSSearchPathForDirectoriesInDomains
                     (NSLibraryDirectory, NSUserDomainMask, YES);
 
if ([paths count] == 1) {
 
    NSFileManager *fileManager = [[NSFileManager alloc] init];
    NSString *fontPath = [[paths objectAtIndex:0] stringByAppendingPathComponent:@"Fonts"];
 
    if ([fileManager fileExistsAtPath:fontPath isDirectory:&isDir] && isDir) {
        subpaths = [fileManager subpathsAtPath:fontPath];
// ...
```

> **Note**

>  Attempting to predicate behavior based on the current state of the file system or a particular file on the file system is not recommended. Doing so can cause odd behavior or race conditions. It’s far better to attempt an operation (such as loading a file or creating a directory), check for errors, and handle those errors gracefully than it is to try to figure out ahead of time whether the operation will succeed. For more information on file-system race conditions, see [Race Conditions and Secure File Operations](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Articles/RaceConditions.html#//apple_ref/doc/uid/TP40002585) in [Secure Coding Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Introduction.html#//apple_ref/doc/uid/TP40002415).

## See Also

### Related Documentation

- [checkResourceIsReachableAndReturnError(\_:)](../nsurl/checkresourceisreachableandreturnerror%28__%29.md): Returns whether the resource pointed to by a file URL can be reached.

### Determining access to files

- [fileExists(atPath:)](fileexists%28atpath_%29.md): Returns a Boolean value that indicates whether a file or directory exists at a specified path.
- [isReadableFile(atPath:)](isreadablefile%28atpath_%29.md): Returns a Boolean value that indicates whether the invoking object appears able to read a specified file.
- [isWritableFile(atPath:)](iswritablefile%28atpath_%29.md): Returns a Boolean value that indicates whether the invoking object appears able to write to a specified file.
- [isExecutableFile(atPath:)](isexecutablefile%28atpath_%29.md): Returns a Boolean value that indicates whether the operating system appears able to execute a specified file.
- [isDeletableFile(atPath:)](isdeletablefile%28atpath_%29.md): Returns a Boolean value that indicates whether the invoking object appears able to delete a specified file.

# fileExistsAtPath:isDirectory: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether a file or directory exists at a specified path.

## Declaration

```objectivec
- (BOOL) fileExistsAtPath:(NSString *) path isDirectory:(BOOL *) isDirectory;
```

## Parameters

- `path`: The path of a file or directory. If `path` begins with a tilde (`~`), it must first be expanded with [stringByExpandingTildeInPath](../nsstring/expandingtildeinpath.md), or this method will return [false](https://developer.apple.com/documentation/swift/false).
- `isDirectory`: Upon return, contains [true](https://developer.apple.com/documentation/swift/true) if `path` is a directory or if the final path element is a symbolic link that points to a directory; otherwise, contains [false](https://developer.apple.com/documentation/swift/false). If `path` doesn’t exist, this value is undefined upon return. Pass `NULL` if you do not need this information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a file at the specified path exists, or [false](https://developer.apple.com/documentation/swift/false) if the file’s does not exist or its existence could not be determined.

<a id="Discussion"></a>

## Discussion

If the file at `path` is inaccessible to your app, perhaps because one or more parent directories are inaccessible, this method returns [false](https://developer.apple.com/documentation/swift/false). If the final element in `path` specifies a symbolic link, this method traverses the link and returns [true](https://developer.apple.com/documentation/swift/true) or [false](https://developer.apple.com/documentation/swift/false) based on the existence of the file at the link destination.

If you need to further determine whether `path` is a package, use the [isFilePackageAtPath:](https://developer.apple.com/documentation/appkit/nsworkspace/isfilepackage%28atpath:%29) method of [NSWorkspace](https://developer.apple.com/documentation/appkit/nsworkspace).

The following example code gets an array that identifies the fonts in the user’s fonts directory:

```objc
NSArray *subpaths;
BOOL isDir;
 
NSArray *paths = NSSearchPathForDirectoriesInDomains
                     (NSLibraryDirectory, NSUserDomainMask, YES);
 
if ([paths count] == 1) {
 
    NSFileManager *fileManager = [[NSFileManager alloc] init];
    NSString *fontPath = [[paths objectAtIndex:0] stringByAppendingPathComponent:@"Fonts"];
 
    if ([fileManager fileExistsAtPath:fontPath isDirectory:&isDir] && isDir) {
        subpaths = [fileManager subpathsAtPath:fontPath];
// ...
```

> **Note**

>  Attempting to predicate behavior based on the current state of the file system or a particular file on the file system is not recommended. Doing so can cause odd behavior or race conditions. It’s far better to attempt an operation (such as loading a file or creating a directory), check for errors, and handle those errors gracefully than it is to try to figure out ahead of time whether the operation will succeed. For more information on file-system race conditions, see [Race Conditions and Secure File Operations](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Articles/RaceConditions.html#//apple_ref/doc/uid/TP40002585) in [Secure Coding Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Introduction.html#//apple_ref/doc/uid/TP40002415).

## See Also

### Related Documentation

- [checkResourceIsReachableAndReturnError:](../nsurl/checkresourceisreachableandreturnerror%28__%29.md): Returns whether the resource pointed to by a file URL can be reached.

### Determining access to files

- [fileExistsAtPath:](fileexists%28atpath_%29.md): Returns a Boolean value that indicates whether a file or directory exists at a specified path.
- [isReadableFileAtPath:](isreadablefile%28atpath_%29.md): Returns a Boolean value that indicates whether the invoking object appears able to read a specified file.
- [isWritableFileAtPath:](iswritablefile%28atpath_%29.md): Returns a Boolean value that indicates whether the invoking object appears able to write to a specified file.
- [isExecutableFileAtPath:](isexecutablefile%28atpath_%29.md): Returns a Boolean value that indicates whether the operating system appears able to execute a specified file.
- [isDeletableFileAtPath:](isdeletablefile%28atpath_%29.md): Returns a Boolean value that indicates whether the invoking object appears able to delete a specified file.
