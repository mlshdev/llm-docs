> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_release](https://developer.apple.com/documentation/compositorservices/cp_release)

# cp_release

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Decrements the reference count of the specified object.

## Declaration

```objectivec
void cp_release(void *obj);
```

## Parameters

- `obj`: The object to release. If this parameter is an Objective-C object, the function is equivalent to calling the [release](../objectivec/nsobject-c.protocol/release.md) method of that object.

<a id="discussion"></a>

## Discussion

Don’t call this function in Swift code or on types you manage using automatic reference counting (ARC).

## See Also

### Retaining and releasing types

- [cp_retain](cp_retain.md): Increments the reference count of the specified object.
