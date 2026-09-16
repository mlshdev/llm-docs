> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/filedialogbrowseroptions/displayfileextensions

# displayFileExtensions

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

On iOS, configures the `fileExporter`, `fileImporter`, or `fileMover` to show or hide file extensions. Default behavior is to hide them. On macOS, this option has no effect.

## Declaration

```swift
static let displayFileExtensions: FileDialogBrowserOptions
```

## See Also

### Getting browser options

- [enumeratePackages](enumeratepackages.md): Allows enumerating packages contents in contrast to the default behavior when packages are represented flatly, similar to files.
- [includeHiddenFiles](includehiddenfiles.md): Displays the files that are hidden by default.
