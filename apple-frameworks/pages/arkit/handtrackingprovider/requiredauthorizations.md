> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/handtrackingprovider/requiredauthorizations

# requiredAuthorizations

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** visionOS 1.0+

The types of authorizations necessary for tracking hands.

## Declaration

```swift
static var requiredAuthorizations: [ARKitSession.AuthorizationType] { get }
```

## See Also

### Creating a hand-tracking provider

- [init()](init%28%29.md): Creates a hand-tracking provider.
- [isSupported](issupported.md): A Boolean value that indicates whether the current runtime environment supports hand-tracking providers.
