> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfileversion/otherversionsofitem(at:)](https://developer.apple.com/documentation/foundation/nsfileversion/otherversionsofitem(at:))

# otherVersionsOfItem(at:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns all versions of the specified file except the current version.

## Declaration

```swift
class func otherVersionsOfItem(at url: URL) -> [NSFileVersion]?
```

## Parameters

- `url`: The URL of the file whose versions you want.

<a id="return-value"></a>

## Return Value

An array of file version objects or `nil` if there is no such file. The array does not contain the version object returned by the [currentVersionOfItem(at:)](currentversionofitem%28at_%29.md) method.

<a id="Discussion"></a>

## Discussion

For locally based files, this property typically contains versions of the file that you saved explicitly or that were saved at appropriate times while the file was being edited. For documents residing in the cloud, this property typically returns zero or more file versions representing conflicting versions of a file that need to be resolved with the current version.

## See Also

### Getting the Version of a File

- [currentVersionOfItem(at:)](currentversionofitem%28at_%29.md): Returns the most recent version object for the file at the specified URL.
- [version(itemAt:forPersistentIdentifier:)](version%28itemat_forpersistentidentifier_%29.md): Returns the version of the file that has the specified persistent ID.
- [temporaryDirectoryURLForNewVersionOfItem(at:)](temporarydirectoryurlfornewversionofitem%28at_%29.md): Creates and returns a temporary directory to use for saving the contents of the file.

# otherVersionsOfItemAtURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns all versions of the specified file except the current version.

## Declaration

```objectivec
+ (NSArray<NSFileVersion *> *) otherVersionsOfItemAtURL:(NSURL *) url;
```

## Parameters

- `url`: The URL of the file whose versions you want.

<a id="return-value"></a>

## Return Value

An array of file version objects or `nil` if there is no such file. The array does not contain the version object returned by the [currentVersionOfItemAtURL:](currentversionofitem%28at_%29.md) method.

<a id="Discussion"></a>

## Discussion

For locally based files, this property typically contains versions of the file that you saved explicitly or that were saved at appropriate times while the file was being edited. For documents residing in the cloud, this property typically returns zero or more file versions representing conflicting versions of a file that need to be resolved with the current version.

## See Also

### Getting the Version of a File

- [currentVersionOfItemAtURL:](currentversionofitem%28at_%29.md): Returns the most recent version object for the file at the specified URL.
- [versionOfItemAtURL:forPersistentIdentifier:](version%28itemat_forpersistentidentifier_%29.md): Returns the version of the file that has the specified persistent ID.
- [temporaryDirectoryURLForNewVersionOfItemAtURL:](temporarydirectoryurlfornewversionofitem%28at_%29.md): Creates and returns a temporary directory to use for saving the contents of the file.
