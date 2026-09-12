> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkcandidates/selectionkeys()](https://developer.apple.com/documentation/inputmethodkit/imkcandidates/selectionkeys())

# selectionKeys() (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns an array of `NSNumber` objects where each `NSNumber` object represents a virtual key code.

## Declaration

```swift
func selectionKeys() -> [Any]!
```

<a id="return-value"></a>

## Return Value

The array of `NSNumber` objects.

<a id="Discussion"></a>

## Discussion

Selection keys  are keys that can be used to select one of the candidates. They are displayed next to the candidate that will be selected when the user types that key.

## See Also

### Managing Selection Keys

- [setSelectionKeys(\_:)](setselectionkeys%28__%29.md): Sets the selection keys for the candidates.
- [setSelectionKeysKeylayout(\_:)](setselectionkeyskeylayout%28__%29.md): Sets the key layout that is used to map virtual key codes to characters.
- [selectionKeysKeylayout()](selectionkeyskeylayout%28%29.md): Returns the key layout that maps virtual key codes to selection keys.

# selectionKeys (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns an array of `NSNumber` objects where each `NSNumber` object represents a virtual key code.

## Declaration

```objectivec
- (NSArray *) selectionKeys;
```

<a id="return-value"></a>

## Return Value

The array of `NSNumber` objects.

<a id="Discussion"></a>

## Discussion

Selection keys  are keys that can be used to select one of the candidates. They are displayed next to the candidate that will be selected when the user types that key.

## See Also

### Managing Selection Keys

- [setSelectionKeys:](setselectionkeys%28__%29.md): Sets the selection keys for the candidates.
- [setSelectionKeysKeylayout:](setselectionkeyskeylayout%28__%29.md): Sets the key layout that is used to map virtual key codes to characters.
- [selectionKeysKeylayout](selectionkeyskeylayout%28%29.md): Returns the key layout that maps virtual key codes to selection keys.
