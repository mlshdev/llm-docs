> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbagapplyfunction(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfbagapplyfunction(_:_:_:))

# CFBagApplyFunction(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Calls a function once for each value in a bag.

## Declaration

```swift
func CFBagApplyFunction(_ theBag: CFBag!, _ applier: ((UnsafeRawPointer?, UnsafeMutableRawPointer?) -> Void)!, _ context: UnsafeMutableRawPointer!)
```

## Parameters

- `theBag`: The bag to operate upon.
- `applier`: The callback function to call once for each value in the `theBag`. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. If there are values in the range that the `applier` function does not expect or cannot properly apply to, the behavior is undefined.
- `context`: A pointer-sized program-defined value, which is passed as the second parameter to the `applier` function, but is otherwise unused by this function. If the context is not what is expected by the applier function, the behavior is undefined.

<a id="Discussion"></a>

## Discussion

While this function iterates over a mutable collection, it is unsafe for the `applier` function to change the contents of the collection.

# CFBagApplyFunction (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Calls a function once for each value in a bag.

## Declaration

```objectivec
extern void CFBagApplyFunction(CFBagRef theBag, CFBagApplierFunction applier, void *context);
```

## Parameters

- `theBag`: The bag to operate upon.
- `applier`: The callback function to call once for each value in the `theBag`. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. If there are values in the range that the `applier` function does not expect or cannot properly apply to, the behavior is undefined.
- `context`: A pointer-sized program-defined value, which is passed as the second parameter to the `applier` function, but is otherwise unused by this function. If the context is not what is expected by the applier function, the behavior is undefined.

<a id="Discussion"></a>

## Discussion

While this function iterates over a mutable collection, it is unsafe for the `applier` function to change the contents of the collection.
