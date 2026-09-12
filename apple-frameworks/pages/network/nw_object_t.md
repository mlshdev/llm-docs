> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_object_t](https://developer.apple.com/documentation/network/nw_object_t)

# nw_object_t (Swift)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

The generic type for objects in the Network framework.

## Declaration

```swift
typealias nw_object_t = any OS_nw_object
```

<a id="Discussion"></a>

## Discussion

Network.framework objects are reference-counted objects that can be used with Automatic Reference Counting (ARC) or directly retained and released.

The objects also conform to the description method of [NSObject](../objectivec/nsobject-swift.class.md) to be used for debugging.

# nw_object_t (Objective-C)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

The generic type for objects in the Network framework.

## Declaration

```objectivec
typedef NSObject<OS_nw_object> * nw_object_t;
```

<a id="Discussion"></a>

## Discussion

Network.framework objects are reference-counted objects that can be used with Automatic Reference Counting (ARC) or directly retained and released.

The objects also conform to the description method of [NSObject](../objectivec/nsobject-swift.class.md) to be used for debugging.

## See Also

### Memory Management

- [nw_release](nw_release.md): Releases a reference count on a Network.framework object.
- [nw_retain](nw_retain.md): Adds a reference count to a Network.framework object.
