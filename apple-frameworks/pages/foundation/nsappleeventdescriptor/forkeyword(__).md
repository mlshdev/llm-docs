> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/forkeyword(_:)](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/forkeyword(_:))

# forKeyword(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the receiver’s descriptor for the specified keyword.

## Declaration

```swift
func forKeyword(_ keyword: AEKeyword) -> NSAppleEventDescriptor?
```

## Parameters

- `keyword`: A keyword (a four-character code) that identifies the descriptor to obtain.

<a id="return-value"></a>

## Return Value

A descriptor for the specified keyword, or `nil` if an error occurs.

## See Also

### Working With Record Descriptors

- [keywordForDescriptor(at:)](keywordfordescriptor%28at_%29.md): Returns the keyword for the descriptor at the specified (one-based) position in the receiver.
- [remove(withKeyword:)](remove%28withkeyword_%29.md): Removes the receiver’s descriptor identified by the specified keyword.
- [setDescriptor(\_:forKeyword:)](setdescriptor%28__forkeyword_%29.md): Adds a descriptor, identified by a keyword, to the receiver.

# descriptorForKeyword: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the receiver’s descriptor for the specified keyword.

## Declaration

```objectivec
- (NSAppleEventDescriptor *) descriptorForKeyword:(AEKeyword) keyword;
```

## Parameters

- `keyword`: A keyword (a four-character code) that identifies the descriptor to obtain.

<a id="return-value"></a>

## Return Value

A descriptor for the specified keyword, or `nil` if an error occurs.

## See Also

### Working With Record Descriptors

- [keywordForDescriptorAtIndex:](keywordfordescriptor%28at_%29.md): Returns the keyword for the descriptor at the specified (one-based) position in the receiver.
- [removeDescriptorWithKeyword:](remove%28withkeyword_%29.md): Removes the receiver’s descriptor identified by the specified keyword.
- [setDescriptor:forKeyword:](setdescriptor%28__forkeyword_%29.md): Adds a descriptor, identified by a keyword, to the receiver.
