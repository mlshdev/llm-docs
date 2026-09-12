> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptclassdescription/haswritableproperty(forkey:)](https://developer.apple.com/documentation/foundation/nsscriptclassdescription/haswritableproperty(forkey:))

# hasWritableProperty(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a Boolean value indicating whether the described class has a writable property identified by the specified key.

## Declaration

```swift
func hasWritableProperty(forKey key: String) -> Bool
```

## Parameters

- `key`: The identifying key for a property of the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the described class has a writable property identified by the specified key; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting attribute and relationship information

- [hasOrderedToManyRelationship(forKey:)](hasorderedtomanyrelationship%28forkey_%29.md): Returns a Boolean value indicating whether the described class has an ordered to-many relationship identified by the specified key.
- [hasProperty(forKey:)](hasproperty%28forkey_%29.md): Returns a Boolean value indicating whether the described class has a property identified by the specified key.
- [hasReadableProperty(forKey:)](hasreadableproperty%28forkey_%29.md): Returns a Boolean value indicating whether the described class has a readable property identified by the specified key.
- [key(withAppleEventCode:)](key%28withappleeventcode_%29.md): Given an Apple event code that identifies a property or element class, returns the key for the corresponding attribute, one-to-one relationship, or one-to-many relationship.
- [type(forKey:)](type%28forkey_%29.md): Returns the name of the declared type of the attribute or relationship identified by the passed key.

# hasWritablePropertyForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a Boolean value indicating whether the described class has a writable property identified by the specified key.

## Declaration

```objectivec
- (BOOL) hasWritablePropertyForKey:(NSString *) key;
```

## Parameters

- `key`: The identifying key for a property of the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the described class has a writable property identified by the specified key; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting attribute and relationship information

- [hasOrderedToManyRelationshipForKey:](hasorderedtomanyrelationship%28forkey_%29.md): Returns a Boolean value indicating whether the described class has an ordered to-many relationship identified by the specified key.
- [hasPropertyForKey:](hasproperty%28forkey_%29.md): Returns a Boolean value indicating whether the described class has a property identified by the specified key.
- [hasReadablePropertyForKey:](hasreadableproperty%28forkey_%29.md): Returns a Boolean value indicating whether the described class has a readable property identified by the specified key.
- [isReadOnlyKey:](isreadonlykey_.md): Deprecated. Returns a Boolean value indicating whether a specified property in the receiver is read-only.
- [keyWithAppleEventCode:](key%28withappleeventcode_%29.md): Given an Apple event code that identifies a property or element class, returns the key for the corresponding attribute, one-to-one relationship, or one-to-many relationship.
- [typeForKey:](type%28forkey_%29.md): Returns the name of the declared type of the attribute or relationship identified by the passed key.
