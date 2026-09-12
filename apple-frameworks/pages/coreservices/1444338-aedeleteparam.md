> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444338-aedeleteparam](https://developer.apple.com/documentation/coreservices/1444338-aedeleteparam)

# AEDeleteParam(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Deletes a keyword-specified parameter from an Apple event record.

## Declaration

```swift
func AEDeleteParam(_ theAppleEvent: UnsafeMutablePointer<AppleEvent>!, _ theAEKeyword: AEKeyword) -> OSErr
```

## Parameters

- `theAppleEvent`: A pointer to the Apple event or Apple event record to delete the parameter from. See [AppleEvent](appleevent.md).
- `theAEKeyword`: The keyword that specifies the parameter to delete. Some keyword constants are described in [Keyword Parameter Constants](apple_events/1527206-keyword_parameter_constants.md). See [AEKeyword](aekeyword.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Thread safe starting in OS X v10.2.

## See Also

### Deleting Descriptors

- [AEDeleteItem(\_:\_:)](1447164-aedeleteitem.md): Deletes a descriptor from a descriptor list, causing all subsequent descriptors to move up one place.

# AEDeleteParam (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Deletes a keyword-specified parameter from an Apple event record.

## Declaration

```objectivec
OSErr AEDeleteParam(AppleEvent *theAppleEvent, AEKeyword theAEKeyword);
```

## Parameters

- `theAppleEvent`: A pointer to the Apple event or Apple event record to delete the parameter from. See [AppleEvent](appleevent.md).
- `theAEKeyword`: The keyword that specifies the parameter to delete. Some keyword constants are described in [Keyword Parameter Constants](1527206-keyword_parameter_constants.md). See [AEKeyword](aekeyword.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Thread safe starting in OS X v10.2.

## See Also

### Deleting Descriptors

- [AEDeleteItem](1447164-aedeleteitem.md): Deletes a descriptor from a descriptor list, causing all subsequent descriptors to move up one place.
- [AEDeleteKeyDesc](https://developer.apple.com/documentation/applicationservices/apple_event_manager/1806085-aedeletekeydesc): Deletes a keyword-specified parameter from an Apple event record.
