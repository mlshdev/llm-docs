> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/checkpromiseditemisreachableandreturnerror(_:)](https://developer.apple.com/documentation/foundation/nsurl/checkpromiseditemisreachableandreturnerror(_:))

# checkPromisedItemIsReachableAndReturnError(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns whether the promised item can be reached.

## Declaration

```swift
func checkPromisedItemIsReachableAndReturnError(_ error: NSErrorPointer) -> Bool
```

## Parameters

- `error`: The error that occurred when the promised item could not be reached.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the promised item is reachable; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method behaves identically to [checkResourceIsReachableAndReturnError(\_:)](checkresourceisreachableandreturnerror%28__%29.md), but works on promised items. A promised item is not guaranteed to have its contents in the file system until you use a file coordinator to perform a coordinated read on its URL, which causes the contents to be downloaded or otherwise generated. Promised item URLs are returned by various APIs, including:

- A metadata query using either the [NSMetadataQueryUbiquitousDataScope](../nsmetadataqueryubiquitousdatascope.md) or [NSMetadataQueryUbiquitousDocumentsScope](../nsmetadataqueryubiquitousdocumentsscope.md) scopes
- The contents of the directory returned by the file manager’s `URLForUbiquitousContainerIdentifier:`
- The URL inside the accessor block of a coordinated read or write operation that used the [immediatelyAvailableMetadataOnly](../nsfilecoordinator/readingoptions/immediatelyavailablemetadataonly.md), [forDeleting](../nsfilecoordinator/writingoptions/fordeleting.md), [forMoving](../nsfilecoordinator/writingoptions/formoving.md), or [contentIndependentMetadataOnly](../nsfilecoordinator/writingoptions/contentindependentmetadataonly.md) options

You must use this method instead of `checkResourceIsReachableAndReturnError` for any URLs returned by these methods.

## See Also

### Related Documentation

- [checkResourceIsReachableAndReturnError(\_:)](checkresourceisreachableandreturnerror%28__%29.md): Returns whether the resource pointed to by a file URL can be reached.

### Working with Promised Items

- [getPromisedItemResourceValue(\_:forKey:)](getpromiseditemresourcevalue%28__forkey_%29.md): Returns the value of the resource property for the specified key.
- [promisedItemResourceValues(forKeys:)](promiseditemresourcevalues%28forkeys_%29.md): Returns the resource values for the properties identified by specified array of keys.

# checkPromisedItemIsReachableAndReturnError: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns whether the promised item can be reached.

## Declaration

```objectivec
- (BOOL) checkPromisedItemIsReachableAndReturnError:(NSError **) error;
```

## Parameters

- `error`: The error that occurred when the promised item could not be reached.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the promised item is reachable; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method behaves identically to [checkResourceIsReachableAndReturnError:](checkresourceisreachableandreturnerror%28__%29.md), but works on promised items. A promised item is not guaranteed to have its contents in the file system until you use a file coordinator to perform a coordinated read on its URL, which causes the contents to be downloaded or otherwise generated. Promised item URLs are returned by various APIs, including:

- A metadata query using either the [NSMetadataQueryUbiquitousDataScope](../nsmetadataqueryubiquitousdatascope.md) or [NSMetadataQueryUbiquitousDocumentsScope](../nsmetadataqueryubiquitousdocumentsscope.md) scopes
- The contents of the directory returned by the file manager’s `URLForUbiquitousContainerIdentifier:`
- The URL inside the accessor block of a coordinated read or write operation that used the [NSFileCoordinatorReadingImmediatelyAvailableMetadataOnly](../nsfilecoordinator/readingoptions/immediatelyavailablemetadataonly.md), [NSFileCoordinatorWritingForDeleting](../nsfilecoordinator/writingoptions/fordeleting.md), [NSFileCoordinatorWritingForMoving](../nsfilecoordinator/writingoptions/formoving.md), or [NSFileCoordinatorWritingContentIndependentMetadataOnly](../nsfilecoordinator/writingoptions/contentindependentmetadataonly.md) options

You must use this method instead of `checkResourceIsReachableAndReturnError` for any URLs returned by these methods.

## See Also

### Related Documentation

- [checkResourceIsReachableAndReturnError:](checkresourceisreachableandreturnerror%28__%29.md): Returns whether the resource pointed to by a file URL can be reached.

### Working with Promised Items

- [getPromisedItemResourceValue:forKey:error:](getpromiseditemresourcevalue%28__forkey_%29.md): Returns the value of the resource property for the specified key.
- [promisedItemResourceValuesForKeys:error:](promiseditemresourcevalues%28forkeys_%29.md): Returns the resource values for the properties identified by specified array of keys.
