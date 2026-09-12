> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwtcpconnection/readlength(_:completionhandler:)](https://developer.apple.com/documentation/networkextension/nwtcpconnection/readlength(_:completionhandler:))

# readLength(\_:completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Read a certain number of bytes on a connection.

> Use the [nw_connection_receive(\_:\_:\_:\_:)](../../network/nw_connection_receive%28________%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
func readLength(_ length: Int, completionHandler completion: @escaping (Data?, (any Error)?) -> Void)
```

## Parameters

- `length`: The exact number of bytes the caller wants to read.
- `completion`: The completion handler to be invoked when data has been read or an error occurred.

<a id="Discussion"></a>

## Discussion

Read `length` number of bytes. See `readMinimumLength:maximumLength:completionHandler:` for a complete discussion of the callback behavior.

## See Also

### Transferring data

- [readMinimumLength(\_:maximumLength:completionHandler:)](readminimumlength%28__maximumlength_completionhandler_%29.md): Deprecated. Read the requested range of bytes.
- [write(\_:completionHandler:)](write%28__completionhandler_%29.md): Deprecated. Write the data to the connection.
- [writeClose()](writeclose%28%29.md): Deprecated. Close the connection for writing.

# readLength:completionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Read a certain number of bytes on a connection.

> Use the [nw_connection_receive](../../network/nw_connection_receive%28________%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
- (void) readLength:(NSUInteger) length completionHandler:(void (^)(NSData *data, NSError *error)) completion;
```

## Parameters

- `length`: The exact number of bytes the caller wants to read.
- `completion`: The completion handler to be invoked when data has been read or an error occurred.

<a id="Discussion"></a>

## Discussion

Read `length` number of bytes. See `readMinimumLength:maximumLength:completionHandler:` for a complete discussion of the callback behavior.

## See Also

### Transferring data

- [readMinimumLength:maximumLength:completionHandler:](readminimumlength%28__maximumlength_completionhandler_%29.md): Deprecated. Read the requested range of bytes.
- [write:completionHandler:](write%28__completionhandler_%29.md): Deprecated. Write the data to the connection.
- [writeClose](writeclose%28%29.md): Deprecated. Close the connection for writing.
