> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfplugincreate(_:_:)](https://developer.apple.com/documentation/corefoundation/cfplugincreate(_:_:))

# CFPlugInCreate(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFPlugIn given its URL.

## Declaration

```swift
func CFPlugInCreate(_ allocator: CFAllocator!, _ plugInURL: CFURL!) -> CFPlugIn!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new plug-in. Pass `NULL` or kCFAllocatorDefault to use the default allocator.
- `plugInURL`: The location of the plug-in.

<a id="return-value"></a>

## Return Value

A new plug-in. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating Plug-ins

- [CFPlugInInstanceCreate(\_:\_:\_:)](cfplugininstancecreate%28______%29.md): Creates a `CFPlugIn` instance of a given type using a given factory.

# CFPlugInCreate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFPlugIn given its URL.

## Declaration

```objectivec
extern CFPlugInRefCFPlugInCreate(CFAllocatorRef allocator, CFURLRef plugInURL);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new plug-in. Pass `NULL` or kCFAllocatorDefault to use the default allocator.
- `plugInURL`: The location of the plug-in.

<a id="return-value"></a>

## Return Value

A new plug-in. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating Plug-ins

- [CFPlugInInstanceCreate](cfplugininstancecreate%28______%29.md): Creates a `CFPlugIn` instance of a given type using a given factory.
