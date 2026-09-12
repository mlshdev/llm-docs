> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/unlitmaterial/program-swift.class/descriptor-swift.struct/applypostprocesstonemap](https://developer.apple.com/documentation/realitykit/unlitmaterial/program-swift.class/descriptor-swift.struct/applypostprocesstonemap)

# applyPostProcessToneMap

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A Boolean value that determines whether RealityKit will tonemap the output of this material.

## Declaration

```swift
var applyPostProcessToneMap: Bool
```

<a id="discussion"></a>

## Discussion

If true, the created `UnlitMaterial.Program` will tonemap its color output to better match the rest of the scene; if false, the created `UnlitMaterial.Program` will output its color without modification.

Default value is true.
