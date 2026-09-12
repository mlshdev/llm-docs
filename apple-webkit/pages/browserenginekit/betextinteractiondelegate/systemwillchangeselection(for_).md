> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinteractiondelegate/systemwillchangeselection(for:)](https://developer.apple.com/documentation/browserenginekit/betextinteractiondelegate/systemwillchangeselection(for:))

# systemWillChangeSelection(for:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

Invoked by the system when the selection is about to change in the document.

## Declaration

```swift
func systemWillChangeSelection(for textInteraction: BETextInteraction)
```

## See Also

### Text selection changes

- [systemDidChangeSelection(for:)](systemdidchangeselection%28for_%29.md): Invoked by the system when the selection is about to change in the document.

# systemWillChangeSelectionForInteraction: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

Invoked by the system when the selection is about to change in the document.

## Declaration

```objectivec
- (void) systemWillChangeSelectionForInteraction:(BETextInteraction *) textInteraction;
```

## See Also

### Text selection changes

- [systemDidChangeSelectionForInteraction:](systemdidchangeselection%28for_%29.md): Invoked by the system when the selection is about to change in the document.
