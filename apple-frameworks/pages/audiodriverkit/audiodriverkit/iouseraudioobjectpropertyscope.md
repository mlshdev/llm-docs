> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/audiodriverkit/iouseraudioobjectpropertyscope](https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudioobjectpropertyscope)

# IOUserAudioObjectPropertyScope

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 21.0+

A four character code which, along with the selector and element, identify a specific piece of information about an audio object.

## Declaration

```objectivec
enum IOUserAudioObjectPropertyScope : uint32_t;
```

<a id="Discussion"></a>

## Discussion

The scope specifies the section of the object in which to look for the property, such as input, output, global, or pass-through. Each class has a different set of scopes. A subclass inherits its superclass’s set of scopes.

## Topics

### Property Scopes

- [Global](iouseraudioobjectpropertyscope/global.md): The scope for properties that apply to the object as a whole.
- [Input](iouseraudioobjectpropertyscope/input.md): The scope for properties that apply to the input side of an object.
- [Output](iouseraudioobjectpropertyscope/output.md): The scope for properties that apply to the output side of an object.
- [PlayThrough](iouseraudioobjectpropertyscope/playthrough.md): The scope for properties that apply to the play-through side of an object.

## See Also

### Creating a Boolean Control

- [Create](../iouseraudiobooleancontrol/create.md): Allocates and initializes an instance of the Boolean control class.
- [init](../iouseraudiobooleancontrol/init.md): Initializes an instance of a Boolean control.
- [IOUserAudioObjectPropertyElement](iouseraudioobjectpropertyelement.md): A four character code which, along with the selector and scope, identify a specific piece of information about an audio object.
