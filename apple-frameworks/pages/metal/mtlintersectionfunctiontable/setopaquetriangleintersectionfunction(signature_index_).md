> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlintersectionfunctiontable/setopaquetriangleintersectionfunction(signature:index:)](https://developer.apple.com/documentation/metal/mtlintersectionfunctiontable/setopaquetriangleintersectionfunction(signature:index:))

# setOpaqueTriangleIntersectionFunction(signature:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Sets an entry in the intersection table to point to a system-defined opaque triangle intersection function.

## Declaration

```swift
func setOpaqueTriangleIntersectionFunction(signature: MTLIntersectionFunctionSignature, index: Int)
```

## Parameters

- `signature`: The signature of the function.
- `index`: The index in the table to change.

## See Also

### Specifying opaque triangle intersection testing

- [setOpaqueTriangleIntersectionFunction(signature:range:)](setopaquetriangleintersectionfunction%28signature_range_%29.md): Sets a range of entries in the intersection table to point to a system-defined opaque triangle intersection function.

# setOpaqueTriangleIntersectionFunctionWithSignature:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Sets an entry in the intersection table to point to a system-defined opaque triangle intersection function.

## Declaration

```objectivec
- (void) setOpaqueTriangleIntersectionFunctionWithSignature:(MTLIntersectionFunctionSignature) signature atIndex:(NSUInteger) index;
```

## Parameters

- `signature`: The signature of the function.
- `index`: The index in the table to change.

## See Also

### Specifying opaque triangle intersection testing

- [setOpaqueTriangleIntersectionFunctionWithSignature:withRange:](setopaquetriangleintersectionfunction%28signature_range_%29.md): Sets a range of entries in the intersection table to point to a system-defined opaque triangle intersection function.
