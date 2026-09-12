> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/sort(_:sortorder:)-wx0w](https://developer.apple.com/documentation/accelerate/vdsp/sort(_:sortorder:)-wx0w)

# sort(\_:sortOrder:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Sorts a vector of single-precision values in-place.

## Declaration

```swift
static func sort<V>(_ vector: inout V, sortOrder: vDSP.SortOrder) where V : AccelerateMutableBuffer, V.Element == Float
```

## Parameters

- `vector`: The array to sort.
- `sortOrder`: The sort order.

<a id="Discussion"></a>

## Discussion

The single- and double-precision [sort(\_:sortOrder:)](sort%28__sortorder_%29-wx0w.md) functions sort an array in place.

The following code sorts an array in ascending order, followed by decending order:

```swift
var values: [Float] = [4.0, 8.0, 3.0, 0.0, 7.0, 5.0, 9.0, 2.0, 6.0, 1.0]

vDSP.sort(&values,
          sortOrder: .ascending)

// Prints "[0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0]".
print(values)

vDSP.sort(&values,
          sortOrder: .descending)

// Prints "[9.0, 8.0, 7.0, 6.0, 5.0, 4.0, 3.0, 2.0, 1.0, 0.0]".
print(values)
```

## See Also

### Vector sorting functions

- [sort(\_:sortOrder:)](sort%28__sortorder_%29-418g0.md): Sorts a vector of double-precision values in-place.
- [vDSP.SortOrder](sortorder.md): Constants that specify the sorting order.
