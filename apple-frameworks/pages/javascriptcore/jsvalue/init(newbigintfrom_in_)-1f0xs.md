> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/init(newbigintfrom:in:)-1f0xs](https://developer.apple.com/documentation/javascriptcore/jsvalue/init(newbigintfrom:in:)-1f0xs)

# init(newBigIntFrom:in:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```swift
init?(newBigIntFrom string: String, in context: JSContext)
```

## Parameters

- `string`: The string representation of the BigInt JavaScript value being created.
- `context`: The JSContext to which the resulting JSValue belongs.

<a id="return-value"></a>

## Return Value

The JSValue representing a JavaScript value with type BigInt.

<a id="discussion"></a>

## Discussion

Create a new BigInt value from a numeric string.

This is equivalent to calling the BigInt constructor from JavaScript with a string argument.

# valueWithNewBigIntFromString:inContext: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```objectivec
+ (JSValue *) valueWithNewBigIntFromString:(NSString *) string inContext:(JSContext *) context;
```

## Parameters

- `string`: The string representation of the BigInt JavaScript value being created.
- `context`: The JSContext to which the resulting JSValue belongs.

<a id="return-value"></a>

## Return Value

The JSValue representing a JavaScript value with type BigInt.

<a id="discussion"></a>

## Discussion

Create a new BigInt value from a numeric string.

This is equivalent to calling the BigInt constructor from JavaScript with a string argument.
