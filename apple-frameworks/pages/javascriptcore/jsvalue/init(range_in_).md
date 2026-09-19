> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/javascriptcore/jsvalue/init(range:in:)

# init(range:in:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
init!(range: NSRange, in context: JSContext!)
```

<a id="return-value"></a>

## Return Value

A newly allocated JavaScript object containing properties named location and length, with values from the NSRange.

<a id="discussion"></a>

## Discussion

Create a JSValue from a NSRange.

# valueWithRange:inContext: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
+ (JSValue *) valueWithRange:(NSRange) range inContext:(JSContext *) context;
```

<a id="return-value"></a>

## Return Value

A newly allocated JavaScript object containing properties named location and length, with values from the NSRange.

<a id="discussion"></a>

## Discussion

Create a JSValue from a NSRange.
