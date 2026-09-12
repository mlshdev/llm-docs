> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/planedetectionprovider/requiredauthorizations](https://developer.apple.com/documentation/arkit/planedetectionprovider/requiredauthorizations)

# requiredAuthorizations

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** visionOS 1.0+

The types of authorizations necessary for detecting planes.

## Declaration

```swift
static var requiredAuthorizations: [ARKitSession.AuthorizationType] { get }
```

<a id="Discussion"></a>

## Discussion

You can use this property to pass plane detection requirements to the [requestAuthorization(for:)](../arkitsession/requestauthorization%28for_%29.md) method.

## See Also

### Detecting planes

- [init(alignments:)](init%28alignments_%29.md): Creates a plane detection provider for the types of planes you want to detect.
- [allAnchors](allanchors.md): An array that contains all the plane provider’s anchors.
- [anchorUpdates](anchorupdates.md): A sequence of updates to planes a provider detects.
- [isSupported](issupported.md): A Boolean value that indicates whether the current runtime environment supports plane detection providers.
