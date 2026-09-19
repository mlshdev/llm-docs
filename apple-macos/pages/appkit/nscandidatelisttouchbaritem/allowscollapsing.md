> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nscandidatelisttouchbaritem/allowscollapsing

# allowsCollapsing (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A Boolean value that specifies whether the item can be collapsed.

## Declaration

```swift
var allowsCollapsing: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), the candidate list item can be collapsed, [false](https://developer.apple.com/documentation/swift/false) otherwise.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Handling collapsible behavior

- [isCollapsed](iscollapsed.md): A Boolean value that controls the visibility of the candidate list.

# allowsCollapsing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A Boolean value that specifies whether the item can be collapsed.

## Declaration

```objectivec
@property BOOL allowsCollapsing;
```

<a id="Discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), the candidate list item can be collapsed, [false](https://developer.apple.com/documentation/swift/false) otherwise.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Handling collapsible behavior

- [collapsed](iscollapsed.md): A Boolean value that controls the visibility of the candidate list.
