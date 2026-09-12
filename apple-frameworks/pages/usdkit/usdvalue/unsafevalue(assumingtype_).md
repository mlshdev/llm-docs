> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdvalue/unsafevalue(assumingtype:)](https://developer.apple.com/documentation/usdkit/usdvalue/unsafevalue(assumingtype:))

# unsafeValue(assumingType:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the wrapped value as `T` without checking the dynamic type.

## Declaration

```swift
func unsafeValue<T>(assumingType type: T.Type = T.self) -> T where T : USDValueProtocol
```

<a id="discussion"></a>

## Discussion

> **Important**

> The behaviour is undefined when `T` does not match the stored type. Prefer [value(as:)](value%28as_%29.md) unless you have already confirmed the type with [isHolding(\_:)](isholding%28__%29.md).
