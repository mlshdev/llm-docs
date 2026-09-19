> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/javascriptcore/jsvalue/compare(_:)-9d4zq

# compare(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```swift
func compare(_ other: Int64) -> JSRelationCondition
```

<a id="return-value"></a>

## Return Value

A value of JSRelationCondition, a kJSRelationConditionUndefined is returned if an exception is thrown.

<a id="discussion"></a>

## Discussion

Compare a JSValue with a int64_t.

The JSValue is converted to an integer according to the rules specified by the JavaScript language then compared with other.

# compareInt64: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```objectivec
- (JSRelationCondition) compareInt64:(int64_t) other;
```

<a id="return-value"></a>

## Return Value

A value of JSRelationCondition, a kJSRelationConditionUndefined is returned if an exception is thrown.

<a id="discussion"></a>

## Discussion

Compare a JSValue with a int64_t.

The JSValue is converted to an integer according to the rules specified by the JavaScript language then compared with other.
