> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/typeforcontents(of:)](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/typeforcontents(of:))

# typeForContents(of:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns, for a specified URL, the document type identifier to use when opening the document at that location, if successful.

## Declaration

```swift
func typeForContents(of url: URL) throws -> String
```

## Parameters

- `url`: The URL to use for locating the type identifier.

<a id="Discussion"></a>

## Discussion

The URL is represented by `url`. If not successful, the method returns `nil` after setting `outError` to point to an `NSError` object that encapsulates the reason why the document type could not be determined, or the fact that the document type is unrecognized.

You can override this method to customize type determination for documents being opened.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing Document Types

- [documentClassNames](documentclassnames.md): An array of strings representing the custom document classes supported by this app.
- [defaultType](defaulttype.md): Returns the name of the document type that should be used when creating new documents.
- [documentClass(forType:)](documentclass%28fortype_%29.md): Returns the `NSDocument` subclass associated with a given document type.
- [displayName(forType:)](displayname%28fortype_%29.md): Returns the descriptive name for the specified document type, which is used in the File Format pop-up menu of the Save As dialog.

# typeForContentsOfURL:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns, for a specified URL, the document type identifier to use when opening the document at that location, if successful.

## Declaration

```objectivec
- (NSString *) typeForContentsOfURL:(NSURL *) url error:(NSError **) outError;
```

## Parameters

- `url`: The URL to use for locating the type identifier.
- `outError`: An error returned if the type identifer could not be determined; otherwise, nil.

<a id="Discussion"></a>

## Discussion

The URL is represented by `url`. If not successful, the method returns `nil` after setting `outError` to point to an `NSError` object that encapsulates the reason why the document type could not be determined, or the fact that the document type is unrecognized.

You can override this method to customize type determination for documents being opened.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing Document Types

- [documentClassNames](documentclassnames.md): An array of strings representing the custom document classes supported by this app.
- [defaultType](defaulttype.md): Returns the name of the document type that should be used when creating new documents.
- [documentClassForType:](documentclass%28fortype_%29.md): Returns the `NSDocument` subclass associated with a given document type.
- [displayNameForType:](displayname%28fortype_%29.md): Returns the descriptive name for the specified document type, which is used in the File Format pop-up menu of the Save As dialog.
