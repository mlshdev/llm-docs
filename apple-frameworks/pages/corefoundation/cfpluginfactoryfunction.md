> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpluginfactoryfunction](https://developer.apple.com/documentation/corefoundation/cfpluginfactoryfunction)

# CFPlugInFactoryFunction (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback function that a plug-in author must implement to create a plug-in instance.

## Declaration

```swift
typealias CFPlugInFactoryFunction = (CFAllocator?, CFUUID?) -> UnsafeMutableRawPointer?
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the default allocator.
- `typeUUID`: The UUID type to instantiate.

<a id="Discussion"></a>

## Discussion

The plug-in author’s implementation of this function is registered with `CFPlugIn` either statically in the plug-in’s information property list, or dynamically. This function is executed as a result of a call to [CFPlugInInstanceCreate(\_:\_:\_:)](cfplugininstancecreate%28______%29.md) by the plug-in host.

## See Also

### Callbacks

- [CFPlugInDynamicRegisterFunction](cfplugindynamicregisterfunction.md): A callback which provides a plug-in the opportunity to dynamically register its types with a host.
- [CFPlugInUnloadFunction](cfpluginunloadfunction.md): Callback function that is called, if present, just before a plug-in’s code is unloaded.

# CFPlugInFactoryFunction (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback function that a plug-in author must implement to create a plug-in instance.

## Declaration

```objectivec
typedef void *(*)(const struct __CFAllocator *, const struct __CFUUID *) CFPlugInFactoryFunction;
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the default allocator.
- `typeUUID`: The UUID type to instantiate.

<a id="Discussion"></a>

## Discussion

The plug-in author’s implementation of this function is registered with `CFPlugIn` either statically in the plug-in’s information property list, or dynamically. This function is executed as a result of a call to [CFPlugInInstanceCreate](cfplugininstancecreate%28______%29.md) by the plug-in host.

## See Also

### Callbacks

- [CFPlugInDynamicRegisterFunction](cfplugindynamicregisterfunction.md): A callback which provides a plug-in the opportunity to dynamically register its types with a host.
- [CFPlugInUnloadFunction](cfpluginunloadfunction.md): Callback function that is called, if present, just before a plug-in’s code is unloaded.
