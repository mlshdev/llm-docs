> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesymbolicfactoroptions/malloc](https://developer.apple.com/documentation/accelerate/sparsesymbolicfactoroptions/malloc)

# malloc (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The function for allocating any necessary storage.

## Declaration

```swift
var malloc: (Int) -> UnsafeMutableRawPointer?
```

## Parameters

- `size`: The size of space to allocate in bytes.

<a id="return-value"></a>

## Return Value

A pointer to newly allocated memory, or `nil` if allocation fails.

<a id="Discussion"></a>

## Discussion

The system frees memory through the [free](free.md) callback. If this function pointer is `nil`, the system uses `malloc()`.

## See Also

### Inspecting Symbolic Factor Options

- [control](control.md): The flags that control the computation.
- [SparseControl_t](../sparsecontrol_t.md): Options that control the computation.
- [orderMethod](ordermethod.md): The ordering algorithm.
- [order](order.md): The user-supplied array for ordering.
- [SparseOrder_t](../sparseorder_t.md): Options that define which ordering algorithm to use.
- [ignoreRowsAndColumns](ignorerowsandcolumns.md): An array that contains row and column indices to ignore.
- [free](free.md): The function for freeing allocated storage.
- [reportError](reporterror.md): The function for reporting parameter errors.

# malloc (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The function for allocating any necessary storage.

## Declaration

```objectivec
void *(*)(unsigned long) malloc;
```

## Parameters

- `size`: The size of space to allocate in bytes.

<a id="return-value"></a>

## Return Value

A pointer to newly allocated memory, or `nil` if allocation fails.

<a id="Discussion"></a>

## Discussion

The system frees memory through the [free](free.md) callback. If this function pointer is `nil`, the system uses `malloc()`.

## See Also

### Inspecting Symbolic Factor Options

- [control](control.md): The flags that control the computation.
- [SparseControl_t](../sparsecontrol_t.md): Options that control the computation.
- [orderMethod](ordermethod.md): The ordering algorithm.
- [order](order.md): The user-supplied array for ordering.
- [SparseOrder_t](../sparseorder_t.md): Options that define which ordering algorithm to use.
- [ignoreRowsAndColumns](ignorerowsandcolumns.md): An array that contains row and column indices to ignore.
- [free](free.md): The function for freeing allocated storage.
- [reportError](reporterror.md): The function for reporting parameter errors.
