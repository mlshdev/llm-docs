> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cffiledescriptorenablecallbacks(_:_:)

# CFFileDescriptorEnableCallBacks(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Enables callbacks for a given CFFileDescriptor.

## Declaration

```swift
func CFFileDescriptorEnableCallBacks(_ f: CFFileDescriptor!, _ callBackTypes: CFOptionFlags)
```

## Parameters

- `f`: A CFFileDescriptor.
- `callBackTypes`: A bitmask that specifies which callbacks to enable (see [Callback Identifiers](1477595-callback-identifiers.md) for possible components).

## See Also

### Managing Callbacks

- [CFFileDescriptorDisableCallBacks(\_:\_:)](cffiledescriptordisablecallbacks%28____%29.md): Disables callbacks for a given CFFileDescriptor.

# CFFileDescriptorEnableCallBacks (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Enables callbacks for a given CFFileDescriptor.

## Declaration

```objectivec
extern void CFFileDescriptorEnableCallBacks(CFFileDescriptorRef f, CFOptionFlags callBackTypes);
```

## Parameters

- `f`: A CFFileDescriptor.
- `callBackTypes`: A bitmask that specifies which callbacks to enable (see [Callback Identifiers](1477595-callback-identifiers.md) for possible components).

## See Also

### Managing Callbacks

- [CFFileDescriptorDisableCallBacks](cffiledescriptordisablecallbacks%28____%29.md): Disables callbacks for a given CFFileDescriptor.
