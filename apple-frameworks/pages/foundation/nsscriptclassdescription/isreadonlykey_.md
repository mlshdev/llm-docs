> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptclassdescription/isreadonlykey:](https://developer.apple.com/documentation/foundation/nsscriptclassdescription/isreadonlykey:)

# isReadOnlyKey:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Returns a Boolean value indicating whether a specified property in the receiver is read-only.

> Use [hasWritablePropertyForKey:](haswritableproperty%28forkey_%29.md) instead.

## Declaration

```objectivec
- (BOOL) isReadOnlyKey:(NSString *) key;
```

## Parameters

- `key`: The identifying key for a property of the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the property specified by `key` exists in the receiver or in the `NSScriptClassDescription` for any superclass, and is read only; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method could return [false](https://developer.apple.com/documentation/swift/false) either because `key` is unrecognized or because writing to the property is not supported. Use [hasWritablePropertyForKey:](haswritableproperty%28forkey_%29.md) instead.

## See Also

### Getting attribute and relationship information

- [hasOrderedToManyRelationshipForKey:](hasorderedtomanyrelationship%28forkey_%29.md): Returns a Boolean value indicating whether the described class has an ordered to-many relationship identified by the specified key.
- [hasPropertyForKey:](hasproperty%28forkey_%29.md): Returns a Boolean value indicating whether the described class has a property identified by the specified key.
- [hasReadablePropertyForKey:](hasreadableproperty%28forkey_%29.md): Returns a Boolean value indicating whether the described class has a readable property identified by the specified key.
- [hasWritablePropertyForKey:](haswritableproperty%28forkey_%29.md): Returns a Boolean value indicating whether the described class has a writable property identified by the specified key.
- [keyWithAppleEventCode:](key%28withappleeventcode_%29.md): Given an Apple event code that identifies a property or element class, returns the key for the corresponding attribute, one-to-one relationship, or one-to-many relationship.
- [typeForKey:](type%28forkey_%29.md): Returns the name of the declared type of the attribute or relationship identified by the passed key.
