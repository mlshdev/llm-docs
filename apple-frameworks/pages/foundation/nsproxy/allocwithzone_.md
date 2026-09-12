> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsproxy/allocwithzone:](https://developer.apple.com/documentation/foundation/nsproxy/allocwithzone:)

# allocWithZone:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new instance of the receiving class

## Declaration

```objectivec
+ (id) allocWithZone:(NSZone *) zone;
```

<a id="return-value"></a>

## Return Value

A new instance of the receiving class, as described in the `NSObject` class specification under the [allocWithZone:](../../objectivec/nsobject-swift.class/allocwithzone_.md) class method.

## See Also

### Creating Instances

- [alloc](alloc%28%29.md): Returns a new instance of the receiving class
