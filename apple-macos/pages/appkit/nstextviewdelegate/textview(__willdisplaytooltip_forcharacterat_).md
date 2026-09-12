> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview(_:willdisplaytooltip:forcharacterat:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview(_:willdisplaytooltip:forcharacterat:))

# textView(\_:willDisplayToolTip:forCharacterAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the actual tooltip to display.

## Declaration

```swift
@MainActor optional func textView(_ textView: NSTextView, willDisplayToolTip tooltip: String, forCharacterAt characterIndex: Int) -> String?
```

## Parameters

- `textView`: The text view sending the message.
- `tooltip`: The proposed tooltip to display.
- `characterIndex`: The location in `textView`.

<a id="return-value"></a>

## Return Value

The actual tooltip to display, or `nil` to suppress display of the tooltip.

<a id="Discussion"></a>

## Discussion

The tooltip string is the value of the [toolTip](https://developer.apple.com/documentation/foundation/nsattributedstring/key/tooltip) attribute at `characterIndex`.

# textView:willDisplayToolTip:forCharacterAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the actual tooltip to display.

## Declaration

```objectivec
- (NSString *) textView:(NSTextView *) textView willDisplayToolTip:(NSString *) tooltip forCharacterAtIndex:(NSUInteger) characterIndex;
```

## Parameters

- `textView`: The text view sending the message.
- `tooltip`: The proposed tooltip to display.
- `characterIndex`: The location in `textView`.

<a id="return-value"></a>

## Return Value

The actual tooltip to display, or `nil` to suppress display of the tooltip.

<a id="Discussion"></a>

## Discussion

The tooltip string is the value of the [toolTip](https://developer.apple.com/documentation/foundation/nsattributedstring/key/tooltip) attribute at `characterIndex`.
