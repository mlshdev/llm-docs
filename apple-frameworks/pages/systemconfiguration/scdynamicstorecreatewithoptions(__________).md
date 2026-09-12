> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstorecreatewithoptions(_:_:_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scdynamicstorecreatewithoptions(_:_:_:_:_:))

# SCDynamicStoreCreateWithOptions(\_:\_:\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Creates a new session used to interact with the dynamic store maintained by the System Configuration server.

## Declaration

```swift
func SCDynamicStoreCreateWithOptions(_ allocator: CFAllocator?, _ name: CFString, _ storeOptions: CFDictionary?, _ callout: SCDynamicStoreCallBack?, _ context: UnsafeMutablePointer<SCDynamicStoreContext>?) -> SCDynamicStore?
```

## Parameters

- `allocator`: The allocator that should be used to allocate memory for the local dynamic store object. This parameter may be `NULL` in which case the current default allocator is used. If this value is not a valid [CFAllocator](../corefoundation/cfallocator.md), the behavior is undefined.
- `name`: The name of the calling process or plug-in of the caller.
- `storeOptions`: A dictionary of options for the dynamic store session (such as whether all keys added or set into the dynamic store should be per-session keys). Pass `NULL` if no options are desired.

  Currently, the available options are:

  | Key | Value |
  | --- | --- |
  | [kSCDynamicStoreUseSessionKeys](kscdynamicstoreusesessionkeys.md) | `CFBooleanRef` |
- `callout`: The function to be called when a watched value in the dynamic store is changed. Pass `NULL` if no callouts are desired.
- `context`: The context associated with the callout. See [SCDynamicStoreContext](scdynamicstorecontext.md) for more information about this value.

<a id="return-value"></a>

## Return Value

A reference to the new dynamic store session. You must release the returned value.

## See Also

### Creating a Dynamic Store Session

- [SCDynamicStoreCreate(\_:\_:\_:\_:)](scdynamicstorecreate%28________%29.md): Creates a new session used to interact with the dynamic store maintained by the System Configuration server.

# SCDynamicStoreCreateWithOptions (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Creates a new session used to interact with the dynamic store maintained by the System Configuration server.

## Declaration

```objectivec
SCDynamicStoreRefSCDynamicStoreCreateWithOptions(CFAllocatorRef allocator, CFStringRef name, CFDictionaryRef storeOptions, SCDynamicStoreCallBack callout, SCDynamicStoreContext *context);
```

## Parameters

- `allocator`: The allocator that should be used to allocate memory for the local dynamic store object. This parameter may be `NULL` in which case the current default allocator is used. If this value is not a valid [CFAllocatorRef](../corefoundation/cfallocator.md), the behavior is undefined.
- `name`: The name of the calling process or plug-in of the caller.
- `storeOptions`: A dictionary of options for the dynamic store session (such as whether all keys added or set into the dynamic store should be per-session keys). Pass `NULL` if no options are desired.

  Currently, the available options are:

  | Key | Value |
  | --- | --- |
  | [kSCDynamicStoreUseSessionKeys](kscdynamicstoreusesessionkeys.md) | `CFBooleanRef` |
- `callout`: The function to be called when a watched value in the dynamic store is changed. Pass `NULL` if no callouts are desired.
- `context`: The context associated with the callout. See [SCDynamicStoreContext](scdynamicstorecontext.md) for more information about this value.

<a id="return-value"></a>

## Return Value

A reference to the new dynamic store session. You must release the returned value.

## See Also

### Creating a Dynamic Store Session

- [SCDynamicStoreCreate](scdynamicstorecreate%28________%29.md): Creates a new session used to interact with the dynamic store maintained by the System Configuration server.
