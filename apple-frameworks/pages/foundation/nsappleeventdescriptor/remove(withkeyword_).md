> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/remove(withkeyword:)](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/remove(withkeyword:))

# remove(withKeyword:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Removes the receiver’s descriptor identified by the specified keyword.

## Declaration

```swift
func remove(withKeyword keyword: AEKeyword)
```

## Parameters

- `keyword`: A keyword (a four-character code) that identifies the descriptor to remove.

<a id="Discussion"></a>

## Discussion

The receiver must be an Apple event or Apple event record. Currently provides no indication if an error occurs.

## See Also

### Working With Record Descriptors

- [forKeyword(\_:)](forkeyword%28__%29.md): Returns the receiver’s descriptor for the specified keyword.
- [keywordForDescriptor(at:)](keywordfordescriptor%28at_%29.md): Returns the keyword for the descriptor at the specified (one-based) position in the receiver.
- [setDescriptor(\_:forKeyword:)](setdescriptor%28__forkeyword_%29.md): Adds a descriptor, identified by a keyword, to the receiver.

# removeDescriptorWithKeyword: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Removes the receiver’s descriptor identified by the specified keyword.

## Declaration

```objectivec
- (void) removeDescriptorWithKeyword:(AEKeyword) keyword;
```

## Parameters

- `keyword`: A keyword (a four-character code) that identifies the descriptor to remove.

<a id="Discussion"></a>

## Discussion

The receiver must be an Apple event or Apple event record. Currently provides no indication if an error occurs.

## See Also

### Working With Record Descriptors

- [descriptorForKeyword:](forkeyword%28__%29.md): Returns the receiver’s descriptor for the specified keyword.
- [keywordForDescriptorAtIndex:](keywordfordescriptor%28at_%29.md): Returns the keyword for the descriptor at the specified (one-based) position in the receiver.
- [setDescriptor:forKeyword:](setdescriptor%28__forkeyword_%29.md): Adds a descriptor, identified by a keyword, to the receiver.
