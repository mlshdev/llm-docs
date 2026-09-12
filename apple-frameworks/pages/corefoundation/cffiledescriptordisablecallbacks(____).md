> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cffiledescriptordisablecallbacks(_:_:)](https://developer.apple.com/documentation/corefoundation/cffiledescriptordisablecallbacks(_:_:))

# CFFileDescriptorDisableCallBacks(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Disables callbacks for a given CFFileDescriptor.

## Declaration

```swift
func CFFileDescriptorDisableCallBacks(_ f: CFFileDescriptor!, _ callBackTypes: CFOptionFlags)
```

## Parameters

- `f`: A CFFileDescriptor.
- `callBackTypes`: A bitmask that specifies which callbacks to disable (see [Callback Identifiers](1477595-callback-identifiers.md) for possible components).

## See Also

### Managing Callbacks

- [CFFileDescriptorEnableCallBacks(\_:\_:)](cffiledescriptorenablecallbacks%28____%29.md): Enables callbacks for a given CFFileDescriptor.

# CFFileDescriptorDisableCallBacks (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Disables callbacks for a given CFFileDescriptor.

## Declaration

```objectivec
extern void CFFileDescriptorDisableCallBacks(CFFileDescriptorRef f, CFOptionFlags callBackTypes);
```

## Parameters

- `f`: A CFFileDescriptor.
- `callBackTypes`: A bitmask that specifies which callbacks to disable (see [Callback Identifiers](1477595-callback-identifiers.md) for possible components).

## See Also

### Managing Callbacks

- [CFFileDescriptorEnableCallBacks](cffiledescriptorenablecallbacks%28____%29.md): Enables callbacks for a given CFFileDescriptor.
