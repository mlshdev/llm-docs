> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4timestampgranularity/precise](https://developer.apple.com/documentation/metal/mtl4timestampgranularity/precise)

# MTL4TimestampGranularity.precise (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A timestamp as precise as possible.

## Declaration

```swift
case precise
```

<a id="discussion"></a>

## Discussion

Using this granularity may incur in a performance penalty, for example, it may cause splitting of command encoders.

# MTL4TimestampGranularityPrecise (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A timestamp as precise as possible.

## Declaration

```objectivec
MTL4TimestampGranularityPrecise
```

<a id="discussion"></a>

## Discussion

Using this granularity may incur in a performance penalty, for example, it may cause splitting of command encoders.
