> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvlockupviewcomponent](https://developer.apple.com/documentation/tvuikit/tvlockupviewcomponent)

# TVLockupViewComponent (Swift)

**Framework:** TVUIKit  
**Kind:** Protocol  
**Availability:** tvOS 12.0+

The protocol for responding to lockup view state changes.

## Declaration

```swift
protocol TVLockupViewComponent : NSObjectProtocol
```

## Topics

### Updating the Lockup View Appearance

- [updateAppearance(forLockupViewState:)](tvlockupviewcomponent/updateappearance%28forlockupviewstate_%29.md): Provides an opportunity to change the appearance of a view when a state changes.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [TVLockupHeaderFooterView](tvlockupheaderfooterview.md)

## See Also

### Lockup views

- [TVLockupView](tvlockupview.md): A focusable view that presents main content, like a movie poster, and an optional header and footer.
- [TVLockupHeaderFooterView](tvlockupheaderfooterview.md): A view that contains header and footer information.
- [TVCardView](tvcardview.md): A view that responds to focus interaction with a motion effect it applies to all of its subviews.
- [TVPosterView](tvposterview.md): An optimized view for displaying an image, a header, and a footer.
- [TVCaptionButtonView](tvcaptionbuttonview.md): A button-like view that responds to user interactions.
- [TVMonogramView](tvmonogramview.md): Deprecated. A specialized lockup view that contains a circular image of a person or the person’s initials, along with a footer view.

# TVLockupViewComponent (Objective-C)

**Framework:** TVUIKit  
**Kind:** Protocol  
**Availability:** tvOS 12.0+

The protocol for responding to lockup view state changes.

## Declaration

```objectivec
@protocol TVLockupViewComponent <NSObject>
```

## Topics

### Updating the Lockup View Appearance

- [updateAppearanceForLockupViewState:](tvlockupviewcomponent/updateappearance%28forlockupviewstate_%29.md): Provides an opportunity to change the appearance of a view when a state changes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [TVLockupHeaderFooterView](tvlockupheaderfooterview.md)

## See Also

### Lockup views

- [TVLockupView](tvlockupview.md): A focusable view that presents main content, like a movie poster, and an optional header and footer.
- [TVLockupHeaderFooterView](tvlockupheaderfooterview.md): A view that contains header and footer information.
- [TVCardView](tvcardview.md): A view that responds to focus interaction with a motion effect it applies to all of its subviews.
- [TVPosterView](tvposterview.md): An optimized view for displaying an image, a header, and a footer.
- [TVCaptionButtonView](tvcaptionbuttonview.md): A button-like view that responds to user interactions.
- [TVMonogramView](tvmonogramview.md): Deprecated. A specialized lockup view that contains a circular image of a person or the person’s initials, along with a footer view.
