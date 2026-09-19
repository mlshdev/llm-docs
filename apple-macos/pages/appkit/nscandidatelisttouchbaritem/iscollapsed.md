> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nscandidatelisttouchbaritem/iscollapsed

# isCollapsed (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A Boolean value that controls the visibility of the candidate list.

## Declaration

```swift
var isCollapsed: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), the candidate list is collapsed and not visible to the user.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Handling collapsible behavior

- [allowsCollapsing](allowscollapsing.md): A Boolean value that specifies whether the item can be collapsed.

# collapsed (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A Boolean value that controls the visibility of the candidate list.

## Declaration

```objectivec
@property (getter=isCollapsed) BOOL collapsed;
```

<a id="Discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), the candidate list is collapsed and not visible to the user.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Handling collapsible behavior

- [allowsCollapsing](allowscollapsing.md): A Boolean value that specifies whether the item can be collapsed.
