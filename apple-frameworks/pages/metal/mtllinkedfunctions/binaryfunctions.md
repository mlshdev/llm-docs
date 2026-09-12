> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllinkedfunctions/binaryfunctions](https://developer.apple.com/documentation/metal/mtllinkedfunctions/binaryfunctions)

# binaryFunctions (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

An array of function objects already compiled to a binary representation to link.

## Declaration

```swift
var binaryFunctions: [any MTLFunction]? { get set }
```

## See Also

### Specifying related functions

- [functions](functions.md): An array of function objects to link to the new function.
- [groups](groups.md): An optional list of groups specifying which functions your shader can call at each call site.
- [privateFunctions](privatefunctions.md): An array of function objects to link to the new function, without exporting the functions publicly.

# binaryFunctions (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

An array of function objects already compiled to a binary representation to link.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<id<MTLFunction>> * binaryFunctions;
```

## See Also

### Specifying related functions

- [functions](functions.md): An array of function objects to link to the new function.
- [groups](groups.md): An optional list of groups specifying which functions your shader can call at each call site.
- [privateFunctions](privatefunctions.md): An array of function objects to link to the new function, without exporting the functions publicly.
