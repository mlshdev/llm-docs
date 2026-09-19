> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/anycolumnslice/assumingtype(_:)

# assumingType(\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a slice of the underlying typed column.

## Declaration

```swift
func assumingType<T>(_ type: T.Type) -> DiscontiguousColumnSlice<T>
```

## Parameters

- `type`: The type of the slice’s underlying parent column.

<a id="return-value"></a>

## Return Value

A typed column slice.

<a id="discussion"></a>

## Discussion

When using this method, you must provide the correct underlying type.
