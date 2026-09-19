> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsscrollview/elasticity

# NSScrollView.Elasticity (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

These constants determine the elasticity behavior for an axis of the scrollview.

## Declaration

```swift
enum Elasticity
```

## Topics

### Constants

- [NSScrollView.Elasticity.automatic](elasticity/automatic.md): Automatically determine whether to allow elasticity on this axis.
- [NSScrollView.Elasticity.none](elasticity/none.md): Disallow scrolling beyond document bounds on this axis.
- [NSScrollView.Elasticity.allowed](elasticity/allowed.md): Allow content to be scrolled past its bounds on this axis in an elastic fashion.

### Initializers

- [init(rawValue:)](elasticity/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [NSScrollView.FindBarPosition](findbarposition-swift.enum.md): These constants define the position of the find bar in relation to the scroll view.

# NSScrollElasticity (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

These constants determine the elasticity behavior for an axis of the scrollview.

## Declaration

```objectivec
enum NSScrollElasticity : NSInteger;
```

## Topics

### Constants

- [NSScrollElasticityAutomatic](elasticity/automatic.md): Automatically determine whether to allow elasticity on this axis.
- [NSScrollElasticityNone](elasticity/none.md): Disallow scrolling beyond document bounds on this axis.
- [NSScrollElasticityAllowed](elasticity/allowed.md): Allow content to be scrolled past its bounds on this axis in an elastic fashion.

## See Also

### Constants

- [NSScrollViewFindBarPosition](findbarposition-swift.enum.md): These constants define the position of the find bar in relation to the scroll view.
