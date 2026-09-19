> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlcommandbuffererroroption/init(rawvalue:)

# init(rawValue:)

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a set of error options from a raw integer value.

## Declaration

```swift
init(rawValue: UInt)
```

## Parameters

- `rawValue`: The set of flags to use.

<a id="discussion"></a>

## Discussion

Use the [MTLCommandBufferErrorOption](../mtlcommandbuffererroroption.md) structure’s type properties, such as [encoderExecutionStatus](encoderexecutionstatus.md), instead of this initializer.
