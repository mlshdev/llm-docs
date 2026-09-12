> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkcandidates/setselectionkeyskeylayout(_:)](https://developer.apple.com/documentation/inputmethodkit/imkcandidates/setselectionkeyskeylayout(_:))

# setSelectionKeysKeylayout(\_:) (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the key layout that is used to map virtual key codes to characters.

## Declaration

```swift
func setSelectionKeysKeylayout(_ layout: TISInputSource!)
```

## Parameters

- `layout`: The key layout to use.

## See Also

### Managing Selection Keys

- [setSelectionKeys(\_:)](setselectionkeys%28__%29.md): Sets the selection keys for the candidates.
- [selectionKeys()](selectionkeys%28%29.md): Returns an array of `NSNumber` objects where each `NSNumber` object represents a virtual key code.
- [selectionKeysKeylayout()](selectionkeyskeylayout%28%29.md): Returns the key layout that maps virtual key codes to selection keys.

# setSelectionKeysKeylayout: (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the key layout that is used to map virtual key codes to characters.

## Declaration

```objectivec
- (void) setSelectionKeysKeylayout:(TISInputSourceRef) layout;
```

## Parameters

- `layout`: The key layout to use.

## See Also

### Managing Selection Keys

- [setSelectionKeys:](setselectionkeys%28__%29.md): Sets the selection keys for the candidates.
- [selectionKeys](selectionkeys%28%29.md): Returns an array of `NSNumber` objects where each `NSNumber` object represents a virtual key code.
- [selectionKeysKeylayout](selectionkeyskeylayout%28%29.md): Returns the key layout that maps virtual key codes to selection keys.
