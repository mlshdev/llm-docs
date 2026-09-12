> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstorecopycomputername(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scdynamicstorecopycomputername(_:_:))

# SCDynamicStoreCopyComputerName(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns the current computer name.

## Declaration

```swift
func SCDynamicStoreCopyComputerName(_ store: SCDynamicStore?, _ nameEncoding: UnsafeMutablePointer<CFStringEncoding>?) -> CFString?
```

## Parameters

- `store`: The dynamic store session that should be used for communication with the server. Pass `NULL` to use a temporary session.
- `nameEncoding`: A pointer to memory that, on output, is filled with the encoding associated with the computer or host name, if it is non-`NULL`.

<a id="return-value"></a>

## Return Value

The current computer name, or `NULL` if the name has not been set or if an error occurred. You must release the return value.

## See Also

### Group

- [SCDynamicStoreCopyConsoleUser(\_:\_:\_:)](scdynamicstorecopyconsoleuser%28______%29.md): Returns information about the user currently logged into the system.
- [SCDynamicStoreCopyLocalHostName(\_:)](scdynamicstorecopylocalhostname%28__%29.md): Returns the current local host name.
- [SCDynamicStoreCopyLocation(\_:)](scdynamicstorecopylocation%28__%29.md): Returns the current location identifier.
- [SCDynamicStoreCopyProxies(\_:)](scdynamicstorecopyproxies%28__%29.md): Returns the key-value pairs that represent the current internet proxy settings.

# SCDynamicStoreCopyComputerName (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns the current computer name.

## Declaration

```objectivec
CFStringRefSCDynamicStoreCopyComputerName(SCDynamicStoreRef store, CFStringEncoding *nameEncoding);
```

## Parameters

- `store`: The dynamic store session that should be used for communication with the server. Pass `NULL` to use a temporary session.
- `nameEncoding`: A pointer to memory that, on output, is filled with the encoding associated with the computer or host name, if it is non-`NULL`.

<a id="return-value"></a>

## Return Value

The current computer name, or `NULL` if the name has not been set or if an error occurred. You must release the return value.

## See Also

### Group

- [SCDynamicStoreCopyConsoleUser](scdynamicstorecopyconsoleuser%28______%29.md): Returns information about the user currently logged into the system.
- [SCDynamicStoreCopyLocalHostName](scdynamicstorecopylocalhostname%28__%29.md): Returns the current local host name.
- [SCDynamicStoreCopyLocation](scdynamicstorecopylocation%28__%29.md): Returns the current location identifier.
- [SCDynamicStoreCopyProxies](scdynamicstorecopyproxies%28__%29.md): Returns the key-value pairs that represent the current internet proxy settings.
