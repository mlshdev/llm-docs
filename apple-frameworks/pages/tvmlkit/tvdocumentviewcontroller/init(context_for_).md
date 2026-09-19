> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvmlkit/tvdocumentviewcontroller/init(context:for:)

# init(context:for:) (Swift)

**Framework:** TVMLKit  
**Kind:** Initializer  
**Availability:** tvOS 13.0+ (deprecated in 18.0)

Creates a new document view controller with a specific context and app controller.

> Please use SwiftUI or UIKit

## Declaration

```swift
convenience init(context: [String : Any], for appController: TVApplicationController)
```

<a id="Discussion"></a>

## Discussion

The `context` parameter provides information to `TVMLKit JS` to determine which document to load.

# viewControllerWithContext:forAppController: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Type Method  
**Availability:** tvOS 13.0+ (deprecated in 18.0)

Creates a new document view controller with a specific context and app controller.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
+ (instancetype) viewControllerWithContext:(NSDictionary<NSString *,id> *) context forAppController:(TVApplicationController *) appController;
```

<a id="Discussion"></a>

## Discussion

The `context` parameter provides information to `TVMLKit JS` to determine which document to load.
