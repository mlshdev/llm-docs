> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1449533-aecountitems](https://developer.apple.com/documentation/coreservices/1449533-aecountitems)

# AECountItems(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Counts the number of descriptors in a descriptor list.

## Declaration

```swift
func AECountItems(_ theAEDescList: UnsafePointer<AEDescList>!, _ theCount: UnsafeMutablePointer<Int>!) -> OSErr
```

## Parameters

- `theAEDescList`: A pointer to the descriptor list to count. See [AEDescList](aedesclist.md).
- `theCount`: A pointer to a count variable. On return, the number of descriptors in the specified descriptor list, which can be 0, if the list is empty.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Your application typically counts the descriptors in a descriptor list when it is extracting data from an Apple event. You can use the functions in “Getting Items From Descriptor Lists” to get an individual item from a descriptor list or to iterate through the items. 

<a id="1770170"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

# AECountItems (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Counts the number of descriptors in a descriptor list.

## Declaration

```objectivec
OSErr AECountItems(const AEDescList *theAEDescList, long *theCount);
```

## Parameters

- `theAEDescList`: A pointer to the descriptor list to count. See [AEDescList](aedesclist.md).
- `theCount`: A pointer to a count variable. On return, the number of descriptors in the specified descriptor list, which can be 0, if the list is empty.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Your application typically counts the descriptors in a descriptor list when it is extracting data from an Apple event. You can use the functions in “Getting Items From Descriptor Lists” to get an individual item from a descriptor list or to iterate through the items. 

<a id="1770170"></a>

### Version-Notes

Thread safe starting in OS X v10.2.
