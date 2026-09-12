> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/componentstodisplay(forpath:)](https://developer.apple.com/documentation/foundation/filemanager/componentstodisplay(forpath:))

# componentsToDisplay(forPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of strings representing the user-visible components of a given path.

## Declaration

```swift
func componentsToDisplay(forPath path: String) -> [String]?
```

## Parameters

- `path`: A pathname.

<a id="return-value"></a>

## Return Value

An array of [NSString](../nsstring.md) objects representing the user-visible (for the Finder, Open and Save panels, and so on) components of `path`. Returns `nil` if path does not exist.

<a id="Discussion"></a>

## Discussion

These components cannot be used for path operations and are only suitable for display to the user.

## See Also

### Getting and setting attributes

- [displayName(atPath:)](displayname%28atpath_%29.md): Returns the display name of the file or directory at a specified path.
- [attributesOfItem(atPath:)](attributesofitem%28atpath_%29.md): Returns the attributes of the item at a given path.
- [attributesOfFileSystem(forPath:)](attributesoffilesystem%28forpath_%29.md): Returns a dictionary that describes the attributes of the mounted file system on which a given path resides.
- [setAttributes(\_:ofItemAtPath:)](setattributes%28__ofitematpath_%29.md): Sets the attributes of the specified file or directory.

# componentsToDisplayForPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of strings representing the user-visible components of a given path.

## Declaration

```objectivec
- (NSArray<NSString *> *) componentsToDisplayForPath:(NSString *) path;
```

## Parameters

- `path`: A pathname.

<a id="return-value"></a>

## Return Value

An array of [NSString](../nsstring.md) objects representing the user-visible (for the Finder, Open and Save panels, and so on) components of `path`. Returns `nil` if path does not exist.

<a id="Discussion"></a>

## Discussion

These components cannot be used for path operations and are only suitable for display to the user.

## See Also

### Getting and setting attributes

- [displayNameAtPath:](displayname%28atpath_%29.md): Returns the display name of the file or directory at a specified path.
- [attributesOfItemAtPath:error:](attributesofitem%28atpath_%29.md): Returns the attributes of the item at a given path.
- [attributesOfFileSystemForPath:error:](attributesoffilesystem%28forpath_%29.md): Returns a dictionary that describes the attributes of the mounted file system on which a given path resides.
- [setAttributes:ofItemAtPath:error:](setattributes%28__ofitematpath_%29.md): Sets the attributes of the specified file or directory.
