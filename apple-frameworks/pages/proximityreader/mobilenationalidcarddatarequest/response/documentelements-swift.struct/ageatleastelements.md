> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/mobilenationalidcarddatarequest/response/documentelements-swift.struct/ageatleastelements

# ageAtLeastElements

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

A dictionary of values that indicate whether the document holder is at least the specified age.

## Declaration

```swift
let ageAtLeastElements: [Int : Bool]
```

<a id="discussion"></a>

## Discussion

The key represents an age in years and the value is a Boolean value that indicates whether the document holder is at least that age.
