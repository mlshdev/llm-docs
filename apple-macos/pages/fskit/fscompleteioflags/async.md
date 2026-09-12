> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscompleteioflags/async](https://developer.apple.com/documentation/fskit/fscompleteioflags/async)

# async (Swift)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

A flag that requests that the file system module flush metadata I/O asynchronously.

## Declaration

```swift
static var async: FSCompleteIOFlags { get }
```

## See Also

### Declaring I/O completion behaviors

- [read](read.md): A flag that describes a read operation.
- [write](write.md): A flag that describes a write operation.

# FSCompleteIOFlagsAsync (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

A flag that requests that the file system module flush metadata I/O asynchronously.

## Declaration

```objectivec
FSCompleteIOFlagsAsync
```

## See Also

### Declaring I/O completion behaviors

- [FSCompleteIOFlagsRead](read.md): A flag that describes a read operation.
- [FSCompleteIOFlagsWrite](write.md): A flag that describes a write operation.
