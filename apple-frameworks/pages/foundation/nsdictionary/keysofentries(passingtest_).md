> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/keysofentries(passingtest:)](https://developer.apple.com/documentation/foundation/nsdictionary/keysofentries(passingtest:))

# keysOfEntries(passingTest:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the set of keys whose corresponding value satisfies a constraint described by a block object.

## Declaration

```swift
func keysOfEntries(passingTest predicate: (Any, Any, UnsafeMutablePointer<ObjCBool>) -> Bool) -> Set<AnyHashable>
```

## Parameters

- `predicate`: A block object that specifies constraints for values in the dictionary.

<a id="return-value"></a>

## Return Value

The set of keys whose corresponding value satisfies `predicate`.

## See Also

### Related Documentation

- [enumerateKeysAndObjects(\_:)](enumeratekeysandobjects%28__%29.md): Applies a given block object to the entries of the dictionary.

### Filtering Dictionaries

- [keysOfEntries(options:passingTest:)](keysofentries%28options_passingtest_%29.md): Returns the set of keys whose corresponding value satisfies a constraint described by a block object.

# keysOfEntriesPassingTest: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the set of keys whose corresponding value satisfies a constraint described by a block object.

## Declaration

```objectivec
- (NSSet<id> *) keysOfEntriesPassingTest:(BOOL (^)(KeyType key, ObjectType obj, BOOL *stop)) predicate;
```

## Parameters

- `predicate`: A block object that specifies constraints for values in the dictionary.

<a id="return-value"></a>

## Return Value

The set of keys whose corresponding value satisfies `predicate`.

## See Also

### Related Documentation

- [enumerateKeysAndObjectsUsingBlock:](enumeratekeysandobjects%28__%29.md): Applies a given block object to the entries of the dictionary.

### Filtering Dictionaries

- [keysOfEntriesWithOptions:passingTest:](keysofentries%28options_passingtest_%29.md): Returns the set of keys whose corresponding value satisfies a constraint described by a block object.
