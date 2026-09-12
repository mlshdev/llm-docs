> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caemittercell/defaultvalue(forkey:)](https://developer.apple.com/documentation/quartzcore/caemittercell/defaultvalue(forkey:))

# defaultValue(forKey:) (Swift)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Returns the default value of the property with the specified key.

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

If this method returns `nil` a suitable “zero” default value for the property is provided, based on the declared type of the `key`. For example, if `key` is a `CGSize` object, a size of (0.0,0.0) is returned. For a `CGRect` an empty rectangle is returned. For `CGAffineTransform` and `CATransform3D`, the appropriate identity matrix is returned.

<a id="Special-Considerations"></a>

### Special Considerations

If `key` is not a known for property of the class, the result of the method is undefined.

## See Also

### Using Key-Value Coding Extensions

- [shouldArchiveValue(forKey:)](shouldarchivevalue%28forkey_%29.md): Returns a Boolean value indicating whether the value for a given key should be archived.

# defaultValueForKey: (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Returns the default value of the property with the specified key.

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

If this method returns `nil` a suitable “zero” default value for the property is provided, based on the declared type of the `key`. For example, if `key` is a `CGSize` object, a size of (0.0,0.0) is returned. For a `CGRect` an empty rectangle is returned. For `CGAffineTransform` and `CATransform3D`, the appropriate identity matrix is returned.

<a id="Special-Considerations"></a>

### Special Considerations

If `key` is not a known for property of the class, the result of the method is undefined.

## See Also

### Using Key-Value Coding Extensions

- [shouldArchiveValueForKey:](shouldarchivevalue%28forkey_%29.md): Returns a Boolean value indicating whether the value for a given key should be archived.
