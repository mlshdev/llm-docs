> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/accessoryaccess/aaerror/accessorynotaccessible](https://developer.apple.com/documentation/accessoryaccess/aaerror/accessorynotaccessible)

# accessoryNotAccessible

**Framework:** Accessory Access  
**Kind:** Type Property  
**Availability:** macOS 27.0+

An error that indicates the USB accessory isn’t accessible.

## Declaration

```swift
static var accessoryNotAccessible: AAError.Code { get }
```

## See Also

### Errors

- [accessoryListenerAlreadyRegistered](accessorylisteneralreadyregistered.md): An error that indicates the accessory listener is already registered, and therefore the app can’t re-register it.
- [internalError](internalerror.md): An error that represents an internal error.
- [invalidAccessoryState](invalidaccessorystate.md): An error that indicates the accessory isn’t in the correct state for the current operation.
- [AAError.Code](code.md): Values that represent error codes that the AccessoryAccess framework returns.
