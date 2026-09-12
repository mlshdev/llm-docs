> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkuserinterfacedirectionpolicy](https://developer.apple.com/documentation/webkit/wkuserinterfacedirectionpolicy)

# WKUserInterfaceDirectionPolicy (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** macOS 10.12+

The policy that determines the directionality of user interface elements in a web view.

## Declaration

```swift
enum WKUserInterfaceDirectionPolicy
```

<a id="overview"></a>

## Overview

When `WKUserInterfaceDirectionPolicyContent` is specified, the directionality of user interface elements is affected by the `dir` attribute or the `direction` CSS property. When `WKUserInterfaceDirectionPolicySystem` is specified, the directionality of user interface elements is affected by the direction of the view.

## Topics

### Direction Policies

- [WKUserInterfaceDirectionPolicy.content](wkuserinterfacedirectionpolicy/content.md): The directionality follows the CSS/HTML/XHTML specifications.
- [WKUserInterfaceDirectionPolicy.system](wkuserinterfacedirectionpolicy/system.md): The directionality follows the view’s user interface layout direction.

### Initializers

- [init(rawValue:)](wkuserinterfacedirectionpolicy/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Selecting user interface directionality

- [userInterfaceDirectionPolicy](wkwebviewconfiguration/userinterfacedirectionpolicy.md): The directionality of user interface elements.

# WKUserInterfaceDirectionPolicy (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** macOS 10.12+

The policy that determines the directionality of user interface elements in a web view.

## Declaration

```objectivec
enum WKUserInterfaceDirectionPolicy : NSInteger;
```

<a id="overview"></a>

## Overview

When `WKUserInterfaceDirectionPolicyContent` is specified, the directionality of user interface elements is affected by the `dir` attribute or the `direction` CSS property. When `WKUserInterfaceDirectionPolicySystem` is specified, the directionality of user interface elements is affected by the direction of the view.

## Topics

### Direction Policies

- [WKUserInterfaceDirectionPolicyContent](wkuserinterfacedirectionpolicy/content.md): The directionality follows the CSS/HTML/XHTML specifications.
- [WKUserInterfaceDirectionPolicySystem](wkuserinterfacedirectionpolicy/system.md): The directionality follows the view’s user interface layout direction.

## See Also

### Selecting user interface directionality

- [userInterfaceDirectionPolicy](wkwebviewconfiguration/userinterfacedirectionpolicy.md): The directionality of user interface elements.
