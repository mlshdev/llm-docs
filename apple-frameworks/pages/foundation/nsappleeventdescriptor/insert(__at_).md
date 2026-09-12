> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/insert(_:at:)](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/insert(_:at:))

# insert(\_:at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Inserts a descriptor at the specified (one-based) position in the receiving descriptor list, replacing the existing descriptor, if any, at that position.

## Declaration

```swift
func insert(_ descriptor: NSAppleEventDescriptor, at index: Int)
```

## Parameters

- `descriptor`: The descriptor to insert in the receiver. Specifying an index of 0 or count + 1 causes appending to the end of the list.
- `index`: The one-based descriptor list position at which to insert the descriptor.

<a id="Discussion"></a>

## Discussion

Because it actually replaces the descriptor, if any, at the specified position, this method might better be called `replaceDescriptor:atIndex:`. The receiver must be a list descriptor. The indices are one-based. Currently provides no indication if an error occurs.

## See Also

### Working With List Descriptors

- [atIndex(\_:)](atindex%28__%29.md): Returns the descriptor at the specified (one-based) position in the receiving descriptor list.
- [remove(at:)](remove%28at_%29.md): Removes the descriptor at the specified (one-based) position in the receiving descriptor list.

# insertDescriptor:atIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Inserts a descriptor at the specified (one-based) position in the receiving descriptor list, replacing the existing descriptor, if any, at that position.

## Declaration

```objectivec
- (void) insertDescriptor:(NSAppleEventDescriptor *) descriptor atIndex:(NSInteger) index;
```

## Parameters

- `descriptor`: The descriptor to insert in the receiver. Specifying an index of 0 or count + 1 causes appending to the end of the list.
- `index`: The one-based descriptor list position at which to insert the descriptor.

<a id="Discussion"></a>

## Discussion

Because it actually replaces the descriptor, if any, at the specified position, this method might better be called `replaceDescriptor:atIndex:`. The receiver must be a list descriptor. The indices are one-based. Currently provides no indication if an error occurs.

## See Also

### Working With List Descriptors

- [descriptorAtIndex:](atindex%28__%29.md): Returns the descriptor at the specified (one-based) position in the receiving descriptor list.
- [removeDescriptorAtIndex:](remove%28at_%29.md): Removes the descriptor at the specified (one-based) position in the receiving descriptor list.
