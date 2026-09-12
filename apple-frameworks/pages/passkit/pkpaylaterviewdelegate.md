> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaylaterviewdelegate](https://developer.apple.com/documentation/passkit/pkpaylaterviewdelegate)

# PKPayLaterViewDelegate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · visionOS 1.0+

Methods the framework calls when the Apple Pay Later view’s size changes.

> Apple Pay Later is deprecated.

## Declaration

```swift
protocol PKPayLaterViewDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

When manually laying out this view, adopt this protocol to receive a callback when the Apple Pay Layer view’s size changes.

## Topics

### Responding to view size changes

- [payLaterViewDidUpdateHeight(\_:)](pkpaylaterviewdelegate/paylaterviewdidupdateheight%28__%29.md): Deprecated. Tells the delegate when the Apple Pay Later visual merchandising widget’s height changes.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to changes in the view’s height

- [delegate](pkpaylaterview/delegate.md): Deprecated. A delegate object that receives messages about the changes to the Apple Pay Later view.

# PKPayLaterViewDelegate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · visionOS 1.0+

Methods the framework calls when the Apple Pay Later view’s size changes.

> Apple Pay Later is deprecated.

## Declaration

```objectivec
@protocol PKPayLaterViewDelegate <NSObject>
```

<a id="overview"></a>

## Overview

When manually laying out this view, adopt this protocol to receive a callback when the Apple Pay Layer view’s size changes.

## Topics

### Responding to view size changes

- [payLaterViewDidUpdateHeight:](pkpaylaterviewdelegate/paylaterviewdidupdateheight%28__%29.md): Deprecated. Tells the delegate when the Apple Pay Later visual merchandising widget’s height changes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to changes in the view’s height

- [delegate](pkpaylaterview/delegate.md): Deprecated. A delegate object that receives messages about the changes to the Apple Pay Later view.
