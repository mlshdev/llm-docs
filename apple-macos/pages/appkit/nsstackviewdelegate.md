> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackviewdelegate](https://developer.apple.com/documentation/appkit/nsstackviewdelegate)

# NSStackViewDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods you use to respond to a stack view detaching and reattaching views.

## Declaration

```swift
protocol NSStackViewDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Adopt this protocol in a custom object and use it to track the addition and removal of views from the stack view’s view hierarchy. For an explanation of detachment and reattachment of a stack view’s views, see [NSStackView](nsstackview.md).

## Topics

### Responding to View Detachment and Reattachment

- [stackView(\_:didReattach:)](nsstackviewdelegate/stackview%28__didreattach_%29.md): Called when the stack view has automatically reattached one or more previously-detached views.
- [stackView(\_:willDetach:)](nsstackviewdelegate/stackview%28__willdetach_%29.md): Called when the stack view is about to automatically detach one or more of its views.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Responding to Stack-Related Changes

- [delegate](nsstackview/delegate.md): The delegate object for the stack view.

# NSStackViewDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods you use to respond to a stack view detaching and reattaching views.

## Declaration

```objectivec
@protocol NSStackViewDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Adopt this protocol in a custom object and use it to track the addition and removal of views from the stack view’s view hierarchy. For an explanation of detachment and reattachment of a stack view’s views, see [NSStackView](nsstackview.md).

## Topics

### Responding to View Detachment and Reattachment

- [stackView:didReattachViews:](nsstackviewdelegate/stackview%28__didreattach_%29.md): Called when the stack view has automatically reattached one or more previously-detached views.
- [stackView:willDetachViews:](nsstackviewdelegate/stackview%28__willdetach_%29.md): Called when the stack view is about to automatically detach one or more of its views.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Responding to Stack-Related Changes

- [delegate](nsstackview/delegate.md): The delegate object for the stack view.
