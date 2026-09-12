> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/displayname(atpath:)](https://developer.apple.com/documentation/foundation/filemanager/displayname(atpath:))

# displayName(atPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the display name of the file or directory at a specified path.

## Declaration

```swift
func displayName(atPath path: String) -> String
```

## Parameters

- `path`: The path of a file or directory.

<a id="return-value"></a>

## Return Value

The name of the file or directory at `path` in a localized form appropriate for presentation to the user. If there is no file or directory at `path`, or if an error occurs, returns `path` as is.

<a id="Discussion"></a>

## Discussion

Display names are user-friendly names for files. They are typically used to localize standard file and directory names according to the user’s language settings. They may also reflect other modifications, such as the removal of filename extensions. Such modifications are used only when displaying the file or directory to the user and do not reflect the actual path to the item in the file system. For example, if the current user’s preferred language is French, the following code fragment logs the name `Bibliothèque` and not the name `Library`, which is the actual name of the directory.

```objc
NSArray *paths = NSSearchPathForDirectoriesInDomains(NSLibraryDirectory, NSUserDomainMask, YES);
if ([paths count] > 0)
{
    NSString *documentsDirectory = [paths objectAtIndex:0];
    NSFileManager *fileManager = [[NSFileManager alloc] init];
    NSString *displayNameAtPath = [fileManager displayNameAtPath:documentsDirectory];
    NSLog(@"%@", displayNameAtPath);
}
```

## See Also

### Getting and setting attributes

- [componentsToDisplay(forPath:)](componentstodisplay%28forpath_%29.md): Returns an array of strings representing the user-visible components of a given path.
- [attributesOfItem(atPath:)](attributesofitem%28atpath_%29.md): Returns the attributes of the item at a given path.
- [attributesOfFileSystem(forPath:)](attributesoffilesystem%28forpath_%29.md): Returns a dictionary that describes the attributes of the mounted file system on which a given path resides.
- [setAttributes(\_:ofItemAtPath:)](setattributes%28__ofitematpath_%29.md): Sets the attributes of the specified file or directory.

# displayNameAtPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the display name of the file or directory at a specified path.

## Declaration

```objectivec
- (NSString *) displayNameAtPath:(NSString *) path;
```

## Parameters

- `path`: The path of a file or directory.

<a id="return-value"></a>

## Return Value

The name of the file or directory at `path` in a localized form appropriate for presentation to the user. If there is no file or directory at `path`, or if an error occurs, returns `path` as is.

<a id="Discussion"></a>

## Discussion

Display names are user-friendly names for files. They are typically used to localize standard file and directory names according to the user’s language settings. They may also reflect other modifications, such as the removal of filename extensions. Such modifications are used only when displaying the file or directory to the user and do not reflect the actual path to the item in the file system. For example, if the current user’s preferred language is French, the following code fragment logs the name `Bibliothèque` and not the name `Library`, which is the actual name of the directory.

```objc
NSArray *paths = NSSearchPathForDirectoriesInDomains(NSLibraryDirectory, NSUserDomainMask, YES);
if ([paths count] > 0)
{
    NSString *documentsDirectory = [paths objectAtIndex:0];
    NSFileManager *fileManager = [[NSFileManager alloc] init];
    NSString *displayNameAtPath = [fileManager displayNameAtPath:documentsDirectory];
    NSLog(@"%@", displayNameAtPath);
}
```

## See Also

### Getting and setting attributes

- [componentsToDisplayForPath:](componentstodisplay%28forpath_%29.md): Returns an array of strings representing the user-visible components of a given path.
- [attributesOfItemAtPath:error:](attributesofitem%28atpath_%29.md): Returns the attributes of the item at a given path.
- [attributesOfFileSystemForPath:error:](attributesoffilesystem%28forpath_%29.md): Returns a dictionary that describes the attributes of the mounted file system on which a given path resides.
- [setAttributes:ofItemAtPath:error:](setattributes%28__ofitematpath_%29.md): Sets the attributes of the specified file or directory.
