> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browserwillscroll(_:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browserwillscroll(_:))

# browserWillScroll(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Notifies the delegate when the browser will scroll.

## Declaration

```swift
@MainActor optional func browserWillScroll(_ sender: NSBrowser)
```

## Parameters

- `sender`: The browser sending the message.

## See Also

### Scrolling

- [browserDidScroll(\_:)](browserdidscroll%28__%29.md): Notifies the delegate when the browser has scrolled.

# browserWillScroll: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Notifies the delegate when the browser will scroll.

## Declaration

```objectivec
- (void) browserWillScroll:(NSBrowser *) sender;
```

## Parameters

- `sender`: The browser sending the message.

## See Also

### Scrolling

- [browserDidScroll:](browserdidscroll%28__%29.md): Notifies the delegate when the browser has scrolled.
