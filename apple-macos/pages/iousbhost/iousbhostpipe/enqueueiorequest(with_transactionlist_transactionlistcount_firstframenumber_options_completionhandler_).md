> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostpipe/enqueueiorequest(with:transactionlist:transactionlistcount:firstframenumber:options:completionhandler:)](https://developer.apple.com/documentation/iousbhost/iousbhostpipe/enqueueiorequest(with:transactionlist:transactionlistcount:firstframenumber:options:completionhandler:))

# enqueueIORequest(with:transactionList:transactionListCount:firstFrameNumber:options:completionHandler:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 12.0+

## Declaration

```swift
func enqueueIORequest(with data: NSMutableData, transactionList: UnsafeMutablePointer<IOUSBHostIsochronousTransaction>, transactionListCount: Int, firstFrameNumber: UInt64, options: IOUSBHostIsochronousTransferOptions = [], completionHandler: (@Sendable (IOReturn, UnsafeMutablePointer<IOUSBHostIsochronousTransaction>) -> Void)? = nil) throws
```

```swift
func enqueueIORequest(with data: NSMutableData, transactionList: UnsafeMutablePointer<IOUSBHostIsochronousTransaction>, transactionListCount: Int, firstFrameNumber: UInt64, options: IOUSBHostIsochronousTransferOptions = []) async throws -> (IOReturn, UnsafeMutablePointer<IOUSBHostIsochronousTransaction>)
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func enqueueIORequest(with data: NSMutableData, transactionList: UnsafeMutablePointer<IOUSBHostIsochronousTransaction>, transactionListCount: Int, firstFrameNumber: UInt64, options: IOUSBHostIsochronousTransferOptions = []) async throws -> (IOReturn, UnsafeMutablePointer<IOUSBHostIsochronousTransaction>)
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Instance Methods

- [sendIORequest(with:transactionList:transactionListCount:firstFrameNumber:options:)](sendiorequest%28with_transactionlist_transactionlistcount_firstframenumber_options_%29.md)

# enqueueIORequestWithData:transactionList:transactionListCount:firstFrameNumber:options:error:completionHandler: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 12.0+

## Declaration

```objectivec
- (BOOL) enqueueIORequestWithData:(NSMutableData *) data transactionList:(IOUSBHostIsochronousTransaction *) transactionList transactionListCount:(NSUInteger) transactionListCount firstFrameNumber:(uint64_t) firstFrameNumber options:(IOUSBHostIsochronousTransferOptions) options error:(NSError **) error completionHandler:(IOUSBHostIsochronousTransactionCompletionHandler) completionHandler;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func enqueueIORequest(with data: NSMutableData, transactionList: UnsafeMutablePointer<IOUSBHostIsochronousTransaction>, transactionListCount: Int, firstFrameNumber: UInt64, options: IOUSBHostIsochronousTransferOptions = []) async throws -> (IOReturn, UnsafeMutablePointer<IOUSBHostIsochronousTransaction>)
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Instance Methods

- [sendIORequestWithData:transactionList:transactionListCount:firstFrameNumber:options:error:](sendiorequest%28with_transactionlist_transactionlistcount_firstframenumber_options_%29.md)
