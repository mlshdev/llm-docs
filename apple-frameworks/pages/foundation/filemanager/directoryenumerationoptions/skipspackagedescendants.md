> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/filemanager/directoryenumerationoptions/skipspackagedescendants

# skipsPackageDescendants (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option to treat packages like files and not descend into their contents.

## Declaration

```swift
static var skipsPackageDescendants: FileManager.DirectoryEnumerationOptions { get }
```

## See Also

### Directory Enumeration Options

- [skipsSubdirectoryDescendants](skipssubdirectorydescendants.md): An option to perform a shallow enumeration that doesn’t descend into directories.
- [skipsHiddenFiles](skipshiddenfiles.md): An option to skip hidden files.

# NSDirectoryEnumerationSkipsPackageDescendants (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option to treat packages like files and not descend into their contents.

## Declaration

```objectivec
NSDirectoryEnumerationSkipsPackageDescendants
```

## See Also

### Directory Enumeration Options

- [NSDirectoryEnumerationSkipsSubdirectoryDescendants](skipssubdirectorydescendants.md): An option to perform a shallow enumeration that doesn’t descend into directories.
- [NSDirectoryEnumerationSkipsHiddenFiles](skipshiddenfiles.md): An option to skip hidden files.
