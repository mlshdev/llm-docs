> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfileversion/temporarydirectoryurlfornewversionofitem(at:)](https://developer.apple.com/documentation/foundation/nsfileversion/temporarydirectoryurlfornewversionofitem(at:))

# temporaryDirectoryURLForNewVersionOfItem(at:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Creates and returns a temporary directory to use for saving the contents of the file.

## Declaration

```swift
class func temporaryDirectoryURLForNewVersionOfItem(at url: URL) -> URL
```

## Parameters

- `url`: The URL of the file whose contents you want to save.

<a id="return-value"></a>

## Return Value

A URL identifying the temporary directory in which to create a the new file. You must delete the directory specified by this URL after you have created the file and moved it to its proper location.

<a id="Discussion"></a>

## Discussion

You can use this method in situations where you want to create a file in a temporary location. For example, you might use this method when saving the contents of a file to disk for the first time. When you finish creating the temporary file, move it to a more appropriate location, such as the user’s `Documents` directory. You must delete the directory returned by this method when you are done with it.

## See Also

### Getting the Version of a File

- [currentVersionOfItem(at:)](currentversionofitem%28at_%29.md): Returns the most recent version object for the file at the specified URL.
- [otherVersionsOfItem(at:)](otherversionsofitem%28at_%29.md): Returns all versions of the specified file except the current version.
- [version(itemAt:forPersistentIdentifier:)](version%28itemat_forpersistentidentifier_%29.md): Returns the version of the file that has the specified persistent ID.

# temporaryDirectoryURLForNewVersionOfItemAtURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Creates and returns a temporary directory to use for saving the contents of the file.

## Declaration

```objectivec
+ (NSURL *) temporaryDirectoryURLForNewVersionOfItemAtURL:(NSURL *) url;
```

## Parameters

- `url`: The URL of the file whose contents you want to save.

<a id="return-value"></a>

## Return Value

A URL identifying the temporary directory in which to create a the new file. You must delete the directory specified by this URL after you have created the file and moved it to its proper location.

<a id="Discussion"></a>

## Discussion

You can use this method in situations where you want to create a file in a temporary location. For example, you might use this method when saving the contents of a file to disk for the first time. When you finish creating the temporary file, move it to a more appropriate location, such as the user’s `Documents` directory. You must delete the directory returned by this method when you are done with it.

## See Also

### Getting the Version of a File

- [currentVersionOfItemAtURL:](currentversionofitem%28at_%29.md): Returns the most recent version object for the file at the specified URL.
- [otherVersionsOfItemAtURL:](otherversionsofitem%28at_%29.md): Returns all versions of the specified file except the current version.
- [versionOfItemAtURL:forPersistentIdentifier:](version%28itemat_forpersistentidentifier_%29.md): Returns the version of the file that has the specified persistent ID.
