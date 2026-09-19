> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfplugininstancegetinterfacefunction

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
