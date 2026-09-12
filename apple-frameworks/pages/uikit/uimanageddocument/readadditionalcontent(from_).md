> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimanageddocument/readadditionalcontent(from:)](https://developer.apple.com/documentation/uikit/uimanageddocument/readadditionalcontent(from:))

# readAdditionalContent(from:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Handles reading non-Core Data content in the additional content directory in the document’s file package.

## Declaration

```swift
func readAdditionalContent(from absoluteURL: URL) throws
```

## Parameters

- `absoluteURL`: The URL for the additional content directory in the document’s file package.

<a id="Discussion"></a>

## Discussion

You override this method to read non-Core Data content from the additional content directory in the document’s file package.

If you implement this method, it’s invoked automatically by [read(from:)](../uidocument/read%28from_%29.md).

There’s no need to invoke `super`’s implementation.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

<a id="Special-considerations"></a>

### Special considerations

Additional content isn’t supported on iCloud.

## See Also

### Customizing read and write operations

- [additionalContent(for:)](additionalcontent%28for_%29.md): Handles writing non-Core Data content to the additional content directory in the document’s file package.
- [writeAdditionalContent(\_:to:originalContentsURL:)](writeadditionalcontent%28__to_originalcontentsurl_%29.md): Handles writing non-Core Data content to the document’s file package.

# readAdditionalContentFromURL:error: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Handles reading non-Core Data content in the additional content directory in the document’s file package.

## Declaration

```objectivec
- (BOOL) readAdditionalContentFromURL:(NSURL *) absoluteURL error:(NSError **) error;
```

## Parameters

- `absoluteURL`: The URL for the additional content directory in the document’s file package.
- `error`: Upon return, if a problem occurs, contains an error object that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the read operation is successful, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You override this method to read non-Core Data content from the additional content directory in the document’s file package.

If you implement this method, it’s invoked automatically by [readFromURL:error:](../uidocument/read%28from_%29.md).

There’s no need to invoke `super`’s implementation.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

<a id="Special-considerations"></a>

### Special considerations

Additional content isn’t supported on iCloud.

## See Also

### Customizing read and write operations

- [additionalContentForURL:error:](additionalcontent%28for_%29.md): Handles writing non-Core Data content to the additional content directory in the document’s file package.
- [writeAdditionalContent:toURL:originalContentsURL:error:](writeadditionalcontent%28__to_originalcontentsurl_%29.md): Handles writing non-Core Data content to the document’s file package.
