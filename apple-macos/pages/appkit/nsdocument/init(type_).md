> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/init(type:)](https://developer.apple.com/documentation/appkit/nsdocument/init(type:))

# init(type:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes a document of a specified type.

## Declaration

```swift
convenience init(type typeName: String) throws
```

## Parameters

- `typeName`: The string that identifies the document type.

<a id="return-value"></a>

## Return Value

The initialized `NSDocument` object, or, if the document could not be created, `nil`.

<a id="Discussion"></a>

## Discussion

The default implementation of this method just invokes `[self init]` and `[self setFileType:typeName]`.

You can override this method to perform initialization that must be done when creating new documents but should not be done when opening existing documents. Your override should typically invoke `super`, or at least it must invoke [init()](init%28%29.md), the `NSDocument` designated initializer, to initialize the `NSDocument` private instance variables.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating a Document Object

- [init()](init%28%29.md): Initializes and returns an empty document object.
- [init(contentsOf:ofType:)](init%28contentsof_oftype_%29.md): Initializes a document located by a URL of a specified type.
- [init(for:withContentsOf:ofType:)](init%28for_withcontentsof_oftype_%29.md): Initializes a document with the specified contents, and places the resulting document’s file at the designated location.

# initWithType:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes a document of a specified type.

## Declaration

```objectivec
- (instancetype) initWithType:(NSString *) typeName error:(NSError **) outError;
```

## Parameters

- `typeName`: The string that identifies the document type.
- `outError`: On return, if initialization is unsuccessful, a pointer to an error object that encapsulates the reason the document could not be created.

<a id="return-value"></a>

## Return Value

The initialized `NSDocument` object, or, if the document could not be created, `nil`.

<a id="Discussion"></a>

## Discussion

The default implementation of this method just invokes `[self init]` and `[self setFileType:typeName]`.

You can override this method to perform initialization that must be done when creating new documents but should not be done when opening existing documents. Your override should typically invoke `super`, or at least it must invoke [init](init%28%29.md), the `NSDocument` designated initializer, to initialize the `NSDocument` private instance variables.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating a Document Object

- [init](init%28%29.md): Initializes and returns an empty document object.
- [initWithContentsOfURL:ofType:error:](init%28contentsof_oftype_%29.md): Initializes a document located by a URL of a specified type.
- [initForURL:withContentsOfURL:ofType:error:](init%28for_withcontentsof_oftype_%29.md): Initializes a document with the specified contents, and places the resulting document’s file at the designated location.
