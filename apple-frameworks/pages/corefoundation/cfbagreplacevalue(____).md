> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbagreplacevalue(_:_:)](https://developer.apple.com/documentation/corefoundation/cfbagreplacevalue(_:_:))

# CFBagReplaceValue(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Replaces a value in a mutable bag.

## Declaration

```swift
func CFBagReplaceValue(_ theBag: CFMutableBag!, _ value: UnsafeRawPointer!)
```

## Parameters

- `theBag`: The bag from which `value` is to be replaced.
- `value`: The value to be replaced in the collection. If this value does not already exist in the collection, the function does nothing. You may pass the value itself instead of a pointer if it is pointer-size or less. The equal callback provided when `theBag` was created is used to compare. If the equal callback was `NULL`, pointer equality (in C, ==) is used. If `value`, or any other value in `theBag`, is not understood by the equal callback, the behavior is undefined.

<a id="Discussion"></a>

## Discussion

Depending on the implementation of the equal callback specified when creating `theBag`, the object that is replaced by `value` may not have the same pointer equality.

## See Also

### Modifying a Mutable Bag

- [CFBagAddValue(\_:\_:)](cfbagaddvalue%28____%29.md): Adds a value to a mutable bag.
- [CFBagRemoveAllValues(\_:)](cfbagremoveallvalues%28__%29.md): Removes all values from a mutable bag.
- [CFBagRemoveValue(\_:\_:)](cfbagremovevalue%28____%29.md): Removes a value from a mutable bag.
- [CFBagSetValue(\_:\_:)](cfbagsetvalue%28____%29.md): Sets a value in a mutable bag.

# CFBagReplaceValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Replaces a value in a mutable bag.

## Declaration

```objectivec
extern void CFBagReplaceValue(CFMutableBagRef theBag, const void *value);
```

## Parameters

- `theBag`: The bag from which `value` is to be replaced.
- `value`: The value to be replaced in the collection. If this value does not already exist in the collection, the function does nothing. You may pass the value itself instead of a pointer if it is pointer-size or less. The equal callback provided when `theBag` was created is used to compare. If the equal callback was `NULL`, pointer equality (in C, ==) is used. If `value`, or any other value in `theBag`, is not understood by the equal callback, the behavior is undefined.

<a id="Discussion"></a>

## Discussion

Depending on the implementation of the equal callback specified when creating `theBag`, the object that is replaced by `value` may not have the same pointer equality.

## See Also

### Modifying a Mutable Bag

- [CFBagAddValue](cfbagaddvalue%28____%29.md): Adds a value to a mutable bag.
- [CFBagRemoveAllValues](cfbagremoveallvalues%28__%29.md): Removes all values from a mutable bag.
- [CFBagRemoveValue](cfbagremovevalue%28____%29.md): Removes a value from a mutable bag.
- [CFBagSetValue](cfbagsetvalue%28____%29.md): Sets a value in a mutable bag.
