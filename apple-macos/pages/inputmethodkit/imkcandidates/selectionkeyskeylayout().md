> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkcandidates/selectionkeyskeylayout()](https://developer.apple.com/documentation/inputmethodkit/imkcandidates/selectionkeyskeylayout())

# selectionKeysKeylayout() (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the key layout that maps virtual key codes to selection keys.

## Declaration

```swift
func selectionKeysKeylayout() -> Unmanaged<TISInputSource>!
```

<a id="return-value"></a>

## Return Value

The key layout in use. By default this is the key layout whose source id is `com.apple.keylayout.US`.

## See Also

### Managing Selection Keys

- [setSelectionKeys(\_:)](setselectionkeys%28__%29.md): Sets the selection keys for the candidates.
- [selectionKeys()](selectionkeys%28%29.md): Returns an array of `NSNumber` objects where each `NSNumber` object represents a virtual key code.
- [setSelectionKeysKeylayout(\_:)](setselectionkeyskeylayout%28__%29.md): Sets the key layout that is used to map virtual key codes to characters.

# selectionKeysKeylayout (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the key layout that maps virtual key codes to selection keys.

## Declaration

```objectivec
- (TISInputSourceRef) selectionKeysKeylayout;
```

<a id="return-value"></a>

## Return Value

The key layout in use. By default this is the key layout whose source id is `com.apple.keylayout.US`.

## See Also

### Managing Selection Keys

- [setSelectionKeys:](setselectionkeys%28__%29.md): Sets the selection keys for the candidates.
- [selectionKeys](selectionkeys%28%29.md): Returns an array of `NSNumber` objects where each `NSNumber` object represents a virtual key code.
- [setSelectionKeysKeylayout:](setselectionkeyskeylayout%28__%29.md): Sets the key layout that is used to map virtual key codes to characters.
