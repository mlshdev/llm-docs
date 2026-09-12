> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllinkedfunctions/privatefunctions](https://developer.apple.com/documentation/metal/mtllinkedfunctions/privatefunctions)

# privateFunctions (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An array of function objects to link to the new function, without exporting the functions publicly.

## Declaration

```swift
var privateFunctions: [any MTLFunction]? { get set }
```

<a id="discussion"></a>

## Discussion

The pipeline doesn’t export these functions as [MTLFunctionHandle](../mtlfunctionhandle.md) instances because the Metal device doesn’t need to support function pointers to link private functions.

## See Also

### Specifying related functions

- [functions](functions.md): An array of function objects to link to the new function.
- [binaryFunctions](binaryfunctions.md): An array of function objects already compiled to a binary representation to link.
- [groups](groups.md): An optional list of groups specifying which functions your shader can call at each call site.

# privateFunctions (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An array of function objects to link to the new function, without exporting the functions publicly.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<id<MTLFunction>> * privateFunctions;
```

<a id="discussion"></a>

## Discussion

The pipeline doesn’t export these functions as [MTLFunctionHandle](../mtlfunctionhandle.md) instances because the Metal device doesn’t need to support function pointers to link private functions.

## See Also

### Specifying related functions

- [functions](functions.md): An array of function objects to link to the new function.
- [binaryFunctions](binaryfunctions.md): An array of function objects already compiled to a binary representation to link.
- [groups](groups.md): An optional list of groups specifying which functions your shader can call at each call site.
