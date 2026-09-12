> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwtcpconnection/write(_:completionhandler:)](https://developer.apple.com/documentation/networkextension/nwtcpconnection/write(_:completionhandler:))

# write(\_:completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Write the data to the connection.

> Use the [nw_connection_send(\_:\_:\_:\_:\_:)](../../network/nw_connection_send%28__________%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
func write(_ data: Data, completionHandler completion: @escaping ((any Error)?) -> Void)
```

## Parameters

- `data`: The data object whose content will be written.
- `completion`: The completion handler to be invoked when the data content has been written or an error has occurred. If `error` is `nil`, the write succeeded and the caller can write more data.

<a id="Discussion"></a>

## Discussion

Callers should wait until the `completionHandler` is executed before issuing another write.

## See Also

### Transferring data

- [readMinimumLength(\_:maximumLength:completionHandler:)](readminimumlength%28__maximumlength_completionhandler_%29.md): Deprecated. Read the requested range of bytes.
- [readLength(\_:completionHandler:)](readlength%28__completionhandler_%29.md): Deprecated. Read a certain number of bytes on a connection.
- [writeClose()](writeclose%28%29.md): Deprecated. Close the connection for writing.

# write:completionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Write the data to the connection.

> Use the [nw_connection_send](../../network/nw_connection_send%28__________%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
- (void) write:(NSData *) data completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `data`: The data object whose content will be written.
- `completion`: The completion handler to be invoked when the data content has been written or an error has occurred. If `error` is `nil`, the write succeeded and the caller can write more data.

<a id="Discussion"></a>

## Discussion

Callers should wait until the `completionHandler` is executed before issuing another write.

## See Also

### Transferring data

- [readMinimumLength:maximumLength:completionHandler:](readminimumlength%28__maximumlength_completionhandler_%29.md): Deprecated. Read the requested range of bytes.
- [readLength:completionHandler:](readlength%28__completionhandler_%29.md): Deprecated. Read a certain number of bytes on a connection.
- [writeClose](writeclose%28%29.md): Deprecated. Close the connection for writing.
