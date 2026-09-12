> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchfield/centersplaceholder](https://developer.apple.com/documentation/appkit/nssearchfield/centersplaceholder)

# centersPlaceholder (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+ (deprecated in 12.0)

A Boolean value that determines whether the search field’s components are centered within the control.

> The placeholder centering UI design is no longer available. Setting this property is no-op.

## Declaration

```swift
var centersPlaceholder: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the search field’s components become centered within the control if the field is empty and doesn’t have focus. If the field is empty when receiving focus, the centered objects animate to the edges of the control. When this property is set to [false](https://developer.apple.com/documentation/swift/false), the components are always at the edge. The default value is [true](https://developer.apple.com/documentation/swift/true).

> **Note**

>  When set to [true](https://developer.apple.com/documentation/swift/true), [wantsLayer](../nsview/wantslayer.md) is also [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Deprecated Symbols

- [rectForCancelButton(whenCentered:)](rectforcancelbutton%28whencentered_%29.md): Deprecated. The rectangle for the cancel button within the bounds of the search field.
- [rectForSearchButton(whenCentered:)](rectforsearchbutton%28whencentered_%29.md): Deprecated. The rectangle for the search button within the bounds of the search field.
- [rectForSearchText(whenCentered:)](rectforsearchtext%28whencentered_%29.md): Deprecated. The rectangle for the search text within the bounds of the field.

# centersPlaceholder (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+ (deprecated in 12.0)

A Boolean value that determines whether the search field’s components are centered within the control.

> The placeholder centering UI design is no longer available. Setting this property is no-op.

## Declaration

```objectivec
@property BOOL centersPlaceholder;
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the search field’s components become centered within the control if the field is empty and doesn’t have focus. If the field is empty when receiving focus, the centered objects animate to the edges of the control. When this property is set to [false](https://developer.apple.com/documentation/swift/false), the components are always at the edge. The default value is [true](https://developer.apple.com/documentation/swift/true).

> **Note**

>  When set to [true](https://developer.apple.com/documentation/swift/true), [wantsLayer](../nsview/wantslayer.md) is also [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Deprecated Symbols

- [rectForCancelButtonWhenCentered:](rectforcancelbutton%28whencentered_%29.md): Deprecated. The rectangle for the cancel button within the bounds of the search field.
- [rectForSearchButtonWhenCentered:](rectforsearchbutton%28whencentered_%29.md): Deprecated. The rectangle for the search button within the bounds of the search field.
- [rectForSearchTextWhenCentered:](rectforsearchtext%28whencentered_%29.md): Deprecated. The rectangle for the search text within the bounds of the field.
