> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodevice/create](https://developer.apple.com/documentation/videodriverkit/iouservideodevice/create)

# Create

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit 27.0+

A static factory method that allocates and initializes a video device.

## Declaration

```objectivec
static OSSharedPtr<IOUserVideoDevice> Create(IOUserVideoDriver *in_driver, OSString *in_device_uid, OSString *in_model_uid, OSString *in_manufacturer_uid);
```

## Parameters

- `in_driver`: The IOUserVideoDriver that owns this object.
- `in_device_uid`: OSString pointer for the video device unique identifier.
- `in_model_uid`: OSString pointer for the video device model unique identifier.
- `in_manufacturer_uid`: OSString pointer for the video device manufacturer unique identifier. \*

<a id="return-value"></a>

## Return Value

OSSharedPtr to an IOUserVideoDevice if it was successfully allocated and initialized

<a id="discussion"></a>

## Discussion

If IOUserVideoDevice is subclassed to override behavior, don’t use this method to allocate or initialize the custom subclass.

## See Also

### Creating a video device

- [init](init.md): Initializes a video device.
- [IOUserVideoDriver](../iouservideodriver.md): A video driver.
