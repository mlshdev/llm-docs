> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/defaultvalue(forkey:)](https://developer.apple.com/documentation/quartzcore/calayer/defaultvalue(forkey:))

# defaultValue(forKey:) (Swift)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Specifies the default value associated with the specified key.

## Declaration

```swift
class func defaultValue(forKey key: String) -> Any?
```

## Parameters

- `key`: The name of one of the receiver’s properties.

<a id="return-value"></a>

## Return Value

The default value for the named property. Returns `nil` if no default value has been set.

<a id="Discussion"></a>

## Discussion

If you define custom properties for a layer but do not set a value, this method returns a suitable “zero” default value based on the expected value of the `key`. For example, if the value for `key` is a [CGSize](../../corefoundation/cgsize.md) struct, the method returns a size struct containing (0.0,0.0) wrapped in an [NSValue](../../foundation/nsvalue.md) object. For a [CGRect](../../corefoundation/cgrect.md) an empty rectangle is returned. For [CGAffineTransform](../../corefoundation/cgaffinetransform.md) and [CATransform3D](../catransform3d.md), the appropriate identity matrix is returned.

<a id="Special-Considerations"></a>

### Special Considerations

If `key` is not a known for property of the class, the result of the method is undefined.

## See Also

### Key-value coding extensions

- [shouldArchiveValue(forKey:)](shouldarchivevalue%28forkey_%29.md): Returns a Boolean indicating whether the value of the specified key should be archived.

# defaultValueForKey: (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Specifies the default value associated with the specified key.

## Declaration

```objectivec
+ (id) defaultValueForKey:(NSString *) key;
```

## Parameters

- `key`: The name of one of the receiver’s properties.

<a id="return-value"></a>

## Return Value

The default value for the named property. Returns `nil` if no default value has been set.

<a id="Discussion"></a>

## Discussion

If you define custom properties for a layer but do not set a value, this method returns a suitable “zero” default value based on the expected value of the `key`. For example, if the value for `key` is a [CGSize](../../corefoundation/cgsize.md) struct, the method returns a size struct containing (0.0,0.0) wrapped in an [NSValue](../../foundation/nsvalue.md) object. For a [CGRect](../../corefoundation/cgrect.md) an empty rectangle is returned. For [CGAffineTransform](../../corefoundation/cgaffinetransform.md) and [CATransform3D](../catransform3d.md), the appropriate identity matrix is returned.

<a id="Special-Considerations"></a>

### Special Considerations

If `key` is not a known for property of the class, the result of the method is undefined.

## See Also

### Key-value coding extensions

- [shouldArchiveValueForKey:](shouldarchivevalue%28forkey_%29.md): Returns a Boolean indicating whether the value of the specified key should be archived.
