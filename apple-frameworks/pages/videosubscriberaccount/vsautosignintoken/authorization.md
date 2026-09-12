> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsautosignintoken/authorization](https://developer.apple.com/documentation/videosubscriberaccount/vsautosignintoken/authorization)

# authorization

**Interface language:** Objective-C

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A state that represents a person’s approval of Automatic Sign-In.

## Declaration

```objectivec
@property (nonatomic, readonly) VSAutoSignInAuthorization authorization;
```

<a id="discussion"></a>

## Discussion

The default value is [VSUserAccountManager.AutoSignInAuthorization.notDetermined](../vsuseraccountmanager/autosigninauthorization/notdetermined.md). The framework updates the value based on a person’s answer to the prompt to opt in to Automatic Sign-In (see [requestAutoSignInAuthorization()](../vsuseraccountmanager/requestautosigninauthorization%28%29.md)).
