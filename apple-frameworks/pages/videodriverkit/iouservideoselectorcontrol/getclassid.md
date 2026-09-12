> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoselectorcontrol/getclassid](https://developer.apple.com/documentation/videodriverkit/iouservideoselectorcontrol/getclassid)

# GetClassID

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the class identifier of the object.

## Declaration

```objectivec
virtual IOUserVideoClassID GetClassID();
```

<a id="return-value"></a>

## Return Value

A video class identifier.

<a id="discussion"></a>

## Discussion

This method overrides the base class’s implementation.

## See Also

### Getting information about the class

- [GetBaseClassID](getbaseclassid.md): Gets the class identifier of the base class object.
- [IOUserVideoClassID](../videodriverkit/iouservideoclassid.md): Video class identifiers of an video object.
