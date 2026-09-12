> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlintersectionfunctiontable/setfunctions:withrange:](https://developer.apple.com/documentation/metal/mtlintersectionfunctiontable/setfunctions:withrange:)

# setFunctions:withRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Sets a range of entries in the table.

## Declaration

```objectivec
- (void) setFunctions:(id<MTLFunctionHandle> const[]) functions withRange:(NSRange) range;
```

## Parameters

- `functions`: A pointer to an array of function handles.
- `range`: A range of indices to change in the table.

## See Also

### Setting a table entry

- [setFunction:atIndex:](setfunction%28__index_%29.md): Sets an entry in the table.
