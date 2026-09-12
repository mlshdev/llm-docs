> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstorecopyconsoleuser(_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scdynamicstorecopyconsoleuser(_:_:_:))

# SCDynamicStoreCopyConsoleUser(\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns information about the user currently logged into the system.

## Declaration

```swift
func SCDynamicStoreCopyConsoleUser(_ store: SCDynamicStore?, _ uid: UnsafeMutablePointer<uid_t>?, _ gid: UnsafeMutablePointer<gid_t>?) -> CFString?
```

## Parameters

- `store`: The dynamic store session that should be used for communication with the server. Pass `NULL` to use a temporary session.
- `uid`: A pointer to memory that, on output, is filled with the user ID of the currently logged-in user. If `NULL`, this value is not returned.
- `gid`: A pointer to memory that, on output, is filled with the group ID of the currently logged-in user. If `NULL`, this value is not returned.

<a id="return-value"></a>

## Return Value

Returns the name, user ID, and group ID of the user currently logged into the system, or `NULL` if no user is logged in or if an error occurred. You must release the returned values.

<a id="Discussion"></a>

## Discussion

Note that this function only provides information about the primary console. It does not provide any details about console sessions that have fast user switched out or about other consoles.

## See Also

### Group

- [SCDynamicStoreCopyComputerName(\_:\_:)](scdynamicstorecopycomputername%28____%29.md): Returns the current computer name.
- [SCDynamicStoreCopyLocalHostName(\_:)](scdynamicstorecopylocalhostname%28__%29.md): Returns the current local host name.
- [SCDynamicStoreCopyLocation(\_:)](scdynamicstorecopylocation%28__%29.md): Returns the current location identifier.
- [SCDynamicStoreCopyProxies(\_:)](scdynamicstorecopyproxies%28__%29.md): Returns the key-value pairs that represent the current internet proxy settings.

# SCDynamicStoreCopyConsoleUser (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns information about the user currently logged into the system.

## Declaration

```objectivec
CFStringRefSCDynamicStoreCopyConsoleUser(SCDynamicStoreRef store, uid_t *uid, gid_t *gid);
```

## Parameters

- `store`: The dynamic store session that should be used for communication with the server. Pass `NULL` to use a temporary session.
- `uid`: A pointer to memory that, on output, is filled with the user ID of the currently logged-in user. If `NULL`, this value is not returned.
- `gid`: A pointer to memory that, on output, is filled with the group ID of the currently logged-in user. If `NULL`, this value is not returned.

<a id="return-value"></a>

## Return Value

Returns the name, user ID, and group ID of the user currently logged into the system, or `NULL` if no user is logged in or if an error occurred. You must release the returned values.

<a id="Discussion"></a>

## Discussion

Note that this function only provides information about the primary console. It does not provide any details about console sessions that have fast user switched out or about other consoles.

## See Also

### Group

- [SCDynamicStoreCopyComputerName](scdynamicstorecopycomputername%28____%29.md): Returns the current computer name.
- [SCDynamicStoreCopyLocalHostName](scdynamicstorecopylocalhostname%28__%29.md): Returns the current local host name.
- [SCDynamicStoreCopyLocation](scdynamicstorecopylocation%28__%29.md): Returns the current location identifier.
- [SCDynamicStoreCopyProxies](scdynamicstorecopyproxies%28__%29.md): Returns the key-value pairs that represent the current internet proxy settings.
