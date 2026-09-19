> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvmlkit/tvdocumentviewcontroller/appcontroller

# appController (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+ (deprecated in 18.0)

The document’s app controller that bridges UI, navigation stack, storage, and event handling from JavaScript.

> Please use SwiftUI or UIKit

## Declaration

```swift
weak var appController: TVApplicationController? { get }
```

## See Also

### Accessing the Document’s Components

- [documentContext](documentcontext.md): Deprecated. The current document context.

# appController (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+ (deprecated in 18.0)

The document’s app controller that bridges UI, navigation stack, storage, and event handling from JavaScript.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@property (nonatomic, weak, readonly) TVApplicationController * appController;
```

## See Also

### Accessing the Document’s Components

- [documentContext](documentcontext.md): Deprecated. The current document context.
