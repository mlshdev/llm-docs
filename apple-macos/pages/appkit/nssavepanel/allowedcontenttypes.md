> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel/allowedcontenttypes](https://developer.apple.com/documentation/appkit/nssavepanel/allowedcontenttypes)

# allowedContentTypes (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

An array of types that specify the files types to which you can save.

## Declaration

```swift
var allowedContentTypes: [UTType] { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to an empty array that indicates that you can use any file type. If you don’t provide an extension, the system uses the first preferred extension in the array for the save panel. If you specify a type that isn’t in the array and [allowsOtherFileTypes](allowsotherfiletypes.md) is `YES`, the system presents another dialog when prompting you to save.

## See Also

### Configuring the File Types

- [allowsOtherFileTypes](allowsotherfiletypes.md): A Boolean value that indicates whether the panel allows the user to save files with a filename extension that’s not in the list of allowed types.
- [treatsFilePackagesAsDirectories](treatsfilepackagesasdirectories.md): A Boolean value that indicates whether the panel displays file packages as directories.

# allowedContentTypes (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

An array of types that specify the files types to which you can save.

## Declaration

```objectivec
@property (copy) NSArray<UTType *> * allowedContentTypes;
```

<a id="Discussion"></a>

## Discussion

Defaults to an empty array that indicates that you can use any file type. If you don’t provide an extension, the system uses the first preferred extension in the array for the save panel. If you specify a type that isn’t in the array and [allowsOtherFileTypes](allowsotherfiletypes.md) is `YES`, the system presents another dialog when prompting you to save.

## See Also

### Configuring the File Types

- [allowsOtherFileTypes](allowsotherfiletypes.md): A Boolean value that indicates whether the panel allows the user to save files with a filename extension that’s not in the list of allowed types.
- [treatsFilePackagesAsDirectories](treatsfilepackagesasdirectories.md): A Boolean value that indicates whether the panel displays file packages as directories.
