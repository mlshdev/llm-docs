> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsform/selecttext(at:)

# selectText(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Selects the entry at the specified index.

> Use NSTextField directly instead, and consider NSStackView for layout assistance

## Declaration

```swift
func selectText(at index: Int)
```

## Parameters

- `index`: The index of the entry to select. If the specified index is invalid, this method does nothing.

# selectTextAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Selects the entry at the specified index.

> Use NSTextField directly instead, and consider NSStackView for layout assistance

## Declaration

```objectivec
- (void) selectTextAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the entry to select. If the specified index is invalid, this method does nothing.
