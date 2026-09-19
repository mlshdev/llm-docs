> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nswindow/begindraggingsession(items:event:source:)

# beginDraggingSession(items:event:source:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

## Declaration

```swift
func beginDraggingSession(items: [NSDraggingItem], event: NSEvent, source: any NSDraggingSource) -> NSDraggingSession
```

# beginDraggingSessionWithItems:event:source: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

## Declaration

```objectivec
- (NSDraggingSession *) beginDraggingSessionWithItems:(NSArray<NSDraggingItem *> *) items event:(NSEvent *) event source:(id<NSDraggingSource>) source;
```
