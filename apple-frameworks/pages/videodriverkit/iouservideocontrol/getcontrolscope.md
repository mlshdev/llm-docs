> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideocontrol/getcontrolscope

# GetControlScope

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Returns an object property scope for the control.

## Declaration

```objectivec
IOUserVideoObjectPropertyScope GetControlScope();
```

## See Also

### Working with control properties

- [IOUserVideoObjectPropertyScope](../videodriverkit/iouservideoobjectpropertyscope.md): Beta. A four character code which, along with the selector and element, identifies a specific piece of information about a video object.
- [IOUserVideoObjectPropertyElement](../videodriverkit/iouservideoobjectpropertyelement.md): Beta. An integer that identifies, along with the property selector and scope, a specific piece of information about a video object.
- [GetControlElement](getcontrolelement.md): Beta. Returns an object property element for the control.
- [GetIsSettable](getissettable.md): Beta. Returns a Boolean value indicating if the control value can be set.
