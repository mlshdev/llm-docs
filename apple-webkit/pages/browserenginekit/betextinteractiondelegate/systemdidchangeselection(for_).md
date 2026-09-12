> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinteractiondelegate/systemdidchangeselection(for:)](https://developer.apple.com/documentation/browserenginekit/betextinteractiondelegate/systemdidchangeselection(for:))

# systemDidChangeSelection(for:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

Invoked by the system when the selection is about to change in the document.

## Declaration

```swift
func systemDidChangeSelection(for textInteraction: BETextInteraction)
```

## See Also

### Text selection changes

- [systemWillChangeSelection(for:)](systemwillchangeselection%28for_%29.md): Invoked by the system when the selection is about to change in the document.

# systemDidChangeSelectionForInteraction: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

Invoked by the system when the selection is about to change in the document.

## Declaration

```objectivec
- (void) systemDidChangeSelectionForInteraction:(BETextInteraction *) textInteraction;
```

## See Also

### Text selection changes

- [systemWillChangeSelectionForInteraction:](systemwillchangeselection%28for_%29.md): Invoked by the system when the selection is about to change in the document.
