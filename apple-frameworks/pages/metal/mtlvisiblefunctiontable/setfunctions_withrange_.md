> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvisiblefunctiontable/setfunctions:withrange:](https://developer.apple.com/documentation/metal/mtlvisiblefunctiontable/setfunctions:withrange:)

# setFunctions:withRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Sets a range of table entries to point to an array of callable functions.

## Declaration

```objectivec
- (void) setFunctions:(id<MTLFunctionHandle> const[]) functions withRange:(NSRange) range;
```

## Parameters

- `functions`: An array of function handles for the functions to be called.
- `range`: A range of indices to change in the table.

## See Also

### Setting a table entry

- [setFunction:atIndex:](setfunction%28__index_%29.md): Sets a table entry to point to a callable function.
