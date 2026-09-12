> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/requiresuseraccounttype](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/requiresuseraccounttype)

# requiresUserAccountType (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Specifies the type of user account required to start an assessment.

## Declaration

```swift
var requiresUserAccountType: AEUserAccountType { get set }
```

<a id="discussion"></a>

## Discussion

This property defines the account requirement for starting an assessment session. Set it to `.standard` to require a non-administrator account, `.guest` to require a guest account, or `.any` (the default) to allow any account type.

> **See Also**

> [AEUserAccountType](../aeuseraccounttype.md).

# requiresUserAccountType (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Specifies the type of user account required to start an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) AEUserAccountType requiresUserAccountType;
```

<a id="discussion"></a>

## Discussion

This property defines the account requirement for starting an assessment session. Set it to `.standard` to require a non-administrator account, `.guest` to require a guest account, or `.any` (the default) to allow any account type.

> **See Also**

> [AEUserAccountType](../aeuseraccounttype.md).
