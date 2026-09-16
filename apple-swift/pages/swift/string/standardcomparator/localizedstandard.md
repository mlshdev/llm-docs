> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/string/standardcomparator/localizedstandard

# localizedStandard

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Compares `String`s as compared by the Finder.

## Declaration

```swift
static let localizedStandard: String.StandardComparator
```

<a id="discussion"></a>

## Discussion

Uses a localized, numeric comparison in the current locale.

The default `SortComparator` used in `String` comparisons.
