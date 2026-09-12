> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/protocolstackbuilder](https://developer.apple.com/documentation/network/protocolstackbuilder)

# ProtocolStackBuilder

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A resultBuilder for specifying and configuring protocol stacks in a declarative way

## Declaration

```swift
@resultBuilder struct ProtocolStackBuilder<ApplicationProtocol, each P> where ApplicationProtocol : NetworkProtocolOptions, repeat each P : NetworkProtocolOptions
```

## Topics

### Type Methods

- [buildBlock(\_:\_:)](protocolstackbuilder/buildblock%28____%29.md)
