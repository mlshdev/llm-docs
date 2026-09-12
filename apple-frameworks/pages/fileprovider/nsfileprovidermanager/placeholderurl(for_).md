> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/placeholderurl(for:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/placeholderurl(for:))

# placeholderURL(for:) (Swift)

**Framework:** File Provider  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS 1.0+

Returns a placeholder URL for a given document URL.

## Declaration

```swift
class func placeholderURL(for url: URL) -> URL
```

## Parameters

- `url`: The document URL to be converted.

<a id="return-value"></a>

## Return Value

A placeholder URL for the given document.

<a id="Discussion"></a>

## Discussion

This method maps file URLs into their corresponding placeholder URLs. You typically call this method to generate the placeholder URL before calling [writePlaceholder(at:withMetadata:)](../nsfileproviderextension/writeplaceholder%28at_withmetadata_%29.md).

> **Note**

>  While this method is available on macOS 11+, you don’t need to use it when creating a file provider extension that adopts the [NSFileProviderReplicatedExtension](../nsfileproviderreplicatedextension.md) protocol.

## See Also

### Performing actions

- [writePlaceholder(at:withMetadata:)](writeplaceholder%28at_withmetadata_%29.md): Writes a document placeholder with the provided metadata.
- [register(\_:forItemWithIdentifier:completionHandler:)](register%28__foritemwithidentifier_completionhandler_%29.md): Registers the URL session task responsible for the specified item.
- [signalEnumerator(for:completionHandler:)](signalenumerator%28for_completionhandler_%29.md): Alerts the system to changes in the specified folder’s content.
- [waitForChanges(below:completionHandler:)](waitforchanges%28below_completionhandler_%29.md): Requests a notification after the system completes all the specified changes.
- [globalProgress(for:)](globalprogress%28for_%29.md): Returns a progress object that tracks either the uploading or downloading of items from the File Provider extension’s remote storage.

# placeholderURLForURL: (Objective-C)

**Framework:** File Provider  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+

Returns a placeholder URL for a given document URL.

## Declaration

```objectivec
+ (NSURL *) placeholderURLForURL:(NSURL *) url;
```

## Parameters

- `url`: The document URL to be converted.

<a id="return-value"></a>

## Return Value

A placeholder URL for the given document.

<a id="Discussion"></a>

## Discussion

This method maps file URLs into their corresponding placeholder URLs. You typically call this method to generate the placeholder URL before calling [writePlaceholderAtURL:withMetadata:error:](../nsfileproviderextension/writeplaceholder%28at_withmetadata_%29.md).

> **Note**

>  While this method is available on macOS 11+, you don’t need to use it when creating a file provider extension that adopts the [NSFileProviderReplicatedExtension](../nsfileproviderreplicatedextension.md) protocol.

## See Also

### Performing actions

- [writePlaceholderAtURL:withMetadata:error:](writeplaceholder%28at_withmetadata_%29.md): Writes a document placeholder with the provided metadata.
- [registerURLSessionTask:forItemWithIdentifier:completionHandler:](register%28__foritemwithidentifier_completionhandler_%29.md): Registers the URL session task responsible for the specified item.
- [signalEnumeratorForContainerItemIdentifier:completionHandler:](signalenumerator%28for_completionhandler_%29.md): Alerts the system to changes in the specified folder’s content.
- [waitForChangesOnItemsBelowItemWithIdentifier:completionHandler:](waitforchanges%28below_completionhandler_%29.md): Requests a notification after the system completes all the specified changes.
- [globalProgressForKind:](globalprogress%28for_%29.md): Returns a progress object that tracks either the uploading or downloading of items from the File Provider extension’s remote storage.
