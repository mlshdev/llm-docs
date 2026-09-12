> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiobox/getuid](https://developer.apple.com/documentation/audiodriverkit/iouseraudiobox/getuid)

# GetUID

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Returns the UID of the audio box.

## Declaration

```objectivec
OSSharedPtr<OSString> GetUID();
```

<a id="return-value"></a>

## Return Value

The UID of the audio box.

<a id="Discussion"></a>

## Discussion

This method synchronizes by using the work queue created by the object.
