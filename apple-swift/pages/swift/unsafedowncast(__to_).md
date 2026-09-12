> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafedowncast(_:to:)](https://developer.apple.com/documentation/swift/unsafedowncast(_:to:))

# unsafeDowncast(\_:to:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the given instance cast unconditionally to the specified type.

## Declaration

```swift
func unsafeDowncast<T>(_ x: AnyObject, to type: T.Type) -> T where T : AnyObject
```

## Parameters

- `x`: An instance to cast to type `T`.
- `type`: The type `T` to which `x` is cast.

<a id="return-value"></a>

## Return Value

The instance `x`, cast to type `T`.

<a id="discussion"></a>

## Discussion

The instance passed as `x` must be an instance of type `T`.

Use this function instead of `unsafeBitcast(_:to:)` because this function is more restrictive and still performs a check in debug builds. In -O builds, no test is performed to ensure that `x` actually has the dynamic type `T`.

> **Warning**

> This function trades safety for performance. Use `unsafeDowncast(_:to:)` only when you are confident that `x is T` always evaluates to `true`, and only after `x as! T` has proven to be a performance problem.

## See Also

### Instance Casting

- [unsafeBitCast(\_:to:)](unsafebitcast%28__to_%29.md): Returns the bits of the given instance, interpreted as having the specified type.
