> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransaction/value(forkey:)](https://developer.apple.com/documentation/quartzcore/catransaction/value(forkey:))

# value(forKey:) (Swift)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the arbitrary keyed-data specified by the given key.

## Declaration

```swift
class func value(forKey key: String) -> Any?
```

## Parameters

- `key`: The name of one of the receiver’s properties.

<a id="return-value"></a>

## Return Value

The value for the data specified by the key.

<a id="Discussion"></a>

## Discussion

Nested transactions have nested data scope. Requesting a value for a key first searches the innermost scope, then the enclosing transactions.

## See Also

### Getting and Setting Transaction Properties

- [setValue(\_:forKey:)](setvalue%28__forkey_%29.md): Sets the arbitrary keyed-data for the specified key.

# valueForKey: (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the arbitrary keyed-data specified by the given key.

## Declaration

```objectivec
+ (id) valueForKey:(NSString *) key;
```

## Parameters

- `key`: The name of one of the receiver’s properties.

<a id="return-value"></a>

## Return Value

The value for the data specified by the key.

<a id="Discussion"></a>

## Discussion

Nested transactions have nested data scope. Requesting a value for a key first searches the innermost scope, then the enclosing transactions.

## See Also

### Getting and Setting Transaction Properties

- [setValue:forKey:](setvalue%28__forkey_%29.md): Sets the arbitrary keyed-data for the specified key.
