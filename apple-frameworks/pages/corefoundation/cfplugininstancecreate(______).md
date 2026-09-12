> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfplugininstancecreate(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfplugininstancecreate(_:_:_:))

# CFPlugInInstanceCreate(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a `CFPlugIn` instance of a given type using a given factory.

## Declaration

```swift
func CFPlugInInstanceCreate(_ allocator: CFAllocator!, _ factoryUUID: CFUUID!, _ typeUUID: CFUUID!) -> UnsafeMutableRawPointer!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the default allocator.
- `factoryUUID`: The UUID representing the factory function to use to create a plug-in of the given type.
- `typeUUID`: The UUID type.

<a id="return-value"></a>

## Return Value

Returns the IUnknown interface for the new plug-in.

<a id="Discussion"></a>

## Discussion

The plug-in host uses this function to create an instance of the given type. Unless the plug-in is using dynamic registration, this function causes the plug-in’s code to be loaded into memory.

## See Also

### Creating Plug-ins

- [CFPlugInCreate(\_:\_:)](cfplugincreate%28____%29.md): Creates a CFPlugIn given its URL.

# CFPlugInInstanceCreate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a `CFPlugIn` instance of a given type using a given factory.

## Declaration

```objectivec
extern void *CFPlugInInstanceCreate(CFAllocatorRef allocator, CFUUIDRef factoryUUID, CFUUIDRef typeUUID);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the default allocator.
- `factoryUUID`: The UUID representing the factory function to use to create a plug-in of the given type.
- `typeUUID`: The UUID type.

<a id="return-value"></a>

## Return Value

Returns the IUnknown interface for the new plug-in.

<a id="Discussion"></a>

## Discussion

The plug-in host uses this function to create an instance of the given type. Unless the plug-in is using dynamic registration, this function causes the plug-in’s code to be loaded into memory.

## See Also

### Creating Plug-ins

- [CFPlugInCreate](cfplugincreate%28____%29.md): Creates a CFPlugIn given its URL.
