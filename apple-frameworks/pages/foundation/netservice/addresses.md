> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservice/addresses](https://developer.apple.com/documentation/foundation/netservice/addresses)

# addresses (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A read-only array containing `NSData` objects, each of which contains a socket address for the service.

> Use nw_connection_t or nw_listener_t in Network framework instead

## Declaration

```swift
var addresses: [Data]? { get }
```

<a id="Discussion"></a>

## Discussion

An array containing `NSData` objects, each of which contains a socket address for the service. Each `NSData` object in the returned array contains an appropriate `sockaddr` structure that you can use to connect to the socket. The exact type of this structure depends on the service to which you are connecting. If no addresses were resolved for the service, the returned array contains zero elements.

It is possible for a single service to resolve to more than one address or not resolve to any addresses. A service might resolve to multiple addresses if the computer publishing the service is currently multihoming.

> **Backward Compatibility Note**

>  This became a property in OS X v10.9 and iOS 7, but the underlying getter method (`addresses`) has been available since this class was first introduced.

## See Also

### Related Documentation

- [resolve()](resolve%28%29.md): Deprecated. Starts a resolve process for the service.

### Configuring Network Services

- [data(fromTXTRecord:)](data%28fromtxtrecord_%29.md): Deprecated. Returns an `NSData` object representing a TXT record formed from a given dictionary.
- [dictionary(fromTXTRecord:)](dictionary%28fromtxtrecord_%29.md): Deprecated. Returns a dictionary representing a TXT record given as an `NSData` object.
- [domain](domain.md): Deprecated. A string containing the domain for this service.
- [includesPeerToPeer](includespeertopeer.md): Deprecated. Specifies whether to also publish, resolve, or monitor this service over peer-to-peer Bluetooth and Wi-Fi, if available.
- [getInputStream(\_:outputStream:)](getinputstream%28__outputstream_%29.md): Deprecated. Creates a pair of input and output streams for the receiver and returns a Boolean value that indicates whether they were retrieved successfully.
- [name](name.md): Deprecated. A string containing the name of this service.
- [type](type.md): Deprecated. The type of the published service.
- [txtRecordData()](txtrecorddata%28%29.md): Deprecated. Returns the TXT record for the receiver.
- [setTXTRecord(\_:)](settxtrecord%28__%29.md): Deprecated. Sets the TXT record for the receiver, and returns a Boolean value that indicates whether the operation was successful.
- [delegate](delegate.md): Deprecated. The delegate for the receiver.

# addresses (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A read-only array containing `NSData` objects, each of which contains a socket address for the service.

> Use nw_connection_t or nw_listener_t in Network framework instead

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<NSData *> * addresses;
```

<a id="Discussion"></a>

## Discussion

An array containing `NSData` objects, each of which contains a socket address for the service. Each `NSData` object in the returned array contains an appropriate `sockaddr` structure that you can use to connect to the socket. The exact type of this structure depends on the service to which you are connecting. If no addresses were resolved for the service, the returned array contains zero elements.

It is possible for a single service to resolve to more than one address or not resolve to any addresses. A service might resolve to multiple addresses if the computer publishing the service is currently multihoming.

> **Backward Compatibility Note**

>  This became a property in OS X v10.9 and iOS 7, but the underlying getter method (`addresses`) has been available since this class was first introduced.

## See Also

### Related Documentation

- [resolve](resolve%28%29.md): Deprecated. Starts a resolve process for the service.

### Configuring Network Services

- [dataFromTXTRecordDictionary:](data%28fromtxtrecord_%29.md): Deprecated. Returns an `NSData` object representing a TXT record formed from a given dictionary.
- [dictionaryFromTXTRecordData:](dictionary%28fromtxtrecord_%29.md): Deprecated. Returns a dictionary representing a TXT record given as an `NSData` object.
- [domain](domain.md): Deprecated. A string containing the domain for this service.
- [includesPeerToPeer](includespeertopeer.md): Deprecated. Specifies whether to also publish, resolve, or monitor this service over peer-to-peer Bluetooth and Wi-Fi, if available.
- [getInputStream:outputStream:](getinputstream%28__outputstream_%29.md): Deprecated. Creates a pair of input and output streams for the receiver and returns a Boolean value that indicates whether they were retrieved successfully.
- [name](name.md): Deprecated. A string containing the name of this service.
- [type](type.md): Deprecated. The type of the published service.
- [TXTRecordData](txtrecorddata%28%29.md): Deprecated. Returns the TXT record for the receiver.
- [setTXTRecordData:](settxtrecord%28__%29.md): Deprecated. Sets the TXT record for the receiver, and returns a Boolean value that indicates whether the operation was successful.
- [delegate](delegate.md): Deprecated. The delegate for the receiver.
