> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbapplicationdelegate/eventdidfail(_:witherror:)](https://developer.apple.com/documentation/scriptingbridge/sbapplicationdelegate/eventdidfail(_:witherror:))

# eventDidFail(\_:withError:) (Swift)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Sent by an `SBApplication` object when a target application returns an error Apple event.

## Declaration

```swift
func eventDidFail(_ event: UnsafePointer<AppleEvent>, withError error: any Error) -> Any?
```

## Parameters

- `event`: A pointer to the Apple event sent to the target application causing the error.
- `error`: An object containing information about the error Apple event. Specific information may be included in the `useInfo` dictionary of the error object. The following table shows the possible keys for this dictionary.

  | Key | Description |
  | --- | --- |
  | ErrorBriefMessage | A short human-readable description of the error, as an [NSString](https://developer.apple.com/documentation/foundation/nsstring) |
  | ErrorExpectedType | The type of data the target application expected, as an [NSAppleEventDescriptor](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor) object. |
  | ErrorOffendingObject | The object that caused the error. |
  | ErrorString | A full human-readable description of the error, as an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object. |
  | ErrorNumber | The Apple event error number, as an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object. |

<a id="return-value"></a>

## Return Value

If you return a result, it will become the result of the [sendEvent(\_:)](https://developer.apple.com/documentation/appkit/nsapplication/sendevent%28_:%29) that failed. Can be `nil`.

# eventDidFail:withError: (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Sent by an `SBApplication` object when a target application returns an error Apple event.

## Declaration

```objectivec
- (id) eventDidFail:(const AppleEvent *) event withError:(NSError *) error;
```

## Parameters

- `event`: A pointer to the Apple event sent to the target application causing the error.
- `error`: An object containing information about the error Apple event. Specific information may be included in the `useInfo` dictionary of the error object. The following table shows the possible keys for this dictionary.

  | Key | Description |
  | --- | --- |
  | ErrorBriefMessage | A short human-readable description of the error, as an [NSString](https://developer.apple.com/documentation/foundation/nsstring) |
  | ErrorExpectedType | The type of data the target application expected, as an [NSAppleEventDescriptor](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor) object. |
  | ErrorOffendingObject | The object that caused the error. |
  | ErrorString | A full human-readable description of the error, as an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object. |
  | ErrorNumber | The Apple event error number, as an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object. |

<a id="return-value"></a>

## Return Value

If you return a result, it will become the result of the [sendEvent:](https://developer.apple.com/documentation/appkit/nsapplication/sendevent%28_:%29) that failed. Can be `nil`.
