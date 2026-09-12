> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbagaddvalue(_:_:)](https://developer.apple.com/documentation/corefoundation/cfbagaddvalue(_:_:))

# CFBagAddValue(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a value to a mutable bag.

## Declaration

```swift
func CFBagAddValue(_ theBag: CFMutableBag!, _ value: UnsafeRawPointer!)
```

## Parameters

- `theBag`: The bag to which `value` is added.
- `value`: A CFType object or a pointer value to add to `theBag` (or the value itself, if it fits into the size of a pointer).

<a id="Discussion"></a>

## Discussion

The `value` parameter is retained by `theBag` using the retain callback provided when `theBag` was created. If `value` is not of the type expected by the retain callback, the behavior is undefined. If `value` already exists in the collection, it is simply retained again—no memory is allocated for the added value. Use a CFSet object if you don’t want duplicate values in your collection.

## See Also

### Modifying a Mutable Bag

- [CFBagRemoveAllValues(\_:)](cfbagremoveallvalues%28__%29.md): Removes all values from a mutable bag.
- [CFBagRemoveValue(\_:\_:)](cfbagremovevalue%28____%29.md): Removes a value from a mutable bag.
- [CFBagReplaceValue(\_:\_:)](cfbagreplacevalue%28____%29.md): Replaces a value in a mutable bag.
- [CFBagSetValue(\_:\_:)](cfbagsetvalue%28____%29.md): Sets a value in a mutable bag.

# CFBagAddValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a value to a mutable bag.

## Declaration

```objectivec
extern void CFBagAddValue(CFMutableBagRef theBag, const void *value);
```

## Parameters

- `theBag`: The bag to which `value` is added.
- `value`: A CFType object or a pointer value to add to `theBag` (or the value itself, if it fits into the size of a pointer).

<a id="Discussion"></a>

## Discussion

The `value` parameter is retained by `theBag` using the retain callback provided when `theBag` was created. If `value` is not of the type expected by the retain callback, the behavior is undefined. If `value` already exists in the collection, it is simply retained again—no memory is allocated for the added value. Use a CFSet object if you don’t want duplicate values in your collection.

## See Also

### Modifying a Mutable Bag

- [CFBagRemoveAllValues](cfbagremoveallvalues%28__%29.md): Removes all values from a mutable bag.
- [CFBagRemoveValue](cfbagremovevalue%28____%29.md): Removes a value from a mutable bag.
- [CFBagReplaceValue](cfbagreplacevalue%28____%29.md): Replaces a value in a mutable bag.
- [CFBagSetValue](cfbagsetvalue%28____%29.md): Sets a value in a mutable bag.
