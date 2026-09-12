> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clserroruserinfokey/underlyingerrorskey](https://developer.apple.com/documentation/classkit/clserroruserinfokey/underlyingerrorskey)

# underlyingErrorsKey (Swift)

**Framework:** ClassKit  
**Kind:** Type Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

A key whose value is the array of errors that contributed to this error.

## Declaration

```swift
static let underlyingErrorsKey: CLSErrorUserInfoKey
```

<a id="Discussion"></a>

## Discussion

This key only appears for errors with code [partialFailure](../clserror/partialfailure.md) in Swift or [CLSError.Code.partialFailure](../clserror/code/partialfailure.md) in Objective-C, signifying that more than one error occurred.

## See Also

### Keys

- [objectKey](objectkey.md): A key whose value is the object that caused the error.
- [successfulObjectsKey](successfulobjectskey.md)

# CLSErrorUnderlyingErrorsKey (Objective-C)

**Framework:** ClassKit  
**Kind:** Global Variable  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A key whose value is the array of errors that contributed to this error.

## Declaration

```objectivec
extern CLSErrorUserInfoKey const CLSErrorUnderlyingErrorsKey;
```

<a id="Discussion"></a>

## Discussion

This key only appears for errors with code [partialFailure](../clserror/partialfailure.md) in Swift or [CLSErrorCodePartialFailure](../clserror/code/partialfailure.md) in Objective-C, signifying that more than one error occurred.

## See Also

### Keys

- [CLSErrorObjectKey](objectkey.md): A key whose value is the object that caused the error.
- [CLSErrorSuccessfulObjectsKey](successfulobjectskey.md)
