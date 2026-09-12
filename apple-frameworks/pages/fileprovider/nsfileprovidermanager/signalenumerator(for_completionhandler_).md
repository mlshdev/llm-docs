> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/signalenumerator(for:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/signalenumerator(for:completionhandler:))

# signalEnumerator(for:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

Alerts the system to changes in the specified folder’s content.

## Declaration

```swift
func signalEnumerator(for containerItemIdentifier: NSFileProviderItemIdentifier, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func signalEnumerator(for containerItemIdentifier: NSFileProviderItemIdentifier) async throws
```

## Mentioned In

- [Synchronizing the File Provider Extension](../synchronizing-the-file-provider-extension.md)
- [Signaling Changes for User-Driven Actions](../signaling-changes-for-user-driven-actions.md)
- [Using push notifications to signal changes](../using-push-notifications-to-signal-changes.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func signalEnumerator(for containerItemIdentifier: NSFileProviderItemIdentifier) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Performing actions

- [placeholderURL(for:)](placeholderurl%28for_%29.md): Returns a placeholder URL for a given document URL.
- [writePlaceholder(at:withMetadata:)](writeplaceholder%28at_withmetadata_%29.md): Writes a document placeholder with the provided metadata.
- [register(\_:forItemWithIdentifier:completionHandler:)](register%28__foritemwithidentifier_completionhandler_%29.md): Registers the URL session task responsible for the specified item.
- [waitForChanges(below:completionHandler:)](waitforchanges%28below_completionhandler_%29.md): Requests a notification after the system completes all the specified changes.
- [globalProgress(for:)](globalprogress%28for_%29.md): Returns a progress object that tracks either the uploading or downloading of items from the File Provider extension’s remote storage.

# signalEnumeratorForContainerItemIdentifier:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

Alerts the system to changes in the specified folder’s content.

## Declaration

```objectivec
- (void) signalEnumeratorForContainerItemIdentifier:(NSFileProviderItemIdentifier) containerItemIdentifier completionHandler:(void (^)(NSError *error)) completion;
```

## Mentioned In

- [Synchronizing the File Provider Extension](../synchronizing-the-file-provider-extension.md)
- [Signaling Changes for User-Driven Actions](../signaling-changes-for-user-driven-actions.md)
- [Using push notifications to signal changes](../using-push-notifications-to-signal-changes.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func signalEnumerator(for containerItemIdentifier: NSFileProviderItemIdentifier) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Performing actions

- [placeholderURLForURL:](placeholderurl%28for_%29.md): Returns a placeholder URL for a given document URL.
- [writePlaceholderAtURL:withMetadata:error:](writeplaceholder%28at_withmetadata_%29.md): Writes a document placeholder with the provided metadata.
- [registerURLSessionTask:forItemWithIdentifier:completionHandler:](register%28__foritemwithidentifier_completionhandler_%29.md): Registers the URL session task responsible for the specified item.
- [waitForChangesOnItemsBelowItemWithIdentifier:completionHandler:](waitforchanges%28below_completionhandler_%29.md): Requests a notification after the system completes all the specified changes.
- [globalProgressForKind:](globalprogress%28for_%29.md): Returns a progress object that tracks either the uploading or downloading of items from the File Provider extension’s remote storage.
