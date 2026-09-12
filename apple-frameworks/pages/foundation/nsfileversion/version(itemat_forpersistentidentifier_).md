> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfileversion/version(itemat:forpersistentidentifier:)](https://developer.apple.com/documentation/foundation/nsfileversion/version(itemat:forpersistentidentifier:))

# version(itemAt:forPersistentIdentifier:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the version of the file that has the specified persistent ID.

## Declaration

```swift
class func version(itemAt url: URL, forPersistentIdentifier persistentIdentifier: Any) -> NSFileVersion?
```

## Parameters

- `url`: The URL of the file whose version you want.
- `persistentIdentifier`: The persistent ID of the `NSFileVersion` object you want.

<a id="return-value"></a>

## Return Value

The file version object with the specified ID or `nil` if no such version object exists.

## See Also

### Related Documentation

- [persistentIdentifier](persistentidentifier.md): The identifier for this version of the file.

### Getting the Version of a File

- [currentVersionOfItem(at:)](currentversionofitem%28at_%29.md): Returns the most recent version object for the file at the specified URL.
- [otherVersionsOfItem(at:)](otherversionsofitem%28at_%29.md): Returns all versions of the specified file except the current version.
- [temporaryDirectoryURLForNewVersionOfItem(at:)](temporarydirectoryurlfornewversionofitem%28at_%29.md): Creates and returns a temporary directory to use for saving the contents of the file.

# versionOfItemAtURL:forPersistentIdentifier: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the version of the file that has the specified persistent ID.

## Declaration

```objectivec
+ (NSFileVersion *) versionOfItemAtURL:(NSURL *) url forPersistentIdentifier:(id) persistentIdentifier;
```

## Parameters

- `url`: The URL of the file whose version you want.
- `persistentIdentifier`: The persistent ID of the `NSFileVersion` object you want.

<a id="return-value"></a>

## Return Value

The file version object with the specified ID or `nil` if no such version object exists.

## See Also

### Related Documentation

- [persistentIdentifier](persistentidentifier.md): The identifier for this version of the file.

### Getting the Version of a File

- [currentVersionOfItemAtURL:](currentversionofitem%28at_%29.md): Returns the most recent version object for the file at the specified URL.
- [otherVersionsOfItemAtURL:](otherversionsofitem%28at_%29.md): Returns all versions of the specified file except the current version.
- [temporaryDirectoryURLForNewVersionOfItemAtURL:](temporarydirectoryurlfornewversionofitem%28at_%29.md): Creates and returns a temporary directory to use for saving the contents of the file.
