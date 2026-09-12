> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel/allowsotherfiletypes](https://developer.apple.com/documentation/appkit/nssavepanel/allowsotherfiletypes)

# allowsOtherFileTypes (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the panel allows the user to save files with a filename extension that’s not in the list of allowed types.

## Declaration

```swift
var allowsOtherFileTypes: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the panel allows the user to save files with an extension that’s not in the list of allowed types. The default value is [false](https://developer.apple.com/documentation/swift/false).

If the user tries to save a filename with a recognized extension that’s not in the list of allowed types, they are presented with a dialog. If the value of this property is [true](https://developer.apple.com/documentation/swift/true), then the dialog presents the option of using the extension the user specified.

## See Also

### Configuring the File Types

- [allowedContentTypes](allowedcontenttypes.md): An array of types that specify the files types to which you can save.
- [treatsFilePackagesAsDirectories](treatsfilepackagesasdirectories.md): A Boolean value that indicates whether the panel displays file packages as directories.

# allowsOtherFileTypes (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the panel allows the user to save files with a filename extension that’s not in the list of allowed types.

## Declaration

```objectivec
@property BOOL allowsOtherFileTypes;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the panel allows the user to save files with an extension that’s not in the list of allowed types. The default value is [false](https://developer.apple.com/documentation/swift/false).

If the user tries to save a filename with a recognized extension that’s not in the list of allowed types, they are presented with a dialog. If the value of this property is [true](https://developer.apple.com/documentation/swift/true), then the dialog presents the option of using the extension the user specified.

## See Also

### Configuring the File Types

- [allowedContentTypes](allowedcontenttypes.md): An array of types that specify the files types to which you can save.
- [treatsFilePackagesAsDirectories](treatsfilepackagesasdirectories.md): A Boolean value that indicates whether the panel displays file packages as directories.
