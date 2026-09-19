> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/sortcomparator/localized

# localized

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A comparator that compares a string using a localized comparison in the current locale.

## Declaration

```swift
static var localized: String.Comparator { get }
```

## See Also

### Inspecting a Comparator

- [order](order.md): The sort order that the comparator uses to compare.
- [localizedStandard](localizedstandard.md): Conforms when `Self` is `String.Comparator`. A comparator that compares a string using a localized, numeric comparison in the current locale.
