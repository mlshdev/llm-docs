> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/ioi2crequest](https://developer.apple.com/documentation/iokit/ioi2crequest)

# IOI2CRequest

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

## Declaration

```objectivec
typedef struct IOI2CRequest {
    ...
} IOI2CRequest;
```

## Topics

### Instance Properties

- [commFlags](ioi2crequest/1410364-commflags.md): Flags that modify the I2C transaction type.
- [completion](ioi2crequest/1410371-completion.md): A completion routine to be executed when the request completes. If NULL is passed, the request is synchronous, otherwise it may execute asynchronously.
- [minReplyDelay](ioi2crequest/1410394-minreplydelay.md): Minimum delay as absolute time between send and reply transactions.
- [replyAddress](ioi2crequest/1410325-replyaddress.md): I2C Address from which to read.
- [replyBuffer](ioi2crequest/1410352-replybuffer.md): Pointer to the reply buffer.
- [replyBytes](ioi2crequest/1410355-replybytes.md): Max bytes to reply (size of replyBuffer). Set to actual bytes received on completion of the request.
- [replySubAddress](ioi2crequest/1410358-replysubaddress.md): I2C Address from which to read.
- [replyTransactionType](ioi2crequest/1410310-replytransactiontype.md): Specifies one of four possible reply transaction types.
- [result](ioi2crequest/1410361-result.md): The result of the transaction. Common errors are kIOReturnNoDevice if there is no device responding at the given address, kIOReturnUnsupportedMode if the type of transaction is unsupported on the requested bus.
- [sendAddress](ioi2crequest/1410312-sendaddress.md): I2C address to write.
- [sendBuffer](ioi2crequest/1410343-sendbuffer.md): Pointer to the send buffer.
- [sendBytes](ioi2crequest/1410347-sendbytes.md): Number of bytes to send. Set to actual bytes sent on completion of the request.
- [sendSubAddress](ioi2crequest/1410339-sendsubaddress.md): I2C subaddress to write.
- [sendTransactionType](ioi2crequest/1410320-sendtransactiontype.md): Specifies one of three possible transaction types.
