> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsetgetvalueifpresent(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfsetgetvalueifpresent(_:_:_:))

# CFSetGetValueIfPresent(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Reports whether or not a value is in a set, and if it exists returns the value indirectly.

## Declaration

```swift
func CFSetGetValueIfPresent(_ theSet: CFSet!, _ candidate: UnsafeRawPointer!, _ value: UnsafeMutablePointer<UnsafeRawPointer?>!) -> Bool
```

## Parameters

- `theSet`: The set to examine.
- `candidate`: The value for which to search in `theSet`. Comparisons are made using the equal callback provided when `theSet` was created. If the equal callback was `NULL`, pointer equality (in C, ==) is used.
- `value`: Upon return contains the matching value if it exists in `theSet`, otherwise `NULL`. If the value is a Core Foundation object, ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="return-value"></a>

## Return Value

`true` if `value` exists in `theSet`, otherwise `false`.

<a id="Discussion"></a>

## Discussion

This function uses the equal callback. `candidate` and all elements in the set must be understood by the equal callback. Depending on the implementation of the equal callback specified when creating `theSet`, the value returned in `value` may not have the same pointer equality as `candidate`.

## See Also

### Examining a Set

- [CFSetContainsValue(\_:\_:)](cfsetcontainsvalue%28____%29.md): Returns a Boolean that indicates whether a set contains a given value.
- [CFSetGetCount(\_:)](cfsetgetcount%28__%29.md): Returns the number of values currently in a set.
- [CFSetGetCountOfValue(\_:\_:)](cfsetgetcountofvalue%28____%29.md): Returns the number of values in a set that match a given value.
- [CFSetGetValue(\_:\_:)](cfsetgetvalue%28____%29.md): Obtains a specified value from a set.
- [CFSetGetValues(\_:\_:)](cfsetgetvalues%28____%29.md): Obtains all values in a set.

# CFSetGetValueIfPresent (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Reports whether or not a value is in a set, and if it exists returns the value indirectly.

## Declaration

```objectivec
extern Boolean CFSetGetValueIfPresent(CFSetRef theSet, const void *candidate, const void **value);
```

## Parameters

- `theSet`: The set to examine.
- `candidate`: The value for which to search in `theSet`. Comparisons are made using the equal callback provided when `theSet` was created. If the equal callback was `NULL`, pointer equality (in C, ==) is used.
- `value`: Upon return contains the matching value if it exists in `theSet`, otherwise `NULL`. If the value is a Core Foundation object, ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="return-value"></a>

## Return Value

`true` if `value` exists in `theSet`, otherwise `false`.

<a id="Discussion"></a>

## Discussion

This function uses the equal callback. `candidate` and all elements in the set must be understood by the equal callback. Depending on the implementation of the equal callback specified when creating `theSet`, the value returned in `value` may not have the same pointer equality as `candidate`.

## See Also

### Examining a Set

- [CFSetContainsValue](cfsetcontainsvalue%28____%29.md): Returns a Boolean that indicates whether a set contains a given value.
- [CFSetGetCount](cfsetgetcount%28__%29.md): Returns the number of values currently in a set.
- [CFSetGetCountOfValue](cfsetgetcountofvalue%28____%29.md): Returns the number of values in a set that match a given value.
- [CFSetGetValue](cfsetgetvalue%28____%29.md): Obtains a specified value from a set.
- [CFSetGetValues](cfsetgetvalues%28____%29.md): Obtains all values in a set.
