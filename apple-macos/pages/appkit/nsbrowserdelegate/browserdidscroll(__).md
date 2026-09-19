> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browserdidscroll(_:)

# browserDidScroll(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Notifies the delegate when the browser has scrolled.

## Declaration

```swift
@MainActor optional func browserDidScroll(_ sender: NSBrowser)
```

## Parameters

- `sender`: The browser sending the message.

## See Also

### Scrolling

- [browserWillScroll(\_:)](browserwillscroll%28__%29.md): Notifies the delegate when the browser will scroll.

# browserDidScroll: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Notifies the delegate when the browser has scrolled.

## Declaration

```objectivec
- (void) browserDidScroll:(NSBrowser *) sender;
```

## Parameters

- `sender`: The browser sending the message.

## See Also

### Scrolling

- [browserWillScroll:](browserwillscroll%28__%29.md): Notifies the delegate when the browser will scroll.
