> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/framerprotocol

# FramerProtocol

**Framework:** Network  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Framer protocols allow custom framing and serialization of messages on a connection.

## Declaration

```swift
protocol FramerProtocol
```

<a id="overview"></a>

## Overview

A Network Framer is an instance of a protocol in a connection’s protocol stack that parses and writes messages on top of a transport protocol, such as a TLS stream. A framer can add and parse headers or delimiters around application data to provide a message-oriented abstraction.

## Topics

### Type Properties

- [definition](framerprotocol/definition.md)
