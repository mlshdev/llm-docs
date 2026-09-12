> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/sksearchref](https://developer.apple.com/documentation/coreservices/sksearchref)

# SKSearchRef

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

Defines an opaque data type representing an asynchronous search.

## Declaration

```objectivec
typedef struct __SKSearch *SKSearchRef;
```

<a id="discussion"></a>

## Discussion

A search object is created when you call the [SKSearchCreate](1443079-sksearchcreate.md) function.

<a id="1681574"></a>

### Special Considerations

You cannot use [CFMakeCollectable](../corefoundation/cfmakecollectable.md) with SKSearch objects. In a garbage-collected environment, you must use [CFRelease](../corefoundation/cfrelease.md) to dispose of an SKSearch object.
