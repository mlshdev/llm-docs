> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/dataprovider/requiredauthorizations

# requiredAuthorizations

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The kinds of authorization you need to use a particular data provider type.

## Declaration

```swift
static var requiredAuthorizations: [ARKitSession.AuthorizationType] { get }
```

## See Also

### Inspecting a data provider type

- [isSupported](issupported.md): A Boolean value that indicates whether the current runtime environment supports a particular provider type.
