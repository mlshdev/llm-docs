> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/register(_:foritemwithidentifier:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/register(_:foritemwithidentifier:completionhandler:))

# register(\_:forItemWithIdentifier:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

Registers the URL session task responsible for the specified item.

## Declaration

```swift
func register(_ task: URLSessionTask, forItemWithIdentifier identifier: NSFileProviderItemIdentifier, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func register(_ task: URLSessionTask, forItemWithIdentifier identifier: NSFileProviderItemIdentifier) async throws
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func register(_ task: URLSessionTask, forItemWithIdentifier identifier: NSFileProviderItemIdentifier) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Performing actions

- [placeholderURL(for:)](placeholderurl%28for_%29.md): Returns a placeholder URL for a given document URL.
- [writePlaceholder(at:withMetadata:)](writeplaceholder%28at_withmetadata_%29.md): Writes a document placeholder with the provided metadata.
- [signalEnumerator(for:completionHandler:)](signalenumerator%28for_completionhandler_%29.md): Alerts the system to changes in the specified folder’s content.
- [waitForChanges(below:completionHandler:)](waitforchanges%28below_completionhandler_%29.md): Requests a notification after the system completes all the specified changes.
- [globalProgress(for:)](globalprogress%28for_%29.md): Returns a progress object that tracks either the uploading or downloading of items from the File Provider extension’s remote storage.

# registerURLSessionTask:forItemWithIdentifier:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

Registers the URL session task responsible for the specified item.

## Declaration

```objectivec
- (void) registerURLSessionTask:(NSURLSessionTask *) task forItemWithIdentifier:(NSFileProviderItemIdentifier) identifier completionHandler:(void (^)(NSError *error)) completion;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func register(_ task: URLSessionTask, forItemWithIdentifier identifier: NSFileProviderItemIdentifier) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Performing actions

- [placeholderURLForURL:](placeholderurl%28for_%29.md): Returns a placeholder URL for a given document URL.
- [writePlaceholderAtURL:withMetadata:error:](writeplaceholder%28at_withmetadata_%29.md): Writes a document placeholder with the provided metadata.
- [signalEnumeratorForContainerItemIdentifier:completionHandler:](signalenumerator%28for_completionhandler_%29.md): Alerts the system to changes in the specified folder’s content.
- [waitForChangesOnItemsBelowItemWithIdentifier:completionHandler:](waitforchanges%28below_completionhandler_%29.md): Requests a notification after the system completes all the specified changes.
- [globalProgressForKind:](globalprogress%28for_%29.md): Returns a progress object that tracks either the uploading or downloading of items from the File Provider extension’s remote storage.
