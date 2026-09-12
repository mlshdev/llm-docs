> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/filenameextension(_:isvalidfortype:)](https://developer.apple.com/documentation/appkit/nsworkspace/filenameextension(_:isvalidfortype:))

# filenameExtension(\_:isValidForType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 12.0)

Returns whether the specified filename extension is appropriate for the Uniform Type Identifier (UTI).

> Use +\[UTType typesWithTag:tagClass:conformingToType:\] to get a list of candidate types, then check if the input type conforms to any of them.

## Declaration

```swift
func filenameExtension(_ filenameExtension: String, isValidForType typeName: String) -> Bool
```

## Parameters

- `filenameExtension`: A string containing the filename extension.
- `typeName`: A string containing the UTI.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `fileNameExtension` is a valid extension for `typeName`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You can safely call this method from any thread of your app.

## See Also

### Manipulating Uniform Type Identifier Information

- [type(ofFile:)](type%28offile_%29.md): Deprecated. Returns the uniform type identifier of the specified file, if it can be determined.
- [localizedDescription(forType:)](localizeddescription%28fortype_%29.md): Deprecated. Returns the localized description for the specified Uniform Type Identifier (UTI).
- [preferredFilenameExtension(forType:)](preferredfilenameextension%28fortype_%29.md): Deprecated. Returns the preferred filename extension for the specified Uniform Type Identifier (UTI).
- [type(\_:conformsToType:)](type%28__conformstotype_%29.md): Deprecated. Returns a Boolean indicating that the first Uniform Type Identifier (UTI) conforms to the second UTI.

# filenameExtension:isValidForType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 12.0)

Returns whether the specified filename extension is appropriate for the Uniform Type Identifier (UTI).

> Use +\[UTType typesWithTag:tagClass:conformingToType:\] to get a list of candidate types, then check if the input type conforms to any of them.

## Declaration

```objectivec
- (BOOL) filenameExtension:(NSString *) filenameExtension isValidForType:(NSString *) typeName;
```

## Parameters

- `filenameExtension`: A string containing the filename extension.
- `typeName`: A string containing the UTI.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `fileNameExtension` is a valid extension for `typeName`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You can safely call this method from any thread of your app.

## See Also

### Manipulating Uniform Type Identifier Information

- [typeOfFile:error:](type%28offile_%29.md): Deprecated. Returns the uniform type identifier of the specified file, if it can be determined.
- [localizedDescriptionForType:](localizeddescription%28fortype_%29.md): Deprecated. Returns the localized description for the specified Uniform Type Identifier (UTI).
- [preferredFilenameExtensionForType:](preferredfilenameextension%28fortype_%29.md): Deprecated. Returns the preferred filename extension for the specified Uniform Type Identifier (UTI).
- [type:conformsToType:](type%28__conformstotype_%29.md): Deprecated. Returns a Boolean indicating that the first Uniform Type Identifier (UTI) conforms to the second UTI.
