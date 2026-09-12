> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseopaquepreconditioner_double/mem](https://developer.apple.com/documentation/accelerate/sparseopaquepreconditioner_double/mem)

# mem (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The unaltered memory pointer that passes as the first parameter of the apply function.

## Declaration

```swift
var mem: UnsafeMutableRawPointer
```

## See Also

### Inspecting Preconditioner Properties

- [apply](apply.md): A function that calculates *Y = PX*, where *P* is the preconditioner.
- [type](type.md): The preconditioner type.

# mem (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The unaltered memory pointer that passes as the first parameter of the apply function.

## Declaration

```objectivec
void * mem;
```

## See Also

### Inspecting Preconditioner Properties

- [apply](apply.md): A function that calculates *Y = PX*, where *P* is the preconditioner.
- [type](type.md): The preconditioner type.
