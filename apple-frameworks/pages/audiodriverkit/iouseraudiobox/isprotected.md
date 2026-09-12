> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiobox/isprotected](https://developer.apple.com/documentation/audiodriverkit/iouseraudiobox/isprotected)

# IsProtected

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Returns a Boolean value that indicates if the box requires authentication before use.

## Declaration

```objectivec
bool IsProtected();
```

<a id="return-value"></a>

## Return Value

`true` if the box is protected; `false` otherwise.

<a id="Discussion"></a>

## Discussion

This method synchronizes by using the work queue created by the object.

## See Also

### Managing Protection State

- [SetIsProtected](setisprotected.md): Sets a Boolean value that indicates if the box requires authentication before use.
