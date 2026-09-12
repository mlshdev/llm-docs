> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoselectorcontrol/getbaseclassid](https://developer.apple.com/documentation/videodriverkit/iouservideoselectorcontrol/getbaseclassid)

# GetBaseClassID

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the class identifier of the base class object.

## Declaration

```objectivec
virtual IOUserVideoClassID GetBaseClassID();
```

<a id="return-value"></a>

## Return Value

A video class identifier.

<a id="discussion"></a>

## Discussion

This method overrides the base class’s implementation.

## See Also

### Getting information about the class

- [GetClassID](getclassid.md): Gets the class identifier of the object.
- [IOUserVideoClassID](../videodriverkit/iouservideoclassid.md): Video class identifiers of an video object.
