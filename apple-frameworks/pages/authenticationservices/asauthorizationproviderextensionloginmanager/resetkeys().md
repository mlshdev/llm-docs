> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginmanager/resetkeys()

# resetKeys() (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Creates new encryption, signing, and Secure Enclave keys.

## Declaration

```swift
func resetKeys()
```

<a id="Discussion"></a>

## Discussion

This call permanently destroys the keys and you can’t undo it.

## See Also

### Repairing registrations

- [userRegistrationsNeedsRepair()](userregistrationsneedsrepair%28%29.md): Invokes the user registration to run again so the current user can repair it.
- [deviceRegistrationsNeedsRepair()](deviceregistrationsneedsrepair%28%29.md): Invokes the device registration to run again so the current user can repair it.

# resetKeys (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Creates new encryption, signing, and Secure Enclave keys.

## Declaration

```objectivec
- (void) resetKeys;
```

<a id="Discussion"></a>

## Discussion

This call permanently destroys the keys and you can’t undo it.

## See Also

### Repairing registrations

- [userRegistrationsNeedsRepair](userregistrationsneedsrepair%28%29.md): Invokes the user registration to run again so the current user can repair it.
- [deviceRegistrationsNeedsRepair](deviceregistrationsneedsrepair%28%29.md): Invokes the device registration to run again so the current user can repair it.
