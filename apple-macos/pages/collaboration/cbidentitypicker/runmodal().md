> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbidentitypicker/runmodal()](https://developer.apple.com/documentation/collaboration/cbidentitypicker/runmodal())

# runModal() (Swift)

**Framework:** Collaboration  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Runs the receiver as an application-modal dialog.

## Declaration

```swift
func runModal() -> Int
```

<a id="return-value"></a>

## Return Value

`NSOKButton` if the user selected OK; otherwise,  `NSCancelButton`.

<a id="Discussion"></a>

## Discussion

The receiver may create identities for selected records if necessary.

## See Also

### Running an Identity Picker

- [runModal(for:modalDelegate:didEnd:contextInfo:)](runmodal%28for_modaldelegate_didend_contextinfo_%29.md): Deprecated. Runs the receiver modally as a sheet attached to a specified window.
- [runModal(for:completionHandler:)](runmodal%28for_completionhandler_%29.md): Runs the identity picker modally as a sheet attached to a specified window.

# runModal (Objective-C)

**Framework:** Collaboration  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Runs the receiver as an application-modal dialog.

## Declaration

```objectivec
- (NSInteger) runModal;
```

<a id="return-value"></a>

## Return Value

`NSOKButton` if the user selected OK; otherwise,  `NSCancelButton`.

<a id="Discussion"></a>

## Discussion

The receiver may create identities for selected records if necessary.

## See Also

### Running an Identity Picker

- [runModalForWindow:modalDelegate:didEndSelector:contextInfo:](runmodal%28for_modaldelegate_didend_contextinfo_%29.md): Deprecated. Runs the receiver modally as a sheet attached to a specified window.
- [runModalForWindow:completionHandler:](runmodal%28for_completionhandler_%29.md): Runs the identity picker modally as a sheet attached to a specified window.
