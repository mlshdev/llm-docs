> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/systemprotectionmanager-swift.class/isuserauthenticationenabled](https://developer.apple.com/documentation/uikit/uiscene/systemprotectionmanager-swift.class/isuserauthenticationenabled)

# isUserAuthenticationEnabled (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

The current status of system user authentication.

## Declaration

```swift
var isUserAuthenticationEnabled: Bool { get }
```

<a id="discussion"></a>

## Discussion

This value is `true` if the system requires device owner authentication challenges to reveal the content of the scene associated with this manager, `false` otherwise.

> **Note**

> This value represents whether protection is enabled in general. It doesn’t indicate the instantaneous state of whether any system-provided shield covers the UI at the moment.

# userAuthenticationEnabled (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

The current status of system user authentication.

## Declaration

```objectivec
@property (readonly, getter=isUserAuthenticationEnabled) BOOL userAuthenticationEnabled;
```

<a id="discussion"></a>

## Discussion

This value is `true` if the system requires device owner authentication challenges to reveal the content of the scene associated with this manager, `false` otherwise.

> **Note**

> This value represents whether protection is enabled in general. It doesn’t indicate the instantaneous state of whether any system-provided shield covers the UI at the moment.
