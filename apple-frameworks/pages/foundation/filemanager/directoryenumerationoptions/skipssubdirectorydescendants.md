> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/directoryenumerationoptions/skipssubdirectorydescendants](https://developer.apple.com/documentation/foundation/filemanager/directoryenumerationoptions/skipssubdirectorydescendants)

# skipsSubdirectoryDescendants (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option to perform a shallow enumeration that doesn’t descend into directories.

## Declaration

```swift
static var skipsSubdirectoryDescendants: FileManager.DirectoryEnumerationOptions { get }
```

## See Also

### Directory Enumeration Options

- [skipsPackageDescendants](skipspackagedescendants.md): An option to treat packages like files and not descend into their contents.
- [skipsHiddenFiles](skipshiddenfiles.md): An option to skip hidden files.

# NSDirectoryEnumerationSkipsSubdirectoryDescendants (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option to perform a shallow enumeration that doesn’t descend into directories.

## Declaration

```objectivec
NSDirectoryEnumerationSkipsSubdirectoryDescendants
```

## See Also

### Directory Enumeration Options

- [NSDirectoryEnumerationSkipsPackageDescendants](skipspackagedescendants.md): An option to treat packages like files and not descend into their contents.
- [NSDirectoryEnumerationSkipsHiddenFiles](skipshiddenfiles.md): An option to skip hidden files.
