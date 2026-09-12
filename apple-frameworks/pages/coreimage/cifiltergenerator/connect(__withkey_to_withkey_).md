> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifiltergenerator/connect(_:withkey:to:withkey:)](https://developer.apple.com/documentation/coreimage/cifiltergenerator/connect(_:withkey:to:withkey:))

# connect(\_:withKey:to:withKey:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Adds an object to the filter chain.

## Declaration

```swift
func connect(_ sourceObject: Any, withKey sourceKey: String?, to targetObject: Any, withKey targetKey: String)
```

## Parameters

- `sourceObject`: A [CIFilter](../cifilter-swift.class.md) object, a  [CIImage](../ciimage.md) object, or the path (an [NSString](../../foundation/nsstring.md) or [NSURL](../../foundation/nsurl.md) object) to an image.
- `sourceKey`: The key that specifies the source object. For example, if the source is the output image of a filter, pass the `outputImage` key. Pass `nil` if the source object is used directly.
- `targetObject`: The object to which the source object links.
- `targetKey`: The key that specifies the target for the source. For example, if you are connecting the source to the input image of a [CIFilter](../cifilter-swift.class.md) object, you would pass the `inputImage` key.

## See Also

### Connecting and Disconnecting Objects

- [disconnectObject(\_:withKey:to:withKey:)](disconnectobject%28__withkey_to_withkey_%29.md): Removes the connection between two objects in the filter chain.

# connectObject:withKey:toObject:withKey: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Adds an object to the filter chain.

## Declaration

```objectivec
- (void) connectObject:(id) sourceObject withKey:(NSString *) sourceKey toObject:(id) targetObject withKey:(NSString *) targetKey;
```

## Parameters

- `sourceObject`: A [CIFilter](../cifilter-swift.class.md) object, a  [CIImage](../ciimage.md) object, or the path (an [NSString](../../foundation/nsstring.md) or [NSURL](../../foundation/nsurl.md) object) to an image.
- `sourceKey`: The key that specifies the source object. For example, if the source is the output image of a filter, pass the `outputImage` key. Pass `nil` if the source object is used directly.
- `targetObject`: The object to which the source object links.
- `targetKey`: The key that specifies the target for the source. For example, if you are connecting the source to the input image of a [CIFilter](../cifilter-swift.class.md) object, you would pass the `inputImage` key.

## See Also

### Connecting and Disconnecting Objects

- [disconnectObject:withKey:toObject:withKey:](disconnectobject%28__withkey_to_withkey_%29.md): Removes the connection between two objects in the filter chain.
