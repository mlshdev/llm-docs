> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstream/clocktype-swift.enum/custom](https://developer.apple.com/documentation/coremediaio/cmioextensionstream/clocktype-swift.enum/custom)

# CMIOExtensionStream.ClockType.custom (Swift)

**Framework:** Core Media I/O  
**Kind:** Case  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Indicates that the stream’s clock is specific to the device hosting the stream.

## Declaration

```swift
case custom
```

<a id="Discussion"></a>

## Discussion

The extension doesn’t set this type directly. Instead, the system sets it automatically when you specify a [CMIOExtensionStreamCustomClockConfiguration](../../cmioextensionstreamcustomclockconfiguration.md) when you create a [CMIOExtensionStream](../../cmioextensionstream.md).

## See Also

### Clock Types

- [CMIOExtensionStream.ClockType.hostTime](hosttime.md): Indicates that the stream uses the host time clock.
- [CMIOExtensionStream.ClockType.linkedCoreAudioDeviceUID](linkedcoreaudiodeviceuid.md): Indicates that the stream uses the clock of the linked Core Audio device.

# CMIOExtensionStreamClockTypeCustom (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Indicates that the stream’s clock is specific to the device hosting the stream.

## Declaration

```objectivec
CMIOExtensionStreamClockTypeCustom
```

<a id="Discussion"></a>

## Discussion

The extension doesn’t set this type directly. Instead, the system sets it automatically when you specify a [CMIOExtensionStreamCustomClockConfiguration](../../cmioextensionstreamcustomclockconfiguration.md) when you create a [CMIOExtensionStream](../../cmioextensionstream.md).

## See Also

### Clock Types

- [CMIOExtensionStreamClockTypeHostTime](hosttime.md): Indicates that the stream uses the host time clock.
- [CMIOExtensionStreamClockTypeLinkedCoreAudioDeviceUID](linkedcoreaudiodeviceuid.md): Indicates that the stream uses the clock of the linked Core Audio device.
