> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdictionaryapplyfunction(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfdictionaryapplyfunction(_:_:_:))

# CFDictionaryApplyFunction(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Calls a function once for each key-value pair in a dictionary.

## Declaration

```swift
func CFDictionaryApplyFunction(_ theDict: CFDictionary!, _ applier: ((UnsafeRawPointer?, UnsafeRawPointer?, UnsafeMutableRawPointer?) -> Void)!, _ context: UnsafeMutableRawPointer!)
```

## Parameters

- `theDict`: The dictionary to operate upon.
- `applier`: The callback function to call once for each key-value pair in `theDict`. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. If there are keys or values which the `applier` function does not expect or cannot properly apply to, the behavior is undefined.
- `context`: A pointer-sized program-defined value, which is passed as the third parameter to the applier function, but is otherwise unused by this function. The value must be appropriate for the `applier` function.

<a id="Discussion"></a>

## Discussion

If this function iterates over a mutable collection, it is unsafe for the `applier` function to change the contents of the collection.

# CFDictionaryApplyFunction (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Calls a function once for each key-value pair in a dictionary.

## Declaration

```objectivec
extern void CFDictionaryApplyFunction(CFDictionaryRef theDict, CFDictionaryApplierFunction applier, void *context);
```

## Parameters

- `theDict`: The dictionary to operate upon.
- `applier`: The callback function to call once for each key-value pair in `theDict`. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. If there are keys or values which the `applier` function does not expect or cannot properly apply to, the behavior is undefined.
- `context`: A pointer-sized program-defined value, which is passed as the third parameter to the applier function, but is otherwise unused by this function. The value must be appropriate for the `applier` function.

<a id="Discussion"></a>

## Discussion

If this function iterates over a mutable collection, it is unsafe for the `applier` function to change the contents of the collection.
