> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservice/data(fromtxtrecord:)](https://developer.apple.com/documentation/foundation/netservice/data(fromtxtrecord:))

# data(fromTXTRecord:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Returns an `NSData` object representing a TXT record formed from a given dictionary.

> Use nw_connection_t or nw_listener_t in Network framework instead

## Declaration

```swift
class func data(fromTXTRecord txtDictionary: [String : Data]) -> Data
```

## Parameters

- `txtDictionary`: A dictionary containing a TXT record.

<a id="return-value"></a>

## Return Value

An `NSData` object representing TXT data formed from `txtDictionary`. Fails an assertion if `txtDictionary` cannot be represented as an `NSData` object.

## See Also

### Configuring Network Services

- [dictionary(fromTXTRecord:)](dictionary%28fromtxtrecord_%29.md): Deprecated. Returns a dictionary representing a TXT record given as an `NSData` object.
- [addresses](addresses.md): Deprecated. A read-only array containing `NSData` objects, each of which contains a socket address for the service.
- [domain](domain.md): Deprecated. A string containing the domain for this service.
- [includesPeerToPeer](includespeertopeer.md): Deprecated. Specifies whether to also publish, resolve, or monitor this service over peer-to-peer Bluetooth and Wi-Fi, if available.
- [getInputStream(\_:outputStream:)](getinputstream%28__outputstream_%29.md): Deprecated. Creates a pair of input and output streams for the receiver and returns a Boolean value that indicates whether they were retrieved successfully.
- [name](name.md): Deprecated. A string containing the name of this service.
- [type](type.md): Deprecated. The type of the published service.
- [txtRecordData()](txtrecorddata%28%29.md): Deprecated. Returns the TXT record for the receiver.
- [setTXTRecord(\_:)](settxtrecord%28__%29.md): Deprecated. Sets the TXT record for the receiver, and returns a Boolean value that indicates whether the operation was successful.
- [delegate](delegate.md): Deprecated. The delegate for the receiver.

# dataFromTXTRecordDictionary: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Returns an `NSData` object representing a TXT record formed from a given dictionary.

> Use nw_connection_t or nw_listener_t in Network framework instead

## Declaration

```objectivec
+ (NSData *) dataFromTXTRecordDictionary:(NSDictionary<NSString *,NSData *> *) txtDictionary;
```

## Parameters

- `txtDictionary`: A dictionary containing a TXT record.

<a id="return-value"></a>

## Return Value

An `NSData` object representing TXT data formed from `txtDictionary`. Fails an assertion if `txtDictionary` cannot be represented as an `NSData` object.

## See Also

### Configuring Network Services

- [dictionaryFromTXTRecordData:](dictionary%28fromtxtrecord_%29.md): Deprecated. Returns a dictionary representing a TXT record given as an `NSData` object.
- [addresses](addresses.md): Deprecated. A read-only array containing `NSData` objects, each of which contains a socket address for the service.
- [domain](domain.md): Deprecated. A string containing the domain for this service.
- [includesPeerToPeer](includespeertopeer.md): Deprecated. Specifies whether to also publish, resolve, or monitor this service over peer-to-peer Bluetooth and Wi-Fi, if available.
- [getInputStream:outputStream:](getinputstream%28__outputstream_%29.md): Deprecated. Creates a pair of input and output streams for the receiver and returns a Boolean value that indicates whether they were retrieved successfully.
- [name](name.md): Deprecated. A string containing the name of this service.
- [type](type.md): Deprecated. The type of the published service.
- [TXTRecordData](txtrecorddata%28%29.md): Deprecated. Returns the TXT record for the receiver.
- [setTXTRecordData:](settxtrecord%28__%29.md): Deprecated. Sets the TXT record for the receiver, and returns a Boolean value that indicates whether the operation was successful.
- [delegate](delegate.md): Deprecated. The delegate for the receiver.
