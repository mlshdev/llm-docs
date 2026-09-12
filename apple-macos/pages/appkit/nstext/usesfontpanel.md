> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/usesfontpanel](https://developer.apple.com/documentation/appkit/nstext/usesfontpanel)

# usesFontPanel (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that controls whether the receiver uses the Font panel and Font menu.

## Declaration

```swift
var usesFontPanel: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If `flag` is [true](https://developer.apple.com/documentation/swift/true), the receiver responds to messages from the Font panel and from the Font menu and updates the Font panel with the selection font whenever it changes. If `flag` is [false](https://developer.apple.com/documentation/swift/false) the receiver doesn’t do any of these actions.

# usesFontPanel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that controls whether the receiver uses the Font panel and Font menu.

## Declaration

```objectivec
@property BOOL usesFontPanel;
```

<a id="Discussion"></a>

## Discussion

If `flag` is [true](https://developer.apple.com/documentation/swift/true), the receiver responds to messages from the Font panel and from the Font menu and updates the Font panel with the selection font whenever it changes. If `flag` is [false](https://developer.apple.com/documentation/swift/false) the receiver doesn’t do any of these actions.
