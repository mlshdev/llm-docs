> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservice/dictionary(fromtxtrecord:)](https://developer.apple.com/documentation/foundation/netservice/dictionary(fromtxtrecord:))

# dictionary(fromTXTRecord:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Returns a dictionary representing a TXT record given as an `NSData` object.

> Use nw_connection_t or nw_listener_t in Network framework instead

## Declaration

```swift
class func dictionary(fromTXTRecord txtData: Data) -> [String : Data]
```

## Parameters

- `txtData`: A data object encoding a TXT record.

<a id="return-value"></a>

## Return Value

A dictionary representing `txtData`. The dictionary’s keys are `NSString` objects using UTF8 encoding. The values associated with all the dictionary’s keys are `NSData` objects that encapsulate strings or data. Fails an assertion if `txtData` cannot be represented as an `NSDictionary` object.

## See Also

### Configuring Network Services

- [data(fromTXTRecord:)](data%28fromtxtrecord_%29.md): Deprecated. Returns an `NSData` object representing a TXT record formed from a given dictionary.
- [addresses](addresses.md): Deprecated. A read-only array containing `NSData` objects, each of which contains a socket address for the service.
- [domain](domain.md): Deprecated. A string containing the domain for this service.
- [includesPeerToPeer](includespeertopeer.md): Deprecated. Specifies whether to also publish, resolve, or monitor this service over peer-to-peer Bluetooth and Wi-Fi, if available.
- [getInputStream(\_:outputStream:)](getinputstream%28__outputstream_%29.md): Deprecated. Creates a pair of input and output streams for the receiver and returns a Boolean value that indicates whether they were retrieved successfully.
- [name](name.md): Deprecated. A string containing the name of this service.
- [type](type.md): Deprecated. The type of the published service.
- [txtRecordData()](txtrecorddata%28%29.md): Deprecated. Returns the TXT record for the receiver.
- [setTXTRecord(\_:)](settxtrecord%28__%29.md): Deprecated. Sets the TXT record for the receiver, and returns a Boolean value that indicates whether the operation was successful.
- [delegate](delegate.md): Deprecated. The delegate for the receiver.

# dictionaryFromTXTRecordData: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Returns a dictionary representing a TXT record given as an `NSData` object.

> Use nw_connection_t or nw_listener_t in Network framework instead

## Declaration

```objectivec
+ (NSDictionary<NSString *,NSData *> *) dictionaryFromTXTRecordData:(NSData *) txtData;
```

## Parameters

- `txtData`: A data object encoding a TXT record.

<a id="return-value"></a>

## Return Value

A dictionary representing `txtData`. The dictionary’s keys are `NSString` objects using UTF8 encoding. The values associated with all the dictionary’s keys are `NSData` objects that encapsulate strings or data. Fails an assertion if `txtData` cannot be represented as an `NSDictionary` object.

## See Also

### Configuring Network Services

- [dataFromTXTRecordDictionary:](data%28fromtxtrecord_%29.md): Deprecated. Returns an `NSData` object representing a TXT record formed from a given dictionary.
- [addresses](addresses.md): Deprecated. A read-only array containing `NSData` objects, each of which contains a socket address for the service.
- [domain](domain.md): Deprecated. A string containing the domain for this service.
- [includesPeerToPeer](includespeertopeer.md): Deprecated. Specifies whether to also publish, resolve, or monitor this service over peer-to-peer Bluetooth and Wi-Fi, if available.
- [getInputStream:outputStream:](getinputstream%28__outputstream_%29.md): Deprecated. Creates a pair of input and output streams for the receiver and returns a Boolean value that indicates whether they were retrieved successfully.
- [name](name.md): Deprecated. A string containing the name of this service.
- [type](type.md): Deprecated. The type of the published service.
- [TXTRecordData](txtrecorddata%28%29.md): Deprecated. Returns the TXT record for the receiver.
- [setTXTRecordData:](settxtrecord%28__%29.md): Deprecated. Sets the TXT record for the receiver, and returns a Boolean value that indicates whether the operation was successful.
- [delegate](delegate.md): Deprecated. The delegate for the receiver.
