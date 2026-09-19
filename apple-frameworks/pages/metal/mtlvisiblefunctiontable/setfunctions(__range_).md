> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlvisiblefunctiontable/setfunctions(_:range:)

# setFunctions(\_:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS

Sets a range of table entries to point to an array of callable functions.

## Declaration

```swift
func setFunctions(_ functions: [(any MTLFunctionHandle)?], range: Range<Int>)
```

## Parameters

- `functions`: An array of function handles for the functions to be called.
- `range`: A range of indices to change in the table.

## See Also

### Setting a table entry

- [setFunction(\_:index:)](setfunction%28__index_%29.md): Sets a table entry to point to a callable function.
