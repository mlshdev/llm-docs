> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscompleteioflags/write](https://developer.apple.com/documentation/fskit/fscompleteioflags/write)

# write (Swift)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

A flag that describes a write operation.

## Declaration

```swift
static var write: FSCompleteIOFlags { get }
```

## See Also

### Declaring I/O completion behaviors

- [read](read.md): A flag that describes a read operation.
- [async](async.md): A flag that requests that the file system module flush metadata I/O asynchronously.

# FSCompleteIOFlagsWrite (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

A flag that describes a write operation.

## Declaration

```objectivec
FSCompleteIOFlagsWrite
```

## See Also

### Declaring I/O completion behaviors

- [FSCompleteIOFlagsRead](read.md): A flag that describes a read operation.
- [FSCompleteIOFlagsAsync](async.md): A flag that requests that the file system module flush metadata I/O asynchronously.
