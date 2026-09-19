> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwprotocolframer/definition/init(implementation:)

# init(implementation:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Initializes a new protocol definition based on your protocol implementation.

## Declaration

```swift
init(implementation: any NWProtocolFramerImplementation.Type)
```

<a id="Discussion"></a>

## Discussion

Each time you initialize a protocol definition with your implemention, a new definition is created that will not be considered equal to other definitions. If you need to associate messages with a protocol you have added to a connection’s protocol stack, make sure to use the same definition.
