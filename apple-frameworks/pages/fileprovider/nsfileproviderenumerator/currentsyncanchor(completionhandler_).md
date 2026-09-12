> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderenumerator/currentsyncanchor(completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderenumerator/currentsyncanchor(completionhandler:))

# currentSyncAnchor(completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

Returns the current sync anchor.

## Declaration

```swift
optional func currentSyncAnchor(completionHandler: @escaping @Sendable (NSFileProviderSyncAnchor?) -> Void)
```

```swift
optional func currentSyncAnchor() async -> NSFileProviderSyncAnchor?
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> optional func currentSyncAnchor() async -> NSFileProviderSyncAnchor?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Enumerating Items and Changes

- [enumerateItems(for:startingAt:)](enumerateitems%28for_startingat_%29.md): Requests the next batch of items, starting at the specified page.
- [enumerateChanges(for:from:)](enumeratechanges%28for_from_%29.md): Requests the next batch of changes after the specified sync anchor.
- [invalidate()](invalidate%28%29.md): Stops the enumeration of items and changes.

# currentSyncAnchorWithCompletionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

Returns the current sync anchor.

## Declaration

```objectivec
- (void) currentSyncAnchorWithCompletionHandler:(void (^)(NSFileProviderSyncAnchor currentAnchor)) completionHandler;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> optional func currentSyncAnchor() async -> NSFileProviderSyncAnchor?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Enumerating Items and Changes

- [enumerateItemsForObserver:startingAtPage:](enumerateitems%28for_startingat_%29.md): Requests the next batch of items, starting at the specified page.
- [enumerateChangesForObserver:fromSyncAnchor:](enumeratechanges%28for_from_%29.md): Requests the next batch of changes after the specified sync anchor.
- [invalidate](invalidate%28%29.md): Stops the enumeration of items and changes.
