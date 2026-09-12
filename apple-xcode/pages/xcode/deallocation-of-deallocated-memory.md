> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcode/deallocation-of-deallocated-memory](https://developer.apple.com/documentation/xcode/deallocation-of-deallocated-memory)

# Deallocation of deallocated memory

**Kind:** Article

Detects attempts to free deallocated memory.

<a id="Overview"></a>

## Overview

Use this check to detect when you call `free` on deallocated memory, commonly referred to as a *double free* error. Attempting to deallocate memory more than once can result in a crash or other unpredictable behavior. Available in Xcode 7 and later.

<a id="Deallocation-of-freed-memory-in-C"></a>

### Deallocation of freed memory in C

In the following example, the code deallocates the `p_int` variable after the call to free its memory:

```occ
int *pointer = malloc(sizeof(int));
free(pointer);
free(pointer); // Error: free called twice with the same memory address 
```

<a id="Solution"></a>

#### Solution

Ensure that you call the `free` function just once for memory you allocate.

## See Also

### Address Sanitizer

- [Use of deallocated memory](use-of-deallocated-memory.md): Detects the use of deallocated memory.
- [Deallocation of nonallocated memory](deallocation-of-nonallocated-memory.md): Detects attempts to free nonallocated memory.
- [Use of stack memory after function return](use-of-stack-memory-after-function-return.md): Detects when you access stack variable memory after its declaring function returns.
- [Use of out-of-scope stack memory](use-of-out-of-scope-stack-memory.md): Detects access to variables outside of their declared scope.
- [Overflow and underflow of buffers](overflow-and-underflow-of-buffers.md): Detects when you access memory outside of a buffer’s boundaries.
- [Overflow of C++ containers](overflow-of-c-containers.md): Detects when you access a C++ container outside its bounds.
