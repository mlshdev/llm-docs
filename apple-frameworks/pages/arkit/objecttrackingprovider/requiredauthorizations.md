> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/objecttrackingprovider/requiredauthorizations

# requiredAuthorizations

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** visionOS 2.0+

An array of authorization types the object-tracking provider requires.

## Declaration

```swift
static var requiredAuthorizations: [ARKitSession.AuthorizationType] { get }
```

## See Also

### Checking availability

- [isSupported](issupported.md): A Boolean value that indicates whether a device supports the object-tracking provider.
