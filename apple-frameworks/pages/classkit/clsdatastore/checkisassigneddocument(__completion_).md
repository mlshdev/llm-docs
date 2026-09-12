> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsdatastore/checkisassigneddocument(_:completion:)](https://developer.apple.com/documentation/classkit/clsdatastore/checkisassigneddocument(_:completion:))

# checkIsAssignedDocument(\_:completion:) (Swift)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```swift
func checkIsAssignedDocument(_ documentURL: URL, completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func isAssignedDocument(_ documentURL: URL) async throws -> Bool
```

## Parameters

- `documentURL`: The file URL of the document to check.
- `completion`: A block called when the check is complete. The block takes two parameters:

  - isAssignedDocument: A Boolean indicating whether the document is assigned to the current user.
  - error: An error object if the check failed, or nil if successful.

<a id="discussion"></a>

## Discussion

Determines whether a URL to the document was assigned to the student.

This method checks if the document at the specified URL is assigned to the current student signed into the device.

```
           This is particularly useful for implementing student-specific workflows, such as:
           - Showing submission UI only for assigned documents
           - Displaying assignment-specific metadata or instructions
           - Enabling special features or restrictions for assigned work

           The completion handler's `isAssignedDocument` parameter will be `YES` when:
           - The document URL corresponds to an active assigned document
           - The current user is authenticated as a student and assigned to this specific document

           The completion handler's `isAssignedDocument` parameter will be `NO` when:
           - The document is not part of any assigned document
           - The current user is not a student (e.g., teacher)
           - The document has been unassigned or deleted
           - The student does not have permission to access this assignment
```

> **Note**

> This method is designed to be called from ClassKitUI clients and requires proper ClassKit entitlements. The completion handler may be called on a background thread, so dispatch to the main queue if you need to update UI based on the result.

\[\[CLSDataStore shared\] checkIsAssignedDocument:documentURL completion:^(BOOL isAssignedDocument, NSError \* \_Nullable error) { dispatch_async(dispatch_get_main_queue(), ^{ if (error) { NSLog(@“Error checking assignment status: %@”, error); return; }

```
    if (isAssignedDocument) {
        // Show UI with submission options
        [self showAssignedDocumentSubmissionUI];
    } else {
        // Show standard document UI
        [self showStandardDocumentUI];
    }
});
```

}\];

# checkIsAssignedDocument:completion: (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```objectivec
- (void) checkIsAssignedDocument:(NSURL *) documentURL completion:(void (^)(BOOL isAssignedDocument, NSError *error)) completion;
```

## Parameters

- `documentURL`: The file URL of the document to check.
- `completion`: A block called when the check is complete. The block takes two parameters:

  - isAssignedDocument: A Boolean indicating whether the document is assigned to the current user.
  - error: An error object if the check failed, or nil if successful.

<a id="discussion"></a>

## Discussion

Determines whether a URL to the document was assigned to the student.

This method checks if the document at the specified URL is assigned to the current student signed into the device.

```
           This is particularly useful for implementing student-specific workflows, such as:
           - Showing submission UI only for assigned documents
           - Displaying assignment-specific metadata or instructions
           - Enabling special features or restrictions for assigned work

           The completion handler's `isAssignedDocument` parameter will be `YES` when:
           - The document URL corresponds to an active assigned document
           - The current user is authenticated as a student and assigned to this specific document

           The completion handler's `isAssignedDocument` parameter will be `NO` when:
           - The document is not part of any assigned document
           - The current user is not a student (e.g., teacher)
           - The document has been unassigned or deleted
           - The student does not have permission to access this assignment
```

> **Note**

> This method is designed to be called from ClassKitUI clients and requires proper ClassKit entitlements. The completion handler may be called on a background thread, so dispatch to the main queue if you need to update UI based on the result.

\[\[CLSDataStore shared\] checkIsAssignedDocument:documentURL completion:^(BOOL isAssignedDocument, NSError \* \_Nullable error) { dispatch_async(dispatch_get_main_queue(), ^{ if (error) { NSLog(@“Error checking assignment status: %@”, error); return; }

```
    if (isAssignedDocument) {
        // Show UI with submission options
        [self showAssignedDocumentSubmissionUI];
    } else {
        // Show standard document UI
        [self showStandardDocumentUI];
    }
});
```

}\];
