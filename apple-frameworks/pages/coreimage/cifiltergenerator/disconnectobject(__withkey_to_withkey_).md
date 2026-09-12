> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifiltergenerator/disconnectobject(_:withkey:to:withkey:)](https://developer.apple.com/documentation/coreimage/cifiltergenerator/disconnectobject(_:withkey:to:withkey:))

# disconnectObject(\_:withKey:to:withKey:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Removes the connection between two objects in the filter chain.

## Declaration

```swift
func disconnectObject(_ sourceObject: Any, withKey sourceKey: String, to targetObject: Any, withKey targetKey: String)
```

## Parameters

- `sourceObject`: A [CIFilter](../cifilter-swift.class.md) object, a  [CIImage](../ciimage.md) object, or the path (an [NSString](../../foundation/nsstring.md) or [NSURL](../../foundation/nsurl.md) object) to an image.
- `sourceKey`: The key that specifies the source object. Pass `nil` if the source object is used directly.
- `targetObject`: The object from which you want to disconnect the source object.
- `targetKey`: The key that specifies the target that the source object is currently connected to.

## See Also

### Connecting and Disconnecting Objects

- [connect(\_:withKey:to:withKey:)](connect%28__withkey_to_withkey_%29.md): Adds an object to the filter chain.

# disconnectObject:withKey:toObject:withKey: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Removes the connection between two objects in the filter chain.

## Declaration

```objectivec
- (void) disconnectObject:(id) sourceObject withKey:(NSString *) sourceKey toObject:(id) targetObject withKey:(NSString *) targetKey;
```

## Parameters

- `sourceObject`: A [CIFilter](../cifilter-swift.class.md) object, a  [CIImage](../ciimage.md) object, or the path (an [NSString](../../foundation/nsstring.md) or [NSURL](../../foundation/nsurl.md) object) to an image.
- `sourceKey`: The key that specifies the source object. Pass `nil` if the source object is used directly.
- `targetObject`: The object from which you want to disconnect the source object.
- `targetKey`: The key that specifies the target that the source object is currently connected to.

## See Also

### Connecting and Disconnecting Objects

- [connectObject:withKey:toObject:withKey:](connect%28__withkey_to_withkey_%29.md): Adds an object to the filter chain.
