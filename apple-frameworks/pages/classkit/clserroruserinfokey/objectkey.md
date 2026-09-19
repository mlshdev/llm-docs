> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/classkit/clserroruserinfokey/objectkey

# objectKey (Swift)

**Framework:** ClassKit  
**Kind:** Type Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

A key whose value is the object that caused the error.

## Declaration

```swift
static let objectKey: CLSErrorUserInfoKey
```

## See Also

### Keys

- [successfulObjectsKey](successfulobjectskey.md)
- [underlyingErrorsKey](underlyingerrorskey.md): A key whose value is the array of errors that contributed to this error.

# CLSErrorObjectKey (Objective-C)

**Framework:** ClassKit  
**Kind:** Global Variable  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A key whose value is the object that caused the error.

## Declaration

```objectivec
extern CLSErrorUserInfoKey const CLSErrorObjectKey;
```

## See Also

### Keys

- [CLSErrorSuccessfulObjectsKey](successfulobjectskey.md)
- [CLSErrorUnderlyingErrorsKey](underlyingerrorskey.md): A key whose value is the array of errors that contributed to this error.
