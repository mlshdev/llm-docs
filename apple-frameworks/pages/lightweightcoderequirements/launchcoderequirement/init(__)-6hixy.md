> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/launchcoderequirement/init(_:)-6hixy](https://developer.apple.com/documentation/lightweightcoderequirements/launchcoderequirement/init(_:)-6hixy)

# init(\_:)

**Framework:** LightweightCodeRequirements  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Convert a [OnDiskCodeRequirement](../ondiskcoderequirement.md) to a [LaunchCodeRequirement](../launchcoderequirement.md) if possible.

## Declaration

```swift
init(_ onDiskRequirement: OnDiskCodeRequirement) throws
```

<a id="discussion"></a>

## Discussion

Conversion will fail if the [OnDiskCodeRequirement](../ondiskcoderequirement.md) contains a constraint that cannot be converted to [LaunchConstraint](../launchconstraint.md).
