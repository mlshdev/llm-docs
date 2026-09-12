> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfplugininstancecreatewithinstancedatasize(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfplugininstancecreatewithinstancedatasize(_:_:_:_:_:))

# CFPlugInInstanceCreateWithInstanceDataSize(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Not recommended.

> Use UUID-based plugins instead

## Declaration

```swift
func CFPlugInInstanceCreateWithInstanceDataSize(_ allocator: CFAllocator!, _ instanceDataSize: CFIndex, _ deallocateInstanceFunction: CFPlugInInstanceDeallocateInstanceDataFunction!, _ factoryName: CFString!, _ getInterfaceFunction: CFPlugInInstanceGetInterfaceFunction!) -> CFPlugInInstance!
```

## See Also

### Deprecated

- [CFPlugInInstanceGetFactoryName(\_:)](cfplugininstancegetfactoryname%28__%29.md): Deprecated. Not recommended.
- [CFPlugInInstanceGetInstanceData(\_:)](cfplugininstancegetinstancedata%28__%29.md): Deprecated. Not recommended.
- [CFPlugInInstanceGetInterfaceFunctionTable(\_:\_:\_:)](cfplugininstancegetinterfacefunctiontable%28______%29.md): Deprecated. Not recommended.
- [CFPlugInInstanceGetTypeID()](cfplugininstancegettypeid%28%29.md): Deprecated. Not recommended.

# CFPlugInInstanceCreateWithInstanceDataSize (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Not recommended.

> Use UUID-based plugins instead

## Declaration

```objectivec
extern CFPlugInInstanceRefCFPlugInInstanceCreateWithInstanceDataSize(CFAllocatorRef allocator, CFIndex instanceDataSize, CFPlugInInstanceDeallocateInstanceDataFunction deallocateInstanceFunction, CFStringRef factoryName, CFPlugInInstanceGetInterfaceFunction getInterfaceFunction);
```

## See Also

### Deprecated

- [CFPlugInInstanceGetFactoryName](cfplugininstancegetfactoryname%28__%29.md): Deprecated. Not recommended.
- [CFPlugInInstanceGetInstanceData](cfplugininstancegetinstancedata%28__%29.md): Deprecated. Not recommended.
- [CFPlugInInstanceGetInterfaceFunctionTable](cfplugininstancegetinterfacefunctiontable%28______%29.md): Deprecated. Not recommended.
- [CFPlugInInstanceGetTypeID](cfplugininstancegettypeid%28%29.md): Deprecated. Not recommended.
