> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowforsharingrequest(from:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowforsharingrequest(from:))

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
