> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstorecopylocalhostname(_:)](https://developer.apple.com/documentation/systemconfiguration/scdynamicstorecopylocalhostname(_:))

# SCDynamicStoreCopyLocalHostName(\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns the current local host name.

## Declaration

```swift
func SCDynamicStoreCopyLocalHostName(_ store: SCDynamicStore?) -> CFString?
```

## Parameters

- `store`: The dynamic store session that should be used for communication with the server. Pass `NULL` to use a temporary session.

<a id="return-value"></a>

## Return Value

Returns the current local host name, or `NULL` if the name has not been set or if an error occurred. You must release the return value.

## See Also

### Group

- [SCDynamicStoreCopyComputerName(\_:\_:)](scdynamicstorecopycomputername%28____%29.md): Returns the current computer name.
- [SCDynamicStoreCopyConsoleUser(\_:\_:\_:)](scdynamicstorecopyconsoleuser%28______%29.md): Returns information about the user currently logged into the system.
- [SCDynamicStoreCopyLocation(\_:)](scdynamicstorecopylocation%28__%29.md): Returns the current location identifier.
- [SCDynamicStoreCopyProxies(\_:)](scdynamicstorecopyproxies%28__%29.md): Returns the key-value pairs that represent the current internet proxy settings.

# SCDynamicStoreCopyLocalHostName (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns the current local host name.

## Declaration

```objectivec
CFStringRefSCDynamicStoreCopyLocalHostName(SCDynamicStoreRef store);
```

## Parameters

- `store`: The dynamic store session that should be used for communication with the server. Pass `NULL` to use a temporary session.

<a id="return-value"></a>

## Return Value

Returns the current local host name, or `NULL` if the name has not been set or if an error occurred. You must release the return value.

## See Also

### Group

- [SCDynamicStoreCopyComputerName](scdynamicstorecopycomputername%28____%29.md): Returns the current computer name.
- [SCDynamicStoreCopyConsoleUser](scdynamicstorecopyconsoleuser%28______%29.md): Returns information about the user currently logged into the system.
- [SCDynamicStoreCopyLocation](scdynamicstorecopylocation%28__%29.md): Returns the current location identifier.
- [SCDynamicStoreCopyProxies](scdynamicstorecopyproxies%28__%29.md): Returns the key-value pairs that represent the current internet proxy settings.
