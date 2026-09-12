> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmetadataitem/attributes](https://developer.apple.com/documentation/foundation/nsmetadataitem/attributes)

# attributes (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array containing the attribute keys for the metadata item’s values.

## Declaration

```swift
var attributes: [String] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of attribute keys, representing the values available from this metadata item. For a list of possible keys, see `Attribute Keys`.

## See Also

### Getting Item Attributes

- [value(forAttribute:)](value%28forattribute_%29.md): Returns the receiver’s metadata attribute name specified by a given key.
- [values(forAttributes:)](values%28forattributes_%29.md): Returns a dictionary containing the key-value pairs for the attribute names specified by a given array of keys.

# attributes (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array containing the attribute keys for the metadata item’s values.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * attributes;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of attribute keys, representing the values available from this metadata item. For a list of possible keys, see `Attribute Keys`.

## See Also

### Getting Item Attributes

- [valueForAttribute:](value%28forattribute_%29.md): Returns the receiver’s metadata attribute name specified by a given key.
- [valuesForAttributes:](values%28forattributes_%29.md): Returns a dictionary containing the key-value pairs for the attribute names specified by a given array of keys.
