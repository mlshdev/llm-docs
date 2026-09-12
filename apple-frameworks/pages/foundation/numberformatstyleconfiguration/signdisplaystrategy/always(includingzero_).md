> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatstyleconfiguration/signdisplaystrategy/always(includingzero:)](https://developer.apple.com/documentation/foundation/numberformatstyleconfiguration/signdisplaystrategy/always(includingzero:))

# always(includingZero:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A strategy to always display sign symbols.

## Declaration

```swift
static func always(includingZero: Bool = true) -> NumberFormatStyleConfiguration.SignDisplayStrategy
```

## Parameters

- `includingZero`: A Boolean value that determines whether the format style should apply sign characters to zero values. Defaults to `true`.

<a id="return-value"></a>

## Return Value

A strategy to always display sign symbols, with the given behavior for zero values.

## See Also

### Sign display strategies

- [automatic](automatic.md): A strategy to automatically configure locale-appropriate sign display behavior.
- [never](never.md): A strategy to never display sign symbols.
