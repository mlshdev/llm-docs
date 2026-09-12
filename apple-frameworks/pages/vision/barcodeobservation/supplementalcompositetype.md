> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/barcodeobservation/supplementalcompositetype](https://developer.apple.com/documentation/vision/barcodeobservation/supplementalcompositetype)

# supplementalCompositeType

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The supplemental composite type.

## Declaration

```swift
let supplementalCompositeType: BarcodeObservation.CompositeType?
```

<a id="Discussion"></a>

## Discussion

Currently, this can only refer to the composite flag of the 2D symbology as part of a GS1 composite symbology.

This attribute only exists when the primary descriptor is the 1D symbology of a GS1 composite symbology, and of which a valid 2D counterpart has been coalesced into.

## See Also

### Getting the composite type

- [BarcodeObservation.CompositeType](compositetype.md): Composite types for barcode requests.
