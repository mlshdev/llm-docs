> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbagremovevalue(_:_:)](https://developer.apple.com/documentation/corefoundation/cfbagremovevalue(_:_:))

# CFBagRemoveValue(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a value from a mutable bag.

## Declaration

```swift
func CFBagRemoveValue(_ theBag: CFMutableBag!, _ value: UnsafeRawPointer!)
```

## Parameters

- `theBag`: The bag from which `value` is to be removed.
- `value`: The value to be removed from the collection.

## See Also

### Modifying a Mutable Bag

- [CFBagAddValue(\_:\_:)](cfbagaddvalue%28____%29.md): Adds a value to a mutable bag.
- [CFBagRemoveAllValues(\_:)](cfbagremoveallvalues%28__%29.md): Removes all values from a mutable bag.
- [CFBagReplaceValue(\_:\_:)](cfbagreplacevalue%28____%29.md): Replaces a value in a mutable bag.
- [CFBagSetValue(\_:\_:)](cfbagsetvalue%28____%29.md): Sets a value in a mutable bag.

# CFBagRemoveValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a value from a mutable bag.

## Declaration

```objectivec
extern void CFBagRemoveValue(CFMutableBagRef theBag, const void *value);
```

## Parameters

- `theBag`: The bag from which `value` is to be removed.
- `value`: The value to be removed from the collection.

## See Also

### Modifying a Mutable Bag

- [CFBagAddValue](cfbagaddvalue%28____%29.md): Adds a value to a mutable bag.
- [CFBagRemoveAllValues](cfbagremoveallvalues%28__%29.md): Removes all values from a mutable bag.
- [CFBagReplaceValue](cfbagreplacevalue%28____%29.md): Replaces a value in a mutable bag.
- [CFBagSetValue](cfbagsetvalue%28____%29.md): Sets a value in a mutable bag.
