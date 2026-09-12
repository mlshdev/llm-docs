> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/setdescriptor(_:forkeyword:)](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/setdescriptor(_:forkeyword:))

# setDescriptor(\_:forKeyword:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Adds a descriptor, identified by a keyword, to the receiver.

## Declaration

```swift
func setDescriptor(_ descriptor: NSAppleEventDescriptor, forKeyword keyword: AEKeyword)
```

## Parameters

- `descriptor`: The descriptor to add to the receiver.
- `keyword`: A keyword (a four-character code) that identifies the descriptor to add. If a descriptor with that keyword already exists in the receiver, it is replaced.

<a id="Discussion"></a>

## Discussion

The receiver must be an Apple event or Apple event record. Currently provides no indication if an error occurs.

## See Also

### Working With Record Descriptors

- [forKeyword(\_:)](forkeyword%28__%29.md): Returns the receiver’s descriptor for the specified keyword.
- [keywordForDescriptor(at:)](keywordfordescriptor%28at_%29.md): Returns the keyword for the descriptor at the specified (one-based) position in the receiver.
- [remove(withKeyword:)](remove%28withkeyword_%29.md): Removes the receiver’s descriptor identified by the specified keyword.

# setDescriptor:forKeyword: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Adds a descriptor, identified by a keyword, to the receiver.

## Declaration

```objectivec
- (void) setDescriptor:(NSAppleEventDescriptor *) descriptor forKeyword:(AEKeyword) keyword;
```

## Parameters

- `descriptor`: The descriptor to add to the receiver.
- `keyword`: A keyword (a four-character code) that identifies the descriptor to add. If a descriptor with that keyword already exists in the receiver, it is replaced.

<a id="Discussion"></a>

## Discussion

The receiver must be an Apple event or Apple event record. Currently provides no indication if an error occurs.

## See Also

### Working With Record Descriptors

- [descriptorForKeyword:](forkeyword%28__%29.md): Returns the receiver’s descriptor for the specified keyword.
- [keywordForDescriptorAtIndex:](keywordfordescriptor%28at_%29.md): Returns the keyword for the descriptor at the specified (one-based) position in the receiver.
- [removeDescriptorWithKeyword:](remove%28withkeyword_%29.md): Removes the receiver’s descriptor identified by the specified keyword.
