> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/init(rect:in:)](https://developer.apple.com/documentation/javascriptcore/jsvalue/init(rect:in:))

# init(rect:in:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
init!(rect: CGRect, in context: JSContext!)
```

<a id="return-value"></a>

## Return Value

A newly allocated JavaScript object containing properties named x, y, width, and height, with values from the CGRect.

<a id="discussion"></a>

## Discussion

Create a JSValue from a CGRect.

# valueWithRect:inContext: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
+ (JSValue *) valueWithRect:(CGRect) rect inContext:(JSContext *) context;
```

<a id="return-value"></a>

## Return Value

A newly allocated JavaScript object containing properties named x, y, width, and height, with values from the CGRect.

<a id="discussion"></a>

## Discussion

Create a JSValue from a CGRect.
