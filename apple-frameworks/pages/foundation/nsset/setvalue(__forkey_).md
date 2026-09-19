> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsset/setvalue(_:forkey:)

# setValue(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Invokes `setValue:forKey:` on each of the set’s members.

## Declaration

```swift
func setValue(_ value: Any?, forKey key: String)
```

## Parameters

- `value`: The value for the property identified by `key`.
- `key`: The name of one of the properties of the set’s members.

## See Also

### Comparing Sets

- [isSubset(of:)](issubset%28of_%29.md): Returns a Boolean value that indicates whether every object in the receiving set is also present in another given set.
- [intersects(\_:)](intersects%28__%29.md): Returns a Boolean value that indicates whether at least one object in the receiving set is also present in another given set.
- [isEqual(to:)](isequal%28to_%29.md): Compares the receiving set to another set.
- [value(forKey:)](value%28forkey_%29.md): Return a set containing the results of invoking `valueForKey:` on each of the receiving set’s members.

# setValue:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Invokes `setValue:forKey:` on each of the set’s members.

## Declaration

```objectivec
- (void) setValue:(id) value forKey:(NSString *) key;
```

## Parameters

- `value`: The value for the property identified by `key`.
- `key`: The name of one of the properties of the set’s members.

## See Also

### Comparing Sets

- [isSubsetOfSet:](issubset%28of_%29.md): Returns a Boolean value that indicates whether every object in the receiving set is also present in another given set.
- [intersectsSet:](intersects%28__%29.md): Returns a Boolean value that indicates whether at least one object in the receiving set is also present in another given set.
- [isEqualToSet:](isequal%28to_%29.md): Compares the receiving set to another set.
- [valueForKey:](value%28forkey_%29.md): Return a set containing the results of invoking `valueForKey:` on each of the receiving set’s members.
