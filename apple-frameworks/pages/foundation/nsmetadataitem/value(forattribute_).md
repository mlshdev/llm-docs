> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmetadataitem/value(forattribute:)](https://developer.apple.com/documentation/foundation/nsmetadataitem/value(forattribute:))

# value(forAttribute:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the receiver’s metadata attribute name specified by a given key.

## Declaration

```swift
func value(forAttribute key: String) -> Any?
```

## Parameters

- `key`: The name of a metadata attribute. See the “Constants” section for a list of possible keys.

<a id="return-value"></a>

## Return Value

The receiver’s metadata attribute name specified by `key`.

## See Also

### Getting Item Attributes

- [attributes](attributes.md): An array containing the attribute keys for the metadata item’s values.
- [values(forAttributes:)](values%28forattributes_%29.md): Returns a dictionary containing the key-value pairs for the attribute names specified by a given array of keys.

# valueForAttribute: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the receiver’s metadata attribute name specified by a given key.

## Declaration

```objectivec
- (id) valueForAttribute:(NSString *) key;
```

## Parameters

- `key`: The name of a metadata attribute. See the “Constants” section for a list of possible keys.

<a id="return-value"></a>

## Return Value

The receiver’s metadata attribute name specified by `key`.

## See Also

### Getting Item Attributes

- [attributes](attributes.md): An array containing the attribute keys for the metadata item’s values.
- [valuesForAttributes:](values%28forattributes_%29.md): Returns a dictionary containing the key-value pairs for the attribute names specified by a given array of keys.
