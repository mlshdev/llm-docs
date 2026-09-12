> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbuffer/contents()](https://developer.apple.com/documentation/metal/mtlbuffer/contents())

# contents() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Gets the system address of the buffer’s storage allocation.

## Declaration

```swift
func contents() -> UnsafeMutableRawPointer
```

<a id="return-value"></a>

## Return Value

A pointer to the shared copy of the buffer data, or `NULL` for buffers allocated with a private resource storage mode ([MTLStorageMode.private](../mtlstoragemode/private.md)).

<a id="discussion"></a>

## Discussion

Private resources aren’t CPU-accessible.

# contents (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Gets the system address of the buffer’s storage allocation.

## Declaration

```objectivec
- (void *) contents;
```

<a id="return-value"></a>

## Return Value

A pointer to the shared copy of the buffer data, or `NULL` for buffers allocated with a private resource storage mode ([MTLStorageModePrivate](../mtlstoragemode/private.md)).

<a id="discussion"></a>

## Discussion

Private resources aren’t CPU-accessible.
