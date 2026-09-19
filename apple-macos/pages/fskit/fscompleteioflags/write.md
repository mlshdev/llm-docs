> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fscompleteioflags/write

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
