> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/init(newbigintfrom:in:)-7worq](https://developer.apple.com/documentation/javascriptcore/jsvalue/init(newbigintfrom:in:)-7worq)

# init(newBigIntFrom:in:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```swift
init?(newBigIntFrom uint64: UInt64, in context: JSContext)
```

## Parameters

- `uint64`: The unsigned 64-bit integer of the BigInt JavaScript value being created.
- `context`: The JSContext to which the resulting JSValue belongs.

<a id="return-value"></a>

## Return Value

The JSValue representing a JavaScript value with type BigInt.

<a id="discussion"></a>

## Discussion

Create a new BigInt value from a uint64_t.

# valueWithNewBigIntFromUInt64:inContext: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```objectivec
+ (JSValue *) valueWithNewBigIntFromUInt64:(uint64_t) uint64 inContext:(JSContext *) context;
```

## Parameters

- `uint64`: The unsigned 64-bit integer of the BigInt JavaScript value being created.
- `context`: The JSContext to which the resulting JSValue belongs.

<a id="return-value"></a>

## Return Value

The JSValue representing a JavaScript value with type BigInt.

<a id="discussion"></a>

## Discussion

Create a new BigInt value from a uint64_t.
