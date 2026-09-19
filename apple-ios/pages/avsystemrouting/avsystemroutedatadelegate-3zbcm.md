> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avsystemrouting/avsystemroutedatadelegate-3zbcm

# AVSystemRouteDataDelegate

**Interface language:** Objective-C

**Framework:** AVSystemRouting  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A protocol for handling data from a remote application.

## Declaration

```objectivec
@protocol AVSystemRouteDataDelegate <NSObject>
```

## Topics

### Instance Methods

- [receiveData:completionHandler:](avsystemroutedatadelegate-3zbcm/receivedata_completionhandler_.md): Receives data sent from a connected remote application.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Playback and communication

- [AVSystemRouteMediaSession](avsystemroutemediasession-4mo0j.md): An object that provides playback controls and a data channel for a session running on a remote device.
