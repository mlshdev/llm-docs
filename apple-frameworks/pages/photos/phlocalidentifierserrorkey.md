> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phlocalidentifierserrorkey](https://developer.apple.com/documentation/photos/phlocalidentifierserrorkey)

# PHLocalIdentifiersErrorKey (Swift)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An error key that retrieves an array of string values representing local identifiers matched to a cloud identifier.

## Declaration

```swift
let PHLocalIdentifiersErrorKey: String
```

<a id="Discussion"></a>

## Discussion

Use this key with the [userInfo](../foundation/nserror/userinfo.md) property when encountering the [multipleIdentifiersFound](phphotoserror-swift.struct/multipleidentifiersfound.md) error.

## See Also

### Inspecting an Error

- [errorDomain](phphotoserror-swift.struct/errordomain.md)
- [PHPhotosError.Code](phphotoserror-swift.struct/code.md): Error codes for framework operations.
- [Error Constants](../photokit/error-constants.md): Error code constants for framework operations.

# PHLocalIdentifiersErrorKey (Objective-C)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An error key that retrieves an array of string values representing local identifiers matched to a cloud identifier.

## Declaration

```objectivec
extern NSErrorUserInfoKey const PHLocalIdentifiersErrorKey;
```

<a id="Discussion"></a>

## Discussion

Use this key with the [userInfo](../foundation/nserror/userinfo.md) property when encountering the [multipleIdentifiersFound](phphotoserror-swift.struct/multipleidentifiersfound.md) error.

## See Also

### Inspecting an Error

- [PHPhotosError](phphotoserror-swift.struct/code.md): Error codes for framework operations.
