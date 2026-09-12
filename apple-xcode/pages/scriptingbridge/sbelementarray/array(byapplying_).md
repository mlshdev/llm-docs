> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbelementarray/array(byapplying:)](https://developer.apple.com/documentation/scriptingbridge/sbelementarray/array(byapplying:))

# array(byApplying:) (Swift)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns an array containing the results of sending the specified message to each object in the receiver.

## Declaration

```swift
func array(byApplying selector: Selector) -> [Any]
```

## Parameters

- `selector`: A selector identifying the message to be sent to each object in the array.

<a id="return-value"></a>

## Return Value

A new array containing the results of sending the `selector` message to each object in the receiver, starting with the first object and continuing through the element array to the last object.

<a id="discussion"></a>

## Discussion

The method identified by `selector` must not take any arguments and must return an Objective-C object. It should not have the side effect of modifying the receiving array. The order of the items in the result array corresponds to the order of the items in the original array.

## See Also

### Filtering an Element Array

- [array(byApplying:with:)](array%28byapplying_with_%29.md): Returns an array containing the results of sending the specified message to each object in the receiver.

# arrayByApplyingSelector: (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns an array containing the results of sending the specified message to each object in the receiver.

## Declaration

```objectivec
- (NSArray<id> *) arrayByApplyingSelector:(SEL) selector;
```

## Parameters

- `selector`: A selector identifying the message to be sent to each object in the array.

<a id="return-value"></a>

## Return Value

A new array containing the results of sending the `selector` message to each object in the receiver, starting with the first object and continuing through the element array to the last object.

<a id="discussion"></a>

## Discussion

The method identified by `selector` must not take any arguments and must return an Objective-C object. It should not have the side effect of modifying the receiving array. The order of the items in the result array corresponds to the order of the items in the original array.

## See Also

### Filtering an Element Array

- [arrayByApplyingSelector:withObject:](array%28byapplying_with_%29.md): Returns an array containing the results of sending the specified message to each object in the receiver.
