> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideobox/create](https://developer.apple.com/documentation/videodriverkit/iouservideobox/create)

# Create

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit 27.0+

Static factory method to allocate and initialize an IOUserVideoBox.

## Declaration

```objectivec
static OSSharedPtr<IOUserVideoBox> Create(IOUserVideoDriver *in_driver, bool in_is_acquirable, OSString *in_box_uid);
```

## Parameters

- `in_is_acquirable`: Bool value
- `in_box_uid`: An OSString pointer for the box unique identifier

<a id="return-value"></a>

## Return Value

OSSharedPtr to an IOUserVideoBox if it was successfully allocated and initialized

<a id="discussion"></a>

## Discussion

If IOUserVideoBox is subclassed to override behavior, don’t use this method to allocate or initialize the custom subclass.

## See Also

### Creating a video box

- [init](init.md): Initializes a video box.
- [IOUserVideoDriver](../iouservideodriver.md): A video driver.
