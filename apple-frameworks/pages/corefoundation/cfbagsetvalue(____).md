> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbagsetvalue(_:_:)](https://developer.apple.com/documentation/corefoundation/cfbagsetvalue(_:_:))

# CFBagSetValue(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets a value in a mutable bag.

## Declaration

```swift
func CFBagSetValue(_ theBag: CFMutableBag!, _ value: UnsafeRawPointer!)
```

## Parameters

- `theBag`: The bag in which `value` is to be set.
- `value`: The value to be set in the collection. If this value already exists in `theBag`, it is replaced. You may pass the value itself instead of a pointer to it if the value is pointer-size or less. If `theBag` is fixed-size and the value is beyond its capacity, the behavior is undefined.

<a id="Discussion"></a>

## Discussion

Depending on the implementation of the equal callback specified when creating `theBag`, the value that is replaced by `value` may not have the same pointer equality.

## See Also

### Modifying a Mutable Bag

- [CFBagAddValue(\_:\_:)](cfbagaddvalue%28____%29.md): Adds a value to a mutable bag.
- [CFBagRemoveAllValues(\_:)](cfbagremoveallvalues%28__%29.md): Removes all values from a mutable bag.
- [CFBagRemoveValue(\_:\_:)](cfbagremovevalue%28____%29.md): Removes a value from a mutable bag.
- [CFBagReplaceValue(\_:\_:)](cfbagreplacevalue%28____%29.md): Replaces a value in a mutable bag.

# CFBagSetValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets a value in a mutable bag.

## Declaration

```objectivec
extern void CFBagSetValue(CFMutableBagRef theBag, const void *value);
```

## Parameters

- `theBag`: The bag in which `value` is to be set.
- `value`: The value to be set in the collection. If this value already exists in `theBag`, it is replaced. You may pass the value itself instead of a pointer to it if the value is pointer-size or less. If `theBag` is fixed-size and the value is beyond its capacity, the behavior is undefined.

<a id="Discussion"></a>

## Discussion

Depending on the implementation of the equal callback specified when creating `theBag`, the value that is replaced by `value` may not have the same pointer equality.

## See Also

### Modifying a Mutable Bag

- [CFBagAddValue](cfbagaddvalue%28____%29.md): Adds a value to a mutable bag.
- [CFBagRemoveAllValues](cfbagremoveallvalues%28__%29.md): Removes all values from a mutable bag.
- [CFBagRemoveValue](cfbagremovevalue%28____%29.md): Removes a value from a mutable bag.
- [CFBagReplaceValue](cfbagreplacevalue%28____%29.md): Replaces a value in a mutable bag.
