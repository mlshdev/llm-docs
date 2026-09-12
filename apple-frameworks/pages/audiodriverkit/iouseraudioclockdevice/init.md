> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioclockdevice/init](https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/init)

# init

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Initializes an instance of the audio clock device class.

## Declaration

```objectivec
virtual bool init(IOUserAudioDriver *in_driver, bool in_supports_prewarming, OSString *in_device_uid, OSString *in_model_uid, OSString *in_manufacturer_uid, uint32_t in_zero_timestamp_period);
```

## Parameters

- `in_driver`: The [IOUserAudioDriver](../iouseraudiodriver.md) that owns this object.
- `in_supports_prewarming`: A Boolean value that specifies whether the device supports prewarming I/O.
- `in_device_uid`: A pointer to an [OSString](../../driverkit/osstring.md) containing the device UID.
- `in_model_uid`: A pointer to an [OSString](../../driverkit/osstring.md) containing the model UID.
- `in_manufacturer_uid`: A pointer to an [OSString](../../driverkit/osstring.md) containing the manufacturer UID.
- `in_zero_timestamp_period`: A [uint32_t](https://developer.apple.com/documentation/kernel/uint32_t) whose value indicates the number of sample frames the host can expect between successive timestamps returned from [GetZeroTimestampPeriod](getzerotimestampperiod.md). In other words, if [GetZeroTimestampPeriod](getzerotimestampperiod.md) returns a sample time of `x`, the host can expect that the next valid timestamp it receives will be `x + in_zero_timestamp_period`.

<a id="return-value"></a>

## Return Value

`true` if initialization succeeded; `false` otherwise.

## See Also

### Creating a Clock Device

- [Create](create.md): Allocates and initializes an instance of the audio clock device class.
- [IOUserAudioDriver](../iouseraudiodriver.md): A DriverKit provider object that manages communications with an audio device.
