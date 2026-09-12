> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/dataprovider/issupported](https://developer.apple.com/documentation/arkit/dataprovider/issupported)

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
