> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clserror/limits](https://developer.apple.com/documentation/classkit/clserror/limits)

# limits

**Framework:** ClassKit  
**Kind:** Type Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

A limit has been exceeded.

## Declaration

```swift
static var limits: CLSError.Code { get }
```

## See Also

### Error codes

- [none](none.md): No error.
- [authorizationDenied](authorizationdenied.md): The app isn’t authorized to perform the requested operation.
- [classKitUnavailable](classkitunavailable.md): ClassKit isn’t available on this device.
- [databaseInaccessible](databaseinaccessible.md): ClassKit isn’t accessible because the device is locked.
- [invalidAccountCredentials](invalidaccountcredentials.md)
- [invalidArgument](invalidargument.md): An invalid argument was provided to the API.
- [invalidCreate](invalidcreate.md): An attempt to save a new object that already exists in the data store failed.
- [invalidModification](invalidmodification.md): An attempt to modify a read-only object failed.
- [invalidUpdate](invalidupdate.md): ClassKit failed to save an updated object in the data store.
- [partialFailure](partialfailure.md): ClassKit encountered more than one error.
- [CLSError.Code](code.md): Error codes that ClassKit issues.
