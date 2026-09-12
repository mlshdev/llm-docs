> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tagresponseerrorkey](https://developer.apple.com/documentation/corenfc/nfciso15693tagresponseerrorkey)

# NFCISO15693TagResponseErrorKey (Swift)

**Framework:** Core NFC  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A user information dictionary key indicating that a tag responded with a command error.

## Declaration

```swift
let NFCISO15693TagResponseErrorKey: String
```

<a id="Discussion"></a>

## Discussion

Check for the presence of this key in the [userInfo](https://developer.apple.com/documentation/foundation/nserror/userinfo) dictionary of an [NSError](https://developer.apple.com/documentation/foundation/nserror) object to determine whether a tag responded with a command error. When a command error occurs, the [code](https://developer.apple.com/documentation/foundation/nserror/code) property contains an error code defined in the ISO15693-3 specification.

# NFCISO15693TagResponseErrorKey (Objective-C)

**Framework:** Core NFC  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A user information dictionary key indicating that a tag responded with a command error.

## Declaration

```objectivec
extern NSString * const NFCISO15693TagResponseErrorKey;
```

<a id="Discussion"></a>

## Discussion

Check for the presence of this key in the [userInfo](https://developer.apple.com/documentation/foundation/nserror/userinfo) dictionary of an [NSError](https://developer.apple.com/documentation/foundation/nserror) object to determine whether a tag responded with a command error. When a command error occurs, the [code](https://developer.apple.com/documentation/foundation/nserror/code) property contains an error code defined in the ISO15693-3 specification.
