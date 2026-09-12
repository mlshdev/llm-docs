> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsatomicstorecachenode/propertycache](https://developer.apple.com/documentation/coredata/nsatomicstorecachenode/propertycache)

# propertyCache (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The property cache dictionary of the node.

## Declaration

```swift
var propertyCache: NSMutableDictionary? { get set }
```

<a id="Discussion"></a>

## Discussion

This dictionary is used by [value(forKey:)](value%28forkey_%29.md) and [setValue(\_:forKey:)](setvalue%28__forkey_%29.md) for property values. This property is `nil` unless it has been explicitly set or non-`nil` values have been set for keys using [setValue(\_:forKey:)](setvalue%28__forkey_%29.md).

## See Also

### Managing Node Data

- [objectID](objectid.md): The managed object ID of the node.
- [value(forKey:)](value%28forkey_%29.md): Returns the value for a given key.
- [setValue(\_:forKey:)](setvalue%28__forkey_%29.md): Sets the value for the given key.

# propertyCache (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The property cache dictionary of the node.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSMutableDictionary<NSString *,id> * propertyCache;
```

<a id="Discussion"></a>

## Discussion

This dictionary is used by [valueForKey:](value%28forkey_%29.md) and [setValue:forKey:](setvalue%28__forkey_%29.md) for property values. This property is `nil` unless it has been explicitly set or non-`nil` values have been set for keys using [setValue:forKey:](setvalue%28__forkey_%29.md).

## See Also

### Managing Node Data

- [objectID](objectid.md): The managed object ID of the node.
- [valueForKey:](value%28forkey_%29.md): Returns the value for a given key.
- [setValue:forKey:](setvalue%28__forkey_%29.md): Sets the value for the given key.
