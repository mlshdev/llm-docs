> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpluginunloadfunction](https://developer.apple.com/documentation/corefoundation/cfpluginunloadfunction)

# CFPlugInUnloadFunction (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback function that is called, if present, just before a plug-in’s code is unloaded.

## Declaration

```swift
typealias CFPlugInUnloadFunction = (CFPlugIn?) -> Void
```

## Parameters

- `plugIn`: The `CFPlugIn` object that is about to be unloaded from memory. When writing in C++, this parameter functions as a `this` pointer for the plug-in.

## See Also

### Callbacks

- [CFPlugInDynamicRegisterFunction](cfplugindynamicregisterfunction.md): A callback which provides a plug-in the opportunity to dynamically register its types with a host.
- [CFPlugInFactoryFunction](cfpluginfactoryfunction.md): Callback function that a plug-in author must implement to create a plug-in instance.

# CFPlugInUnloadFunction (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback function that is called, if present, just before a plug-in’s code is unloaded.

## Declaration

```objectivec
typedef void (*)(struct __CFBundle *) CFPlugInUnloadFunction;
```

## Parameters

- `plugIn`: The `CFPlugIn` object that is about to be unloaded from memory. When writing in C++, this parameter functions as a `this` pointer for the plug-in.

## See Also

### Callbacks

- [CFPlugInDynamicRegisterFunction](cfplugindynamicregisterfunction.md): A callback which provides a plug-in the opportunity to dynamically register its types with a host.
- [CFPlugInFactoryFunction](cfpluginfactoryfunction.md): Callback function that a plug-in author must implement to create a plug-in instance.
