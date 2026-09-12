> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/type(offile:)](https://developer.apple.com/documentation/appkit/nsworkspace/type(offile:))

# type(ofFile:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 12.0)

Returns the uniform type identifier of the specified file, if it can be determined.

> Use -\[NSURL getResourceValue:forKey:error:\] with NSURLContentTypeKey instead.

## Declaration

```swift
func type(ofFile absoluteFilePath: String) throws -> String
```

## Parameters

- `absoluteFilePath`: The absolute path of the file.

<a id="return-value"></a>

## Return Value

An `NSString` containing the uniform type identifier of the file at `absoluteFilePath`. If no UTI can be determined the return value is `nil`.

<a id="Discussion"></a>

## Discussion

If the file at the specified path is a symbolic link, the type of the symbolic link is returned.

You can safely call this method from any thread of your app.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Manipulating Uniform Type Identifier Information

- [localizedDescription(forType:)](localizeddescription%28fortype_%29.md): Deprecated. Returns the localized description for the specified Uniform Type Identifier (UTI).
- [preferredFilenameExtension(forType:)](preferredfilenameextension%28fortype_%29.md): Deprecated. Returns the preferred filename extension for the specified Uniform Type Identifier (UTI).
- [filenameExtension(\_:isValidForType:)](filenameextension%28__isvalidfortype_%29.md): Deprecated. Returns whether the specified filename extension is appropriate for the Uniform Type Identifier (UTI).
- [type(\_:conformsToType:)](type%28__conformstotype_%29.md): Deprecated. Returns a Boolean indicating that the first Uniform Type Identifier (UTI) conforms to the second UTI.

# typeOfFile:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 12.0)

Returns the uniform type identifier of the specified file, if it can be determined.

> Use -\[NSURL getResourceValue:forKey:error:\] with NSURLContentTypeKey instead.

## Declaration

```objectivec
- (NSString *) typeOfFile:(NSString *) absoluteFilePath error:(NSError **) outError;
```

## Parameters

- `absoluteFilePath`: The absolute path of the file.
- `outError`: If the Uniform Type Identifier (UTI) of the file at `absoluteFilePath` can’t be determined, this parameter contains an [NSError](https://developer.apple.com/documentation/foundation/nserror) object that describes why.

<a id="return-value"></a>

## Return Value

An `NSString` containing the uniform type identifier of the file at `absoluteFilePath`. If no UTI can be determined the return value is `nil`.

<a id="Discussion"></a>

## Discussion

If the file at the specified path is a symbolic link, the type of the symbolic link is returned.

You can safely call this method from any thread of your app.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Manipulating Uniform Type Identifier Information

- [localizedDescriptionForType:](localizeddescription%28fortype_%29.md): Deprecated. Returns the localized description for the specified Uniform Type Identifier (UTI).
- [preferredFilenameExtensionForType:](preferredfilenameextension%28fortype_%29.md): Deprecated. Returns the preferred filename extension for the specified Uniform Type Identifier (UTI).
- [filenameExtension:isValidForType:](filenameextension%28__isvalidfortype_%29.md): Deprecated. Returns whether the specified filename extension is appropriate for the Uniform Type Identifier (UTI).
- [type:conformsToType:](type%28__conformstotype_%29.md): Deprecated. Returns a Boolean indicating that the first Uniform Type Identifier (UTI) conforms to the second UTI.
