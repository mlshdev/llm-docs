> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/load(fromcontents:oftype:)](https://developer.apple.com/documentation/uikit/uidocument/load(fromcontents:oftype:))

# load(fromContents:ofType:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Loads the document data into the app’s data model.

## Declaration

```swift
func load(fromContents contents: Any, ofType typeName: String?) throws
```

## Parameters

- `contents`: An object encapsulating the document data to load. This object is either an instance of the [NSData](../../foundation/nsdata.md) class (for flat files) or the [FileWrapper](../../foundation/filewrapper.md) class (for file packages).
- `typeName`: The file type of the document, a Uniform Type Identifier (UTI) based on the file extension of [fileURL](fileurl.md). You can obtain the default value of the file type from the [fileType](filetype.md) property.

<a id="Discussion"></a>

## Discussion

Override this method to accept and load the data for a document. After `UIDocument` reads the document data from the file located at [fileURL](fileurl.md) it calls your subclass, passing the data to the subclass in this method. This method is called on the queue that the [open(completionHandler:)](open%28completionhandler_%29.md) method was called on (typically, the main queue).

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Reading document data

- [open(completionHandler:)](open%28completionhandler_%29.md): Opens a document asynchronously.
- [read(from:)](read%28from_%29.md): Reads the document data in a file at a specified location in the application sandbox.

# loadFromContents:ofType:error: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Loads the document data into the app’s data model.

## Declaration

```objectivec
- (BOOL) loadFromContents:(id) contents ofType:(NSString *) typeName error:(NSError **) outError;
```

## Parameters

- `contents`: An object encapsulating the document data to load. This object is either an instance of the [NSData](../../foundation/nsdata.md) class (for flat files) or the [NSFileWrapper](../../foundation/filewrapper.md) class (for file packages).
- `typeName`: The file type of the document, a Uniform Type Identifier (UTI) based on the file extension of [fileURL](fileurl.md). You can obtain the default value of the file type from the [fileType](filetype.md) property.
- `outError`: If you can’t load the document data for any reason, return by indirection an [NSError](../../foundation/nserror.md) object that encapsulates the reasons you can’t. Otherwise, ignore this parameter.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you successfully load the document, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Override this method to accept and load the data for a document. After `UIDocument` reads the document data from the file located at [fileURL](fileurl.md) it calls your subclass, passing the data to the subclass in this method. This method is called on the queue that the [openWithCompletionHandler:](open%28completionhandler_%29.md) method was called on (typically, the main queue).

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Reading document data

- [openWithCompletionHandler:](open%28completionhandler_%29.md): Opens a document asynchronously.
- [readFromURL:error:](read%28from_%29.md): Reads the document data in a file at a specified location in the application sandbox.
