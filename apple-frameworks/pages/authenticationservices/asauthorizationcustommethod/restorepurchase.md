> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationcustommethod/restorepurchase

# restorePurchase (Swift)

**Framework:** Authentication Services  
**Kind:** Type Property  
**Availability:** tvOS 15.0+

A type of authorization that restores an in-app purchase to sign in.

## Declaration

```swift
static let restorePurchase: ASAuthorizationCustomMethod
```

<a id="Discussion"></a>

## Discussion

This kind of authorization method displays a Restore Purchase button.

## See Also

### Getting the Properties

- [videoSubscriberAccount](videosubscriberaccount.md): A type of authorization that uses a TV provider account to sign in.
- [other](other.md): A type of authorization that uses a custom sign-in method.

# ASAuthorizationCustomMethodRestorePurchase (Objective-C)

**Framework:** Authentication Services  
**Kind:** Global Variable  
**Availability:** tvOS 15.0+

A type of authorization that restores an in-app purchase to sign in.

## Declaration

```objectivec
extern ASAuthorizationCustomMethod const ASAuthorizationCustomMethodRestorePurchase;
```

<a id="Discussion"></a>

## Discussion

This kind of authorization method displays a Restore Purchase button.

## See Also

### Getting the Properties

- [ASAuthorizationCustomMethodVideoSubscriberAccount](videosubscriberaccount.md): A type of authorization that uses a TV provider account to sign in.
- [ASAuthorizationCustomMethodOther](other.md): A type of authorization that uses a custom sign-in method.
