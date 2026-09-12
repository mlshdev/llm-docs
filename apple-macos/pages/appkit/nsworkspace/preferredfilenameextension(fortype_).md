> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/preferredfilenameextension(fortype:)](https://developer.apple.com/documentation/appkit/nsworkspace/preferredfilenameextension(fortype:))

# preferredFilenameExtension(forType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 12.0)

Returns the preferred filename extension for the specified Uniform Type Identifier (UTI).

> Use UTType.preferredFilenameExtension instead.

## Declaration

```swift
func preferredFilenameExtension(forType typeName: String) -> String?
```

## Parameters

- `typeName`: A string containing the UTI.

<a id="return-value"></a>

## Return Value

The appropriate filename extension for `typeName`, or `nil` if no extension could be determined.

<a id="Discussion"></a>

## Discussion

You can safely call this method from any thread of your app.

## See Also

### Manipulating Uniform Type Identifier Information

- [type(ofFile:)](type%28offile_%29.md): Deprecated. Returns the uniform type identifier of the specified file, if it can be determined.
- [localizedDescription(forType:)](localizeddescription%28fortype_%29.md): Deprecated. Returns the localized description for the specified Uniform Type Identifier (UTI).
- [filenameExtension(\_:isValidForType:)](filenameextension%28__isvalidfortype_%29.md): Deprecated. Returns whether the specified filename extension is appropriate for the Uniform Type Identifier (UTI).
- [type(\_:conformsToType:)](type%28__conformstotype_%29.md): Deprecated. Returns a Boolean indicating that the first Uniform Type Identifier (UTI) conforms to the second UTI.

# preferredFilenameExtensionForType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 12.0)

Returns the preferred filename extension for the specified Uniform Type Identifier (UTI).

> Use UTType.preferredFilenameExtension instead.

## Declaration

```objectivec
- (NSString *) preferredFilenameExtensionForType:(NSString *) typeName;
```

## Parameters

- `typeName`: A string containing the UTI.

<a id="return-value"></a>

## Return Value

The appropriate filename extension for `typeName`, or `nil` if no extension could be determined.

<a id="Discussion"></a>

## Discussion

You can safely call this method from any thread of your app.

## See Also

### Manipulating Uniform Type Identifier Information

- [typeOfFile:error:](type%28offile_%29.md): Deprecated. Returns the uniform type identifier of the specified file, if it can be determined.
- [localizedDescriptionForType:](localizeddescription%28fortype_%29.md): Deprecated. Returns the localized description for the specified Uniform Type Identifier (UTI).
- [filenameExtension:isValidForType:](filenameextension%28__isvalidfortype_%29.md): Deprecated. Returns whether the specified filename extension is appropriate for the Uniform Type Identifier (UTI).
- [type:conformsToType:](type%28__conformstotype_%29.md): Deprecated. Returns a Boolean indicating that the first Uniform Type Identifier (UTI) conforms to the second UTI.
