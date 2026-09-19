> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nswindowdelegate/windowforsharingrequest(from:)

# windowForSharingRequest(from:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Method called to get the window to share once sharing is confirmed, after a request is initiated by requestSharingOfWindowUsingPreview:title:completionHandler:. Implement this on the delegate of the requesting window

## Declaration

```swift
@MainActor optional func windowForSharingRequest(from window: NSWindow) -> NSWindow?
```

# windowForSharingRequestFromWindow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Method called to get the window to share once sharing is confirmed, after a request is initiated by requestSharingOfWindowUsingPreview:title:completionHandler:. Implement this on the delegate of the requesting window

## Declaration

```objectivec
- (NSWindow *) windowForSharingRequestFromWindow:(NSWindow *) window;
```
