> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscompleteioflags/read](https://developer.apple.com/documentation/fskit/fscompleteioflags/read)

# read (Swift)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

A flag that describes a read operation.

## Declaration

```swift
static var read: FSCompleteIOFlags { get }
```

## See Also

### Declaring I/O completion behaviors

- [write](write.md): A flag that describes a write operation.
- [async](async.md): A flag that requests that the file system module flush metadata I/O asynchronously.

# FSCompleteIOFlagsRead (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

A flag that describes a read operation.

## Declaration

```objectivec
FSCompleteIOFlagsRead
```

## See Also

### Declaring I/O completion behaviors

- [FSCompleteIOFlagsWrite](write.md): A flag that describes a write operation.
- [FSCompleteIOFlagsAsync](async.md): A flag that requests that the file system module flush metadata I/O asynchronously.
