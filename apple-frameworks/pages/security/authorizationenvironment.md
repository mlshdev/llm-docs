> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationenvironment](https://developer.apple.com/documentation/security/authorizationenvironment)

# AuthorizationEnvironment (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An authorization item set designated to hold environment information relevant to authorization decisions.

## Declaration

```swift
typealias AuthorizationEnvironment = AuthorizationItemSet
```

<a id="Discussion"></a>

## Discussion

The authorization items in the set represent data about the environment, such as user name and other information gathered during evaluation of authorization.

This set is actually an instance of an [AuthorizationItemSet](authorizationitemset.md).

# AuthorizationEnvironment (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An authorization item set designated to hold environment information relevant to authorization decisions.

## Declaration

```objectivec
typedef AuthorizationItemSet AuthorizationEnvironment;
```

<a id="Discussion"></a>

## Discussion

The authorization items in the set represent data about the environment, such as user name and other information gathered during evaluation of authorization.

This set is actually an instance of an [AuthorizationItemSet](authorizationitemset.md).
