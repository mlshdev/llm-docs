> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tips/maxdisplaycount](https://developer.apple.com/documentation/tipkit/tips/maxdisplaycount)

# MaxDisplayCount

**Framework:** TipKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Specifies the maximum number of times a tip displays before the system automatically invalidates it.

## Declaration

```swift
struct MaxDisplayCount
```

<a id="Overview"></a>

## Overview

Use this option to automatically invalidate a tip after it has appeared a specified number of times.

By default tips have no maximum display count.

```swift
struct FavoriteBackyardTip: Tip {
    var options: [any Option] {
        // Tip will only appear 3 times before it is automatically invalidated.
        MaxDisplayCount(3)
    }
}
```

## Topics

### Initializers

- [init(\_:)](maxdisplaycount/init%28__%29.md)

## Relationships

### Conforms To

- [Option](../tipoption.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Options

- [IgnoresDisplayFrequency](ignoresdisplayfrequency.md): Controls whether a tip obeys the preconfigured display frequency interval.
- [MaxDisplayDuration](maxdisplayduration.md): Specifies the maximum amount of time a tip is displayed before it is invalidated.
