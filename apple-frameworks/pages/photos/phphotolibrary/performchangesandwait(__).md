> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotolibrary/performchangesandwait(_:)](https://developer.apple.com/documentation/photos/phphotolibrary/performchangesandwait(_:))

# performChangesAndWait(\_:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Synchronously runs a block that requests changes to be performed in the photo library.

## Declaration

```swift
func performChangesAndWait(_ changeBlock: @escaping () -> Void) throws
```

## Parameters

- `changeBlock`: A block that requests changes to be performed.

  This block takes no parameters and has no return value.

## Mentioned In

- [Requesting Changes to the Photo Library](../../photokit/requesting-changes-to-the-photo-library.md)
- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

<a id="Discussion"></a>

## Discussion

Do not call this method from the main thread. Your change block, and the work that Photos performs on your behalf to apply the changes it requests, take some time to execute. (Photos may need to prompt the user to perform changes, so this method can block execution indefinitely.) Use this method if you are already performing work on a background queue that results in a change to be applied to the Photos library. To request changes from the main queue, use the [performChanges(\_:completionHandler:)](performchanges%28__completionhandler_%29.md) method instead.

> **Note**

>  For each call to this method, iOS shows an alert asking the user for permission to edit the contents of the photo library. If your app needs to submit several changes at once, combine them into a single change block. For example, to edit the content of multiple existing photos, create multiple [PHAssetChangeRequest](../phassetchangerequest.md) objects and set the [contentEditingOutput](../phassetchangerequest/contenteditingoutput.md) property on each to an independent [PHContentEditingOutput](../phcontenteditingoutput.md) object.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Updating the Library

- [Requesting Changes to the Photo Library](../../photokit/requesting-changes-to-the-photo-library.md): Create, delete, or modify assets and collections in a photo library by making change requests.
- [performChanges(\_:completionHandler:)](performchanges%28__completionhandler_%29.md): Asynchronously runs a block that requests changes to the photo library.
- [PHChangeRequest](../phchangerequest.md): The abstract base class of the framework’s photo library change requests.
- [PHAssetChangeRequest](../phassetchangerequest.md): A request to create, delete, change metadata for, or edit the content of a Photos asset, for use in a photo library change block.
- [PHAssetCollectionChangeRequest](../phassetcollectionchangerequest.md): A request to create, delete, or modify a Photos asset collection, for use in a photo library change block.
- [PHCollectionListChangeRequest](../phcollectionlistchangerequest.md): A request to create, delete, or modify a Photos collection list, for use in a photo library change block.
- [PHObjectPlaceholder](../phobjectplaceholder.md): A read-only proxy object that represents a Photos asset or collection to create.

# performChangesAndWait:error: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Synchronously runs a block that requests changes to be performed in the photo library.

## Declaration

```objectivec
- (BOOL) performChangesAndWait:(dispatch_block_t) changeBlock error:(NSError **) error;
```

## Parameters

- `changeBlock`: A block that requests changes to be performed.

  This block takes no parameters and has no return value.
- `error`: If an error occurs, this pointer is set to an `NSError` object describing the error. If you do not want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

`true` if Photos successfully applied the changes requested in the block; otherwise, `false`.

## Mentioned In

- [Requesting Changes to the Photo Library](../../photokit/requesting-changes-to-the-photo-library.md)
- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

<a id="Discussion"></a>

## Discussion

Do not call this method from the main thread. Your change block, and the work that Photos performs on your behalf to apply the changes it requests, take some time to execute. (Photos may need to prompt the user to perform changes, so this method can block execution indefinitely.) Use this method if you are already performing work on a background queue that results in a change to be applied to the Photos library. To request changes from the main queue, use the [performChanges:completionHandler:](performchanges%28__completionhandler_%29.md) method instead.

> **Note**

>  For each call to this method, iOS shows an alert asking the user for permission to edit the contents of the photo library. If your app needs to submit several changes at once, combine them into a single change block. For example, to edit the content of multiple existing photos, create multiple [PHAssetChangeRequest](../phassetchangerequest.md) objects and set the [contentEditingOutput](../phassetchangerequest/contenteditingoutput.md) property on each to an independent [PHContentEditingOutput](../phcontenteditingoutput.md) object.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Updating the Library

- [Requesting Changes to the Photo Library](../../photokit/requesting-changes-to-the-photo-library.md): Create, delete, or modify assets and collections in a photo library by making change requests.
- [performChanges:completionHandler:](performchanges%28__completionhandler_%29.md): Asynchronously runs a block that requests changes to the photo library.
- [PHChangeRequest](../phchangerequest.md): The abstract base class of the framework’s photo library change requests.
- [PHAssetChangeRequest](../phassetchangerequest.md): A request to create, delete, change metadata for, or edit the content of a Photos asset, for use in a photo library change block.
- [PHAssetCollectionChangeRequest](../phassetcollectionchangerequest.md): A request to create, delete, or modify a Photos asset collection, for use in a photo library change block.
- [PHCollectionListChangeRequest](../phcollectionlistchangerequest.md): A request to create, delete, or modify a Photos collection list, for use in a photo library change block.
- [PHObjectPlaceholder](../phobjectplaceholder.md): A read-only proxy object that represents a Photos asset or collection to create.
