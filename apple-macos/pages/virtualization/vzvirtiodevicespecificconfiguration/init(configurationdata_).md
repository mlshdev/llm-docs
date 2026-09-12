> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiodevicespecificconfiguration/init(configurationdata:)](https://developer.apple.com/documentation/virtualization/vzvirtiodevicespecificconfiguration/init(configurationdata:))

# init(configurationData:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Initializes a Virtio device specific configuration object with the configuration data you provide

## Declaration

```swift
init(configurationData: Data)
```

## Parameters

- `configurationData`: The device-specific configuration that you provide serialized into an [NSData](https://developer.apple.com/documentation/foundation/nsdata) object.

# initWithConfigurationData: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Initializes a Virtio device specific configuration object with the configuration data you provide

## Declaration

```objectivec
- (instancetype) initWithConfigurationData:(NSData *) configurationData;
```

## Parameters

- `configurationData`: The device-specific configuration that you provide serialized into an [NSData](https://developer.apple.com/documentation/foundation/nsdata) object.
