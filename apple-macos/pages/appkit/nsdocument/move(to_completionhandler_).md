> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/move(to:completionhandler:)](https://developer.apple.com/documentation/appkit/nsdocument/move(to:completionhandler:))

# move(to:completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Moves the document’s file to the given URL.

## Declaration

```swift
func move(to url: URL, completionHandler: (((any Error)?) -> Void)? = nil)
```

```swift
func move(to url: URL) async throws
```

## Parameters

- `url`: The location where the file will ultimately end up, if the move is successful.
- `completionHandler`: The completion handler block object passed in to be invoked at some point in the future, perhaps after the method invocation has returned. The completion handler must be invoked on the main thread. On output, a `nil` error is passed if the move is successful; otherwise an [NSError](https://developer.apple.com/documentation/foundation/nserror) object is passed that encapsulates the reason for failure.

<a id="Discussion"></a>

## Discussion

The default implementation of this method replaces any file that may currently exist at the given URL with the one being moved, as necessary.

## See Also

### Related Documentation

- [moveToUbiquityContainer(\_:)](movetoubiquitycontainer%28__%29.md): Moves the document to the user’s iCloud storage.

### Moving the Document

- [move(\_:)](move%28__%29.md): Moves the document to a new location in response to the user choosing the Move To… menu item.
- [move(completionHandler:)](move%28completionhandler_%29.md): Moves the document to a user-selected location.

# moveToURL:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Moves the document’s file to the given URL.

## Declaration

```objectivec
- (void) moveToURL:(NSURL *) url completionHandler:(void (^)(NSError *)) completionHandler;
```

## Parameters

- `url`: The location where the file will ultimately end up, if the move is successful.
- `completionHandler`: The completion handler block object passed in to be invoked at some point in the future, perhaps after the method invocation has returned. The completion handler must be invoked on the main thread. On output, a `nil` error is passed if the move is successful; otherwise an [NSError](https://developer.apple.com/documentation/foundation/nserror) object is passed that encapsulates the reason for failure.

<a id="Discussion"></a>

## Discussion

The default implementation of this method replaces any file that may currently exist at the given URL with the one being moved, as necessary.

## See Also

### Related Documentation

- [moveDocumentToUbiquityContainer:](movetoubiquitycontainer%28__%29.md): Moves the document to the user’s iCloud storage.

### Moving the Document

- [moveDocument:](move%28__%29.md): Moves the document to a new location in response to the user choosing the Move To… menu item.
- [moveDocumentWithCompletionHandler:](move%28completionhandler_%29.md): Moves the document to a user-selected location.
