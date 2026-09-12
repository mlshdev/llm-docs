> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/isequal(to:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/isequal(to:))

# isEqual(to:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Returns a Boolean value that indicates whether the receiver is equal to another given object.

## Declaration

```swift
func isEqual(to object: Any?) -> Bool
```

## Parameters

- `object`: The object with which to compare the receiver.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the receiver is equal to `object`, otherwise [NO](../no.md). In effect returns [NO](../no.md) if receiver is `nil`.

<a id="Discussion"></a>

## Discussion

During the evaluation of an `NSWhoseSpecifier` object that contains a test whose operator is `NSEqualToComparison`, an [isEqual(to:)](isequal%28to_%29.md) message may be sent to each potentially specified object, if neither the potentially specified object nor the object being tested against implements a [scriptingIsEqual(to:)](scriptingisequal%28to_%29.md) method.

The default implementation for this method provided by `NSObject` returns [YES](../yes.md) if an `isEqualTo:` message sent to the same object would return [YES](../yes.md).

# isEqualTo: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Returns a Boolean value that indicates whether the receiver is equal to another given object.

## Declaration

```objectivec
- (BOOL) isEqualTo:(id) object;
```

## Parameters

- `object`: The object with which to compare the receiver.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the receiver is equal to `object`, otherwise [NO](../no.md). In effect returns [NO](../no.md) if receiver is `nil`.

<a id="Discussion"></a>

## Discussion

During the evaluation of an `NSWhoseSpecifier` object that contains a test whose operator is `NSEqualToComparison`, an [isEqualTo:](isequal%28to_%29.md) message may be sent to each potentially specified object, if neither the potentially specified object nor the object being tested against implements a [scriptingIsEqualTo:](scriptingisequal%28to_%29.md) method.

The default implementation for this method provided by `NSObject` returns [YES](../yes.md) if an `isEqualTo:` message sent to the same object would return [YES](../yes.md).
