> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/networklistener/service

# service

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An optional service to advertise with the listener.

## Declaration

```swift
final var service: NWListener.Service? { get set }
```

<a id="discussion"></a>

## Discussion

May be modified after the listener becomes ready to update the TXT record or change the advertised service.
