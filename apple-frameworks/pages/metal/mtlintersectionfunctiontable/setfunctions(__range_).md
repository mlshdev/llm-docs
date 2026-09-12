> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlintersectionfunctiontable/setfunctions(_:range:)](https://developer.apple.com/documentation/metal/mtlintersectionfunctiontable/setfunctions(_:range:))

# setFunctions(\_:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS

Sets a range of entries in the table.

## Declaration

```swift
func setFunctions(_ functions: [(any MTLFunctionHandle)?], range: Range<Int>)
```

## Parameters

- `functions`: The new entries for the table.
- `range`: A range of indices to change in the table.

## See Also

### Setting a table entry

- [setFunction(\_:index:)](setfunction%28__index_%29.md): Sets an entry in the table.
