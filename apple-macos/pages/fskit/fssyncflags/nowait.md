> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fssyncflags/nowait](https://developer.apple.com/documentation/fskit/fssyncflags/nowait)

# FSSyncFlags.noWait (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 15.4+

A flag for synchronized I/O that starts I/O but doesn’t wait for it.

## Declaration

```swift
case noWait
```

## See Also

### Declaring synchronization behaviors

- [FSSyncFlags.wait](wait.md): A flag for synchronized I/O with file-integrity completion.
- [FSSyncFlags.dWait](dwait.md): A flag for synchronized I/O with data-integrity completion.

# FSSyncFlagsNoWait (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

A flag for synchronized I/O that starts I/O but doesn’t wait for it.

## Declaration

```objectivec
FSSyncFlagsNoWait
```

## See Also

### Declaring synchronization behaviors

- [FSSyncFlagsWait](wait.md): A flag for synchronized I/O with file-integrity completion.
- [FSSyncFlagsDWait](dwait.md): A flag for synchronized I/O with data-integrity completion.
