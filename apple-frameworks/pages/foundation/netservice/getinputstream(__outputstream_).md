> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservice/getinputstream(_:outputstream:)](https://developer.apple.com/documentation/foundation/netservice/getinputstream(_:outputstream:))

# getInputStream(\_:outputStream:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates a pair of input and output streams for the receiver and returns a Boolean value that indicates whether they were retrieved successfully.

> Use nw_connection_t or nw_listener_t in Network framework instead

## Declaration

```swift
func getInputStream(_ inputStream: UnsafeMutablePointer<InputStream?>?, outputStream: UnsafeMutablePointer<OutputStream?>?) -> Bool
```

## Parameters

- `inputStream`: Upon return, the input stream for the receiver. Pass `NULL` if you do not need this stream.
- `outputStream`: Upon return, the output stream for the receiver. Pass `NULL` if you do not need this stream.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the streams are created successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

After this method is called, no delegate callbacks are called by the receiver.

> **Note**

>  If automatic reference counting is not used, the input and output streams returned through the parameters are *retained*, which means that you are responsible for releasing them to avoid memory leaks.

## See Also

### Configuring Network Services

- [data(fromTXTRecord:)](data%28fromtxtrecord_%29.md): Deprecated. Returns an `NSData` object representing a TXT record formed from a given dictionary.
- [dictionary(fromTXTRecord:)](dictionary%28fromtxtrecord_%29.md): Deprecated. Returns a dictionary representing a TXT record given as an `NSData` object.
- [addresses](addresses.md): Deprecated. A read-only array containing `NSData` objects, each of which contains a socket address for the service.
- [domain](domain.md): Deprecated. A string containing the domain for this service.
- [includesPeerToPeer](includespeertopeer.md): Deprecated. Specifies whether to also publish, resolve, or monitor this service over peer-to-peer Bluetooth and Wi-Fi, if available.
- [name](name.md): Deprecated. A string containing the name of this service.
- [type](type.md): Deprecated. The type of the published service.
- [txtRecordData()](txtrecorddata%28%29.md): Deprecated. Returns the TXT record for the receiver.
- [setTXTRecord(\_:)](settxtrecord%28__%29.md): Deprecated. Sets the TXT record for the receiver, and returns a Boolean value that indicates whether the operation was successful.
- [delegate](delegate.md): Deprecated. The delegate for the receiver.

# getInputStream:outputStream: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates a pair of input and output streams for the receiver and returns a Boolean value that indicates whether they were retrieved successfully.

> Use nw_connection_t or nw_listener_t in Network framework instead

## Declaration

```objectivec
- (BOOL) getInputStream:(NSInputStream **) inputStream outputStream:(NSOutputStream **) outputStream;
```

## Parameters

- `inputStream`: Upon return, the input stream for the receiver. Pass `NULL` if you do not need this stream.
- `outputStream`: Upon return, the output stream for the receiver. Pass `NULL` if you do not need this stream.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the streams are created successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

After this method is called, no delegate callbacks are called by the receiver.

> **Note**

>  If automatic reference counting is not used, the input and output streams returned through the parameters are *retained*, which means that you are responsible for releasing them to avoid memory leaks.

## See Also

### Configuring Network Services

- [dataFromTXTRecordDictionary:](data%28fromtxtrecord_%29.md): Deprecated. Returns an `NSData` object representing a TXT record formed from a given dictionary.
- [dictionaryFromTXTRecordData:](dictionary%28fromtxtrecord_%29.md): Deprecated. Returns a dictionary representing a TXT record given as an `NSData` object.
- [addresses](addresses.md): Deprecated. A read-only array containing `NSData` objects, each of which contains a socket address for the service.
- [domain](domain.md): Deprecated. A string containing the domain for this service.
- [includesPeerToPeer](includespeertopeer.md): Deprecated. Specifies whether to also publish, resolve, or monitor this service over peer-to-peer Bluetooth and Wi-Fi, if available.
- [name](name.md): Deprecated. A string containing the name of this service.
- [type](type.md): Deprecated. The type of the published service.
- [TXTRecordData](txtrecorddata%28%29.md): Deprecated. Returns the TXT record for the receiver.
- [setTXTRecordData:](settxtrecord%28__%29.md): Deprecated. Sets the TXT record for the receiver, and returns a Boolean value that indicates whether the operation was successful.
- [delegate](delegate.md): Deprecated. The delegate for the receiver.
