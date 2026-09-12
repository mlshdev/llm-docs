> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/type(_:conformstotype:)](https://developer.apple.com/documentation/appkit/nsworkspace/type(_:conformstotype:))

# type(\_:conformsToType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 12.0)

Returns a Boolean indicating that the first Uniform Type Identifier (UTI) conforms to the second UTI.

> Use -\[UTType conformsToType:\] instead.

## Declaration

```swift
func type(_ firstTypeName: String, conformsToType secondTypeName: String) -> Bool
```

## Parameters

- `firstTypeName`: A string containing the UTI that should conform to `secondTypeName`.
- `secondTypeName`: A string containing a UTI.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `firstTypeName` conforms to the UTI hierarchy of `secondTypeName`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use this method instead of comparing UTIs for equality. See [Uniform Type Identifiers Overview](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_intro/understand_utis_intro.html#//apple_ref/doc/uid/TP40001319) for information about UTI conformance.

This method will always return [true](https://developer.apple.com/documentation/swift/true) if the two strings are equal. Use this method with other type names, including those in the [CFBundleTypeName](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundledocumenttypes/cfbundletypename) keys of your app’s `Info.plist` file.

You can safely call this method from any thread of your app.

## See Also

### Manipulating Uniform Type Identifier Information

- [type(ofFile:)](type%28offile_%29.md): Deprecated. Returns the uniform type identifier of the specified file, if it can be determined.
- [localizedDescription(forType:)](localizeddescription%28fortype_%29.md): Deprecated. Returns the localized description for the specified Uniform Type Identifier (UTI).
- [preferredFilenameExtension(forType:)](preferredfilenameextension%28fortype_%29.md): Deprecated. Returns the preferred filename extension for the specified Uniform Type Identifier (UTI).
- [filenameExtension(\_:isValidForType:)](filenameextension%28__isvalidfortype_%29.md): Deprecated. Returns whether the specified filename extension is appropriate for the Uniform Type Identifier (UTI).

# type:conformsToType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 12.0)

Returns a Boolean indicating that the first Uniform Type Identifier (UTI) conforms to the second UTI.

> Use -\[UTType conformsToType:\] instead.

## Declaration

```objectivec
- (BOOL) type:(NSString *) firstTypeName conformsToType:(NSString *) secondTypeName;
```

## Parameters

- `firstTypeName`: A string containing the UTI that should conform to `secondTypeName`.
- `secondTypeName`: A string containing a UTI.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `firstTypeName` conforms to the UTI hierarchy of `secondTypeName`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use this method instead of comparing UTIs for equality. See [Uniform Type Identifiers Overview](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_intro/understand_utis_intro.html#//apple_ref/doc/uid/TP40001319) for information about UTI conformance.

This method will always return [true](https://developer.apple.com/documentation/swift/true) if the two strings are equal. Use this method with other type names, including those in the [CFBundleTypeName](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundledocumenttypes/cfbundletypename) keys of your app’s `Info.plist` file.

You can safely call this method from any thread of your app.

## See Also

### Manipulating Uniform Type Identifier Information

- [typeOfFile:error:](type%28offile_%29.md): Deprecated. Returns the uniform type identifier of the specified file, if it can be determined.
- [localizedDescriptionForType:](localizeddescription%28fortype_%29.md): Deprecated. Returns the localized description for the specified Uniform Type Identifier (UTI).
- [preferredFilenameExtensionForType:](preferredfilenameextension%28fortype_%29.md): Deprecated. Returns the preferred filename extension for the specified Uniform Type Identifier (UTI).
- [filenameExtension:isValidForType:](filenameextension%28__isvalidfortype_%29.md): Deprecated. Returns whether the specified filename extension is appropriate for the Uniform Type Identifier (UTI).
