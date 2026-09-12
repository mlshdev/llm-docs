> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/writeplaceholder(at:withmetadata:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/writeplaceholder(at:withmetadata:))

# writePlaceholder(at:withMetadata:) (Swift)

**Framework:** File Provider  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS 1.0+

Writes a document placeholder with the provided metadata.

## Declaration

```swift
class func writePlaceholder(at placeholderURL: URL, withMetadata metadata: NSFileProviderItem) throws
```

## Parameters

- `placeholderURL`: The placeholder URL for the document. You can generate a placeholder URL from a document URL by calling [placeholderURL(for:)](../nsfileproviderextension/placeholderurl%28for_%29.md).
- `metadata`: The metadata for this document.

<a id="Discussion"></a>

## Discussion

Call this method whenever you need to create a placeholder for a document. The metadata that you provide sets the data provided to the user in the browser interface.

> **Note**

>  While this method is available on macOS 11+, you don’t need to use it when creating a file provider extension that adopts the [NSFileProviderReplicatedExtension](../nsfileproviderreplicatedextension.md) protocol.

## See Also

### Performing actions

- [placeholderURL(for:)](placeholderurl%28for_%29.md): Returns a placeholder URL for a given document URL.
- [register(\_:forItemWithIdentifier:completionHandler:)](register%28__foritemwithidentifier_completionhandler_%29.md): Registers the URL session task responsible for the specified item.
- [signalEnumerator(for:completionHandler:)](signalenumerator%28for_completionhandler_%29.md): Alerts the system to changes in the specified folder’s content.
- [waitForChanges(below:completionHandler:)](waitforchanges%28below_completionhandler_%29.md): Requests a notification after the system completes all the specified changes.
- [globalProgress(for:)](globalprogress%28for_%29.md): Returns a progress object that tracks either the uploading or downloading of items from the File Provider extension’s remote storage.

# writePlaceholderAtURL:withMetadata:error: (Objective-C)

**Framework:** File Provider  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+

Writes a document placeholder with the provided metadata.

## Declaration

```objectivec
+ (BOOL) writePlaceholderAtURL:(NSURL *) placeholderURL withMetadata:(NSFileProviderItem) metadata error:(NSError **) error;
```

## Parameters

- `placeholderURL`: The placeholder URL for the document. You can generate a placeholder URL from a document URL by calling [placeholderURLForURL:](../nsfileproviderextension/placeholderurl%28for_%29.md).
- `metadata`: The metadata for this document.
- `error`: If an error occurs while writing the placeholder in Objective-C, the error parameter is set to an [NSError](../../foundation/nserror.md) object that describes the problem. If you are not interested in the error details, you may pass in `NULL`.

<a id="return-value"></a>

## Return Value

If the placeholder is written successfully, returns [true](https://developer.apple.com/documentation/swift/true); otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Call this method whenever you need to create a placeholder for a document. The metadata that you provide sets the data provided to the user in the browser interface.

> **Note**

>  While this method is available on macOS 11+, you don’t need to use it when creating a file provider extension that adopts the [NSFileProviderReplicatedExtension](../nsfileproviderreplicatedextension.md) protocol.

## See Also

### Performing actions

- [placeholderURLForURL:](placeholderurl%28for_%29.md): Returns a placeholder URL for a given document URL.
- [registerURLSessionTask:forItemWithIdentifier:completionHandler:](register%28__foritemwithidentifier_completionhandler_%29.md): Registers the URL session task responsible for the specified item.
- [signalEnumeratorForContainerItemIdentifier:completionHandler:](signalenumerator%28for_completionhandler_%29.md): Alerts the system to changes in the specified folder’s content.
- [waitForChangesOnItemsBelowItemWithIdentifier:completionHandler:](waitforchanges%28below_completionhandler_%29.md): Requests a notification after the system completes all the specified changes.
- [globalProgressForKind:](globalprogress%28for_%29.md): Returns a progress object that tracks either the uploading or downloading of items from the File Provider extension’s remote storage.
