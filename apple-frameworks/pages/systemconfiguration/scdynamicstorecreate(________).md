> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstorecreate(_:_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scdynamicstorecreate(_:_:_:_:))

# SCDynamicStoreCreate(\_:\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Creates a new session used to interact with the dynamic store maintained by the System Configuration server.

## Declaration

```swift
func SCDynamicStoreCreate(_ allocator: CFAllocator?, _ name: CFString, _ callout: SCDynamicStoreCallBack?, _ context: UnsafeMutablePointer<SCDynamicStoreContext>?) -> SCDynamicStore?
```

## Parameters

- `allocator`: The allocator that should be used to allocate memory for the local dynamic store object. This parameter may be `NULL` in which case the current default allocator is used. If this value is not a valid [CFAllocator](../corefoundation/cfallocator.md), the behavior is undefined.
- `name`: The name of the calling process or plug-in of the caller.
- `callout`: The function to be called when a watched value in the dynamic store is changed. Pass `NULL` if no callouts are desired.
- `context`: The context associated with the callout. See [SCDynamicStoreContext](scdynamicstorecontext.md) for more information about this value.

<a id="return-value"></a>

## Return Value

A reference to the new dynamic store session. You must release the returned value.

## See Also

### Creating a Dynamic Store Session

- [SCDynamicStoreCreateWithOptions(\_:\_:\_:\_:\_:)](scdynamicstorecreatewithoptions%28__________%29.md): Creates a new session used to interact with the dynamic store maintained by the System Configuration server.

# SCDynamicStoreCreate (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Creates a new session used to interact with the dynamic store maintained by the System Configuration server.

## Declaration

```objectivec
SCDynamicStoreRefSCDynamicStoreCreate(CFAllocatorRef allocator, CFStringRef name, SCDynamicStoreCallBack callout, SCDynamicStoreContext *context);
```

## Parameters

- `allocator`: The allocator that should be used to allocate memory for the local dynamic store object. This parameter may be `NULL` in which case the current default allocator is used. If this value is not a valid [CFAllocatorRef](../corefoundation/cfallocator.md), the behavior is undefined.
- `name`: The name of the calling process or plug-in of the caller.
- `callout`: The function to be called when a watched value in the dynamic store is changed. Pass `NULL` if no callouts are desired.
- `context`: The context associated with the callout. See [SCDynamicStoreContext](scdynamicstorecontext.md) for more information about this value.

<a id="return-value"></a>

## Return Value

A reference to the new dynamic store session. You must release the returned value.

## See Also

### Creating a Dynamic Store Session

- [SCDynamicStoreCreateWithOptions](scdynamicstorecreatewithoptions%28__________%29.md): Creates a new session used to interact with the dynamic store maintained by the System Configuration server.
