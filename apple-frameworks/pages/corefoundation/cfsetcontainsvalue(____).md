> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsetcontainsvalue(_:_:)](https://developer.apple.com/documentation/corefoundation/cfsetcontainsvalue(_:_:))

# CFSetContainsValue(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean that indicates whether a set contains a given value.

## Declaration

```swift
func CFSetContainsValue(_ theSet: CFSet!, _ value: UnsafeRawPointer!) -> Bool
```

## Parameters

- `theSet`: The set to search.
- `value`: The value to match in `theSet`. Comparisons are made using the equal callback provided when `theSet` was created. If the equal callback was `NULL`, pointer equality (in C, ==) is used.

<a id="return-value"></a>

## Return Value

`true` if `value` is contained in `theSet`, otherwise `false`.

<a id="Discussion"></a>

## Discussion

This function uses the equal callback. `value` and all elements in the set must be understood by the equal callback.

## See Also

### Examining a Set

- [CFSetGetCount(\_:)](cfsetgetcount%28__%29.md): Returns the number of values currently in a set.
- [CFSetGetCountOfValue(\_:\_:)](cfsetgetcountofvalue%28____%29.md): Returns the number of values in a set that match a given value.
- [CFSetGetValue(\_:\_:)](cfsetgetvalue%28____%29.md): Obtains a specified value from a set.
- [CFSetGetValueIfPresent(\_:\_:\_:)](cfsetgetvalueifpresent%28______%29.md): Reports whether or not a value is in a set, and if it exists returns the value indirectly.
- [CFSetGetValues(\_:\_:)](cfsetgetvalues%28____%29.md): Obtains all values in a set.

# CFSetContainsValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean that indicates whether a set contains a given value.

## Declaration

```objectivec
extern Boolean CFSetContainsValue(CFSetRef theSet, const void *value);
```

## Parameters

- `theSet`: The set to search.
- `value`: The value to match in `theSet`. Comparisons are made using the equal callback provided when `theSet` was created. If the equal callback was `NULL`, pointer equality (in C, ==) is used.

<a id="return-value"></a>

## Return Value

`true` if `value` is contained in `theSet`, otherwise `false`.

<a id="Discussion"></a>

## Discussion

This function uses the equal callback. `value` and all elements in the set must be understood by the equal callback.

## See Also

### Examining a Set

- [CFSetGetCount](cfsetgetcount%28__%29.md): Returns the number of values currently in a set.
- [CFSetGetCountOfValue](cfsetgetcountofvalue%28____%29.md): Returns the number of values in a set that match a given value.
- [CFSetGetValue](cfsetgetvalue%28____%29.md): Obtains a specified value from a set.
- [CFSetGetValueIfPresent](cfsetgetvalueifpresent%28______%29.md): Reports whether or not a value is in a set, and if it exists returns the value indirectly.
- [CFSetGetValues](cfsetgetvalues%28____%29.md): Obtains all values in a set.
