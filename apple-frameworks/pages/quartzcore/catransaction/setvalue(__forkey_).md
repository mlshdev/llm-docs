> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransaction/setvalue(_:forkey:)](https://developer.apple.com/documentation/quartzcore/catransaction/setvalue(_:forkey:))

# setValue(\_:forKey:) (Swift)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets the arbitrary keyed-data for the specified key.

## Declaration

```swift
class func setValue(_ anObject: Any?, forKey key: String)
```

## Parameters

- `anObject`: The value for the key identified by `key`.
- `key`: The name of one of the receiver’s properties.

<a id="Discussion"></a>

## Discussion

Nested transactions have nested data scope; setting a key always sets it in the innermost scope.

## See Also

### Getting and Setting Transaction Properties

- [value(forKey:)](value%28forkey_%29.md): Returns the arbitrary keyed-data specified by the given key.

# setValue:forKey: (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets the arbitrary keyed-data for the specified key.

## Declaration

```objectivec
+ (void) setValue:(id) anObject forKey:(NSString *) key;
```

## Parameters

- `anObject`: The value for the key identified by `key`.
- `key`: The name of one of the receiver’s properties.

<a id="Discussion"></a>

## Discussion

Nested transactions have nested data scope; setting a key always sets it in the innermost scope.

## See Also

### Getting and Setting Transaction Properties

- [valueForKey:](value%28forkey_%29.md): Returns the arbitrary keyed-data specified by the given key.
