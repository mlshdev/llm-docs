> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservice/name](https://developer.apple.com/documentation/foundation/netservice/name)

# name (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A string containing the name of this service.

> Use nw_connection_t or nw_listener_t in Network framework instead

## Declaration

```swift
var name: String { get }
```

<a id="Discussion"></a>

## Discussion

This value is set when the object is first initialized, whether by your code or by a browser object. See [init(domain:type:name:)](init%28domain_type_name_%29.md) for more information.

> **Backward Compatibility Note**

>  This became a property in OS X v10.9 and iOS 7, but the underlying getter method (`name`) has been available since this class was first introduced.

## See Also

### Configuring Network Services

- [data(fromTXTRecord:)](data%28fromtxtrecord_%29.md): Deprecated. Returns an `NSData` object representing a TXT record formed from a given dictionary.
- [dictionary(fromTXTRecord:)](dictionary%28fromtxtrecord_%29.md): Deprecated. Returns a dictionary representing a TXT record given as an `NSData` object.
- [addresses](addresses.md): Deprecated. A read-only array containing `NSData` objects, each of which contains a socket address for the service.
- [domain](domain.md): Deprecated. A string containing the domain for this service.
- [includesPeerToPeer](includespeertopeer.md): Deprecated. Specifies whether to also publish, resolve, or monitor this service over peer-to-peer Bluetooth and Wi-Fi, if available.
- [getInputStream(\_:outputStream:)](getinputstream%28__outputstream_%29.md): Deprecated. Creates a pair of input and output streams for the receiver and returns a Boolean value that indicates whether they were retrieved successfully.
- [type](type.md): Deprecated. The type of the published service.
- [txtRecordData()](txtrecorddata%28%29.md): Deprecated. Returns the TXT record for the receiver.
- [setTXTRecord(\_:)](settxtrecord%28__%29.md): Deprecated. Sets the TXT record for the receiver, and returns a Boolean value that indicates whether the operation was successful.
- [delegate](delegate.md): Deprecated. The delegate for the receiver.

# name (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A string containing the name of this service.

> Use nw_connection_t or nw_listener_t in Network framework instead

## Declaration

```objectivec
@property (copy, readonly) NSString * name;
```

<a id="Discussion"></a>

## Discussion

This value is set when the object is first initialized, whether by your code or by a browser object. See [initWithDomain:type:name:](init%28domain_type_name_%29.md) for more information.

> **Backward Compatibility Note**

>  This became a property in OS X v10.9 and iOS 7, but the underlying getter method (`name`) has been available since this class was first introduced.

## See Also

### Configuring Network Services

- [dataFromTXTRecordDictionary:](data%28fromtxtrecord_%29.md): Deprecated. Returns an `NSData` object representing a TXT record formed from a given dictionary.
- [dictionaryFromTXTRecordData:](dictionary%28fromtxtrecord_%29.md): Deprecated. Returns a dictionary representing a TXT record given as an `NSData` object.
- [addresses](addresses.md): Deprecated. A read-only array containing `NSData` objects, each of which contains a socket address for the service.
- [domain](domain.md): Deprecated. A string containing the domain for this service.
- [includesPeerToPeer](includespeertopeer.md): Deprecated. Specifies whether to also publish, resolve, or monitor this service over peer-to-peer Bluetooth and Wi-Fi, if available.
- [getInputStream:outputStream:](getinputstream%28__outputstream_%29.md): Deprecated. Creates a pair of input and output streams for the receiver and returns a Boolean value that indicates whether they were retrieved successfully.
- [type](type.md): Deprecated. The type of the published service.
- [TXTRecordData](txtrecorddata%28%29.md): Deprecated. Returns the TXT record for the receiver.
- [setTXTRecordData:](settxtrecord%28__%29.md): Deprecated. Sets the TXT record for the receiver, and returns a Boolean value that indicates whether the operation was successful.
- [delegate](delegate.md): Deprecated. The delegate for the receiver.
