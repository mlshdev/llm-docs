> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationexternalform](https://developer.apple.com/documentation/security/authorizationexternalform)

# AuthorizationExternalForm (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The external representation of an authorization reference.

## Declaration

```swift
struct AuthorizationExternalForm
```

<a id="Overview"></a>

## Overview

Authorization references are bound by session, process, and time limits, so you can’t store the authorization references for another process to use. Use the functions [AuthorizationMakeExternalForm(\_:\_:)](authorizationmakeexternalform%28____%29.md) and [AuthorizationCreateFromExternalForm(\_:\_:)](authorizationcreatefromexternalform%28____%29.md) to externalize and internalize the authorization reference. Apps should take care not to disclose the external authorization reference to potential attackers since any process can use this external authorization reference to access the authorization reference.

## Topics

### Initializers

- [init()](authorizationexternalform/init%28%29.md)
- [init(bytes:)](authorizationexternalform/init%28bytes_%29.md)

### Instance Properties

- [bytes](authorizationexternalform/bytes.md): An array of characters representing the external form of an authorization reference.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# AuthorizationExternalForm (Objective-C)

**Framework:** Security  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The external representation of an authorization reference.

## Declaration

```objectivec
typedef struct { ... } AuthorizationExternalForm;
```

<a id="Overview"></a>

## Overview

Authorization references are bound by session, process, and time limits, so you can’t store the authorization references for another process to use. Use the functions [AuthorizationMakeExternalForm](authorizationmakeexternalform%28____%29.md) and [AuthorizationCreateFromExternalForm](authorizationcreatefromexternalform%28____%29.md) to externalize and internalize the authorization reference. Apps should take care not to disclose the external authorization reference to potential attackers since any process can use this external authorization reference to access the authorization reference.

## Topics

### Instance Properties

- [bytes](authorizationexternalform/bytes.md): An array of characters representing the external form of an authorization reference.
