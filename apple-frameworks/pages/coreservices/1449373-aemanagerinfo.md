> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1449373-aemanagerinfo](https://developer.apple.com/documentation/coreservices/1449373-aemanagerinfo)

# AEManagerInfo(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Provides information about the version of the Apple Event Manager currently available or the number of processes that are currently recording Apple events.

## Declaration

```swift
func AEManagerInfo(_ keyWord: AEKeyword, _ result: UnsafeMutablePointer<Int>!) -> OSErr
```

## Parameters

- `keyWord`: A value that determines the kind of information the function supplies in the `result` parameter.

  Pass the value `keyAERecorderCount` to obtain the number of processes that are currently recording Apple events.

  Pass the value `keyAEVersion` to obtain version information for the Apple Event Manager, in `NumVersion` format.

  Some keyword constants are defined in [Keyword Parameter Constants](apple_events/1527206-keyword_parameter_constants.md).

  See [AEKeyword](aekeyword.md).
- `result`: A pointer to a long value. On return, provides information that depends on what you pass in the `keyword` parameter.

  If you pass `keyAERecorderCount`, `result` specifies the number of processes that are currently recording Apple events.

  If you pass `keyAEVersion`, `result` supplies version information for the Apple Event Manager, in a format that matches the `'vers'` resource.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

For recordable applications, the information provided by `AEManagerInfo` may be useful when the application is responding to Apple events that it sends to itself.

For information on determining whether the Apple Event Manager is available, see the Apple Event Manager Gestalt Selector, described in *Inside macOS: Gestalt Manager Reference*. 

<a id="1819457"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

The `AEManagerInfo` function is available only in version 1.01 and later of the Apple Event Manager.

# AEManagerInfo (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Provides information about the version of the Apple Event Manager currently available or the number of processes that are currently recording Apple events.

## Declaration

```objectivec
OSErr AEManagerInfo(AEKeyword keyWord, long *result);
```

## Parameters

- `keyWord`: A value that determines the kind of information the function supplies in the `result` parameter.

  Pass the value `keyAERecorderCount` to obtain the number of processes that are currently recording Apple events.

  Pass the value `keyAEVersion` to obtain version information for the Apple Event Manager, in `NumVersion` format.

  Some keyword constants are defined in [Keyword Parameter Constants](1527206-keyword_parameter_constants.md).

  See [AEKeyword](aekeyword.md).
- `result`: A pointer to a long value. On return, provides information that depends on what you pass in the `keyword` parameter.

  If you pass `keyAERecorderCount`, `result` specifies the number of processes that are currently recording Apple events.

  If you pass `keyAEVersion`, `result` supplies version information for the Apple Event Manager, in a format that matches the `'vers'` resource.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

For recordable applications, the information provided by `AEManagerInfo` may be useful when the application is responding to Apple events that it sends to itself.

For information on determining whether the Apple Event Manager is available, see the Apple Event Manager Gestalt Selector, described in *Inside macOS: Gestalt Manager Reference*. 

<a id="1819457"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

The `AEManagerInfo` function is available only in version 1.01 and later of the Apple Event Manager.
