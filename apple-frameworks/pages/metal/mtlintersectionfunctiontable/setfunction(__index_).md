> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlintersectionfunctiontable/setfunction(_:index:)](https://developer.apple.com/documentation/metal/mtlintersectionfunctiontable/setfunction(_:index:))

# setFunction(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Sets an entry in the table.

## Declaration

```swift
func setFunction(_ function: (any MTLFunctionHandle)?, index: Int)
```

## Parameters

- `function`: A function handle for the intersection function.
- `index`: The index of the table entry to change.

## See Also

### Setting a table entry

- [setFunctions(\_:range:)](setfunctions%28__range_%29.md): Sets a range of entries in the table.

# setFunction:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Sets an entry in the table.

## Declaration

```objectivec
- (void) setFunction:(id<MTLFunctionHandle>) function atIndex:(NSUInteger) index;
```

## Parameters

- `function`: A function handle for the intersection function.
- `index`: The index of the table entry to change.

## See Also

### Setting a table entry

- [setFunctions:withRange:](setfunctions_withrange_.md): Sets a range of entries in the table.
