> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiodriverkit/iouseraudiostream/getterminaltype

# GetTerminalType

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets the terminal type of the stream.

## Declaration

```objectivec
IOUserAudioStreamTerminalType GetTerminalType();
```

<a id="return-value"></a>

## Return Value

The stream’s terminal type.

<a id="Discussion"></a>

## Discussion

This method synchronizes by using the work queue created by the object.

## See Also

### Working with Stream Terminals

- [SetTerminalType](setterminaltype.md): Sets the terminal type of the stream.
- [IOUserAudioStreamTerminalType](../audiodriverkit/iouseraudiostreamterminaltype.md): Constants that describe the terminal type of an audio stream.
