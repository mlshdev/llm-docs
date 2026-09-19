> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/javascriptcore/jsvalue/init(point:in:)

# init(point:in:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
init!(point: CGPoint, in context: JSContext!)
```

<a id="return-value"></a>

## Return Value

A newly allocated JavaScript object containing properties named x and y, with values from the CGPoint.

<a id="discussion"></a>

## Discussion

Create a JSValue from a CGPoint.

# valueWithPoint:inContext: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
+ (JSValue *) valueWithPoint:(CGPoint) point inContext:(JSContext *) context;
```

<a id="return-value"></a>

## Return Value

A newly allocated JavaScript object containing properties named x and y, with values from the CGPoint.

<a id="discussion"></a>

## Discussion

Create a JSValue from a CGPoint.
