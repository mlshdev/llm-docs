> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkqueryanchor/init(fromvalue:)](https://developer.apple.com/documentation/healthkit/hkqueryanchor/init(fromvalue:))

# init(fromValue:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an anchor object from the provided anchor value.

## Declaration

```swift
convenience init(fromValue value: Int)
```

## Parameters

- `value`: An anchor value.

<a id="return-value"></a>

## Return Value

An anchored object corresponding to the same sample as the anchor value.

<a id="Discussion"></a>

## Discussion

Prior to iOS 9.0, anchored object queries used anchor values to track the last sample returned by a previous query. Use this method to convert those anchor values into anchor objects.

## See Also

### Related Documentation

- [init(type:predicate:anchor:limit:resultsHandler:)](../hkanchoredobjectquery/init%28type_predicate_anchor_limit_resultshandler_%29.md): Initializes a new anchored object query.
- [init(type:predicate:anchor:limit:completionHandler:)](../hkanchoredobjectquery/init%28type_predicate_anchor_limit_completionhandler_%29.md): Deprecated. Initializes a new anchored object query.

# anchorFromValue: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an anchor object from the provided anchor value.

## Declaration

```objectivec
+ (instancetype) anchorFromValue:(NSUInteger) value;
```

## Parameters

- `value`: An anchor value.

<a id="return-value"></a>

## Return Value

An anchored object corresponding to the same sample as the anchor value.

<a id="Discussion"></a>

## Discussion

Prior to iOS 9.0, anchored object queries used anchor values to track the last sample returned by a previous query. Use this method to convert those anchor values into anchor objects.

## See Also

### Related Documentation

- [initWithType:predicate:anchor:limit:resultsHandler:](../hkanchoredobjectquery/init%28type_predicate_anchor_limit_resultshandler_%29.md): Initializes a new anchored object query.
- [initWithType:predicate:anchor:limit:completionHandler:](../hkanchoredobjectquery/init%28type_predicate_anchor_limit_completionhandler_%29.md): Deprecated. Initializes a new anchored object query.
