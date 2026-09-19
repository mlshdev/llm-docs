> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nseditor/commitediting(withdelegate:didcommit:contextinfo:)

# commitEditing(withDelegate:didCommit:contextInfo:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

## Declaration

```swift
@MainActor func commitEditing(withDelegate delegate: Any?, didCommit didCommitSelector: Selector?, contextInfo: UnsafeMutableRawPointer?)
```

## See Also

### Instance Methods

- [commitEditing()](commitediting%28%29.md)
- [commitEditingWithoutPresentingError()](commiteditingwithoutpresentingerror%28%29.md)
- [discardEditing()](discardediting%28%29.md)

# commitEditingWithDelegate:didCommitSelector:contextInfo: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

## Declaration

```objectivec
- (void) commitEditingWithDelegate:(id) delegate didCommitSelector:(SEL) didCommitSelector contextInfo:(void *) contextInfo;
```

## See Also

### Instance Methods

- [commitEditing](commitediting%28%29.md)
- [commitEditingAndReturnError:](commiteditingwithoutpresentingerror%28%29.md)
- [discardEditing](discardediting%28%29.md)
