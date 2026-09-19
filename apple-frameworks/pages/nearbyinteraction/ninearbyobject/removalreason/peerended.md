> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/nearbyinteraction/ninearbyobject/removalreason/peerended

# NINearbyObject.RemovalReason.peerEnded (Swift)

**Framework:** Nearby Interaction  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

The peer ended the session.

## Declaration

```swift
case peerEnded
```

<a id="Discussion"></a>

## Discussion

The framework provides this removal reason when the peer app calls [invalidate()](../../nisession/invalidate%28%29.md).

## See Also

### Reasons

- [NINearbyObject.RemovalReason.timeout](timeout.md): NI timed out the session.
- [NINearbyObject.RemovalReason.timeout](timeout.md): NI timed out the session.

# NINearbyObjectRemovalReasonPeerEnded (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · watchOS

The peer ended the session.

## Declaration

```objectivec
NINearbyObjectRemovalReasonPeerEnded
```

<a id="Discussion"></a>

## Discussion

The framework provides this removal reason when the peer app calls [invalidate](../../nisession/invalidate%28%29.md).

## See Also

### Reasons

- [NINearbyObjectRemovalReasonTimeout](timeout.md): NI timed out the session.
- [NINearbyObjectRemovalReasonTimeout](timeout.md): NI timed out the session.
