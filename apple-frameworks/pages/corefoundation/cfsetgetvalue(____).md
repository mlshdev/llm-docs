> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsetgetvalue(_:_:)](https://developer.apple.com/documentation/corefoundation/cfsetgetvalue(_:_:))

# CFSetGetValue(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Obtains a specified value from a set.

## Declaration

```swift
func CFSetGetValue(_ theSet: CFSet!, _ value: UnsafeRawPointer!) -> UnsafeRawPointer!
```

## Parameters

- `theSet`: The set to examine.
- `value`: The value for which to search in `theSet`. Comparisons are made using the equal callback provided when `theSet` was created. If the equal callback was `NULL`, pointer equality (in C, ==) is used.

<a id="return-value"></a>

## Return Value

A pointer to the requested value, or `NULL` if the value is not in `theSet`. If the value is a Core Foundation object, Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

Since this function uses the equal callback, `value` all elements in the set must be understood by the equal callback. Depending on the implementation of the equal callback specified when creating `theSet`, the value returned may not have the same pointer equality as `value`.

## See Also

### Examining a Set

- [CFSetContainsValue(\_:\_:)](cfsetcontainsvalue%28____%29.md): Returns a Boolean that indicates whether a set contains a given value.
- [CFSetGetCount(\_:)](cfsetgetcount%28__%29.md): Returns the number of values currently in a set.
- [CFSetGetCountOfValue(\_:\_:)](cfsetgetcountofvalue%28____%29.md): Returns the number of values in a set that match a given value.
- [CFSetGetValueIfPresent(\_:\_:\_:)](cfsetgetvalueifpresent%28______%29.md): Reports whether or not a value is in a set, and if it exists returns the value indirectly.
- [CFSetGetValues(\_:\_:)](cfsetgetvalues%28____%29.md): Obtains all values in a set.

# CFSetGetValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Obtains a specified value from a set.

## Declaration

```objectivec
extern const void *CFSetGetValue(CFSetRef theSet, const void *value);
```

## Parameters

- `theSet`: The set to examine.
- `value`: The value for which to search in `theSet`. Comparisons are made using the equal callback provided when `theSet` was created. If the equal callback was `NULL`, pointer equality (in C, ==) is used.

<a id="return-value"></a>

## Return Value

A pointer to the requested value, or `NULL` if the value is not in `theSet`. If the value is a Core Foundation object, Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

Since this function uses the equal callback, `value` all elements in the set must be understood by the equal callback. Depending on the implementation of the equal callback specified when creating `theSet`, the value returned may not have the same pointer equality as `value`.

## See Also

### Examining a Set

- [CFSetContainsValue](cfsetcontainsvalue%28____%29.md): Returns a Boolean that indicates whether a set contains a given value.
- [CFSetGetCount](cfsetgetcount%28__%29.md): Returns the number of values currently in a set.
- [CFSetGetCountOfValue](cfsetgetcountofvalue%28____%29.md): Returns the number of values in a set that match a given value.
- [CFSetGetValueIfPresent](cfsetgetvalueifpresent%28______%29.md): Reports whether or not a value is in a set, and if it exists returns the value indirectly.
- [CFSetGetValues](cfsetgetvalues%28____%29.md): Obtains all values in a set.
