> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/read(from:)](https://developer.apple.com/documentation/uikit/uidocument/read(from:))

# read(from:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Reads the document data in a file at a specified location in the application sandbox.

## Declaration

```swift
func read(from url: URL) throws
```

## Parameters

- `url`: A file URL that identifies the location of the document file in the application sandbox. This file URL is typically the one returned by the [fileURL](fileurl.md) property.

<a id="Discussion"></a>

## Discussion

Typical [UIDocument](../uidocument.md) subclasses shouldn’t need to call this method directly, especially if the entire file is read at once. The default implementation calls [load(fromContents:ofType:)](load%28fromcontents_oftype_%29.md) on the queue on which [open(completionHandler:)](open%28completionhandler_%29.md) was called to provide the `UIDocument` subclass with the document data object.

Subclasses that want more control over the reading of the document file—for example, that want to read a large document file incrementally—can override this method. It isn’t necessary for these subclasses to call the superclass implementation (`super`).

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Reading document data

- [open(completionHandler:)](open%28completionhandler_%29.md): Opens a document asynchronously.
- [load(fromContents:ofType:)](load%28fromcontents_oftype_%29.md): Loads the document data into the app’s data model.

# readFromURL:error: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Reads the document data in a file at a specified location in the application sandbox.

## Declaration

```objectivec
- (BOOL) readFromURL:(NSURL *) url error:(NSError **) outError;
```

## Parameters

- `url`: A file URL that identifies the location of the document file in the application sandbox. This file URL is typically the one returned by the [fileURL](fileurl.md) property.
- `outError`: If the document file can’t be read, returns by indirection an error object that encapsulates the reasons why the read operation failed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the read operation succeeds, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Typical [UIDocument](../uidocument.md) subclasses shouldn’t need to call this method directly, especially if the entire file is read at once. The default implementation calls [loadFromContents:ofType:error:](load%28fromcontents_oftype_%29.md) on the queue on which [openWithCompletionHandler:](open%28completionhandler_%29.md) was called to provide the `UIDocument` subclass with the document data object.

Subclasses that want more control over the reading of the document file—for example, that want to read a large document file incrementally—can override this method. It isn’t necessary for these subclasses to call the superclass implementation (`super`).

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Reading document data

- [openWithCompletionHandler:](open%28completionhandler_%29.md): Opens a document asynchronously.
- [loadFromContents:ofType:error:](load%28fromcontents_oftype_%29.md): Loads the document data into the app’s data model.
