> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/dataprovider/issupported

# isSupported

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

A Boolean value that indicates whether the current runtime environment supports a particular provider type.

## Declaration

```swift
static var isSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

For example, data providers are not supported in Simulator.

## See Also

### Inspecting a data provider type

- [requiredAuthorizations](requiredauthorizations.md): The kinds of authorization you need to use a particular data provider type.
