> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/init

# init

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Initializes a video clock device.

## Declaration

```objectivec
virtual bool init(IOUserVideoDriver *in_driver, OSString *in_device_uid, OSString *in_model_uid, OSString *in_manufacturer_uid);
```

## Parameters

- `in_driver`: The IOUserVideoDriver that owns this object.
- `in_device_uid`: OSString pointer for the clock device unique identifier
- `in_model_uid`: OSString pointer for the clock device model unique identifier
- `in_manufacturer_uid`: OSString pointer for the clock device manufacturer unique identifier \*

<a id="return-value"></a>

## Return Value

True on success.

## See Also

### Creating a clock device

- [Create](create.md): Beta. A static factory method that allocates and initializes a video clock device.
- [IOUserVideoDriver](../iouservideodriver.md): Beta. A video driver.
