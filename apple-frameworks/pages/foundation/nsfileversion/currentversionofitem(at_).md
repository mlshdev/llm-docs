> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfileversion/currentversionofitem(at:)](https://developer.apple.com/documentation/foundation/nsfileversion/currentversionofitem(at:))

# currentVersionOfItem(at:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the most recent version object for the file at the specified URL.

## Declaration

```swift
class func currentVersionOfItem(at url: URL) -> NSFileVersion?
```

## Parameters

- `url`: The URL of the file whose version object you want.

<a id="return-value"></a>

## Return Value

The version object representing the current version of the file or `nil` if there is no such file.

## See Also

### Getting the Version of a File

- [otherVersionsOfItem(at:)](otherversionsofitem%28at_%29.md): Returns all versions of the specified file except the current version.
- [version(itemAt:forPersistentIdentifier:)](version%28itemat_forpersistentidentifier_%29.md): Returns the version of the file that has the specified persistent ID.
- [temporaryDirectoryURLForNewVersionOfItem(at:)](temporarydirectoryurlfornewversionofitem%28at_%29.md): Creates and returns a temporary directory to use for saving the contents of the file.

# currentVersionOfItemAtURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the most recent version object for the file at the specified URL.

## Declaration

```objectivec
+ (NSFileVersion *) currentVersionOfItemAtURL:(NSURL *) url;
```

## Parameters

- `url`: The URL of the file whose version object you want.

<a id="return-value"></a>

## Return Value

The version object representing the current version of the file or `nil` if there is no such file.

## See Also

### Getting the Version of a File

- [otherVersionsOfItemAtURL:](otherversionsofitem%28at_%29.md): Returns all versions of the specified file except the current version.
- [versionOfItemAtURL:forPersistentIdentifier:](version%28itemat_forpersistentidentifier_%29.md): Returns the version of the file that has the specified persistent ID.
- [temporaryDirectoryURLForNewVersionOfItemAtURL:](temporarydirectoryurlfornewversionofitem%28at_%29.md): Creates and returns a temporary directory to use for saving the contents of the file.
