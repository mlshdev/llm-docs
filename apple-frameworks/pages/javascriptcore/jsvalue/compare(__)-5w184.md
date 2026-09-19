> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/javascriptcore/jsvalue/compare(_:)-5w184

# compare(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```swift
func compare(_ other: JSValue) -> JSRelationCondition
```

<a id="return-value"></a>

## Return Value

A value of JSRelationCondition, a kJSRelationConditionUndefined is returned if an exception is thrown.

<a id="discussion"></a>

## Discussion

Compare two JSValues.

The result is computed by comparing the results of JavaScript’s ==, \<, and \> operators. If either self or other is (or would coerce to) NaN in JavaScript, then the result is kJSRelationConditionUndefined.

# compareJSValue: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```objectivec
- (JSRelationCondition) compareJSValue:(JSValue *) other;
```

<a id="return-value"></a>

## Return Value

A value of JSRelationCondition, a kJSRelationConditionUndefined is returned if an exception is thrown.

<a id="discussion"></a>

## Discussion

Compare two JSValues.

The result is computed by comparing the results of JavaScript’s ==, \<, and \> operators. If either self or other is (or would coerce to) NaN in JavaScript, then the result is kJSRelationConditionUndefined.
