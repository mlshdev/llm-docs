> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/coder](https://developer.apple.com/documentation/network/coder)

# Coder

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A protocol that frames and encodes/decodes Codable types.

## Declaration

```swift
struct Coder<Sending, Receiving, CoderType> where Sending : Encodable, Receiving : Decodable, CoderType : NetworkCoder
```

<a id="overview"></a>

## Overview

Supports sending and receiving Codable types using a specified format.

## Topics

### Initializers

- [init(\_:using:\_:)](coder/init%28__using___%29-61vdl.md): Conforms when `Sending` conforms to `Decodable`, `Sending` conforms to `Encodable`, `Sending` is `Receiving`, and `CoderType` conforms to `NetworkCoder`. Create a Coder protocol.
- [init(\_:using:\_:)](coder/init%28__using___%29-8o8kw.md): Conforms when `Sending` conforms to `Decodable`, `Sending` conforms to `Encodable`, `Sending` is `Receiving`, and `CoderType` conforms to `NetworkCoder`. Create a Coder protocol.
- [init(receiving:sending:using:\_:)](coder/init%28receiving_sending_using___%29-4mm04.md): Create a Coder protocol.
- [init(receiving:sending:using:\_:)](coder/init%28receiving_sending_using___%29-7d2qd.md): Create a Coder protocol
- [init(sending:receiving:using:\_:)](coder/init%28sending_receiving_using___%29-1579q.md): Create a Coder protocol
- [init(sending:receiving:using:\_:)](coder/init%28sending_receiving_using___%29-7ox25.md): Create a Coder protocol.

## Relationships

### Conforms To

- [MessageProtocol](messageprotocol.md)
- [NetworkProtocolOptions](networkprotocoloptions.md)
- [OneToOneProtocol](onetooneprotocol.md)
