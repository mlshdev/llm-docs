> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsfreespace/populate(bytes:)](https://developer.apple.com/documentation/fskit/fsfreespace/populate(bytes:))

# populate(bytes:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Populates this instance with the given free space value and atomically assigns a sequence number.

## Declaration

```swift
func populate(bytes freeSpaceBytes: UInt64)
```

<a id="discussion"></a>

## Discussion

> **Important**

> FSKit uses internal sequencing technology within this method to determine the most up-to-date free space of the volume. To ensure correctness, call this method within an isolation context covering the volume’s free space.

# populateWithBytes: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Populates this instance with the given free space value and atomically assigns a sequence number.

## Declaration

```objectivec
- (void) populateWithBytes:(uint64_t) freeSpaceBytes;
```

<a id="discussion"></a>

## Discussion

> **Important**

> FSKit uses internal sequencing technology within this method to determine the most up-to-date free space of the volume. To ensure correctness, call this method within an isolation context covering the volume’s free space.
