> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbagequalcallback](https://developer.apple.com/documentation/corefoundation/cfbagequalcallback)

# CFBagEqualCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function used to determine if two values in a bag are equal.

## Declaration

```swift
typealias CFBagEqualCallBack = (UnsafeRawPointer?, UnsafeRawPointer?) -> DarwinBoolean
```

## Parameters

- `value1`: A value in the bag.
- `value2`: Another value in the bag.

<a id="return-value"></a>

## Return Value

`true` if `value1` and `value2` are equal, `false` otherwise.

<a id="Discussion"></a>

## Discussion

This callback is passed to [CFBagCreate(\_:\_:\_:\_:)](cfbagcreate%28________%29.md) in a [CFBagCallBacks](cfbagcallbacks.md) structure.

## See Also

### Callbacks

- [CFBagApplierFunction](cfbagapplierfunction.md): Prototype of a callback function that may be applied to every value in a bag.
- [CFBagCopyDescriptionCallBack](cfbagcopydescriptioncallback.md): Prototype of a callback function used to get a description of a value in a bag.
- [CFBagHashCallBack](cfbaghashcallback.md): Prototype of a callback function invoked to compute a hash code for a value. Hash codes are used when values are accessed, added, or removed from a collection.
- [CFBagReleaseCallBack](cfbagreleasecallback.md): Prototype of a callback function used to release a value before it’s removed from a bag.
- [CFBagRetainCallBack](cfbagretaincallback.md): Prototype of a callback function used to retain a value being added to a bag.

# CFBagEqualCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function used to determine if two values in a bag are equal.

## Declaration

```objectivec
typedef unsigned char (*)(const void *, const void *) CFBagEqualCallBack;
```

## Parameters

- `value1`: A value in the bag.
- `value2`: Another value in the bag.

<a id="return-value"></a>

## Return Value

`true` if `value1` and `value2` are equal, `false` otherwise.

<a id="Discussion"></a>

## Discussion

This callback is passed to [CFBagCreate](cfbagcreate%28________%29.md) in a [CFBagCallBacks](cfbagcallbacks.md) structure.

## See Also

### Callbacks

- [CFBagApplierFunction](cfbagapplierfunction.md): Prototype of a callback function that may be applied to every value in a bag.
- [CFBagCopyDescriptionCallBack](cfbagcopydescriptioncallback.md): Prototype of a callback function used to get a description of a value in a bag.
- [CFBagHashCallBack](cfbaghashcallback.md): Prototype of a callback function invoked to compute a hash code for a value. Hash codes are used when values are accessed, added, or removed from a collection.
- [CFBagReleaseCallBack](cfbagreleasecallback.md): Prototype of a callback function used to release a value before it’s removed from a bag.
- [CFBagRetainCallBack](cfbagretaincallback.md): Prototype of a callback function used to retain a value being added to a bag.
