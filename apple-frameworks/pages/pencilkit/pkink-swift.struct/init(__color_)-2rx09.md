> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pencilkit/pkink-swift.struct/init(_:color:)-2rx09

# init(\_:color:)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Creates a new ink, specifying its type and color.

## Declaration

```swift
init(_ inkType: PKInk.InkType, color: UIColor = UIColor.black)
```

## Parameters

- `inkType`: The type of ink represented by one of the available [PKInkingTool.InkType](../pkinkingtool-swift.struct/inktype-swift.enum.md) enumerations.
- `color`: The color of the ink; the default is black.

## See Also

### Creating an ink object

- [init(\_:color:)](init%28__color_%29-7w46l.md): Creates a new ink, specifying its type and color.
- [PKInk.InkType](inktype-swift.typealias.md): A type alias referring to the ink type of an inking tool.
