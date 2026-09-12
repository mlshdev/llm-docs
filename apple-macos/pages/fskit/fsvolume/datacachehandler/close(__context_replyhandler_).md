> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/datacachehandler/close(_:context:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/datacachehandler/close(_:context:replyhandler:))

# close(\_:context:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Closes an item and releases associated cache resources.

## Declaration

```swift
func close(_ item: FSItem, context: FSContext, replyHandler reply: @escaping @Sendable () -> Void)
```

```swift
func close(_ item: FSItem, context: FSContext) async
```

## Parameters

- `item`: The item to close.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to call when the close operation completes.

<a id="discussion"></a>

## Discussion

FSKit calls this method when fully closing a file, and after the kernel finalizes all caching for the item.

Your module receives this call once per item when all references are released and the kernel has completed its cache management. The module performs any necessary cleanup operations for the item.

> **Note**

> This method doesn’t return or throw an error because the OS considers the file closed regardless of whether the module encounters any issues during cleanup.

## See Also

### Opening and closing items

- [open(\_:modes:cacheMode:context:replyHandler:)](open%28__modes_cachemode_context_replyhandler_%29.md): Opens an item with cache mode negotiation.
- [FSOpenItemResult](../../fsopenitemresult.md): The result of an open-item call.
- [FSVolume.DataCacheMode](../datacachemode.md): A type that defines the cache mode requested by the kernel for data operations.
- [FSContext](../../fscontext.md): A context object that provides information about the initiator of a file system operation.

# closeItem:context:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Closes an item and releases associated cache resources.

## Declaration

```objectivec
- (void) closeItem:(FSItem *) item context:(FSContext *) context replyHandler:(void (^)()) reply;
```

## Parameters

- `item`: The item to close.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to call when the close operation completes.

<a id="discussion"></a>

## Discussion

FSKit calls this method when fully closing a file, and after the kernel finalizes all caching for the item.

Your module receives this call once per item when all references are released and the kernel has completed its cache management. The module performs any necessary cleanup operations for the item.

> **Note**

> This method doesn’t return or throw an error because the OS considers the file closed regardless of whether the module encounters any issues during cleanup.

## See Also

### Opening and closing items

- [openItem:modes:cacheMode:context:replyHandler:](open%28__modes_cachemode_context_replyhandler_%29.md): Opens an item with cache mode negotiation.
- [FSOpenItemResult](../../fsopenitemresult.md): The result of an open-item call.
- [FSDataCacheMode](../datacachemode.md): A type that defines the cache mode requested by the kernel for data operations.
- [FSContext](../../fscontext.md): A context object that provides information about the initiator of a file system operation.
