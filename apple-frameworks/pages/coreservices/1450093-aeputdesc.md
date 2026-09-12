> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1450093-aeputdesc](https://developer.apple.com/documentation/coreservices/1450093-aeputdesc)

# AEPutDesc(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Adds a descriptor to any descriptor list, possibly replacing an existing descriptor in the list.

## Declaration

```swift
func AEPutDesc(_ theAEDescList: UnsafeMutablePointer<AEDescList>!, _ index: Int, _ theAEDesc: UnsafePointer<AEDesc>!) -> OSErr
```

## Parameters

- `theAEDescList`: A pointer to the descriptor list to add a descriptor to. See [AEDescList](aedesclist.md).
- `index`: A one-based positive integer indicating the position to insert the descriptor at. If there is already a descriptor in the specified position, it is replaced.

  You can pass a value of zero or count + 1 to add the descriptor at the end of the list. `AEPutDesc` returns an error (`AEIllegalIndex`) if you pass a negative number or a value that is out of range.
- `theAEDesc`: A pointer to the descriptor to add to the list. See [AEDesc](aedesc.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Thread safe starting in OS X v10.2.

## See Also

### Adding Items to Descriptor Lists

- [AEPutArray(\_:\_:\_:\_:\_:\_:)](1442535-aeputarray.md): Inserts the data for an Apple event array into a descriptor list, replacing any previous descriptors in the list.
- [AEPutPtr(\_:\_:\_:\_:\_:)](1445287-aeputptr.md): Inserts data specified in a buffer into a descriptor list as a descriptor, possibly replacing an existing descriptor in the list.

# AEPutDesc (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Adds a descriptor to any descriptor list, possibly replacing an existing descriptor in the list.

## Declaration

```objectivec
OSErr AEPutDesc(AEDescList *theAEDescList, long index, const AEDesc *theAEDesc);
```

## Parameters

- `theAEDescList`: A pointer to the descriptor list to add a descriptor to. See [AEDescList](aedesclist.md).
- `index`: A one-based positive integer indicating the position to insert the descriptor at. If there is already a descriptor in the specified position, it is replaced.

  You can pass a value of zero or count + 1 to add the descriptor at the end of the list. `AEPutDesc` returns an error (`AEIllegalIndex`) if you pass a negative number or a value that is out of range.
- `theAEDesc`: A pointer to the descriptor to add to the list. See [AEDesc](aedesc.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Thread safe starting in OS X v10.2.

## See Also

### Adding Items to Descriptor Lists

- [AEPutArray](1442535-aeputarray.md): Inserts the data for an Apple event array into a descriptor list, replacing any previous descriptors in the list.
- [AEPutPtr](1445287-aeputptr.md): Inserts data specified in a buffer into a descriptor list as a descriptor, possibly replacing an existing descriptor in the list.
