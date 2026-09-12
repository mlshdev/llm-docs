> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalcomponent/options/allowcrossing](https://developer.apple.com/documentation/realitykit/portalcomponent/options/allowcrossing)

# allowCrossing

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

An option that enables the crossing feature.

## Declaration

```swift
static let allowCrossing: PortalComponent.Options
```

<a id="discussion"></a>

## Discussion

Objects within the portal world with a [PortalCrossingComponent](../../portalcrossingcomponent.md) can cross the portal when the `allowCrossing` option is in an enabled state. Crossing behavior is based on the user-defined geometry for [crossingMode](../crossingmode-swift.property.md).
