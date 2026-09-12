> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_retain](https://developer.apple.com/documentation/compositorservices/cp_retain)

# cp_retain

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Increments the reference count of the specified object.

## Declaration

```objectivec
void *cp_retain(void *obj);
```

## Parameters

- `obj`: The object to retain. If this parameter is an Objective-C object, the function is equivalent to calling the [retain](../objectivec/nsobject-c.protocol/retain.md) method of that object.

<a id="return-value"></a>

## Return Value

The retained object.

<a id="discussion"></a>

## Discussion

Don’t call this function in Swift code or on types you manage using automatic reference counting (ARC).

## See Also

### Retaining and releasing types

- [cp_release](cp_release.md): Decrements the reference count of the specified object.
