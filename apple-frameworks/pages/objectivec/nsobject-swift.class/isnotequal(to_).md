> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/isnotequal(to:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/isnotequal(to:))

# isNotEqual(to:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Returns a Boolean value that indicates whether the receiver is not equal to another given object.

## Declaration

```swift
func isNotEqual(to object: Any?) -> Bool
```

## Parameters

- `object`: The object with which to compare the receiver.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the receiver is not equal to `object`, otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

Currently, [isNotEqual(to:)](isnotequal%28to_%29.md) messages are never sent to any object from within Cocoa itself.

The default implementation for this method provided by `NSObject` method returns [YES](../yes.md) if an `isEqual:` message sent to the same object would return [NO](../no.md).

# isNotEqualTo: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Returns a Boolean value that indicates whether the receiver is not equal to another given object.

## Declaration

```objectivec
- (BOOL) isNotEqualTo:(id) object;
```

## Parameters

- `object`: The object with which to compare the receiver.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the receiver is not equal to `object`, otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

Currently, [isNotEqualTo:](isnotequal%28to_%29.md) messages are never sent to any object from within Cocoa itself.

The default implementation for this method provided by `NSObject` method returns [YES](../yes.md) if an `isEqual:` message sent to the same object would return [NO](../no.md).
