> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tipoption](https://developer.apple.com/documentation/tipkit/tipoption)

# Option

**Framework:** TipKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type that represents the various customizations that you can make to a tip’s behavior.

## Declaration

```swift
protocol TipOption : Sendable
```

## Topics

### Tip options

- [IgnoresDisplayFrequency](tip/ignoresdisplayfrequency.md): Controls whether a tip obeys the preconfigured display frequency interval.
- [MaxDisplayCount](tip/maxdisplaycount.md): Specifies the maximum number of times a tip displays before the system automatically invalidates it.
- [MaxDisplayDuration](tip/maxdisplayduration.md): Specifies the maximum amount of time a tip is displayed before it is invalidated.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [IgnoresDisplayFrequency](tips/ignoresdisplayfrequency.md)
- [MaxDisplayCount](tips/maxdisplaycount.md)
- [MaxDisplayDuration](tips/maxdisplayduration.md)

## See Also

### Common types

- [AnyTip](anytip.md): A type-erased tip value.
- [TipKitError](tipkiterror.md): A localized tip kit error.
