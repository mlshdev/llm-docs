> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uikeycommand/init(title:subtitle:image:selectedimage:preferredimagevisibility:action:input:modifierflags:propertylist:alternates:discoverabilitytitle:attributes:state:)

# init(title:subtitle:image:selectedImage:preferredImageVisibility:action:input:modifierFlags:propertyList:alternates:discoverabilityTitle:attributes:state:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS

## Declaration

```swift
@MainActor @preconcurrency convenience init(title: String = "", subtitle: String? = nil, image: UIImage? = nil, selectedImage: UIImage? = nil, preferredImageVisibility: UIMenuElement.ImageVisibility = .automatic, action: Selector, input: String, modifierFlags: UIKeyModifierFlags = [], propertyList: Any? = nil, alternates: [UICommandAlternate] = [], discoverabilityTitle: String? = nil, attributes: UIMenuElement.Attributes = [], state: UIMenuElement.State = .off)
```
