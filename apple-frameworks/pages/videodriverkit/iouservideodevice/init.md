> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodevice/init](https://developer.apple.com/documentation/videodriverkit/iouservideodevice/init)

# init

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Initializes a video device.

## Declaration

```objectivec
virtual bool init(IOUserVideoDriver *in_driver, OSString *in_device_uid, OSString *in_model_uid, OSString *in_manufacturer_uid);
```

## Parameters

- `in_driver`: The IOUserVideoDriver that owns this object.
- `in_device_uid`: OSString pointer for the video device unique identifier.
- `in_model_uid`: OSString pointer for the video device model unique identifier.
- `in_manufacturer_uid`: OSString pointer for the video device manufacturer unique identifier. \*

<a id="return-value"></a>

## Return Value

True on success.

## See Also

### Creating a video device

- [Create](create.md): A static factory method that allocates and initializes a video device.
- [IOUserVideoDriver](../iouservideodriver.md): A video driver.
