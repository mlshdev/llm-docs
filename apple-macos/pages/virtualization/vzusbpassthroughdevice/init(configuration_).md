> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzusbpassthroughdevice/init(configuration:)

# init(configuration:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 27.0+

## Declaration

```swift
init(configuration: VZUSBPassthroughDeviceConfiguration) throws
```

## Parameters

- `configuration`: The configuration of the USB passthrough device.

<a id="return-value"></a>

## Return Value

An initialized VZUSBPassthroughDevice on success, or nil on failure.

<a id="discussion"></a>

## Discussion

Initialize the USB passthrough device.

# initWithConfiguration:error: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

## Declaration

```objectivec
- (instancetype) initWithConfiguration:(VZUSBPassthroughDeviceConfiguration *) configuration error:(NSError **) error;
```

## Parameters

- `configuration`: The configuration of the USB passthrough device.
- `error`: If not nil, used to report errors if initialization fails.

<a id="return-value"></a>

## Return Value

An initialized VZUSBPassthroughDevice on success, or nil on failure.

<a id="discussion"></a>

## Discussion

Initialize the USB passthrough device.
