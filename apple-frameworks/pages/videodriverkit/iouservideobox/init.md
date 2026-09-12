> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideobox/init](https://developer.apple.com/documentation/videodriverkit/iouservideobox/init)

# init

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Initializes a video box.

## Declaration

```objectivec
virtual bool init(IOUserVideoDriver *in_driver, bool in_is_acquirable, OSString *in_box_uid);
```

## Parameters

- `in_is_acquirable`: Bool value
- `in_box_uid`: An OSString pointer for the box unique identifier

<a id="return-value"></a>

## Return Value

True on success.

<a id="discussion"></a>

## Discussion

Always pass in the IOUserVideoDriver and arguments. init() will always return false;

## See Also

### Creating a video box

- [Create](create.md): Static factory method to allocate and initialize an IOUserVideoBox.
- [IOUserVideoDriver](../iouservideodriver.md): A video driver.
