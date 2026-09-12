> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/move(completionhandler:)](https://developer.apple.com/documentation/appkit/nsdocument/move(completionhandler:))

# move(completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Moves the document to a user-selected location.

## Declaration

```swift
func move(completionHandler: ((Bool) -> Void)? = nil)
```

```swift
func move() async -> Bool
```

## Parameters

- `completionHandler`: The completion handler block object passed in to be invoked after moving is completed, regardless of success, failure, or cancellation of moving action.

<a id="Discussion"></a>

## Discussion

This method presents the user with a move panel if `[self fileURL]` is non-nil and then tries to save the document to the new location by invoking the [move(to:completionHandler:)](move%28to_completionhandler_%29.md) method if the user accepts the location presented by the panel. If a file with the same name already exists at that location, the user will be asked to choose between replacing the pre-existing file, renaming the current document, or canceling the move process. If `[self fileURL]` is `nil`, then the `[self runModalSavePanelForSaveOperation:NSSaveAsOperation delegate:didSaveSelector:contextInfo:]` message is sent instead.

## See Also

### Related Documentation

- [moveToUbiquityContainer(\_:)](movetoubiquitycontainer%28__%29.md): Moves the document to the user’s iCloud storage.

### Moving the Document

- [move(\_:)](move%28__%29.md): Moves the document to a new location in response to the user choosing the Move To… menu item.
- [move(to:completionHandler:)](move%28to_completionhandler_%29.md): Moves the document’s file to the given URL.

# moveDocumentWithCompletionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Moves the document to a user-selected location.

## Declaration

```objectivec
- (void) moveDocumentWithCompletionHandler:(void (^)(BOOL didMove)) completionHandler;
```

## Parameters

- `completionHandler`: The completion handler block object passed in to be invoked after moving is completed, regardless of success, failure, or cancellation of moving action.

<a id="Discussion"></a>

## Discussion

This method presents the user with a move panel if `[self fileURL]` is non-nil and then tries to save the document to the new location by invoking the [moveToURL:completionHandler:](move%28to_completionhandler_%29.md) method if the user accepts the location presented by the panel. If a file with the same name already exists at that location, the user will be asked to choose between replacing the pre-existing file, renaming the current document, or canceling the move process. If `[self fileURL]` is `nil`, then the `[self runModalSavePanelForSaveOperation:NSSaveAsOperation delegate:didSaveSelector:contextInfo:]` message is sent instead.

## See Also

### Related Documentation

- [moveDocumentToUbiquityContainer:](movetoubiquitycontainer%28__%29.md): Moves the document to the user’s iCloud storage.

### Moving the Document

- [moveDocument:](move%28__%29.md): Moves the document to a new location in response to the user choosing the Move To… menu item.
- [moveToURL:completionHandler:](move%28to_completionhandler_%29.md): Moves the document’s file to the given URL.
