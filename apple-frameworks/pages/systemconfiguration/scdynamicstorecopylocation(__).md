> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstorecopylocation(_:)](https://developer.apple.com/documentation/systemconfiguration/scdynamicstorecopylocation(_:))

# SCDynamicStoreCopyLocation(\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns the current location identifier.

## Declaration

```swift
func SCDynamicStoreCopyLocation(_ store: SCDynamicStore?) -> CFString?
```

## Parameters

- `store`: The dynamic store session that should be used for communication with the server. Pass `NULL` to use a temporary session.

<a id="return-value"></a>

## Return Value

Returns the current location identifier, or `NULL` if no location identifier has been defined or if an error occurred. You must release the returned value.

## See Also

### Group

- [SCDynamicStoreCopyComputerName(\_:\_:)](scdynamicstorecopycomputername%28____%29.md): Returns the current computer name.
- [SCDynamicStoreCopyConsoleUser(\_:\_:\_:)](scdynamicstorecopyconsoleuser%28______%29.md): Returns information about the user currently logged into the system.
- [SCDynamicStoreCopyLocalHostName(\_:)](scdynamicstorecopylocalhostname%28__%29.md): Returns the current local host name.
- [SCDynamicStoreCopyProxies(\_:)](scdynamicstorecopyproxies%28__%29.md): Returns the key-value pairs that represent the current internet proxy settings.

# SCDynamicStoreCopyLocation (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns the current location identifier.

## Declaration

```objectivec
CFStringRefSCDynamicStoreCopyLocation(SCDynamicStoreRef store);
```

## Parameters

- `store`: The dynamic store session that should be used for communication with the server. Pass `NULL` to use a temporary session.

<a id="return-value"></a>

## Return Value

Returns the current location identifier, or `NULL` if no location identifier has been defined or if an error occurred. You must release the returned value.

## See Also

### Group

- [SCDynamicStoreCopyComputerName](scdynamicstorecopycomputername%28____%29.md): Returns the current computer name.
- [SCDynamicStoreCopyConsoleUser](scdynamicstorecopyconsoleuser%28______%29.md): Returns information about the user currently logged into the system.
- [SCDynamicStoreCopyLocalHostName](scdynamicstorecopylocalhostname%28__%29.md): Returns the current local host name.
- [SCDynamicStoreCopyProxies](scdynamicstorecopyproxies%28__%29.md): Returns the key-value pairs that represent the current internet proxy settings.
