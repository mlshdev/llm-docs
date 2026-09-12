> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1447164-aedeleteitem](https://developer.apple.com/documentation/coreservices/1447164-aedeleteitem)

# AEDeleteItem(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Deletes a descriptor from a descriptor list, causing all subsequent descriptors to move up one place.

## Declaration

```swift
func AEDeleteItem(_ theAEDescList: UnsafeMutablePointer<AEDescList>!, _ index: Int) -> OSErr
```

## Parameters

- `theAEDescList`: A pointer to the descriptor list containing the descriptor to delete. See [AEDescList](aedesclist.md).
- `index`: A one-based positive integer indicating the position of the descriptor to delete. `AEDeleteItem` returns an error if you pass zero, a negative number, or a value that is out of range.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Thread safe starting in OS X v10.2.

## See Also

### Deleting Descriptors

- [AEDeleteParam(\_:\_:)](1444338-aedeleteparam.md): Deletes a keyword-specified parameter from an Apple event record.

# AEDeleteItem (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Deletes a descriptor from a descriptor list, causing all subsequent descriptors to move up one place.

## Declaration

```objectivec
OSErr AEDeleteItem(AEDescList *theAEDescList, long index);
```

## Parameters

- `theAEDescList`: A pointer to the descriptor list containing the descriptor to delete. See [AEDescList](aedesclist.md).
- `index`: A one-based positive integer indicating the position of the descriptor to delete. `AEDeleteItem` returns an error if you pass zero, a negative number, or a value that is out of range.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Thread safe starting in OS X v10.2.

## See Also

### Deleting Descriptors

- [AEDeleteKeyDesc](https://developer.apple.com/documentation/applicationservices/apple_event_manager/1806085-aedeletekeydesc): Deletes a keyword-specified parameter from an Apple event record.
- [AEDeleteParam](1444338-aedeleteparam.md): Deletes a keyword-specified parameter from an Apple event record.
