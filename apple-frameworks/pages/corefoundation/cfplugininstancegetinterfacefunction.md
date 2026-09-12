> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfplugininstancegetinterfacefunction](https://developer.apple.com/documentation/corefoundation/cfplugininstancegetinterfacefunction)

# CFPlugInInstanceGetInterfaceFunction (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Not recommended.

## Declaration

```swift
typealias CFPlugInInstanceGetInterfaceFunction = (CFPlugInInstance?, CFString?, UnsafeMutablePointer<UnsafeMutableRawPointer?>?) -> DarwinBoolean
```

## See Also

### Callbacks

- [CFPlugInInstanceDeallocateInstanceDataFunction](cfplugininstancedeallocateinstancedatafunction.md): Not recommended.

# CFPlugInInstanceGetInterfaceFunction (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Not recommended.

## Declaration

```objectivec
typedef unsigned char (*)(struct __CFPlugInInstance *, const struct __CFString *, void **) CFPlugInInstanceGetInterfaceFunction;
```

## See Also

### Callbacks

- [CFPlugInInstanceDeallocateInstanceDataFunction](cfplugininstancedeallocateinstancedatafunction.md): Not recommended.
