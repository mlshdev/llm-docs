> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/atindex(_:)](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/atindex(_:))

# atIndex(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the descriptor at the specified (one-based) position in the receiving descriptor list.

## Declaration

```swift
func atIndex(_ index: Int) -> NSAppleEventDescriptor?
```

## Parameters

- `index`: The one-based descriptor list position of the descriptor to return.

<a id="return-value"></a>

## Return Value

The descriptor from the specified position (one-based) in the descriptor list, or `nil` if the specified descriptor cannot be obtained.

## See Also

### Working With List Descriptors

- [insert(\_:at:)](insert%28__at_%29.md): Inserts a descriptor at the specified (one-based) position in the receiving descriptor list, replacing the existing descriptor, if any, at that position.
- [remove(at:)](remove%28at_%29.md): Removes the descriptor at the specified (one-based) position in the receiving descriptor list.

# descriptorAtIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the descriptor at the specified (one-based) position in the receiving descriptor list.

## Declaration

```objectivec
- (NSAppleEventDescriptor *) descriptorAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The one-based descriptor list position of the descriptor to return.

<a id="return-value"></a>

## Return Value

The descriptor from the specified position (one-based) in the descriptor list, or `nil` if the specified descriptor cannot be obtained.

## See Also

### Working With List Descriptors

- [insertDescriptor:atIndex:](insert%28__at_%29.md): Inserts a descriptor at the specified (one-based) position in the receiving descriptor list, replacing the existing descriptor, if any, at that position.
- [removeDescriptorAtIndex:](remove%28at_%29.md): Removes the descriptor at the specified (one-based) position in the receiving descriptor list.
