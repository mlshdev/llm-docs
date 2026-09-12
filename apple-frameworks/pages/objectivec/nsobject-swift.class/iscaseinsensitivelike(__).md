> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/iscaseinsensitivelike(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/iscaseinsensitivelike(_:))

# isCaseInsensitiveLike(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Returns a Boolean value that indicates whether receiver is considered to be “like” a given string when the case of characters in the receiver is ignored.

## Declaration

```swift
func isCaseInsensitiveLike(_ object: String) -> Bool
```

## Parameters

- `object`: The string with which to compare the receiver.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the receiver is considered to be “like” `aString` when the case of characters in the receiver is ignored, otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

Currently, [isCaseInsensitiveLike(\_:)](iscaseinsensitivelike%28__%29.md) messages are never sent to any object from within Cocoa itself.

The default implementation for this method provided by `NSObject` returns [NO](../no.md). `NSString` also provides an implementation of this method, which returns [YES](../yes.md) if the receiver matches a pattern described by `aString`, ignoring the case of the characters in the receiver.

# isCaseInsensitiveLike: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Returns a Boolean value that indicates whether receiver is considered to be “like” a given string when the case of characters in the receiver is ignored.

## Declaration

```objectivec
- (BOOL) isCaseInsensitiveLike:(NSString *) object;
```

## Parameters

- `object`: The string with which to compare the receiver.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the receiver is considered to be “like” `aString` when the case of characters in the receiver is ignored, otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

Currently, [isCaseInsensitiveLike:](iscaseinsensitivelike%28__%29.md) messages are never sent to any object from within Cocoa itself.

The default implementation for this method provided by `NSObject` returns [NO](../no.md). `NSString` also provides an implementation of this method, which returns [YES](../yes.md) if the receiver matches a pattern described by `aString`, ignoring the case of the characters in the receiver.
