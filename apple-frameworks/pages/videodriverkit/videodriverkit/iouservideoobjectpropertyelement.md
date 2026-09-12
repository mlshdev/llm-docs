> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/videodriverkit/iouservideoobjectpropertyelement](https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoobjectpropertyelement)

# IOUserVideoObjectPropertyElement

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit 27.0+

An integer that identifies, along with the property selector and scope, a specific piece of information about a video object.

## Declaration

```objectivec
typedef uint32_t IOUserVideoObjectPropertyElement;
```

<a id="discussion"></a>

## Discussion

The element selects one of possibly many items in the section of the object in which to look for the property. Elements are number sequentially where 0 represents the main element. Elements are particular to an instance of a class, meaning that two instances can have different numbers of elements in the same scope. There is no inheritance of elements.

## See Also

### Creating a Boolean control

- [Create](../iouservideobooleancontrol/create.md): A static factory method that allocates and initializes a video Boolean control.
- [init](../iouservideobooleancontrol/init.md): Initializes an IOUserVideoBooleanControl.
- [IOUserVideoDriver](../iouservideodriver.md): A video driver.
- [IOUserVideoObjectPropertyScope](iouservideoobjectpropertyscope.md): A four character code which, along with the selector and element, identifies a specific piece of information about a video object.
