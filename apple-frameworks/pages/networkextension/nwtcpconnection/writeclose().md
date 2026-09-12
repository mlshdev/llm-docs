> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwtcpconnection/writeclose()](https://developer.apple.com/documentation/networkextension/nwtcpconnection/writeclose())

# writeClose() (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Close the connection for writing.

> Use the [nw_connection_send(\_:\_:\_:\_:\_:)](../../network/nw_connection_send%28__________%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
func writeClose()
```

<a id="Discussion"></a>

## Discussion

Close this connection’s write side such that further write requests won’t succeed. Note that this has the effect of closing the read side of the peer connection. When the connection’s read side and write side are closed, the connection is considered disconnected and will transition to the appropriate state.

## See Also

### Transferring data

- [readMinimumLength(\_:maximumLength:completionHandler:)](readminimumlength%28__maximumlength_completionhandler_%29.md): Deprecated. Read the requested range of bytes.
- [readLength(\_:completionHandler:)](readlength%28__completionhandler_%29.md): Deprecated. Read a certain number of bytes on a connection.
- [write(\_:completionHandler:)](write%28__completionhandler_%29.md): Deprecated. Write the data to the connection.

# writeClose (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Close the connection for writing.

> Use the [nw_connection_send](../../network/nw_connection_send%28__________%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
- (void) writeClose;
```

<a id="Discussion"></a>

## Discussion

Close this connection’s write side such that further write requests won’t succeed. Note that this has the effect of closing the read side of the peer connection. When the connection’s read side and write side are closed, the connection is considered disconnected and will transition to the appropriate state.

## See Also

### Transferring data

- [readMinimumLength:maximumLength:completionHandler:](readminimumlength%28__maximumlength_completionhandler_%29.md): Deprecated. Read the requested range of bytes.
- [readLength:completionHandler:](readlength%28__completionhandler_%29.md): Deprecated. Read a certain number of bytes on a connection.
- [write:completionHandler:](write%28__completionhandler_%29.md): Deprecated. Write the data to the connection.
