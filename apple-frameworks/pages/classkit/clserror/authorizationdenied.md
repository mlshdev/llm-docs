> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clserror/authorizationdenied](https://developer.apple.com/documentation/classkit/clserror/authorizationdenied)

# authorizationDenied

**Framework:** ClassKit  
**Kind:** Type Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

The app isn’t authorized to perform the requested operation.

## Declaration

```swift
static var authorizationDenied: CLSError.Code { get }
```

## See Also

### Error codes

- [none](none.md): No error.
- [classKitUnavailable](classkitunavailable.md): ClassKit isn’t available on this device.
- [databaseInaccessible](databaseinaccessible.md): ClassKit isn’t accessible because the device is locked.
- [invalidAccountCredentials](invalidaccountcredentials.md)
- [invalidArgument](invalidargument.md): An invalid argument was provided to the API.
- [invalidCreate](invalidcreate.md): An attempt to save a new object that already exists in the data store failed.
- [invalidModification](invalidmodification.md): An attempt to modify a read-only object failed.
- [invalidUpdate](invalidupdate.md): ClassKit failed to save an updated object in the data store.
- [limits](limits.md): A limit has been exceeded.
- [partialFailure](partialfailure.md): ClassKit encountered more than one error.
- [CLSError.Code](code.md): Error codes that ClassKit issues.
