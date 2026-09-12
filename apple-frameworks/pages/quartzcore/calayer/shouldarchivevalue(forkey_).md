> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/shouldarchivevalue(forkey:)](https://developer.apple.com/documentation/quartzcore/calayer/shouldarchivevalue(forkey:))

# shouldArchiveValue(forKey:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean indicating whether the value of the specified key should be archived.

## Declaration

```swift
func shouldArchiveValue(forKey key: String) -> Bool
```

## Parameters

- `key`: The name of one of the receiver’s properties.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified property should be archived or [false](https://developer.apple.com/documentation/swift/false) if it should not.

<a id="Discussion"></a>

## Discussion

The default implementation returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Key-value coding extensions

- [defaultValue(forKey:)](defaultvalue%28forkey_%29.md): Specifies the default value associated with the specified key.

# shouldArchiveValueForKey: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean indicating whether the value of the specified key should be archived.

## Declaration

```objectivec
- (BOOL) shouldArchiveValueForKey:(NSString *) key;
```

## Parameters

- `key`: The name of one of the receiver’s properties.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified property should be archived or [false](https://developer.apple.com/documentation/swift/false) if it should not.

<a id="Discussion"></a>

## Discussion

The default implementation returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Key-value coding extensions

- [defaultValueForKey:](defaultvalue%28forkey_%29.md): Specifies the default value associated with the specified key.
