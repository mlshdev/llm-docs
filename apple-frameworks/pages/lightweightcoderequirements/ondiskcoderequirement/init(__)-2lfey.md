> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/ondiskcoderequirement/init(_:)-2lfey](https://developer.apple.com/documentation/lightweightcoderequirements/ondiskcoderequirement/init(_:)-2lfey)

# init(\_:)

**Framework:** LightweightCodeRequirements  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Convert a [LaunchCodeRequirement](../launchcoderequirement.md) to an [OnDiskCodeRequirement](../ondiskcoderequirement.md) if possible.

## Declaration

```swift
init(_ launchRequirement: LaunchCodeRequirement) throws
```

<a id="discussion"></a>

## Discussion

Conversion will fail if the [LaunchCodeRequirement](../launchcoderequirement.md) contains a constraint that cannot be converted to [OnDiskConstraint](../ondiskconstraint.md).
