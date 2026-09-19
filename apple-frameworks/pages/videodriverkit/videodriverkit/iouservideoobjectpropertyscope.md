> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoobjectpropertyscope

# IOUserVideoObjectPropertyScope

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 27.0+ beta

A four character code which, along with the selector and element, identifies a specific piece of information about a video object.

## Declaration

```objectivec
enum IOUserVideoObjectPropertyScope : uint32_t;
```

<a id="overview"></a>

## Overview

The scope specifies the section of the object in which to look for the property, such as input, output, or global. Note that each class has a different set of scopes. A subclass inherits its superclass’s set of scopes.

## Topics

### Property scopes

- [Global](iouservideoobjectpropertyscope/global.md): Beta. The scope for properties that apply to the object as a whole.
- [Input](iouservideoobjectpropertyscope/input.md): Beta. The scope for properties that apply to the input side of an object.
- [Output](iouservideoobjectpropertyscope/output.md): Beta. The scope for properties that apply to the output side of an object.
- [PlayThrough](iouservideoobjectpropertyscope/playthrough.md): Beta. The scope for properties that apply to the play-through side of an object.

## See Also

### Creating a Boolean control

- [Create](../iouservideobooleancontrol/create.md): Beta. A static factory method that allocates and initializes a video Boolean control.
- [init](../iouservideobooleancontrol/init.md): Beta. Initializes an IOUserVideoBooleanControl.
- [IOUserVideoDriver](../iouservideodriver.md): Beta. A video driver.
- [IOUserVideoObjectPropertyElement](iouservideoobjectpropertyelement.md): Beta. An integer that identifies, along with the property selector and scope, a specific piece of information about a video object.
