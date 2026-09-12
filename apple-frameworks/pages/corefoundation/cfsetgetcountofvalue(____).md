> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsetgetcountofvalue(_:_:)](https://developer.apple.com/documentation/corefoundation/cfsetgetcountofvalue(_:_:))

# CFSetGetCountOfValue(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of values in a set that match a given value.

## Declaration

```swift
func CFSetGetCountOfValue(_ theSet: CFSet!, _ value: UnsafeRawPointer!) -> CFIndex
```

## Parameters

- `theSet`: The set to examine.
- `value`: The value for which to search in `theSet`. Comparisons are made using the equal callback provided when `theSet` was created. If the equal callback was `NULL`, pointer equality (in C, ==) is used.

<a id="return-value"></a>

## Return Value

The number of times `value` occurs in `theSet`. By definition, sets can not contain duplicate values, so returns `1` if `value` is contained in `theSet`, otherwise `0`.

<a id="Discussion"></a>

## Discussion

This function uses the equal callback. `value` and all elements in the set must be understood by the equal callback.

## See Also

### Examining a Set

- [CFSetContainsValue(\_:\_:)](cfsetcontainsvalue%28____%29.md): Returns a Boolean that indicates whether a set contains a given value.
- [CFSetGetCount(\_:)](cfsetgetcount%28__%29.md): Returns the number of values currently in a set.
- [CFSetGetValue(\_:\_:)](cfsetgetvalue%28____%29.md): Obtains a specified value from a set.
- [CFSetGetValueIfPresent(\_:\_:\_:)](cfsetgetvalueifpresent%28______%29.md): Reports whether or not a value is in a set, and if it exists returns the value indirectly.
- [CFSetGetValues(\_:\_:)](cfsetgetvalues%28____%29.md): Obtains all values in a set.

# CFSetGetCountOfValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of values in a set that match a given value.

## Declaration

```objectivec
extern CFIndex CFSetGetCountOfValue(CFSetRef theSet, const void *value);
```

## Parameters

- `theSet`: The set to examine.
- `value`: The value for which to search in `theSet`. Comparisons are made using the equal callback provided when `theSet` was created. If the equal callback was `NULL`, pointer equality (in C, ==) is used.

<a id="return-value"></a>

## Return Value

The number of times `value` occurs in `theSet`. By definition, sets can not contain duplicate values, so returns `1` if `value` is contained in `theSet`, otherwise `0`.

<a id="Discussion"></a>

## Discussion

This function uses the equal callback. `value` and all elements in the set must be understood by the equal callback.

## See Also

### Examining a Set

- [CFSetContainsValue](cfsetcontainsvalue%28____%29.md): Returns a Boolean that indicates whether a set contains a given value.
- [CFSetGetCount](cfsetgetcount%28__%29.md): Returns the number of values currently in a set.
- [CFSetGetValue](cfsetgetvalue%28____%29.md): Obtains a specified value from a set.
- [CFSetGetValueIfPresent](cfsetgetvalueifpresent%28______%29.md): Reports whether or not a value is in a set, and if it exists returns the value indirectly.
- [CFSetGetValues](cfsetgetvalues%28____%29.md): Obtains all values in a set.
