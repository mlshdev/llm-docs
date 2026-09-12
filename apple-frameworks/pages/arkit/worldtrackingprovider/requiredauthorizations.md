> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/worldtrackingprovider/requiredauthorizations](https://developer.apple.com/documentation/arkit/worldtrackingprovider/requiredauthorizations)

# requiredAuthorizations

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The types of authorizations necessary for tracking world anchors.

## Declaration

```swift
static var requiredAuthorizations: [ARKitSession.AuthorizationType] { get }
```

## See Also

### Tracking objects

- [init()](init%28%29.md): Creates a world-tracking provider.
- [anchorUpdates](anchorupdates.md): A sequence of updates to anchors a provider tracks.
- [isSupported](issupported.md): A Boolean value that indicates whether the current runtime environment supports world-tracking providers.
- [allAnchors](allanchors.md): An array of all known world anchors from the world-tracking provider.
- [addAnchor(\_:)](addanchor%28__%29.md): Adds a world anchor you supply to the set of currently tracked anchors.
- [WorldTrackingProvider.Error](error.md): An error that can occur during a world-tracking session.
