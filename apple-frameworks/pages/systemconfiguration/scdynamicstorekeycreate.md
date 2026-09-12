> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstorekeycreate](https://developer.apple.com/documentation/systemconfiguration/scdynamicstorekeycreate)

# SCDynamicStoreKeyCreate

**Interface language:** Objective-C

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Creates a dynamic store key using the specified format.

## Declaration

```objectivec
CFStringRefSCDynamicStoreKeyCreate(CFAllocatorRef allocator, CFStringRef fmt, ...);
```

## Parameters

- `allocator`: The allocator that should be used to allocate memory for this key. This parameter may be `NULL` in which case the current default allocator is used. If this value is not a valid [CFAllocatorRef](../corefoundation/cfallocator.md), the behavior is undefined.
- `fmt`: The description of the format for this key.

<a id="return-value"></a>

## Return Value

A string containing the formatted key.

## See Also

### Group

- [SCDynamicStoreKeyCreateNetworkGlobalEntity](scdynamicstorekeycreatenetworkglobalentity%28______%29.md): Creates a dynamic store key that can be used to access a specific global (as opposed to a per-service or per-interface) network configuration entity.
- [SCDynamicStoreKeyCreateNetworkInterface](scdynamicstorekeycreatenetworkinterface%28____%29.md): Creates a dynamic store key that can be used to access the network interface configuration information in the dynamic store.
- [SCDynamicStoreKeyCreateNetworkInterfaceEntity](scdynamicstorekeycreatenetworkinterfaceentity%28________%29.md): Creates a dynamic store key that can be used to access the per-interface network configuration information in the dynamic store.
- [SCDynamicStoreKeyCreateNetworkServiceEntity](scdynamicstorekeycreatenetworkserviceentity%28________%29.md): Creates a dynamic store key that can be used to access the per-service network configuration information.
- [SCDynamicStoreKeyCreateComputerName](scdynamicstorekeycreatecomputername%28__%29.md): Creates a key that can be used to receive notifications when the current computer name changes.
- [SCDynamicStoreKeyCreateConsoleUser](scdynamicstorekeycreateconsoleuser%28__%29.md): Creates a key that can be used to receive notifications when the current console user changes.
- [SCDynamicStoreKeyCreateHostNames](scdynamicstorekeycreatehostnames%28__%29.md): Creates a key that can be used to receive notifications when the `HostNames` entity changes.
- [SCDynamicStoreKeyCreateLocation](scdynamicstorekeycreatelocation%28__%29.md): Creates a key that can be used to receive notifications when the location identifier changes.
- [SCDynamicStoreKeyCreateProxies](scdynamicstorekeycreateproxies%28__%29.md): Creates a key that can be used to receive notifications when the current network proxy settings are changed.
