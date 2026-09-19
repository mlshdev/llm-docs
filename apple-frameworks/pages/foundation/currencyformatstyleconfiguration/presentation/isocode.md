> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/currencyformatstyleconfiguration/presentation/isocode

# isoCode

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A presentation that shows the ISO code of the currency.

## Declaration

```swift
static var isoCode: CurrencyFormatStyleConfiguration.Presentation { get }
```

<a id="Discussion"></a>

## Discussion

This presentation produces output like `USD 123.00`.

## See Also

### Specifying presentation

- [fullName](fullname.md): A presentation that shows the full name of the currency.
- [narrow](narrow.md): A presentation that shows a condensed expression of the currency.
- [standard](standard.md): A presentation that shows a standard expression of the currency.
