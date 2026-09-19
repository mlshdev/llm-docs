> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudioobjectpropertyselector

# IOUserAudioObjectPropertySelector

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit 21.0+

A four character code which, along with the scope and element, specific piece of information about an audio object.

## Declaration

```objectivec
typedef uint32_t IOUserAudioObjectPropertySelector;
```

<a id="Discussion"></a>

## Discussion

The property selector specifies the general classification of the property such as volume, stream format, or latency. Each class has a different set of selectors. A subclass inherits its superclass’s set of selectors, although it may not implement them all.

## See Also

### Communicating with the Host

- [PropertiesChanged](../iouseraudiodriver/propertieschanged.md): Informs the host when the state of an object in the driver changes.
