> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntransaction/setvalue(_:forkey:)](https://developer.apple.com/documentation/scenekit/scntransaction/setvalue(_:forkey:))

# setValue(\_:forKey:) (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Associates an arbitrary object with the current transaction using the specified key.

## Declaration

```swift
class func setValue(_ value: Any?, forKey key: String)
```

## Parameters

- `value`: An object to associate with the current transaction.
- `key`: A unique string identifying the object for later retrieval.

<a id="Discussion"></a>

## Discussion

Nested transactions have nested data scope. Setting a value for a key associates it with the current transaction (or innermost nested transaction) only, and reading the value for a key searches through nested transactions (starting from the innermost).

## See Also

### Getting and Setting Transaction Properties

- [value(forKey:)](value%28forkey_%29.md): Returns the object previously associated with the current transaction using the specified key.

# setValue:forKey: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Associates an arbitrary object with the current transaction using the specified key.

## Declaration

```objectivec
+ (void) setValue:(id) value forKey:(NSString *) key;
```

## Parameters

- `value`: An object to associate with the current transaction.
- `key`: A unique string identifying the object for later retrieval.

<a id="Discussion"></a>

## Discussion

Nested transactions have nested data scope. Setting a value for a key associates it with the current transaction (or innermost nested transaction) only, and reading the value for a key searches through nested transactions (starting from the innermost).

## See Also

### Getting and Setting Transaction Properties

- [valueForKey:](value%28forkey_%29.md): Returns the object previously associated with the current transaction using the specified key.
