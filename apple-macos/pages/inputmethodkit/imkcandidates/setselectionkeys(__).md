> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkcandidates/setselectionkeys(_:)](https://developer.apple.com/documentation/inputmethodkit/imkcandidates/setselectionkeys(_:))

# setSelectionKeys(\_:) (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the selection keys for the candidates.

## Declaration

```swift
func setSelectionKeys(_ keyCodes: [Any]!)
```

## Parameters

- `keyCodes`: An array of `NSNumber` objects where each `NSNumber` object represents a virtual key code. The input controller maps these key codes to characters that are displayed either across the top of the candidates, if the candidates are laid out horizontally, or along the left edge of the candidates, if they are aligned vertically.

<a id="Discussion"></a>

## Discussion

Selection keys  are keys that can be used to select one of the candidates. They are displayed next to the candidate that will be selected when the user types that key.

The number of selection keys determines how many candidates are displayed per page. For example, if you pass  an array of four key codes, four candidates are displayed per page. If you pass eleven key codes, eleven candidates are displayed. By default, the key codes are mapped using the keyboard layout whose source id is `com.apple.keylayout.US`. You can replace the default layout by calling [setSelectionKeysKeylayout(\_:)](setselectionkeyskeylayout%28__%29.md). The default selection keys are the digits 1 through 9 or, in terms of key codes, 18, 19, 20, 21, 23, 22, 26, 28, and 25.

## See Also

### Managing Selection Keys

- [selectionKeys()](selectionkeys%28%29.md): Returns an array of `NSNumber` objects where each `NSNumber` object represents a virtual key code.
- [setSelectionKeysKeylayout(\_:)](setselectionkeyskeylayout%28__%29.md): Sets the key layout that is used to map virtual key codes to characters.
- [selectionKeysKeylayout()](selectionkeyskeylayout%28%29.md): Returns the key layout that maps virtual key codes to selection keys.

# setSelectionKeys: (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the selection keys for the candidates.

## Declaration

```objectivec
- (void) setSelectionKeys:(NSArray *) keyCodes;
```

## Parameters

- `keyCodes`: An array of `NSNumber` objects where each `NSNumber` object represents a virtual key code. The input controller maps these key codes to characters that are displayed either across the top of the candidates, if the candidates are laid out horizontally, or along the left edge of the candidates, if they are aligned vertically.

<a id="Discussion"></a>

## Discussion

Selection keys  are keys that can be used to select one of the candidates. They are displayed next to the candidate that will be selected when the user types that key.

The number of selection keys determines how many candidates are displayed per page. For example, if you pass  an array of four key codes, four candidates are displayed per page. If you pass eleven key codes, eleven candidates are displayed. By default, the key codes are mapped using the keyboard layout whose source id is `com.apple.keylayout.US`. You can replace the default layout by calling [setSelectionKeysKeylayout:](setselectionkeyskeylayout%28__%29.md). The default selection keys are the digits 1 through 9 or, in terms of key codes, 18, 19, 20, 21, 23, 22, 26, 28, and 25.

## See Also

### Managing Selection Keys

- [selectionKeys](selectionkeys%28%29.md): Returns an array of `NSNumber` objects where each `NSNumber` object represents a virtual key code.
- [setSelectionKeysKeylayout:](setselectionkeyskeylayout%28__%29.md): Sets the key layout that is used to map virtual key codes to characters.
- [selectionKeysKeylayout](selectionkeyskeylayout%28%29.md): Returns the key layout that maps virtual key codes to selection keys.
