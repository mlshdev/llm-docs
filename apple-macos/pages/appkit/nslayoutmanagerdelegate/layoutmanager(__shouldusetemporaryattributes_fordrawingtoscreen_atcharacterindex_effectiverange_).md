> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanagerdelegate/layoutmanager(_:shouldusetemporaryattributes:fordrawingtoscreen:atcharacterindex:effectiverange:)](https://developer.apple.com/documentation/appkit/nslayoutmanagerdelegate/layoutmanager(_:shouldusetemporaryattributes:fordrawingtoscreen:atcharacterindex:effectiverange:))

# layoutManager(\_:shouldUseTemporaryAttributes:forDrawingToScreen:atCharacterIndex:effectiveRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Asks the delegate whether to use temporary attributes when drawing the text.

## Declaration

```swift
optional func layoutManager(_ layoutManager: NSLayoutManager, shouldUseTemporaryAttributes attrs: [NSAttributedString.Key : Any] = [:], forDrawingToScreen toScreen: Bool, atCharacterIndex charIndex: Int, effectiveRange effectiveCharRange: NSRangePointer?) -> [NSAttributedString.Key : Any]?
```

## Parameters

- `layoutManager`: The layout manager sending the message.
- `attrs`: The temporary attributes currently in effect for the given character range.
- `toScreen`: [true](https://developer.apple.com/documentation/swift/true) if the layout manager is drawing to the screen; otherwise, [false](https://developer.apple.com/documentation/swift/false).
- `charIndex`: Index of the first character in the range being drawn.
- `effectiveCharRange`: On input and output, the effective range to which the temporary attributes apply.

<a id="return-value"></a>

## Return Value

The temporary attributes for the layout manager to use, or `nil` if no temporary attributes are to be used.

<a id="Discussion"></a>

## Discussion

The default behavior, if this method is not implemented, is to use temporary attributes only when drawing to the screen, so an implementation to match that behavior would return `attrs` if `toScreen` is [true](https://developer.apple.com/documentation/swift/true) and `nil` otherwise, without changing `effectiveCharRange`.

# layoutManager:shouldUseTemporaryAttributes:forDrawingToScreen:atCharacterIndex:effectiveRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Asks the delegate whether to use temporary attributes when drawing the text.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) layoutManager:(NSLayoutManager *) layoutManager shouldUseTemporaryAttributes:(NSDictionary<NSString *,id> *) attrs forDrawingToScreen:(BOOL) toScreen atCharacterIndex:(NSUInteger) charIndex effectiveRange:(NSRangePointer) effectiveCharRange;
```

## Parameters

- `layoutManager`: The layout manager sending the message.
- `attrs`: The temporary attributes currently in effect for the given character range.
- `toScreen`: [true](https://developer.apple.com/documentation/swift/true) if the layout manager is drawing to the screen; otherwise, [false](https://developer.apple.com/documentation/swift/false).
- `charIndex`: Index of the first character in the range being drawn.
- `effectiveCharRange`: On input and output, the effective range to which the temporary attributes apply.

<a id="return-value"></a>

## Return Value

The temporary attributes for the layout manager to use, or `nil` if no temporary attributes are to be used.

<a id="Discussion"></a>

## Discussion

The default behavior, if this method is not implemented, is to use temporary attributes only when drawing to the screen, so an implementation to match that behavior would return `attrs` if `toScreen` is [true](https://developer.apple.com/documentation/swift/true) and `nil` otherwise, without changing `effectiveCharRange`.
