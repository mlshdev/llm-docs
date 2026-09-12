> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesymbolicfactoroptions/reporterror](https://developer.apple.com/documentation/accelerate/sparsesymbolicfactoroptions/reporterror)

# reportError (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The function for reporting parameter errors.

## Declaration

```swift
var reportError: ((UnsafePointer<CChar>) -> Void)?
```

## Mentioned In

- [Solving systems using direct methods](../solving-systems-using-direct-methods.md)

<a id="Discussion"></a>

## Discussion

If this value is `nil`, the system reports errors using [os_log_error](../../os/os_log_error.md) and then `__builtin_trap()`.

## See Also

### Inspecting Symbolic Factor Options

- [control](control.md): The flags that control the computation.
- [SparseControl_t](../sparsecontrol_t.md): Options that control the computation.
- [orderMethod](ordermethod.md): The ordering algorithm.
- [order](order.md): The user-supplied array for ordering.
- [SparseOrder_t](../sparseorder_t.md): Options that define which ordering algorithm to use.
- [ignoreRowsAndColumns](ignorerowsandcolumns.md): An array that contains row and column indices to ignore.
- [malloc](malloc.md): The function for allocating any necessary storage.
- [free](free.md): The function for freeing allocated storage.

# reportError (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The function for reporting parameter errors.

## Declaration

```objectivec
void (*)(const char *) reportError;
```

## Mentioned In

- [Solving systems using direct methods](../solving-systems-using-direct-methods.md)

<a id="Discussion"></a>

## Discussion

If this value is `nil`, the system reports errors using [os_log_error](../../os/os_log_error.md) and then `__builtin_trap()`.

## See Also

### Inspecting Symbolic Factor Options

- [control](control.md): The flags that control the computation.
- [SparseControl_t](../sparsecontrol_t.md): Options that control the computation.
- [orderMethod](ordermethod.md): The ordering algorithm.
- [order](order.md): The user-supplied array for ordering.
- [SparseOrder_t](../sparseorder_t.md): Options that define which ordering algorithm to use.
- [ignoreRowsAndColumns](ignorerowsandcolumns.md): An array that contains row and column indices to ignore.
- [malloc](malloc.md): The function for allocating any necessary storage.
- [free](free.md): The function for freeing allocated storage.
