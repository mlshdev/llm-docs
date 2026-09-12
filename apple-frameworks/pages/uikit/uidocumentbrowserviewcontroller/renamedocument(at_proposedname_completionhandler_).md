> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowserviewcontroller/renamedocument(at:proposedname:completionhandler:)](https://developer.apple.com/documentation/uikit/uidocumentbrowserviewcontroller/renamedocument(at:proposedname:completionhandler:))

# renameDocument(at:proposedName:completionHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Renames a document at the specified URL.

## Declaration

```swift
func renameDocument(at documentURL: URL, proposedName: String, completionHandler: @escaping (URL?, (any Error)?) -> Void)
```

```swift
func renameDocument(at documentURL: URL, proposedName: String) async throws -> URL
```

## Parameters

- `documentURL`: The URL specifying the location of the document.
- `proposedName`: The proposed new name to rename the document to. If `proposedName` is already taken, the system might alter the proposed name and confirm the new suggestion with the user. The final name that the system chooses appears in the `finalURL` parameter of `completionHandler`.
- `completionHandler`: A completion handler to execute after the renaming operation occurs. The final URL and error information are available in the completion handler.

  - **`finalURL`**: The URL of the newly renamed document, or `nil` if an error occurs.
  - **`error`**: An object that describes the error, if one occurs; otherwise, `nil`.

# renameDocumentAtURL:proposedName:completionHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Renames a document at the specified URL.

## Declaration

```objectivec
- (void) renameDocumentAtURL:(NSURL *) documentURL proposedName:(NSString *) proposedName completionHandler:(void (^)(NSURL *finalURL, NSError *error)) completionHandler;
```

## Parameters

- `documentURL`: The URL specifying the location of the document.
- `proposedName`: The proposed new name to rename the document to. If `proposedName` is already taken, the system might alter the proposed name and confirm the new suggestion with the user. The final name that the system chooses appears in the `finalURL` parameter of `completionHandler`.
- `completionHandler`: A completion handler to execute after the renaming operation occurs. The final URL and error information are available in the completion handler.

  - **`finalURL`**: The URL of the newly renamed document, or `nil` if an error occurs.
  - **`error`**: An object that describes the error, if one occurs; otherwise, `nil`.
