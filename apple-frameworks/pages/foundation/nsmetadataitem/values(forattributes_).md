> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmetadataitem/values(forattributes:)](https://developer.apple.com/documentation/foundation/nsmetadataitem/values(forattributes:))

# values(forAttributes:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary containing the key-value pairs for the attribute names specified by a given array of keys.

## Declaration

```swift
func values(forAttributes keys: [String]) -> [String : Any]?
```

## Parameters

- `keys`: An array containing `NSString` objects that specify the names of a metadata attributes. See the “Constants” section for a list of possible keys.

<a id="return-value"></a>

## Return Value

A dictionary containing the key-value pairs for the attribute names specified by `keys`.

## See Also

### Getting Item Attributes

- [attributes](attributes.md): An array containing the attribute keys for the metadata item’s values.
- [value(forAttribute:)](value%28forattribute_%29.md): Returns the receiver’s metadata attribute name specified by a given key.

# valuesForAttributes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary containing the key-value pairs for the attribute names specified by a given array of keys.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) valuesForAttributes:(NSArray<NSString *> *) keys;
```

## Parameters

- `keys`: An array containing `NSString` objects that specify the names of a metadata attributes. See the “Constants” section for a list of possible keys.

<a id="return-value"></a>

## Return Value

A dictionary containing the key-value pairs for the attribute names specified by `keys`.

## See Also

### Getting Item Attributes

- [attributes](attributes.md): An array containing the attribute keys for the metadata item’s values.
- [valueForAttribute:](value%28forattribute_%29.md): Returns the receiver’s metadata attribute name specified by a given key.
