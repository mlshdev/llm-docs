> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/noresponder(for:)](https://developer.apple.com/documentation/appkit/nsresponder/noresponder(for:))

# noResponder(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handles the case where an event or action message falls off the end of the responder chain.

## Declaration

```swift
func noResponder(for eventSelector: Selector)
```

## Parameters

- `eventSelector`: A selector identifying the action or event message.

<a id="Discussion"></a>

## Discussion

The default implementation beeps if `eventSelector` is [keyDown(with:)](keydown%28with_%29.md).

# noResponderFor: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handles the case where an event or action message falls off the end of the responder chain.

## Declaration

```objectivec
- (void) noResponderFor:(SEL) eventSelector;
```

## Parameters

- `eventSelector`: A selector identifying the action or event message.

<a id="Discussion"></a>

## Discussion

The default implementation beeps if `eventSelector` is [keyDown:](keydown%28with_%29.md).
