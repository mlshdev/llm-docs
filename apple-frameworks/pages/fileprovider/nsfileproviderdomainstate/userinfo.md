> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderdomainstate/userinfo](https://developer.apple.com/documentation/fileprovider/nsfileproviderdomainstate/userinfo)

# userInfo (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

Global state information about the current domain version.

## Declaration

```swift
var userInfo: [AnyHashable : Any] { get }
```

<a id="Discussion"></a>

## Discussion

Use this dictionary to add state information to the domain. You can then access the [userInfo](userinfo.md) dictionary in predicates for user interactions, file provider actions, and [File Provider UI](../../fileproviderui.md) actions using the `domainUserInfo` context key.

This dictionary must only contain the following types for both its keys and values:

- [NSString](../../foundation/nsstring.md)
- [NSNumber](../../foundation/nsnumber.md)
- [NSDate](../../foundation/nsdate.md)
- [NSPersonNameComponents](../../foundation/nspersonnamecomponents.md)

The system expects you to update the `domainVersion` whenever the value of the [userInfo](userinfo.md) dictionary changes.

## See Also

### Accessing State Data

- [domainVersion](domainversion.md): An opaque object that uniquely identifies the domain’s version.

# userInfo (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

Global state information about the current domain version.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nonnull) NSDictionary * userInfo;
```

<a id="Discussion"></a>

## Discussion

Use this dictionary to add state information to the domain. You can then access the [userInfo](userinfo.md) dictionary in predicates for user interactions, file provider actions, and [File Provider UI](../../fileproviderui.md) actions using the `domainUserInfo` context key.

This dictionary must only contain the following types for both its keys and values:

- [NSString](../../foundation/nsstring.md)
- [NSNumber](../../foundation/nsnumber.md)
- [NSDate](../../foundation/nsdate.md)
- [NSPersonNameComponents](../../foundation/nspersonnamecomponents.md)

The system expects you to update the `domainVersion` whenever the value of the [userInfo](userinfo.md) dictionary changes.

## See Also

### Accessing State Data

- [domainVersion](domainversion.md): An opaque object that uniquely identifies the domain’s version.
