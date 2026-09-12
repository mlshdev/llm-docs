> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/framesemantics-swift.struct/init(rawvalue:)](https://developer.apple.com/documentation/arkit/arconfiguration/framesemantics-swift.struct/init(rawvalue:))

# init(rawValue:)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Creates a frame semantics feature.

## Declaration

```swift
init(rawValue: UInt)
```

<a id="Discussion"></a>

## Discussion

Initialize an [ARConfiguration.FrameSemantics](../framesemantics-swift.struct.md) with the value of zero to indicate that no optional frame features are enabled.

You enable a feature by adding it to your configuration’s [frameSemantics](../framesemantics-swift.property.md) option set.
