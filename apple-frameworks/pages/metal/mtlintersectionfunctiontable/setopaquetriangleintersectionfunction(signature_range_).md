> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlintersectionfunctiontable/setopaquetriangleintersectionfunction(signature:range:)](https://developer.apple.com/documentation/metal/mtlintersectionfunctiontable/setopaquetriangleintersectionfunction(signature:range:))

# setOpaqueTriangleIntersectionFunction(signature:range:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Sets a range of entries in the intersection table to point to a system-defined opaque triangle intersection function.

## Declaration

```swift
func setOpaqueTriangleIntersectionFunction(signature: MTLIntersectionFunctionSignature, range: NSRange)
```

## Parameters

- `signature`: The signature of the function.
- `range`: A range of indices to change in the table.

## See Also

### Specifying opaque triangle intersection testing

- [setOpaqueTriangleIntersectionFunction(signature:index:)](setopaquetriangleintersectionfunction%28signature_index_%29.md): Sets an entry in the intersection table to point to a system-defined opaque triangle intersection function.

# setOpaqueTriangleIntersectionFunctionWithSignature:withRange: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Sets a range of entries in the intersection table to point to a system-defined opaque triangle intersection function.

## Declaration

```objectivec
- (void) setOpaqueTriangleIntersectionFunctionWithSignature:(MTLIntersectionFunctionSignature) signature withRange:(NSRange) range;
```

## Parameters

- `signature`: The signature of the function.
- `range`: A range of indices to change in the table.

## See Also

### Specifying opaque triangle intersection testing

- [setOpaqueTriangleIntersectionFunctionWithSignature:atIndex:](setopaquetriangleintersectionfunction%28signature_index_%29.md): Sets an entry in the intersection table to point to a system-defined opaque triangle intersection function.
