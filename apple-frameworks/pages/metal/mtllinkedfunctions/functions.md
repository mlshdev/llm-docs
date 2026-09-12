> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllinkedfunctions/functions](https://developer.apple.com/documentation/metal/mtllinkedfunctions/functions)

# functions (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An array of function objects to link to the new function.

## Declaration

```swift
var functions: [any MTLFunction]? { get set }
```

## See Also

### Specifying related functions

- [binaryFunctions](binaryfunctions.md): An array of function objects already compiled to a binary representation to link.
- [groups](groups.md): An optional list of groups specifying which functions your shader can call at each call site.
- [privateFunctions](privatefunctions.md): An array of function objects to link to the new function, without exporting the functions publicly.

# functions (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An array of function objects to link to the new function.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<id<MTLFunction>> * functions;
```

## See Also

### Specifying related functions

- [binaryFunctions](binaryfunctions.md): An array of function objects already compiled to a binary representation to link.
- [groups](groups.md): An optional list of groups specifying which functions your shader can call at each call site.
- [privateFunctions](privatefunctions.md): An array of function objects to link to the new function, without exporting the functions publicly.
