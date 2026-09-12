> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/standardcomparator/localizedstandard](https://developer.apple.com/documentation/swift/string/standardcomparator/localizedstandard)

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
