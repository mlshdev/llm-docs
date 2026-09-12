> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesymbolicfactoroptions/init(control:ordermethod:order:ignorerowsandcolumns:malloc:free:reporterror:)](https://developer.apple.com/documentation/accelerate/sparsesymbolicfactoroptions/init(control:ordermethod:order:ignorerowsandcolumns:malloc:free:reporterror:))

# init(control:orderMethod:order:ignoreRowsAndColumns:malloc:free:reportError:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new structure that contains options that affect the symbolic stage of a sparse factorization.

## Declaration

```swift
init(control: SparseControl_t, orderMethod: SparseOrder_t, order: UnsafeMutablePointer<Int32>?, ignoreRowsAndColumns: UnsafeMutablePointer<Int32>?, malloc: (Int) -> UnsafeMutableRawPointer?, free: (UnsafeMutableRawPointer?) -> Void, reportError: ((UnsafePointer<CChar>) -> Void)?)
```

## Parameters

- `control`: The flags that control the computation.
- `orderMethod`: The ordering algorithm.
- `order`: The user-supplied array for ordering.
- `ignoreRowsAndColumns`: An array that contains row and column indices to ignore.
- `malloc`: The function for allocating any necessary storage.
- `free`: The function for freeing allocated storage.
- `reportError`: The function for reporting parameter errors.
