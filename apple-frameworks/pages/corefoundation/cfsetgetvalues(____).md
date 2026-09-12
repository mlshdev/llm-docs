> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsetgetvalues(_:_:)](https://developer.apple.com/documentation/corefoundation/cfsetgetvalues(_:_:))

# CFSetGetValues(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Obtains all values in a set.

## Declaration

```swift
func CFSetGetValues(_ theSet: CFSet!, _ values: UnsafeMutablePointer<UnsafeRawPointer?>!)
```

## Parameters

- `theSet`: The set to examine.
- `values`: A C array of pointer-sized values to be filled with values from `theSet`. The value must be a valid C array of the appropriate type and of a size at least equal to the count of `theSet`). If the values are Core Foundation objects, ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Examining a Set

- [CFSetContainsValue(\_:\_:)](cfsetcontainsvalue%28____%29.md): Returns a Boolean that indicates whether a set contains a given value.
- [CFSetGetCount(\_:)](cfsetgetcount%28__%29.md): Returns the number of values currently in a set.
- [CFSetGetCountOfValue(\_:\_:)](cfsetgetcountofvalue%28____%29.md): Returns the number of values in a set that match a given value.
- [CFSetGetValue(\_:\_:)](cfsetgetvalue%28____%29.md): Obtains a specified value from a set.
- [CFSetGetValueIfPresent(\_:\_:\_:)](cfsetgetvalueifpresent%28______%29.md): Reports whether or not a value is in a set, and if it exists returns the value indirectly.

# CFSetGetValues (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Obtains all values in a set.

## Declaration

```objectivec
extern void CFSetGetValues(CFSetRef theSet, const void **values);
```

## Parameters

- `theSet`: The set to examine.
- `values`: A C array of pointer-sized values to be filled with values from `theSet`. The value must be a valid C array of the appropriate type and of a size at least equal to the count of `theSet`). If the values are Core Foundation objects, ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Examining a Set

- [CFSetContainsValue](cfsetcontainsvalue%28____%29.md): Returns a Boolean that indicates whether a set contains a given value.
- [CFSetGetCount](cfsetgetcount%28__%29.md): Returns the number of values currently in a set.
- [CFSetGetCountOfValue](cfsetgetcountofvalue%28____%29.md): Returns the number of values in a set that match a given value.
- [CFSetGetValue](cfsetgetvalue%28____%29.md): Obtains a specified value from a set.
- [CFSetGetValueIfPresent](cfsetgetvalueifpresent%28______%29.md): Reports whether or not a value is in a set, and if it exists returns the value indirectly.
