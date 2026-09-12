> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caemittercell/shouldarchivevalue(forkey:)](https://developer.apple.com/documentation/quartzcore/caemittercell/shouldarchivevalue(forkey:))

# shouldArchiveValue(forKey:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value indicating whether the value for a given key should be archived.

## Declaration

```swift
func shouldArchiveValue(forKey key: String) -> Bool
```

## Parameters

- `key`: The name of one of the receiver’s properties.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified property should be archived, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The default implementation returns [true](https://developer.apple.com/documentation/swift/true). This method is called by the object’s implementation of `encodeWithCoder:`.

## See Also

### Using Key-Value Coding Extensions

- [defaultValue(forKey:)](defaultvalue%28forkey_%29.md): Returns the default value of the property with the specified key.

# shouldArchiveValueForKey: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value indicating whether the value for a given key should be archived.

## Declaration

```objectivec
- (BOOL) shouldArchiveValueForKey:(NSString *) key;
```

## Parameters

- `key`: The name of one of the receiver’s properties.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified property should be archived, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The default implementation returns [true](https://developer.apple.com/documentation/swift/true). This method is called by the object’s implementation of `encodeWithCoder:`.

## See Also

### Using Key-Value Coding Extensions

- [defaultValueForKey:](defaultvalue%28forkey_%29.md): Returns the default value of the property with the specified key.
