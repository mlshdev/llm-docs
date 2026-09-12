> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscandidatelisttouchbaritem/iscandidatelistvisible](https://developer.apple.com/documentation/appkit/nscandidatelisttouchbaritem/iscandidatelistvisible)

# isCandidateListVisible (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A Boolean value that represents the visibility of this item’s candidate list.

## Declaration

```swift
var isCandidateListVisible: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), then the candidate list is currently visible, [false](https://developer.apple.com/documentation/swift/false) otherwise.

When [isCollapsed](iscollapsed.md) is [false](https://developer.apple.com/documentation/swift/false), and the item is not obscured by UI then this property is true.

This property is KVO compliant, and you should supply a candidate list when its value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing candidate list visibility

- [update(withInsertionPointVisibility:)](update%28withinsertionpointvisibility_%29.md): Updates the candidate list visibility configuration based on the client’s insertion point state.

# candidateListVisible (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A Boolean value that represents the visibility of this item’s candidate list.

## Declaration

```objectivec
@property (readonly, getter=isCandidateListVisible) BOOL candidateListVisible;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), then the candidate list is currently visible, [false](https://developer.apple.com/documentation/swift/false) otherwise.

When [collapsed](iscollapsed.md) is [false](https://developer.apple.com/documentation/swift/false), and the item is not obscured by UI then this property is true.

This property is KVO compliant, and you should supply a candidate list when its value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing candidate list visibility

- [updateWithInsertionPointVisibility:](update%28withinsertionpointvisibility_%29.md): Updates the candidate list visibility configuration based on the client’s insertion point state.
