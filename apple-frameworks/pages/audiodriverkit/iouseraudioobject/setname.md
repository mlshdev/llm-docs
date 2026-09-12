> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioobject/setname](https://developer.apple.com/documentation/audiodriverkit/iouseraudioobject/setname)

# SetName

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Sets the name of the object.

## Declaration

```objectivec
kern_return_t SetName(OSString *in_name);
```

## Parameters

- `in_name`: The name to set, as an [OSString](../../driverkit/osstring.md).

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

If the change succeeds, the framework sends a notification to the host to update its object state. Setting the name synchronizes by using the work queue created by the object.

## See Also

### Working with Object Names

- [GetName](getname.md): Gets the name of the object.
