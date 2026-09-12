> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbagapplierfunction](https://developer.apple.com/documentation/corefoundation/cfbagapplierfunction)

# CFBagApplierFunction (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function that may be applied to every value in a bag.

## Declaration

```swift
typealias CFBagApplierFunction = (UnsafeRawPointer?, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `value`: The current value in a bag.
- `context`: The program-defined context parameter given to the apply   function.

<a id="Discussion"></a>

## Discussion

This callback is passed to the [CFBagApplyFunction(\_:\_:\_:)](cfbagapplyfunction%28______%29.md) function which iterates over the values in a bag and applies the behavior defined in the applier function to each value in a bag.

## See Also

### Callbacks

- [CFBagCopyDescriptionCallBack](cfbagcopydescriptioncallback.md): Prototype of a callback function used to get a description of a value in a bag.
- [CFBagEqualCallBack](cfbagequalcallback.md): Prototype of a callback function used to determine if two values in a bag are equal.
- [CFBagHashCallBack](cfbaghashcallback.md): Prototype of a callback function invoked to compute a hash code for a value. Hash codes are used when values are accessed, added, or removed from a collection.
- [CFBagReleaseCallBack](cfbagreleasecallback.md): Prototype of a callback function used to release a value before it’s removed from a bag.
- [CFBagRetainCallBack](cfbagretaincallback.md): Prototype of a callback function used to retain a value being added to a bag.

# CFBagApplierFunction (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function that may be applied to every value in a bag.

## Declaration

```objectivec
typedef void (*)(const void *, void *) CFBagApplierFunction;
```

## Parameters

- `value`: The current value in a bag.
- `context`: The program-defined context parameter given to the apply   function.

<a id="Discussion"></a>

## Discussion

This callback is passed to the [CFBagApplyFunction](cfbagapplyfunction%28______%29.md) function which iterates over the values in a bag and applies the behavior defined in the applier function to each value in a bag.

## See Also

### Callbacks

- [CFBagCopyDescriptionCallBack](cfbagcopydescriptioncallback.md): Prototype of a callback function used to get a description of a value in a bag.
- [CFBagEqualCallBack](cfbagequalcallback.md): Prototype of a callback function used to determine if two values in a bag are equal.
- [CFBagHashCallBack](cfbaghashcallback.md): Prototype of a callback function invoked to compute a hash code for a value. Hash codes are used when values are accessed, added, or removed from a collection.
- [CFBagReleaseCallBack](cfbagreleasecallback.md): Prototype of a callback function used to release a value before it’s removed from a bag.
- [CFBagRetainCallBack](cfbagretaincallback.md): Prototype of a callback function used to retain a value being added to a bag.
