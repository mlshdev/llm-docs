> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/islessthanorequal(to:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/islessthanorequal(to:))

# isLessThanOrEqual(to:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Returns a Boolean value that indicates whether the receiver is less than or equal to another given object.

## Declaration

```swift
func isLessThanOrEqual(to object: Any?) -> Bool
```

## Parameters

- `object`: The object with which to compare the receiver.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the receiver is less than or equal to `object`, otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

During the evaluation of an `NSWhoseSpecifier` object that contains a test whose operator is `NSLessThanOrEqualToComparison`, an [isLessThanOrEqual(to:)](islessthanorequal%28to_%29.md) message may be sent to each potentially specified object, if the potentially specified object does not implement a [scriptingIsLessThanOrEqual(to:)](scriptingislessthanorequal%28to_%29.md) method and the object being tested against does not implement a [scriptingIsGreaterThan(\_:)](scriptingisgreaterthan%28__%29.md) method.

The default implementation for this method provided by `NSObject` method returns [YES](../yes.md) if a `compare:` message sent to the same object would return `NSOrderedAscending` or `NSOrderedSame`.

# isLessThanOrEqualTo: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Returns a Boolean value that indicates whether the receiver is less than or equal to another given object.

## Declaration

```objectivec
- (BOOL) isLessThanOrEqualTo:(id) object;
```

## Parameters

- `object`: The object with which to compare the receiver.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the receiver is less than or equal to `object`, otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

During the evaluation of an `NSWhoseSpecifier` object that contains a test whose operator is `NSLessThanOrEqualToComparison`, an [isLessThanOrEqualTo:](islessthanorequal%28to_%29.md) message may be sent to each potentially specified object, if the potentially specified object does not implement a [scriptingIsLessThanOrEqualTo:](scriptingislessthanorequal%28to_%29.md) method and the object being tested against does not implement a [scriptingIsGreaterThan:](scriptingisgreaterthan%28__%29.md) method.

The default implementation for this method provided by `NSObject` method returns [YES](../yes.md) if a `compare:` message sent to the same object would return `NSOrderedAscending` or `NSOrderedSame`.
