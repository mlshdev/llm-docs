> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/tlv](https://developer.apple.com/documentation/network/tlv)

# TLV

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A Type-Length-Value (TLV) framing protocol.

## Declaration

```swift
struct TLV
```

<a id="overview"></a>

## Overview

This protocol will infer the length of the data based on the content passed to it in send.

Supports sending and receiving messages.

## Topics

### Initializers

- [init(\_:)](tlv/init%28__%29-8ka4w.md)
- [init(\_:)](tlv/init%28__%29-8qsbh.md)
- [init(type:length:\_:)](tlv/init%28type_length___%29-7awe.md): Create TLV with the specified sizes for the type and length fields.
- [init(type:length:\_:)](tlv/init%28type_length___%29-h8s.md): Create TLV with the specified sizes for the type and length fields.

## Relationships

### Conforms To

- [MessageProtocol](messageprotocol.md)
- [NetworkProtocolOptions](networkprotocoloptions.md)
- [OneToOneProtocol](onetooneprotocol.md)
