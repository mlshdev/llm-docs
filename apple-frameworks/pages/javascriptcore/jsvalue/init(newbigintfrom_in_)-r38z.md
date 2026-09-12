> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/init(newbigintfrom:in:)-r38z](https://developer.apple.com/documentation/javascriptcore/jsvalue/init(newbigintfrom:in:)-r38z)

# init(newBigIntFrom:in:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```swift
init?(newBigIntFrom value: Double, in context: JSContext)
```

## Parameters

- `value`: The value of the BigInt JavaScript value being created.
- `context`: The JSContext to which the resulting JSValue belongs.

<a id="return-value"></a>

## Return Value

The JSValue representing a JavaScript value with type BigInt.

<a id="discussion"></a>

## Discussion

Create a new BigInt value from a double.

If the value is not an integer, an exception is thrown.

# valueWithNewBigIntFromDouble:inContext: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```objectivec
+ (JSValue *) valueWithNewBigIntFromDouble:(double) value inContext:(JSContext *) context;
```

## Parameters

- `value`: The value of the BigInt JavaScript value being created.
- `context`: The JSContext to which the resulting JSValue belongs.

<a id="return-value"></a>

## Return Value

The JSValue representing a JavaScript value with type BigInt.

<a id="discussion"></a>

## Discussion

Create a new BigInt value from a double.

If the value is not an integer, an exception is thrown.
