> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoobjectpropertyselector

# IOUserVideoObjectPropertySelector

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit 27.0+ beta

A four character code which, along with the scope and element, specifies a specific piece of information about a video object.

## Declaration

```objectivec
typedef uint32_t IOUserVideoObjectPropertySelector;
```

<a id="discussion"></a>

## Discussion

The property selector specifies the general classification of the property such as volume, stream format, or latency. Note that each class has a different set of selectors. A subclass inherits its superclass’s set of selectors, although it may not implement them all.

## See Also

### Communicating with the host

- [PropertiesChanged](../iouservideodriver/propertieschanged.md): Beta. This method informs the host when the state of an driver’s object changes.
- [IOUserVideoObjectID](iouservideoobjectid.md): Beta. A handle for a a specific video object.
