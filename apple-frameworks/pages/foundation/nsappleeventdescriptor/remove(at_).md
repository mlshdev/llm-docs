> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/remove(at:)](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/remove(at:))

# remove(at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Removes the descriptor at the specified (one-based) position in the receiving descriptor list.

## Declaration

```swift
func remove(at index: Int)
```

## Parameters

- `index`: The one-based position of the descriptor to remove.

<a id="Discussion"></a>

## Discussion

The receiver must be a list descriptor. The  indices are one-based. Currently provides no indication if an error occurs.

## See Also

### Working With List Descriptors

- [atIndex(\_:)](atindex%28__%29.md): Returns the descriptor at the specified (one-based) position in the receiving descriptor list.
- [insert(\_:at:)](insert%28__at_%29.md): Inserts a descriptor at the specified (one-based) position in the receiving descriptor list, replacing the existing descriptor, if any, at that position.

# removeDescriptorAtIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Removes the descriptor at the specified (one-based) position in the receiving descriptor list.

## Declaration

```objectivec
- (void) removeDescriptorAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The one-based position of the descriptor to remove.

<a id="Discussion"></a>

## Discussion

The receiver must be a list descriptor. The  indices are one-based. Currently provides no indication if an error occurs.

## See Also

### Working With List Descriptors

- [descriptorAtIndex:](atindex%28__%29.md): Returns the descriptor at the specified (one-based) position in the receiving descriptor list.
- [insertDescriptor:atIndex:](insert%28__at_%29.md): Inserts a descriptor at the specified (one-based) position in the receiving descriptor list, replacing the existing descriptor, if any, at that position.
