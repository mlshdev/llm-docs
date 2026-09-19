> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvmlkit/tvdocumentviewcontroller/documentcontext

# documentContext (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+ (deprecated in 18.0)

The current document context.

> Please use SwiftUI or UIKit

## Declaration

```swift
var documentContext: [String : Any] { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to retrieve the current context, whether it’s new or updated.

## See Also

### Accessing the Document’s Components

- [appController](appcontroller.md): Deprecated. The document’s app controller that bridges UI, navigation stack, storage, and event handling from JavaScript.

# documentContext (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+ (deprecated in 18.0)

The current document context.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSDictionary<NSString *,id> * documentContext;
```

<a id="Discussion"></a>

## Discussion

Use this property to retrieve the current context, whether it’s new or updated.

## See Also

### Accessing the Document’s Components

- [appController](appcontroller.md): Deprecated. The document’s app controller that bridges UI, navigation stack, storage, and event handling from JavaScript.
