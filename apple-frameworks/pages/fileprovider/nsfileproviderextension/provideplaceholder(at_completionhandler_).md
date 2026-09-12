> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderextension/provideplaceholder(at:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderextension/provideplaceholder(at:completionhandler:))

# providePlaceholder(at:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Triggers the creation of a placeholder for the given URL.

## Declaration

```swift
func providePlaceholder(at url: URL, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func providePlaceholder(at url: URL) async throws
```

## Parameters

- `url`: The URL of a shared document.
- `completionHandler`: A block that the system calls after the placeholder is created.

  The completion handler takes the following parameter:

  - **error**: If the placeholder was successfully written to disk, this value is `nil`. Otherwise, it holds an `NSError` object describing the error.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func providePlaceholder(at url: URL) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

The system calls this method when it needs a placeholder for a document that’s returned by the File Provider extension, but is not stored locally. Override `providePlaceholder(at:completionHandler:)` to create a placeholder for the given URL. This task can be broken into three steps: looking up the document’s file provider item, writing the placeholder, and calling the completion handler.

> **Important**

>  Both the [providePlaceholder(at:completionHandler:)](provideplaceholder%28at_completionhandler_%29.md) and [startProvidingItem(at:completionHandler:)](startprovidingitem%28at_completionhandler_%29.md) methods can be triggered as other processes attempt to access documents provided by the File Provider extension. These methods may be called in response to user interaction with the document browser, or due to a coordinated read or coordinated write of the document’s URL.
>
> Exactly which methods are triggered, and their sequence, depends on the type of coordinated access. For example, a coordinated read using the `NSFileCoordinatorReadingImmediatelyAvailableMetadataOnly` option triggers only the creation of a placeholder. As a result, your extension should not create dependencies between these methods. They may be called in any order.

<a id="Look-Up-the-Documents-File-Provider-Item"></a>

### Look Up the Document’s File Provider Item

1. Get the document’s persistent identifier by calling [persistentIdentifierForItem(at:)](persistentidentifierforitem%28at_%29.md), and pass in the value of the `url` parameter.
2. Call [item(for:)](item%28for_%29.md), and pass in the persistent identifier. This method returns the file provider item for the document.

<a id="Write-the-Placeholder"></a>

### Write the Placeholder

1. Get the placeholder URL by calling [placeholderURL(for:)](../nsfileprovidermanager/placeholderurl%28for_%29.md), and pass in the value of the url parameter.
2. Call [writePlaceholder(at:withMetadata:)](../nsfileprovidermanager/writeplaceholder%28at_withmetadata_%29.md), and pass in the placeholder URL and the file provider item.

<a id="Call-the-Completion-Handler"></a>

### Call the Completion Handler

After writing the placeholder to disk, call the completion handler. If any errors occur, pass them to the completion handler. The system then passes the error back to the original coordinated read or write.

<a id="Sample-Implementation"></a>

### Sample Implementation

```swift
override func providePlaceholder(at url: URL, completionHandler: @escaping (Error?) -> Void) {
    
    guard let identifier = persistentIdentifierForItem(at: url) else {
        completionHandler(NSFileProviderError(.noSuchItem))
        return
    }
    
    do {
        let fileProviderItem = try item(for: identifier)
        
        let placeholderURL = NSFileProviderManager.placeholderURL(for: url)
        try NSFileProviderManager.writePlaceholder(at: placeholderURL,
                                                   withMetadata: fileProviderItem)
        
        completionHandler(nil)
    }
    catch let error {
        completionHandler(error)
    }
}
```

## See Also

### Managing shared files

- [itemChanged(at:)](itemchanged%28at_%29.md): Tells the File Provider extension that a document has changed.
- [startProvidingItem(at:completionHandler:)](startprovidingitem%28at_completionhandler_%29.md): Provides an actual file on disk for a placeholder.
- [stopProvidingItem(at:)](stopprovidingitem%28at_%29.md): Tells the File Provider extension that a given document is no longer being accessed.

# providePlaceholderAtURL:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 1.0+

Triggers the creation of a placeholder for the given URL.

## Declaration

```objectivec
- (void) providePlaceholderAtURL:(NSURL *) url completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `url`: The URL of a shared document.
- `completionHandler`: A block that the system calls after the placeholder is created.

  The completion handler takes the following parameter:

  - **error**: If the placeholder was successfully written to disk, this value is `nil`. Otherwise, it holds an `NSError` object describing the error.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func providePlaceholder(at url: URL) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

The system calls this method when it needs a placeholder for a document that’s returned by the File Provider extension, but is not stored locally. Override `providePlaceholder(at:completionHandler:)` to create a placeholder for the given URL. This task can be broken into three steps: looking up the document’s file provider item, writing the placeholder, and calling the completion handler.

> **Important**

>  Both the [providePlaceholderAtURL:completionHandler:](provideplaceholder%28at_completionhandler_%29.md) and [startProvidingItemAtURL:completionHandler:](startprovidingitem%28at_completionhandler_%29.md) methods can be triggered as other processes attempt to access documents provided by the File Provider extension. These methods may be called in response to user interaction with the document browser, or due to a coordinated read or coordinated write of the document’s URL.
>
> Exactly which methods are triggered, and their sequence, depends on the type of coordinated access. For example, a coordinated read using the `NSFileCoordinatorReadingImmediatelyAvailableMetadataOnly` option triggers only the creation of a placeholder. As a result, your extension should not create dependencies between these methods. They may be called in any order.

<a id="Look-Up-the-Documents-File-Provider-Item"></a>

### Look Up the Document’s File Provider Item

1. Get the document’s persistent identifier by calling [persistentIdentifierForItemAtURL:](persistentidentifierforitem%28at_%29.md), and pass in the value of the `url` parameter.
2. Call [itemForIdentifier:error:](item%28for_%29.md), and pass in the persistent identifier. This method returns the file provider item for the document.

<a id="Write-the-Placeholder"></a>

### Write the Placeholder

1. Get the placeholder URL by calling [placeholderURLForURL:](../nsfileprovidermanager/placeholderurl%28for_%29.md), and pass in the value of the url parameter.
2. Call [writePlaceholderAtURL:withMetadata:error:](../nsfileprovidermanager/writeplaceholder%28at_withmetadata_%29.md), and pass in the placeholder URL and the file provider item.

<a id="Call-the-Completion-Handler"></a>

### Call the Completion Handler

After writing the placeholder to disk, call the completion handler. If any errors occur, pass them to the completion handler. The system then passes the error back to the original coordinated read or write.

<a id="Sample-Implementation"></a>

### Sample Implementation

```swift
override func providePlaceholder(at url: URL, completionHandler: @escaping (Error?) -> Void) {
    
    guard let identifier = persistentIdentifierForItem(at: url) else {
        completionHandler(NSFileProviderError(.noSuchItem))
        return
    }
    
    do {
        let fileProviderItem = try item(for: identifier)
        
        let placeholderURL = NSFileProviderManager.placeholderURL(for: url)
        try NSFileProviderManager.writePlaceholder(at: placeholderURL,
                                                   withMetadata: fileProviderItem)
        
        completionHandler(nil)
    }
    catch let error {
        completionHandler(error)
    }
}
```

## See Also

### Managing shared files

- [itemChangedAtURL:](itemchanged%28at_%29.md): Tells the File Provider extension that a document has changed.
- [startProvidingItemAtURL:completionHandler:](startprovidingitem%28at_completionhandler_%29.md): Provides an actual file on disk for a placeholder.
- [stopProvidingItemAtURL:](stopprovidingitem%28at_%29.md): Tells the File Provider extension that a given document is no longer being accessed.
