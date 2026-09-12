> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworksetcopy(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworksetcopy(_:_:))

# SCNetworkSetCopy(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the set with the specified identifier.

## Declaration

```swift
func SCNetworkSetCopy(_ prefs: SCPreferences, _ setID: CFString) -> SCNetworkSet?
```

## Parameters

- `prefs`: The preferences session.
- `setID`: The unique identifier for the set.

<a id="return-value"></a>

## Return Value

The network set from the associated preferences, or `NULL` if the identifier does not exist in the preferences or if an error occurred. You must release the returned value.

## See Also

### Configuring Network Sets

- [SCNetworkSetAddService(\_:\_:)](scnetworksetaddservice%28____%29.md): Adds the specified network service to the specified set.
- [SCNetworkSetContainsInterface(\_:\_:)](scnetworksetcontainsinterface%28____%29.md): Returns a Boolean value indicating whether the specified interface is represented by at least one network service in the specified set.
- [SCNetworkSetCopyAll(\_:)](scnetworksetcopyall%28__%29.md): Returns all available sets for the specified preferences session.
- [SCNetworkSetCopyCurrent(\_:)](scnetworksetcopycurrent%28__%29.md): Returns the current set.
- [SCNetworkSetCopyServices(\_:)](scnetworksetcopyservices%28__%29.md): Returns all network services associated with the specified set.
- [SCNetworkSetCreate(\_:)](scnetworksetcreate%28__%29.md): Creates a new set in the configuration.
- [SCNetworkSetGetName(\_:)](scnetworksetgetname%28__%29.md): Returns the user-specified name associated with the specified set.
- [SCNetworkSetGetServiceOrder(\_:)](scnetworksetgetserviceorder%28__%29.md): Returns the user-specified ordering of network services within the specified set.
- [SCNetworkSetGetSetID(\_:)](scnetworksetgetsetid%28__%29.md): Returns the identifier for the specified set.
- [SCNetworkSetGetTypeID()](scnetworksetgettypeid%28%29.md): Returns the type identifier of all `SCNetworkSet` instances.
- [SCNetworkSetRemove(\_:)](scnetworksetremove%28__%29.md): Removes the specified set from the configuration.
- [SCNetworkSetRemoveService(\_:\_:)](scnetworksetremoveservice%28____%29.md): Removes the specified network service from the specified set.
- [SCNetworkSetSetCurrent(\_:)](scnetworksetsetcurrent%28__%29.md): Specifies the set that should be the current set.
- [SCNetworkSetSetName(\_:\_:)](scnetworksetsetname%28____%29.md): Stores the user-specified name for the specified set.
- [SCNetworkSetSetServiceOrder(\_:\_:)](scnetworksetsetserviceorder%28____%29.md): Stores the user-specified ordering of network services for the specified set.

# SCNetworkSetCopy (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the set with the specified identifier.

## Declaration

```objectivec
SCNetworkSetRefSCNetworkSetCopy(SCPreferencesRef prefs, CFStringRef setID);
```

## Parameters

- `prefs`: The preferences session.
- `setID`: The unique identifier for the set.

<a id="return-value"></a>

## Return Value

The network set from the associated preferences, or `NULL` if the identifier does not exist in the preferences or if an error occurred. You must release the returned value.

## See Also

### Configuring Network Sets

- [SCNetworkSetAddService](scnetworksetaddservice%28____%29.md): Adds the specified network service to the specified set.
- [SCNetworkSetContainsInterface](scnetworksetcontainsinterface%28____%29.md): Returns a Boolean value indicating whether the specified interface is represented by at least one network service in the specified set.
- [SCNetworkSetCopyAll](scnetworksetcopyall%28__%29.md): Returns all available sets for the specified preferences session.
- [SCNetworkSetCopyCurrent](scnetworksetcopycurrent%28__%29.md): Returns the current set.
- [SCNetworkSetCopyServices](scnetworksetcopyservices%28__%29.md): Returns all network services associated with the specified set.
- [SCNetworkSetCreate](scnetworksetcreate%28__%29.md): Creates a new set in the configuration.
- [SCNetworkSetGetName](scnetworksetgetname%28__%29.md): Returns the user-specified name associated with the specified set.
- [SCNetworkSetGetServiceOrder](scnetworksetgetserviceorder%28__%29.md): Returns the user-specified ordering of network services within the specified set.
- [SCNetworkSetGetSetID](scnetworksetgetsetid%28__%29.md): Returns the identifier for the specified set.
- [SCNetworkSetGetTypeID](scnetworksetgettypeid%28%29.md): Returns the type identifier of all `SCNetworkSet` instances.
- [SCNetworkSetRemove](scnetworksetremove%28__%29.md): Removes the specified set from the configuration.
- [SCNetworkSetRemoveService](scnetworksetremoveservice%28____%29.md): Removes the specified network service from the specified set.
- [SCNetworkSetSetCurrent](scnetworksetsetcurrent%28__%29.md): Specifies the set that should be the current set.
- [SCNetworkSetSetName](scnetworksetsetname%28____%29.md): Stores the user-specified name for the specified set.
- [SCNetworkSetSetServiceOrder](scnetworksetsetserviceorder%28____%29.md): Stores the user-specified ordering of network services for the specified set.
