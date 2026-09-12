> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsetapplyfunction(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfsetapplyfunction(_:_:_:))

# CFSetApplyFunction(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Calls a function once for each value in a set.

## Declaration

```swift
func CFSetApplyFunction(_ theSet: CFSet!, _ applier: ((UnsafeRawPointer?, UnsafeMutableRawPointer?) -> Void)!, _ context: UnsafeMutableRawPointer!)
```

## Parameters

- `theSet`: The set to operate upon.
- `applier`: The callback function to call once for each value in the `theSet`. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. The `applier` function must be able to work with all values in `theSet`.
- `context`: A pointer-sized program-defined value, which is passed as the second parameter to the `applier` function, but is otherwise unused by this function.

<a id="Discussion"></a>

## Discussion

If `theSet` is mutable, it is unsafe for the `applier` function to change the contents of the collection.

# CFSetApplyFunction (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Calls a function once for each value in a set.

## Declaration

```objectivec
extern void CFSetApplyFunction(CFSetRef theSet, CFSetApplierFunction applier, void *context);
```

## Parameters

- `theSet`: The set to operate upon.
- `applier`: The callback function to call once for each value in the `theSet`. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. The `applier` function must be able to work with all values in `theSet`.
- `context`: A pointer-sized program-defined value, which is passed as the second parameter to the `applier` function, but is otherwise unused by this function.

<a id="Discussion"></a>

## Discussion

If `theSet` is mutable, it is unsafe for the `applier` function to change the contents of the collection.
