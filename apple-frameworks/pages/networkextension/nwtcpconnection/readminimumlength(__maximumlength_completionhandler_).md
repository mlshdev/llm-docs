> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwtcpconnection/readminimumlength(_:maximumlength:completionhandler:)](https://developer.apple.com/documentation/networkextension/nwtcpconnection/readminimumlength(_:maximumlength:completionhandler:))

# readMinimumLength(\_:maximumLength:completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Read the requested range of bytes.

> Use the [nw_connection_receive(\_:\_:\_:\_:)](../../network/nw_connection_receive%28________%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
func readMinimumLength(_ minimum: Int, maximumLength maximum: Int, completionHandler completion: @escaping (Data?, (any Error)?) -> Void)
```

## Parameters

- `minimum`: The minimum number of bytes the caller wants to read.
- `maximum`: The maximum number of bytes the caller wants to read.
- `completion`: The completion handler to be invoked when data has been read or an error occurred.

<a id="Discussion"></a>

## Discussion

The completion handler will be invoked when:

- The exact number of requested bytes have been read; `data` will be non-`nil`.
- Fewer than the requested number of bytes, or no bytes, have been read, and the connection’s read side has been closed. `data` might be `nil`, depending on whether there was any data to be read when the connection’s read side was closed.
- Some fatal error has occurred, returned in `error`, and `data` will be nil.

To know when to schedule a read again, check for the condition whether an error has occurred.

For better performance, the caller should pick the effective minimum and maximum lengths. For example, if the caller absolutely needs a specific number of bytes before it can make any progress, use that value as the minimum. The maximum bytes can be the upperbound  that the caller wants to read. Typically, the minimum length can be the caller protocol fixed-size header and the maximum length can be the maximum size of the payload or  the size of the current read buffer.

## See Also

### Transferring data

- [readLength(\_:completionHandler:)](readlength%28__completionhandler_%29.md): Deprecated. Read a certain number of bytes on a connection.
- [write(\_:completionHandler:)](write%28__completionhandler_%29.md): Deprecated. Write the data to the connection.
- [writeClose()](writeclose%28%29.md): Deprecated. Close the connection for writing.

# readMinimumLength:maximumLength:completionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Read the requested range of bytes.

> Use the [nw_connection_receive](../../network/nw_connection_receive%28________%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
- (void) readMinimumLength:(NSUInteger) minimum maximumLength:(NSUInteger) maximum completionHandler:(void (^)(NSData *data, NSError *error)) completion;
```

## Parameters

- `minimum`: The minimum number of bytes the caller wants to read.
- `maximum`: The maximum number of bytes the caller wants to read.
- `completion`: The completion handler to be invoked when data has been read or an error occurred.

<a id="Discussion"></a>

## Discussion

The completion handler will be invoked when:

- The exact number of requested bytes have been read; `data` will be non-`nil`.
- Fewer than the requested number of bytes, or no bytes, have been read, and the connection’s read side has been closed. `data` might be `nil`, depending on whether there was any data to be read when the connection’s read side was closed.
- Some fatal error has occurred, returned in `error`, and `data` will be nil.

To know when to schedule a read again, check for the condition whether an error has occurred.

For better performance, the caller should pick the effective minimum and maximum lengths. For example, if the caller absolutely needs a specific number of bytes before it can make any progress, use that value as the minimum. The maximum bytes can be the upperbound  that the caller wants to read. Typically, the minimum length can be the caller protocol fixed-size header and the maximum length can be the maximum size of the payload or  the size of the current read buffer.

## See Also

### Transferring data

- [readLength:completionHandler:](readlength%28__completionhandler_%29.md): Deprecated. Read a certain number of bytes on a connection.
- [write:completionHandler:](write%28__completionhandler_%29.md): Deprecated. Write the data to the connection.
- [writeClose](writeclose%28%29.md): Deprecated. Close the connection for writing.
