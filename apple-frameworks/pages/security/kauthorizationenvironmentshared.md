> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kauthorizationenvironmentshared](https://developer.apple.com/documentation/security/kauthorizationenvironmentshared)

# kAuthorizationEnvironmentShared (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The type for an authorization item containing a shared right.

## Declaration

```swift
var kAuthorizationEnvironmentShared: String { get }
```

<a id="Discussion"></a>

## Discussion

Adding a kAuthorizationEnvironmentShared entry in the environment causes the username and password to be added to the shared credential pool of the calling application’s session. This means that further calls by other applications in this session automatically have this credential available to them.

# kAuthorizationEnvironmentShared (Objective-C)

**Framework:** Security  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The type for an authorization item containing a shared right.

## Declaration

```objectivec
#define kAuthorizationEnvironmentShared
```

<a id="Discussion"></a>

## Discussion

Adding a kAuthorizationEnvironmentShared entry in the environment causes the username and password to be added to the shared credential pool of the calling application’s session. This means that further calls by other applications in this session automatically have this credential available to them.
