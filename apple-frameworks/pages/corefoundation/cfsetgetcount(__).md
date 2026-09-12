> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsetgetcount(_:)](https://developer.apple.com/documentation/corefoundation/cfsetgetcount(_:))

# CFSetGetCount(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of values currently in a set.

## Declaration

```swift
func CFSetGetCount(_ theSet: CFSet!) -> CFIndex
```

## Parameters

- `theSet`: The set to examine.

<a id="return-value"></a>

## Return Value

The number of values in `theSet`.

## See Also

### Examining a Set

- [CFSetContainsValue(\_:\_:)](cfsetcontainsvalue%28____%29.md): Returns a Boolean that indicates whether a set contains a given value.
- [CFSetGetCountOfValue(\_:\_:)](cfsetgetcountofvalue%28____%29.md): Returns the number of values in a set that match a given value.
- [CFSetGetValue(\_:\_:)](cfsetgetvalue%28____%29.md): Obtains a specified value from a set.
- [CFSetGetValueIfPresent(\_:\_:\_:)](cfsetgetvalueifpresent%28______%29.md): Reports whether or not a value is in a set, and if it exists returns the value indirectly.
- [CFSetGetValues(\_:\_:)](cfsetgetvalues%28____%29.md): Obtains all values in a set.

# CFSetGetCount (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of values currently in a set.

## Declaration

```objectivec
extern CFIndex CFSetGetCount(CFSetRef theSet);
```

## Parameters

- `theSet`: The set to examine.

<a id="return-value"></a>

## Return Value

The number of values in `theSet`.

## See Also

### Examining a Set

- [CFSetContainsValue](cfsetcontainsvalue%28____%29.md): Returns a Boolean that indicates whether a set contains a given value.
- [CFSetGetCountOfValue](cfsetgetcountofvalue%28____%29.md): Returns the number of values in a set that match a given value.
- [CFSetGetValue](cfsetgetvalue%28____%29.md): Obtains a specified value from a set.
- [CFSetGetValueIfPresent](cfsetgetvalueifpresent%28______%29.md): Reports whether or not a value is in a set, and if it exists returns the value indirectly.
- [CFSetGetValues](cfsetgetvalues%28____%29.md): Obtains all values in a set.
