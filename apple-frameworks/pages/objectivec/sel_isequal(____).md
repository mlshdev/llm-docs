> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/sel_isequal(_:_:)](https://developer.apple.com/documentation/objectivec/sel_isequal(_:_:))

# sel_isEqual(\_:\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a Boolean value that indicates whether two selectors are equal.

## Declaration

```swift
func sel_isEqual(_ lhs: Selector, _ rhs: Selector) -> Bool
```

## Parameters

- `lhs`: The selector to compare with `rhs`.
- `rhs`: The selector to compare with `lhs`.

<a id="return-value"></a>

## Return Value

[YES](yes.md) if `rhs` and `rhs` are equal, otherwise [NO](no.md).

<a id="Discussion"></a>

## Discussion

`sel_isEqual` is equivalent to `==`.

## See Also

### Working with Selectors

- [sel_getName(\_:)](sel_getname%28__%29.md): Returns the name of the method specified by a given selector.
- [sel_registerName(\_:)](sel_registername%28__%29.md): Registers a method with the Objective-C runtime system, maps the method name to a selector, and returns the selector value.
- [sel_getUid(\_:)](sel_getuid%28__%29.md): Registers a method name with the Objective-C runtime system.

# sel_isEqual (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a Boolean value that indicates whether two selectors are equal.

## Declaration

```objectivec
extern BOOL sel_isEqual(SEL lhs, SEL rhs);
```

## Parameters

- `lhs`: The selector to compare with `rhs`.
- `rhs`: The selector to compare with `lhs`.

<a id="return-value"></a>

## Return Value

[YES](yes.md) if `rhs` and `rhs` are equal, otherwise [NO](no.md).

<a id="Discussion"></a>

## Discussion

`sel_isEqual` is equivalent to `==`.

## See Also

### Working with Selectors

- [sel_getName](sel_getname%28__%29.md): Returns the name of the method specified by a given selector.
- [sel_registerName](sel_registername%28__%29.md): Registers a method with the Objective-C runtime system, maps the method name to a selector, and returns the selector value.
- [sel_getUid](sel_getuid%28__%29.md): Registers a method name with the Objective-C runtime system.
