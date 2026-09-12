> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderextension/itemchanged(at:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderextension/itemchanged(at:))

# itemChanged(at:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Tells the File Provider extension that a document has changed.

## Declaration

```swift
func itemChanged(at url: URL)
```

## Parameters

- `url`: The URL of a shared document.

<a id="Discussion"></a>

## Discussion

The system calls this method when a shared file’s content changes, typically in response to coordinated writes from the host app.

You must override this method and respond to these changes. Do not call `super` in your implementations.

In your implementation, defer all networking, asynchronous, or long-running operations to background tasks. For networking tasks, create a background [URLSession](../../foundation/urlsession.md) task, and then register the task with the file provider manager by calling the manager’s [register(\_:forItemWithIdentifier:completionHandler:)](../nsfileprovidermanager/register%28__foritemwithidentifier_completionhandler_%29.md) method.

## See Also

### Managing shared files

- [providePlaceholder(at:completionHandler:)](provideplaceholder%28at_completionhandler_%29.md): Triggers the creation of a placeholder for the given URL.
- [startProvidingItem(at:completionHandler:)](startprovidingitem%28at_completionhandler_%29.md): Provides an actual file on disk for a placeholder.
- [stopProvidingItem(at:)](stopprovidingitem%28at_%29.md): Tells the File Provider extension that a given document is no longer being accessed.

# itemChangedAtURL: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 1.0+

Tells the File Provider extension that a document has changed.

## Declaration

```objectivec
- (void) itemChangedAtURL:(NSURL *) url;
```

## Parameters

- `url`: The URL of a shared document.

<a id="Discussion"></a>

## Discussion

The system calls this method when a shared file’s content changes, typically in response to coordinated writes from the host app.

You must override this method and respond to these changes. Do not call `super` in your implementations.

In your implementation, defer all networking, asynchronous, or long-running operations to background tasks. For networking tasks, create a background [NSURLSession](../../foundation/urlsession.md) task, and then register the task with the file provider manager by calling the manager’s [registerURLSessionTask:forItemWithIdentifier:completionHandler:](../nsfileprovidermanager/register%28__foritemwithidentifier_completionhandler_%29.md) method.

## See Also

### Managing shared files

- [providePlaceholderAtURL:completionHandler:](provideplaceholder%28at_completionhandler_%29.md): Triggers the creation of a placeholder for the given URL.
- [startProvidingItemAtURL:completionHandler:](startprovidingitem%28at_completionhandler_%29.md): Provides an actual file on disk for a placeholder.
- [stopProvidingItemAtURL:](stopprovidingitem%28at_%29.md): Tells the File Provider extension that a given document is no longer being accessed.
