> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesymbolicfactoroptions/free](https://developer.apple.com/documentation/accelerate/sparsesymbolicfactoroptions/free)

# free (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The function for freeing allocated storage.

## Declaration

```swift
var free: (UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `pointer`: A pointer to memory to free.

<a id="Discussion"></a>

## Discussion

If this function pointer is `nil`, the system uses ```free``()```.

## See Also

### Inspecting Symbolic Factor Options

- [control](control.md): The flags that control the computation.
- [SparseControl_t](../sparsecontrol_t.md): Options that control the computation.
- [orderMethod](ordermethod.md): The ordering algorithm.
- [order](order.md): The user-supplied array for ordering.
- [SparseOrder_t](../sparseorder_t.md): Options that define which ordering algorithm to use.
- [ignoreRowsAndColumns](ignorerowsandcolumns.md): An array that contains row and column indices to ignore.
- [malloc](malloc.md): The function for allocating any necessary storage.
- [reportError](reporterror.md): The function for reporting parameter errors.

# free (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The function for freeing allocated storage.

## Declaration

```objectivec
void (*)(void *) free;
```

## Parameters

- `pointer`: A pointer to memory to free.

<a id="Discussion"></a>

## Discussion

If this function pointer is `nil`, the system uses ```free``()```.

## See Also

### Inspecting Symbolic Factor Options

- [control](control.md): The flags that control the computation.
- [SparseControl_t](../sparsecontrol_t.md): Options that control the computation.
- [orderMethod](ordermethod.md): The ordering algorithm.
- [order](order.md): The user-supplied array for ordering.
- [SparseOrder_t](../sparseorder_t.md): Options that define which ordering algorithm to use.
- [ignoreRowsAndColumns](ignorerowsandcolumns.md): An array that contains row and column indices to ignore.
- [malloc](malloc.md): The function for allocating any necessary storage.
- [reportError](reporterror.md): The function for reporting parameter errors.
