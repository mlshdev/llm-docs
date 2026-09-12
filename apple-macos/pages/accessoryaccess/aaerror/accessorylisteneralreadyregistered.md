> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/accessoryaccess/aaerror/accessorylisteneralreadyregistered](https://developer.apple.com/documentation/accessoryaccess/aaerror/accessorylisteneralreadyregistered)

# accessoryListenerAlreadyRegistered

**Framework:** Accessory Access  
**Kind:** Type Property  
**Availability:** macOS 27.0+

An error that indicates the accessory listener is already registered, and therefore the app can’t re-register it.

## Declaration

```swift
static var accessoryListenerAlreadyRegistered: AAError.Code { get }
```

## See Also

### Errors

- [accessoryNotAccessible](accessorynotaccessible.md): An error that indicates the USB accessory isn’t accessible.
- [internalError](internalerror.md): An error that represents an internal error.
- [invalidAccessoryState](invalidaccessorystate.md): An error that indicates the accessory isn’t in the correct state for the current operation.
- [AAError.Code](code.md): Values that represent error codes that the AccessoryAccess framework returns.
