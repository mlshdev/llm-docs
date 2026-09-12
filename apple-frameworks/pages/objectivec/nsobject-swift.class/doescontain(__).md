> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/doescontain(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/doescontain(_:))

# doesContain(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Returns a Boolean value that indicates whether the receiver contains a given object.

## Declaration

```swift
func doesContain(_ object: Any) -> Bool
```

## Parameters

- `object`: The object to search for in the receiver.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the receiver contains `object`, otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

Currently, [doesContain(\_:)](doescontain%28__%29.md) messages are never sent to any object from within Cocoa itself.

The default implementation for this method provided by `NSObject` returns [YES](../yes.md) if the receiver is actually an `NSArray` object and an [indexOfObjectIdentical(to:)](../../foundation/nsarray/indexofobjectidentical%28to_%29.md) message sent to the same object would return something other than `NSNotFound`.

# doesContain: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Returns a Boolean value that indicates whether the receiver contains a given object.

## Declaration

```objectivec
- (BOOL) doesContain:(id) object;
```

## Parameters

- `object`: The object to search for in the receiver.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the receiver contains `object`, otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

Currently, [doesContain:](doescontain%28__%29.md) messages are never sent to any object from within Cocoa itself.

The default implementation for this method provided by `NSObject` returns [YES](../yes.md) if the receiver is actually an `NSArray` object and an [indexOfObjectIdenticalTo:](../../foundation/nsarray/indexofobjectidentical%28to_%29.md) message sent to the same object would return something other than `NSNotFound`.
