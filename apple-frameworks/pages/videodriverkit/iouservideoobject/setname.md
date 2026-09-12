> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoobject/setname](https://developer.apple.com/documentation/videodriverkit/iouservideoobject/setname)

# SetName

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sets the name of the video object.

## Declaration

```objectivec
kern_return_t SetName(OSString *in_name);
```

## Parameters

- `in_name`: OSString name to set.

<a id="discussion"></a>

## Discussion

If the object can change the name dynamically, the object sends a notification to the host to update the object state on success. The object’s work queue synchronizes access to the value.

## See Also

### Working with object names

- [GetName](getname.md): Gets the name of the video object.
