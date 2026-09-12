> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/filedialogbrowseroptions/enumeratepackages](https://developer.apple.com/documentation/swiftui/filedialogbrowseroptions/enumeratepackages)

# enumeratePackages

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Allows enumerating packages contents in contrast to the default behavior when packages are represented flatly, similar to files.

## Declaration

```swift
static let enumeratePackages: FileDialogBrowserOptions
```

## See Also

### Getting browser options

- [displayFileExtensions](displayfileextensions.md): On iOS, configures the `fileExporter`, `fileImporter`, or `fileMover` to show or hide file extensions. Default behavior is to hide them. On macOS, this option has no effect.
- [includeHiddenFiles](includehiddenfiles.md): Displays the files that are hidden by default.
