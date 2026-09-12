> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/keywordfordescriptor(at:)](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/keywordfordescriptor(at:))

# keywordForDescriptor(at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the keyword for the descriptor at the specified (one-based) position in the receiver.

## Declaration

```swift
func keywordForDescriptor(at index: Int) -> AEKeyword
```

## Parameters

- `index`: The one-based descriptor list position of the descriptor to get the keyword for.

<a id="return-value"></a>

## Return Value

The keyword (a four-character code) for the descriptor at the one-based location specified by `anIndex`, or 0 if an error occurs.

## See Also

### Working With Record Descriptors

- [forKeyword(\_:)](forkeyword%28__%29.md): Returns the receiver’s descriptor for the specified keyword.
- [remove(withKeyword:)](remove%28withkeyword_%29.md): Removes the receiver’s descriptor identified by the specified keyword.
- [setDescriptor(\_:forKeyword:)](setdescriptor%28__forkeyword_%29.md): Adds a descriptor, identified by a keyword, to the receiver.

# keywordForDescriptorAtIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the keyword for the descriptor at the specified (one-based) position in the receiver.

## Declaration

```objectivec
- (AEKeyword) keywordForDescriptorAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The one-based descriptor list position of the descriptor to get the keyword for.

<a id="return-value"></a>

## Return Value

The keyword (a four-character code) for the descriptor at the one-based location specified by `anIndex`, or 0 if an error occurs.

## See Also

### Working With Record Descriptors

- [descriptorForKeyword:](forkeyword%28__%29.md): Returns the receiver’s descriptor for the specified keyword.
- [removeDescriptorWithKeyword:](remove%28withkeyword_%29.md): Removes the receiver’s descriptor identified by the specified keyword.
- [setDescriptor:forKeyword:](setdescriptor%28__forkeyword_%29.md): Adds a descriptor, identified by a keyword, to the receiver.
