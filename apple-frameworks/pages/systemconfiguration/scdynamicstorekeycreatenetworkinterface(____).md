> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstorekeycreatenetworkinterface(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scdynamicstorekeycreatenetworkinterface(_:_:))

# SCDynamicStoreKeyCreateNetworkInterface(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Creates a dynamic store key that can be used to access the network interface configuration information in the dynamic store.

## Declaration

```swift
func SCDynamicStoreKeyCreateNetworkInterface(_ allocator: CFAllocator?, _ domain: CFString) -> CFString
```

## Parameters

- `allocator`: The allocator that should be used to allocate memory for this key. This parameter may be `NULL` in which case the current default allocator is used. If this value is not a valid [CFAllocator](../corefoundation/cfallocator.md), the behavior is undefined.
- `domain`: The desired domain, such as the requested configuration or the current state.

<a id="return-value"></a>

## Return Value

A string containing the formatted key.

## See Also

### Group

- [SCDynamicStoreKeyCreateNetworkGlobalEntity(\_:\_:\_:)](scdynamicstorekeycreatenetworkglobalentity%28______%29.md): Creates a dynamic store key that can be used to access a specific global (as opposed to a per-service or per-interface) network configuration entity.
- [SCDynamicStoreKeyCreateNetworkInterfaceEntity(\_:\_:\_:\_:)](scdynamicstorekeycreatenetworkinterfaceentity%28________%29.md): Creates a dynamic store key that can be used to access the per-interface network configuration information in the dynamic store.
- [SCDynamicStoreKeyCreateNetworkServiceEntity(\_:\_:\_:\_:)](scdynamicstorekeycreatenetworkserviceentity%28________%29.md): Creates a dynamic store key that can be used to access the per-service network configuration information.
- [SCDynamicStoreKeyCreateComputerName(\_:)](scdynamicstorekeycreatecomputername%28__%29.md): Creates a key that can be used to receive notifications when the current computer name changes.
- [SCDynamicStoreKeyCreateConsoleUser(\_:)](scdynamicstorekeycreateconsoleuser%28__%29.md): Creates a key that can be used to receive notifications when the current console user changes.
- [SCDynamicStoreKeyCreateHostNames(\_:)](scdynamicstorekeycreatehostnames%28__%29.md): Creates a key that can be used to receive notifications when the `HostNames` entity changes.
- [SCDynamicStoreKeyCreateLocation(\_:)](scdynamicstorekeycreatelocation%28__%29.md): Creates a key that can be used to receive notifications when the location identifier changes.
- [SCDynamicStoreKeyCreateProxies(\_:)](scdynamicstorekeycreateproxies%28__%29.md): Creates a key that can be used to receive notifications when the current network proxy settings are changed.

# SCDynamicStoreKeyCreateNetworkInterface (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Creates a dynamic store key that can be used to access the network interface configuration information in the dynamic store.

## Declaration

```objectivec
CFStringRefSCDynamicStoreKeyCreateNetworkInterface(CFAllocatorRef allocator, CFStringRef domain);
```

## Parameters

- `allocator`: The allocator that should be used to allocate memory for this key. This parameter may be `NULL` in which case the current default allocator is used. If this value is not a valid [CFAllocatorRef](../corefoundation/cfallocator.md), the behavior is undefined.
- `domain`: The desired domain, such as the requested configuration or the current state.

<a id="return-value"></a>

## Return Value

A string containing the formatted key.

## See Also

### Group

- [SCDynamicStoreKeyCreate](scdynamicstorekeycreate.md): Creates a dynamic store key using the specified format.
- [SCDynamicStoreKeyCreateNetworkGlobalEntity](scdynamicstorekeycreatenetworkglobalentity%28______%29.md): Creates a dynamic store key that can be used to access a specific global (as opposed to a per-service or per-interface) network configuration entity.
- [SCDynamicStoreKeyCreateNetworkInterfaceEntity](scdynamicstorekeycreatenetworkinterfaceentity%28________%29.md): Creates a dynamic store key that can be used to access the per-interface network configuration information in the dynamic store.
- [SCDynamicStoreKeyCreateNetworkServiceEntity](scdynamicstorekeycreatenetworkserviceentity%28________%29.md): Creates a dynamic store key that can be used to access the per-service network configuration information.
- [SCDynamicStoreKeyCreateComputerName](scdynamicstorekeycreatecomputername%28__%29.md): Creates a key that can be used to receive notifications when the current computer name changes.
- [SCDynamicStoreKeyCreateConsoleUser](scdynamicstorekeycreateconsoleuser%28__%29.md): Creates a key that can be used to receive notifications when the current console user changes.
- [SCDynamicStoreKeyCreateHostNames](scdynamicstorekeycreatehostnames%28__%29.md): Creates a key that can be used to receive notifications when the `HostNames` entity changes.
- [SCDynamicStoreKeyCreateLocation](scdynamicstorekeycreatelocation%28__%29.md): Creates a key that can be used to receive notifications when the location identifier changes.
- [SCDynamicStoreKeyCreateProxies](scdynamicstorekeycreateproxies%28__%29.md): Creates a key that can be used to receive notifications when the current network proxy settings are changed.
