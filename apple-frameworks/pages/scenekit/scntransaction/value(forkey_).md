> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntransaction/value(forkey:)](https://developer.apple.com/documentation/scenekit/scntransaction/value(forkey:))

# value(forKey:) (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns the object previously associated with the current transaction using the specified key.

## Declaration

```swift
class func value(forKey key: String) -> Any?
```

## Parameters

- `key`: The unique string identifying an object previously associated with the transaction.

<a id="return-value"></a>

## Return Value

The object previously associated with the transaction (or an enclosing transaction) using the specified key, or `nil` if no value for that key could be found.

<a id="Discussion"></a>

## Discussion

Nested transactions have nested data scope. Setting a value for a key associates it with the current transaction (or innermost nested transaction) only, but reading the value for a key searches through nested transactions (starting from the innermost).

## See Also

### Getting and Setting Transaction Properties

- [setValue(\_:forKey:)](setvalue%28__forkey_%29.md): Associates an arbitrary object with the current transaction using the specified key.

# valueForKey: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the object previously associated with the current transaction using the specified key.

## Declaration

```objectivec
+ (id) valueForKey:(NSString *) key;
```

## Parameters

- `key`: The unique string identifying an object previously associated with the transaction.

<a id="return-value"></a>

## Return Value

The object previously associated with the transaction (or an enclosing transaction) using the specified key, or `nil` if no value for that key could be found.

<a id="Discussion"></a>

## Discussion

Nested transactions have nested data scope. Setting a value for a key associates it with the current transaction (or innermost nested transaction) only, but reading the value for a key searches through nested transactions (starting from the innermost).

## See Also

### Getting and Setting Transaction Properties

- [setValue:forKey:](setvalue%28__forkey_%29.md): Associates an arbitrary object with the current transaction using the specified key.
