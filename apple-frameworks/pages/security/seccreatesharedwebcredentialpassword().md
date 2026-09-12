> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccreatesharedwebcredentialpassword()](https://developer.apple.com/documentation/security/seccreatesharedwebcredentialpassword())

# SecCreateSharedWebCredentialPassword() (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Returns a randomly generated password.

## Declaration

```swift
func SecCreateSharedWebCredentialPassword() -> CFString?
```

<a id="return-value"></a>

## Return Value

A password in the form `xxx-xxx-xxx-xxx`, where `x` is taken from the sets `abcdefghkmnopqrstuvwxy`, `ABCDEFGHJKLMNPQRSTUVWXYZ`, and `3456789`, with at least one character from each set being present.

# SecCreateSharedWebCredentialPassword (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Returns a randomly generated password.

## Declaration

```objectivec
CFStringRefSecCreateSharedWebCredentialPassword();
```

<a id="return-value"></a>

## Return Value

A password in the form `xxx-xxx-xxx-xxx`, where `x` is taken from the sets `abcdefghkmnopqrstuvwxy`, `ABCDEFGHJKLMNPQRSTUVWXYZ`, and `3456789`, with at least one character from each set being present.
