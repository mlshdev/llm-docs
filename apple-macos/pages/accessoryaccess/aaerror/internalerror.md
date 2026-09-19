> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessoryaccess/aaerror/internalerror

# internalError

**Framework:** Accessory Access  
**Kind:** Type Property  
**Availability:** macOS 27.0+

An error that represents an internal error.

## Declaration

```swift
static var internalError: AAError.Code { get }
```

## See Also

### Errors

- [accessoryListenerAlreadyRegistered](accessorylisteneralreadyregistered.md): An error that indicates the accessory listener is already registered, and therefore the app can’t re-register it.
- [accessoryNotAccessible](accessorynotaccessible.md): An error that indicates the USB accessory isn’t accessible.
- [invalidAccessoryState](invalidaccessorystate.md): An error that indicates the accessory isn’t in the correct state for the current operation.
- [AAError.Code](code.md): Values that represent error codes that the AccessoryAccess framework returns.
