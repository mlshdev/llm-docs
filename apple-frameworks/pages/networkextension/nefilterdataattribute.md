> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterdataattribute](https://developer.apple.com/documentation/networkextension/nefilterdataattribute)

# NEFilterDataAttribute (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** macOS 10.15.5+

Attribute flags that describe the data handled by a filter.

## Declaration

```swift
enum NEFilterDataAttribute
```

## Topics

### Attributes

- [NEFilterDataAttribute.hasIPHeader](nefilterdataattribute/hasipheader.md): An attribute that indicates the data includes an IP header.

### Initializers

- [init(rawValue:)](nefilterdataattribute/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Filtering network content

- [handleNewFlow(\_:)](nefilterdataprovider/handlenewflow%28__%29.md): Make a filtering decision for a newly-created flow of network content.
- [handleInboundData(from:readBytesStartOffset:readBytes:)](nefilterdataprovider/handleinbounddata%28from_readbytesstartoffset_readbytes_%29.md): Make a filtering decision about a chunk of inbound data.
- [handleOutboundData(from:readBytesStartOffset:readBytes:)](nefilterdataprovider/handleoutbounddata%28from_readbytesstartoffset_readbytes_%29.md): Make a filtering decision about a chunk of outbound data.
- [handleInboundDataComplete(for:)](nefilterdataprovider/handleinbounddatacomplete%28for_%29.md): Make a filtering decision after seeing all of the inbound data for a flow.
- [handleOutboundDataComplete(for:)](nefilterdataprovider/handleoutbounddatacomplete%28for_%29.md): Make a filtering decision after seeing all of the outbound data for a flow.

# NEFilterDataAttribute (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** macOS 10.15.5+

Attribute flags that describe the data handled by a filter.

## Declaration

```objectivec
enum NEFilterDataAttribute : NSInteger;
```

## Topics

### Attributes

- [NEFilterDataAttributeHasIPHeader](nefilterdataattribute/hasipheader.md): An attribute that indicates the data includes an IP header.

## See Also

### Filtering network content

- [handleNewFlow:](nefilterdataprovider/handlenewflow%28__%29.md): Make a filtering decision for a newly-created flow of network content.
- [handleInboundDataFromFlow:readBytesStartOffset:readBytes:](nefilterdataprovider/handleinbounddata%28from_readbytesstartoffset_readbytes_%29.md): Make a filtering decision about a chunk of inbound data.
- [handleOutboundDataFromFlow:readBytesStartOffset:readBytes:](nefilterdataprovider/handleoutbounddata%28from_readbytesstartoffset_readbytes_%29.md): Make a filtering decision about a chunk of outbound data.
- [handleInboundDataCompleteForFlow:](nefilterdataprovider/handleinbounddatacomplete%28for_%29.md): Make a filtering decision after seeing all of the inbound data for a flow.
- [handleOutboundDataCompleteForFlow:](nefilterdataprovider/handleoutbounddatacomplete%28for_%29.md): Make a filtering decision after seeing all of the outbound data for a flow.
