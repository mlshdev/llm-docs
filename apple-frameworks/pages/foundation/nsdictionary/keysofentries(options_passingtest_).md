> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/keysofentries(options:passingtest:)](https://developer.apple.com/documentation/foundation/nsdictionary/keysofentries(options:passingtest:))

# keysOfEntries(options:passingTest:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the set of keys whose corresponding value satisfies a constraint described by a block object.

## Declaration

```swift
func keysOfEntries(options opts: NSEnumerationOptions = [], passingTest predicate: (Any, Any, UnsafeMutablePointer<ObjCBool>) -> Bool) -> Set<AnyHashable>
```

## Parameters

- `opts`: A bit mask of enumeration options.
- `predicate`: A block object that specifies constraints for values in the dictionary.

<a id="return-value"></a>

## Return Value

The set of keys whose corresponding value satisfies `predicate`.

## See Also

### Related Documentation

- [enumerateKeysAndObjects(options:using:)](enumeratekeysandobjects%28options_using_%29.md): Applies a given block object to the entries of the dictionary, with options specifying how the enumeration is performed.

### Filtering Dictionaries

- [keysOfEntries(passingTest:)](keysofentries%28passingtest_%29.md): Returns the set of keys whose corresponding value satisfies a constraint described by a block object.

# keysOfEntriesWithOptions:passingTest: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the set of keys whose corresponding value satisfies a constraint described by a block object.

## Declaration

```objectivec
- (NSSet<id> *) keysOfEntriesWithOptions:(NSEnumerationOptions) opts passingTest:(BOOL (^)(KeyType key, ObjectType obj, BOOL *stop)) predicate;
```

## Parameters

- `opts`: A bit mask of enumeration options.
- `predicate`: A block object that specifies constraints for values in the dictionary.

<a id="return-value"></a>

## Return Value

The set of keys whose corresponding value satisfies `predicate`.

## See Also

### Related Documentation

- [enumerateKeysAndObjectsWithOptions:usingBlock:](enumeratekeysandobjects%28options_using_%29.md): Applies a given block object to the entries of the dictionary, with options specifying how the enumeration is performed.

### Filtering Dictionaries

- [keysOfEntriesPassingTest:](keysofentries%28passingtest_%29.md): Returns the set of keys whose corresponding value satisfies a constraint described by a block object.
