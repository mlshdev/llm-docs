> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tips/ignoresdisplayfrequency](https://developer.apple.com/documentation/tipkit/tips/ignoresdisplayfrequency)

# IgnoresDisplayFrequency

**Framework:** TipKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Controls whether a tip obeys the preconfigured display frequency interval.

## Declaration

```swift
struct IgnoresDisplayFrequency
```

<a id="Overview"></a>

## Overview

Use this option to allow a tip to appear even if the [displayFrequency(\_:)](configurationoption/displayfrequency%28__%29.md) has not been satisfied.

The default value of this option is false.

```swift
struct FavoriteBackyardTip: Tip {
    var options: [any Option] {
        IgnoresDisplayFrequency(true)
    }
}
```

## Topics

### Initializers

- [init(\_:)](ignoresdisplayfrequency/init%28__%29.md)

## Relationships

### Conforms To

- [Option](../tipoption.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Options

- [MaxDisplayCount](maxdisplaycount.md): Specifies the maximum number of times a tip displays before the system automatically invalidates it.
- [MaxDisplayDuration](maxdisplayduration.md): Specifies the maximum amount of time a tip is displayed before it is invalidated.
