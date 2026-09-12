> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/framer](https://developer.apple.com/documentation/network/framer)

# Framer

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An instance of a Framer protocol to load into a protocol stack.

## Declaration

```swift
struct Framer<T> where T : FramerProtocol
```

## Topics

### Initializers

- [init(\_:)](framer/init%28__%29-4jsj5.md): Create a Framer protocol for use in a protocol stack.
- [init(\_:)](framer/init%28__%29-7946z.md): Create a Framer protocol for use in a protocol stack.
- [init(using:\_:)](framer/init%28using___%29-16qam.md): Create a Framer protocol for use in a protocol stack.
- [init(using:\_:)](framer/init%28using___%29-94t7p.md): Create a Framer protocol for use in a protocol stack.

### Instance Properties

- [options](framer/options.md): The framer options to use with this framer.

## Relationships

### Conforms To

- [MessageProtocol](messageprotocol.md)
- [NetworkProtocolOptions](networkprotocoloptions.md)
- [OneToOneProtocol](onetooneprotocol.md)
