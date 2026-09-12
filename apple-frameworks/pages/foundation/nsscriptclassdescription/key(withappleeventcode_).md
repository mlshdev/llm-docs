> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptclassdescription/key(withappleeventcode:)](https://developer.apple.com/documentation/foundation/nsscriptclassdescription/key(withappleeventcode:))

# key(withAppleEventCode:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Given an Apple event code that identifies a property or element class, returns the key for the corresponding attribute, one-to-one relationship, or one-to-many relationship.

## Declaration

```swift
func key(withAppleEventCode appleEventCode: FourCharCode) -> String?
```

## Parameters

- `appleEventCode`: An Apple event code that identifies a property or element class.

<a id="return-value"></a>

## Return Value

The key that corresponds to the property or element class identified by `appleEventCode` in the receiver or, if none exists, in a class description in the receiver’s superclasses. The four-character Apple event code associated with the attribute or relationship identified by `key` Returns `0` if no such attribute or relationship is found. Returns `nil` if it cannot find any such attribute or relationship.

## See Also

### Getting attribute and relationship information

- [hasOrderedToManyRelationship(forKey:)](hasorderedtomanyrelationship%28forkey_%29.md): Returns a Boolean value indicating whether the described class has an ordered to-many relationship identified by the specified key.
- [hasProperty(forKey:)](hasproperty%28forkey_%29.md): Returns a Boolean value indicating whether the described class has a property identified by the specified key.
- [hasReadableProperty(forKey:)](hasreadableproperty%28forkey_%29.md): Returns a Boolean value indicating whether the described class has a readable property identified by the specified key.
- [hasWritableProperty(forKey:)](haswritableproperty%28forkey_%29.md): Returns a Boolean value indicating whether the described class has a writable property identified by the specified key.
- [type(forKey:)](type%28forkey_%29.md): Returns the name of the declared type of the attribute or relationship identified by the passed key.

# keyWithAppleEventCode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Given an Apple event code that identifies a property or element class, returns the key for the corresponding attribute, one-to-one relationship, or one-to-many relationship.

## Declaration

```objectivec
- (NSString *) keyWithAppleEventCode:(FourCharCode) appleEventCode;
```

## Parameters

- `appleEventCode`: An Apple event code that identifies a property or element class.

<a id="return-value"></a>

## Return Value

The key that corresponds to the property or element class identified by `appleEventCode` in the receiver or, if none exists, in a class description in the receiver’s superclasses. The four-character Apple event code associated with the attribute or relationship identified by `key` Returns `0` if no such attribute or relationship is found. Returns `nil` if it cannot find any such attribute or relationship.

## See Also

### Related Documentation

- [isReadOnlyKey:](isreadonlykey_.md): Deprecated. Returns a Boolean value indicating whether a specified property in the receiver is read-only.

### Getting attribute and relationship information

- [hasOrderedToManyRelationshipForKey:](hasorderedtomanyrelationship%28forkey_%29.md): Returns a Boolean value indicating whether the described class has an ordered to-many relationship identified by the specified key.
- [hasPropertyForKey:](hasproperty%28forkey_%29.md): Returns a Boolean value indicating whether the described class has a property identified by the specified key.
- [hasReadablePropertyForKey:](hasreadableproperty%28forkey_%29.md): Returns a Boolean value indicating whether the described class has a readable property identified by the specified key.
- [hasWritablePropertyForKey:](haswritableproperty%28forkey_%29.md): Returns a Boolean value indicating whether the described class has a writable property identified by the specified key.
- [isReadOnlyKey:](isreadonlykey_.md): Deprecated. Returns a Boolean value indicating whether a specified property in the receiver is read-only.
- [typeForKey:](type%28forkey_%29.md): Returns the name of the declared type of the attribute or relationship identified by the passed key.
