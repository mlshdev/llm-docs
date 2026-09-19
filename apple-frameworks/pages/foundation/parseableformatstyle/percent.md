> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/parseableformatstyle/percent

# percent

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A style for formatting decimal values as a percent representation.

## Declaration

```swift
static var percent: Decimal.FormatStyle.Percent { get }
```

<a id="discussion"></a>

## Discussion

Use this type property when the call point allows the use of [Decimal.FormatStyle](../decimal/formatstyle.md). You typically do this when calling the [formatted(\_:)](../decimal/formatted%28__%29.md) method of [Decimal](../decimal.md).
