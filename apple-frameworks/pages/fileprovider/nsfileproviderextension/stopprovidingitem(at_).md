> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderextension/stopprovidingitem(at:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderextension/stopprovidingitem(at:))

# stopProvidingItem(at:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Tells the File Provider extension that a given document is no longer being accessed.

## Declaration

```swift
func stopProvidingItem(at url: URL)
```

## Parameters

- `url`: The URL of a shared document.

<a id="Discussion"></a>

## Discussion

The system calls this method as soon as all other processes have stopped accessing the given file. You can override this method to remove the document from the local file system, thus freeing up storage space. You must provide placeholders for any documents you remove.

You must override this method, even if you only provide an empty implementation. Do not call `super` in your implementations.

## See Also

### Managing shared files

- [itemChanged(at:)](itemchanged%28at_%29.md): Tells the File Provider extension that a document has changed.
- [providePlaceholder(at:completionHandler:)](provideplaceholder%28at_completionhandler_%29.md): Triggers the creation of a placeholder for the given URL.
- [startProvidingItem(at:completionHandler:)](startprovidingitem%28at_completionhandler_%29.md): Provides an actual file on disk for a placeholder.

# stopProvidingItemAtURL: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 1.0+

Tells the File Provider extension that a given document is no longer being accessed.

## Declaration

```objectivec
- (void) stopProvidingItemAtURL:(NSURL *) url;
```

## Parameters

- `url`: The URL of a shared document.

<a id="Discussion"></a>

## Discussion

The system calls this method as soon as all other processes have stopped accessing the given file. You can override this method to remove the document from the local file system, thus freeing up storage space. You must provide placeholders for any documents you remove.

You must override this method, even if you only provide an empty implementation. Do not call `super` in your implementations.

## See Also

### Managing shared files

- [itemChangedAtURL:](itemchanged%28at_%29.md): Tells the File Provider extension that a document has changed.
- [providePlaceholderAtURL:completionHandler:](provideplaceholder%28at_completionhandler_%29.md): Triggers the creation of a placeholder for the given URL.
- [startProvidingItemAtURL:completionHandler:](startprovidingitem%28at_completionhandler_%29.md): Provides an actual file on disk for a placeholder.
