> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/getpromiseditemresourcevalue(_:forkey:)](https://developer.apple.com/documentation/foundation/nsurl/getpromiseditemresourcevalue(_:forkey:))

# getPromisedItemResourceValue(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value of the resource property for the specified key.

## Declaration

```swift
func getPromisedItemResourceValue(_ value: AutoreleasingUnsafeMutablePointer<AnyObject?>, forKey key: URLResourceKey) throws
```

## Parameters

- `value`: The location where the value for the resource property identified by `key` should be stored.
- `key`: The name of one of the URL’s resource properties.

<a id="Discussion"></a>

## Discussion

This method behaves identically to [getResourceValue(\_:forKey:)](getresourcevalue%28__forkey_%29.md), but works on promised items. A promised item is not guaranteed to have its contents in the file system until you use a file coordinator to perform a coordinated read on its URL, which causes the contents to be downloaded or otherwise generated. Promised item URLs are returned by various APIs, including:

- A metadata query using either the [NSMetadataQueryUbiquitousDataScope](../nsmetadataqueryubiquitousdatascope.md) or [NSMetadataQueryUbiquitousDocumentsScope](../nsmetadataqueryubiquitousdocumentsscope.md) scopes
- The contents of the directory returned by the file manager’s `URLForUbiquitousContainerIdentifier:`
- The URL inside the accessor block of a coordinated read or write operation that used the [immediatelyAvailableMetadataOnly](../nsfilecoordinator/readingoptions/immediatelyavailablemetadataonly.md), [forDeleting](../nsfilecoordinator/writingoptions/fordeleting.md), [forMoving](../nsfilecoordinator/writingoptions/formoving.md), or [contentIndependentMetadataOnly](../nsfilecoordinator/writingoptions/contentindependentmetadataonly.md) options

You must use this method instead of `getResourceValue:forKey:error:` for any URLs returned by these methods.

This method works for any resource value that is not tied to the item’s contents. Some keys, like [contentAccessDateKey](../urlresourcekey/contentaccessdatekey.md) or [generationIdentifierKey](../urlresourcekey/generationidentifierkey.md), do not return valid values. If you use one of these keys, the method returns [true](https://developer.apple.com/documentation/swift/true), but the value returns `nil`.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [getResourceValue(\_:forKey:)](getresourcevalue%28__forkey_%29.md): Returns the value of the resource property for the specified key.

### Working with Promised Items

- [checkPromisedItemIsReachableAndReturnError(\_:)](checkpromiseditemisreachableandreturnerror%28__%29.md): Returns whether the promised item can be reached.
- [promisedItemResourceValues(forKeys:)](promiseditemresourcevalues%28forkeys_%29.md): Returns the resource values for the properties identified by specified array of keys.

# getPromisedItemResourceValue:forKey:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value of the resource property for the specified key.

## Declaration

```objectivec
- (BOOL) getPromisedItemResourceValue:(id*) value forKey:(NSURLResourceKey) key error:(NSError **) error;
```

## Parameters

- `value`: The location where the value for the resource property identified by `key` should be stored.
- `key`: The name of one of the URL’s resource properties.
- `error`: The error that occurred in the case that the resource value cannot be retrieved.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `value` is successfully populated; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method behaves identically to [getResourceValue:forKey:error:](getresourcevalue%28__forkey_%29.md), but works on promised items. A promised item is not guaranteed to have its contents in the file system until you use a file coordinator to perform a coordinated read on its URL, which causes the contents to be downloaded or otherwise generated. Promised item URLs are returned by various APIs, including:

- A metadata query using either the [NSMetadataQueryUbiquitousDataScope](../nsmetadataqueryubiquitousdatascope.md) or [NSMetadataQueryUbiquitousDocumentsScope](../nsmetadataqueryubiquitousdocumentsscope.md) scopes
- The contents of the directory returned by the file manager’s `URLForUbiquitousContainerIdentifier:`
- The URL inside the accessor block of a coordinated read or write operation that used the [NSFileCoordinatorReadingImmediatelyAvailableMetadataOnly](../nsfilecoordinator/readingoptions/immediatelyavailablemetadataonly.md), [NSFileCoordinatorWritingForDeleting](../nsfilecoordinator/writingoptions/fordeleting.md), [NSFileCoordinatorWritingForMoving](../nsfilecoordinator/writingoptions/formoving.md), or [NSFileCoordinatorWritingContentIndependentMetadataOnly](../nsfilecoordinator/writingoptions/contentindependentmetadataonly.md) options

You must use this method instead of `getResourceValue:forKey:error:` for any URLs returned by these methods.

This method works for any resource value that is not tied to the item’s contents. Some keys, like [NSURLContentAccessDateKey](../urlresourcekey/contentaccessdatekey.md) or [NSURLGenerationIdentifierKey](../urlresourcekey/generationidentifierkey.md), do not return valid values. If you use one of these keys, the method returns [true](https://developer.apple.com/documentation/swift/true), but the value returns `nil`.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [getResourceValue:forKey:error:](getresourcevalue%28__forkey_%29.md): Returns the value of the resource property for the specified key.

### Working with Promised Items

- [checkPromisedItemIsReachableAndReturnError:](checkpromiseditemisreachableandreturnerror%28__%29.md): Returns whether the promised item can be reached.
- [promisedItemResourceValuesForKeys:error:](promiseditemresourcevalues%28forkeys_%29.md): Returns the resource values for the properties identified by specified array of keys.
