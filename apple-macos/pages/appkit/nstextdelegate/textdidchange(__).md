> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextdelegate/textdidchange(_:)

# textDidChange(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Informs the delegate that the text object has changed its characters or formatting attributes.

## Declaration

```swift
@MainActor optional func textDidChange(_ notification: Notification)
```

<a id="Discussion"></a>

## Discussion

The name of `aNotification` is [didChangeNotification](../nstext/didchangenotification.md).

# textDidChange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the delegate that the text object has changed its characters or formatting attributes.

## Declaration

```objectivec
- (void) textDidChange:(NSNotification *) notification;
```

<a id="Discussion"></a>

## Discussion

The name of `aNotification` is [NSTextDidChangeNotification](../nstext/didchangenotification.md).
