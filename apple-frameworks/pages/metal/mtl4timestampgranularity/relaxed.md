> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4timestampgranularity/relaxed](https://developer.apple.com/documentation/metal/mtl4timestampgranularity/relaxed)

# MTL4TimestampGranularity.relaxed (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A minimally-invasive timestamp which may be less precise.

## Declaration

```swift
case relaxed
```

<a id="discussion"></a>

## Discussion

Using this granularity incurs in the lowest overhead, at the cost of precision. For example, it may sample at command encoder boundaries.

# MTL4TimestampGranularityRelaxed (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A minimally-invasive timestamp which may be less precise.

## Declaration

```objectivec
MTL4TimestampGranularityRelaxed
```

<a id="discussion"></a>

## Discussion

Using this granularity incurs in the lowest overhead, at the cost of precision. For example, it may sample at command encoder boundaries.
