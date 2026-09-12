> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostpipe/sendiorequest(with:transactionlist:transactionlistcount:firstframenumber:options:)](https://developer.apple.com/documentation/iousbhost/iousbhostpipe/sendiorequest(with:transactionlist:transactionlistcount:firstframenumber:options:))

# sendIORequest(with:transactionList:transactionListCount:firstFrameNumber:options:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 12.0+

## Declaration

```swift
func sendIORequest(with data: NSMutableData, transactionList: UnsafeMutablePointer<IOUSBHostIsochronousTransaction>, transactionListCount: Int, firstFrameNumber: UInt64, options: IOUSBHostIsochronousTransferOptions = []) throws
```

## See Also

### Instance Methods

- [enqueueIORequest(with:transactionList:transactionListCount:firstFrameNumber:options:completionHandler:)](enqueueiorequest%28with_transactionlist_transactionlistcount_firstframenumber_options_completionhandler_%29.md)

# sendIORequestWithData:transactionList:transactionListCount:firstFrameNumber:options:error: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 12.0+

## Declaration

```objectivec
- (BOOL) sendIORequestWithData:(NSMutableData *) data transactionList:(IOUSBHostIsochronousTransaction *) transactionList transactionListCount:(NSUInteger) transactionListCount firstFrameNumber:(uint64_t) firstFrameNumber options:(IOUSBHostIsochronousTransferOptions) options error:(NSError **) error;
```

## See Also

### Instance Methods

- [enqueueIORequestWithData:transactionList:transactionListCount:firstFrameNumber:options:error:completionHandler:](enqueueiorequest%28with_transactionlist_transactionlistcount_firstframenumber_options_completionhandler_%29.md)
