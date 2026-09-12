> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiostream/setterminaltype](https://developer.apple.com/documentation/audiodriverkit/iouseraudiostream/setterminaltype)

# SetTerminalType

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Sets the terminal type of the stream.

## Declaration

```objectivec
kern_return_t SetTerminalType(IOUserAudioStreamTerminalType in_terminal_type);
```

## Parameters

- `in_terminal_type`: The [IOUserAudioStreamTerminalType](../audiodriverkit/iouseraudiostreamterminaltype.md) to set.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

If successful, changing the available formats sends a notification to the host to update the object state.

## See Also

### Working with Stream Terminals

- [GetTerminalType](getterminaltype.md): Gets the terminal type of the stream.
- [IOUserAudioStreamTerminalType](../audiodriverkit/iouseraudiostreamterminaltype.md): Constants that describe the terminal type of an audio stream.
