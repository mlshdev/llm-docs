> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderextension/startprovidingitem(at:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderextension/startprovidingitem(at:completionhandler:))

# startProvidingItem(at:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Provides an actual file on disk for a placeholder.

## Declaration

```swift
func startProvidingItem(at url: URL, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func startProvidingItem(at url: URL) async throws
```

## Parameters

- `url`: The URL of a shared document.
- `completionHandler`: A block to be called as soon as the file is available.

  The completion handler takes the following parameter:

  - **error**: If the document was produced, this value is `nil`. Otherwise, it holds an `NSError` object describing the error.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func startProvidingItem(at url: URL) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method is called whenever another process tries to access a placeholder for a shared document.

Override this method to download, create, or otherwise provide the file. As soon as the file is available, call the provided completion handler. If any errors occur during this process, pass the error to the completion handler. The system then passes the error back to the original coordinated read or write.

You must override this method. Do not call `super` in your implementations.

> **Note**

>  Do not use file coordination inside this method. The system already guarantees that no other process can access the file while this method is executing.

## See Also

### Managing shared files

- [itemChanged(at:)](itemchanged%28at_%29.md): Tells the File Provider extension that a document has changed.
- [providePlaceholder(at:completionHandler:)](provideplaceholder%28at_completionhandler_%29.md): Triggers the creation of a placeholder for the given URL.
- [stopProvidingItem(at:)](stopprovidingitem%28at_%29.md): Tells the File Provider extension that a given document is no longer being accessed.

# startProvidingItemAtURL:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 1.0+

Provides an actual file on disk for a placeholder.

## Declaration

```objectivec
- (void) startProvidingItemAtURL:(NSURL *) url completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `url`: The URL of a shared document.
- `completionHandler`: A block to be called as soon as the file is available.

  The completion handler takes the following parameter:

  - **error**: If the document was produced, this value is `nil`. Otherwise, it holds an `NSError` object describing the error.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func startProvidingItem(at url: URL) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method is called whenever another process tries to access a placeholder for a shared document.

Override this method to download, create, or otherwise provide the file. As soon as the file is available, call the provided completion handler. If any errors occur during this process, pass the error to the completion handler. The system then passes the error back to the original coordinated read or write.

You must override this method. Do not call `super` in your implementations.

> **Note**

>  Do not use file coordination inside this method. The system already guarantees that no other process can access the file while this method is executing.

## See Also

### Managing shared files

- [itemChangedAtURL:](itemchanged%28at_%29.md): Tells the File Provider extension that a document has changed.
- [providePlaceholderAtURL:completionHandler:](provideplaceholder%28at_completionhandler_%29.md): Triggers the creation of a placeholder for the given URL.
- [stopProvidingItemAtURL:](stopprovidingitem%28at_%29.md): Tells the File Provider extension that a given document is no longer being accessed.
