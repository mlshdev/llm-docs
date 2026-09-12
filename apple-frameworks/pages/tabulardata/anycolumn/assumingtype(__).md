> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/anycolumn/assumingtype(_:)](https://developer.apple.com/documentation/tabulardata/anycolumn/assumingtype(_:))

# assumingType(\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the underlying typed column.

## Declaration

```swift
func assumingType<T>(_ type: T.Type) -> Column<T>
```

## Parameters

- `type`: The type of the underlying column.

<a id="return-value"></a>

## Return Value

A typed column.

<a id="discussion"></a>

## Discussion

When using this method, you must provide the correct underlying type.
