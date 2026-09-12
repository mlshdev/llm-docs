> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/nodedefinition/name](https://developer.apple.com/documentation/computegraph/computenodegraph/nodedefinition/name)

# name

**Framework:** Compute Graph  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Name of the NodeDefinition.

## Declaration

```swift
var name: String
```

<a id="discussion"></a>

## Discussion

Definitions whose kind is `ComputeNodeGraph/NodeDefinition/Kind/function`  will match their MTLFunction via name.
