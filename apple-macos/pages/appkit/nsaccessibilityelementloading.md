> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityelementloading](https://developer.apple.com/documentation/appkit/nsaccessibilityelementloading)

# NSAccessibilityElementLoading (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 10.13+

A role-based protocol that declares the minimum interface necessary for an accessibility element to support loading.

## Declaration

```swift
protocol NSAccessibilityElementLoading : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibilityProtocol](nsaccessibilityprotocol.md) protocol declares.

> **Note**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityElement(withToken:)](nsaccessibilityelementloading/accessibilityelement%28withtoken_%29.md): Loads the target accessibility element with the specified load token.
- [accessibilityRangeInTargetElement(withToken:)](nsaccessibilityelementloading/accessibilityrangeintargetelement%28withtoken_%29.md): Returns the range that specifies the area of interest in text-based accessibility elements with the specified load token.
- [NSAccessibilityLoadingToken](nsaccessibilityloadingtoken.md): A token type for loading accessibility elements.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Loading

- [NSAccessibilityProgressIndicator](nsaccessibilityprogressindicator.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a progress indicator.

# NSAccessibilityElementLoading (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 10.13+

A role-based protocol that declares the minimum interface necessary for an accessibility element to support loading.

## Declaration

```objectivec
@protocol NSAccessibilityElementLoading <NSObject>
```

<a id="overview"></a>

## Overview

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibility](nsaccessibilityprotocol.md) protocol declares.

> **Note**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityElementWithToken:](nsaccessibilityelementloading/accessibilityelement%28withtoken_%29.md): Loads the target accessibility element with the specified load token.
- [accessibilityRangeInTargetElementWithToken:](nsaccessibilityelementloading/accessibilityrangeintargetelement%28withtoken_%29.md): Returns the range that specifies the area of interest in text-based accessibility elements with the specified load token.
- [NSAccessibilityLoadingToken](nsaccessibilityloadingtoken.md): A token type for loading accessibility elements.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Loading

- [NSAccessibilityProgressIndicator](nsaccessibilityprogressindicator.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a progress indicator.
