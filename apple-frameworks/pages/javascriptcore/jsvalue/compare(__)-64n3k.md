> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/compare(_:)-64n3k](https://developer.apple.com/documentation/javascriptcore/jsvalue/compare(_:)-64n3k)

# compare(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```swift
func compare(_ other: UInt64) -> JSRelationCondition
```

<a id="return-value"></a>

## Return Value

A value of JSRelationCondition, a kJSRelationConditionUndefined is returned if an exception is thrown.

<a id="discussion"></a>

## Discussion

Compare a JSValue with a uint64_t.

The JSValue is converted to an integer according to the rules specified by the JavaScript language then compared with other.

# compareUInt64: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```objectivec
- (JSRelationCondition) compareUInt64:(uint64_t) other;
```

<a id="return-value"></a>

## Return Value

A value of JSRelationCondition, a kJSRelationConditionUndefined is returned if an exception is thrown.

<a id="discussion"></a>

## Discussion

Compare a JSValue with a uint64_t.

The JSValue is converted to an integer according to the rules specified by the JavaScript language then compared with other.
