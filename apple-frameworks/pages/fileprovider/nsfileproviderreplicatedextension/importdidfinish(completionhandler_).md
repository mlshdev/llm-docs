> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderreplicatedextension/importdidfinish(completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderreplicatedextension/importdidfinish(completionhandler:))

# importDidFinish(completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Tells the File Provider extension that the system finished importing items.

## Declaration

```swift
optional func importDidFinish(completionHandler: @escaping @Sendable () -> Void)
```

```swift
optional func importDidFinish() async
```

## Parameters

- `completionHandler`: A block that your implementation must call.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> optional func importDidFinish() async
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

The system calls this method after importing on-disk items. You can trigger an import by calling either [reimportItems(below:completionHandler:)](../nsfileprovidermanager/reimportitems%28below_completionhandler_%29.md) or [import(\_:fromDirectoryAt:completionHandler:)](../nsfileprovidermanager/import%28__fromdirectoryat_completionhandler_%29.md). The system can also initiate its own imports as needed.

During the import, the system calls your File Provider extension’s [createItem(basedOn:fields:contents:options:request:completionHandler:)](createitem%28basedon_fields_contents_options_request_completionhandler_%29.md) method and passes the [mayAlreadyExist](../nsfileprovidercreateitemoptions/mayalreadyexist.md) option. Check to see if the item already exists in your remote storage—uploading it if necessary.

After importing all the items, the system calls your [importDidFinish(completionHandler:)](importdidfinish%28completionhandler_%29.md) method. Handle any necessary cleanup operations, and then call the completion handler.

# importDidFinishWithCompletionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Tells the File Provider extension that the system finished importing items.

## Declaration

```objectivec
- (void) importDidFinishWithCompletionHandler:(void (^)()) completionHandler;
```

## Parameters

- `completionHandler`: A block that your implementation must call.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> optional func importDidFinish() async
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

The system calls this method after importing on-disk items. You can trigger an import by calling either [reimportItemsBelowItemWithIdentifier:completionHandler:](../nsfileprovidermanager/reimportitems%28below_completionhandler_%29.md) or [importDomain:fromDirectoryAtURL:completionHandler:](../nsfileprovidermanager/import%28__fromdirectoryat_completionhandler_%29.md). The system can also initiate its own imports as needed.

During the import, the system calls your File Provider extension’s [createItemBasedOnTemplate:fields:contents:options:request:completionHandler:](createitem%28basedon_fields_contents_options_request_completionhandler_%29.md) method and passes the [NSFileProviderCreateItemMayAlreadyExist](../nsfileprovidercreateitemoptions/mayalreadyexist.md) option. Check to see if the item already exists in your remote storage—uploading it if necessary.

After importing all the items, the system calls your [importDidFinishWithCompletionHandler:](importdidfinish%28completionhandler_%29.md) method. Handle any necessary cleanup operations, and then call the completion handler.
