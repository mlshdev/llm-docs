> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/islike(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/islike(_:))

# isLike(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Returns a Boolean value that indicates whether the receiver is “like” another given object.

## Declaration

```swift
func isLike(_ object: String) -> Bool
```

## Parameters

- `object`: The object with which to compare the receiver.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the receiver is considered to be “like” `object`, otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

Currently, [isLike(\_:)](islike%28__%29.md) messages are never sent to any object from within Cocoa itself.

The default implementation for this method provided by `NSObject` method returns [NO](../no.md). `NSString` also provides an implementation of this method, which returns [YES](../yes.md) if the receiver matches a pattern described by `object`.

# isLike: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Returns a Boolean value that indicates whether the receiver is “like” another given object.

## Declaration

```objectivec
- (BOOL) isLike:(NSString *) object;
```

## Parameters

- `object`: The object with which to compare the receiver.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the receiver is considered to be “like” `object`, otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

Currently, [isLike:](islike%28__%29.md) messages are never sent to any object from within Cocoa itself.

The default implementation for this method provided by `NSObject` method returns [NO](../no.md). `NSString` also provides an implementation of this method, which returns [YES](../yes.md) if the receiver matches a pattern described by `object`.
