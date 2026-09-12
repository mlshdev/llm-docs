> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/canconcurrentlyreaddocuments(oftype:)](https://developer.apple.com/documentation/appkit/nsdocument/canconcurrentlyreaddocuments(oftype:))

# canConcurrentlyReadDocuments(ofType:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.6+

Returns a Boolean value that indicates whether the receiver reads multiple documents of the given type concurrently.

## Declaration

```swift
class func canConcurrentlyReadDocuments(ofType typeName: String) -> Bool
```

## Parameters

- `typeName`: The string that identifies the document type.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) by default; subclasses can override to return [true](https://developer.apple.com/documentation/swift/true), thereby causing documents of the specified type to be read concurrently.

<a id="Discussion"></a>

## Discussion

Your [NSDocument](../nsdocument.md) subclass can implement this method to return [true](https://developer.apple.com/documentation/swift/true) to enable loading of documents concurrently, using background threads. When this facility is enabled in this way, [init(contentsOf:ofType:)](init%28contentsof_oftype_%29.md) executes on a background thread when opening files via the Open panel or from the Finder. This allows concurrent reading of multiple documents and also allows the app to be responsive while reading a large document.

The default implementation of this method returns [false](https://developer.apple.com/documentation/swift/false). A subclass override should return [true](https://developer.apple.com/documentation/swift/true) only for document types whose reading is thread-safe, as described in [Multicore Considerations](../nsdocument.md#Multicore-Considerations). You should disable undo registration during document reading, which is a good idea even in the absence of concurrency.

If you are checking the current Apple Event for a search string, you should not enable concurrent document opening, because code handling a document opening triggered by an Apple Event cannot get the current Apple Event. This happens because the event is suspended until all documents are read to enable correct reporting of success or error.

## See Also

### Related Documentation

- [readableTypes](readabletypes.md): Returns the types of data the receiver can read natively and any types filterable to that native type.

### Reading the Document’s Content

- [read(from:ofType:)](read%28from_oftype_%29-1vttv.md): Sets the contents of this document by reading from a file or file package, of a specified type, located by a URL.
- [read(from:ofType:)](read%28from_oftype_%29-3rzsi.md): Sets the contents of this document by reading from a file wrapper of a specified type.
- [read(from:ofType:)](read%28from_oftype_%29-6g6ai.md): Sets the contents of this document by reading from data of a specified type.

# canConcurrentlyReadDocumentsOfType: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.6+

Returns a Boolean value that indicates whether the receiver reads multiple documents of the given type concurrently.

## Declaration

```objectivec
+ (BOOL) canConcurrentlyReadDocumentsOfType:(NSString *) typeName;
```

## Parameters

- `typeName`: The string that identifies the document type.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) by default; subclasses can override to return [true](https://developer.apple.com/documentation/swift/true), thereby causing documents of the specified type to be read concurrently.

<a id="Discussion"></a>

## Discussion

Your [NSDocument](../nsdocument.md) subclass can implement this method to return [true](https://developer.apple.com/documentation/swift/true) to enable loading of documents concurrently, using background threads. When this facility is enabled in this way, [initWithContentsOfURL:ofType:error:](init%28contentsof_oftype_%29.md) executes on a background thread when opening files via the Open panel or from the Finder. This allows concurrent reading of multiple documents and also allows the app to be responsive while reading a large document.

The default implementation of this method returns [false](https://developer.apple.com/documentation/swift/false). A subclass override should return [true](https://developer.apple.com/documentation/swift/true) only for document types whose reading is thread-safe, as described in [Multicore Considerations](../nsdocument.md#Multicore-Considerations). You should disable undo registration during document reading, which is a good idea even in the absence of concurrency.

If you are checking the current Apple Event for a search string, you should not enable concurrent document opening, because code handling a document opening triggered by an Apple Event cannot get the current Apple Event. This happens because the event is suspended until all documents are read to enable correct reporting of success or error.

## See Also

### Related Documentation

- [readableTypes](readabletypes.md): Returns the types of data the receiver can read natively and any types filterable to that native type.

### Reading the Document’s Content

- [readFromURL:ofType:error:](read%28from_oftype_%29-1vttv.md): Sets the contents of this document by reading from a file or file package, of a specified type, located by a URL.
- [readFromFileWrapper:ofType:error:](read%28from_oftype_%29-3rzsi.md): Sets the contents of this document by reading from a file wrapper of a specified type.
- [readFromData:ofType:error:](read%28from_oftype_%29-6g6ai.md): Sets the contents of this document by reading from data of a specified type.
