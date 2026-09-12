> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistoryboardsegue/source](https://developer.apple.com/documentation/uikit/uistoryboardsegue/source)

# source (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

The source view controller for the segue.

## Declaration

```swift
var source: UIViewController { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the view controller whose contents are displayed at the beginning of the segue.

## See Also

### Accessing the segue attributes

- [destination](destination.md): Deprecated. The destination view controller for the segue.
- [identifier](identifier.md): Deprecated. The identifier for the segue object.

# sourceViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

The source view controller for the segue.

## Declaration

```objectivec
@property (nonatomic, readonly) UIViewController * sourceViewController;
```

<a id="Discussion"></a>

## Discussion

This property contains the view controller whose contents are displayed at the beginning of the segue.

## See Also

### Accessing the segue attributes

- [destinationViewController](destination.md): Deprecated. The destination view controller for the segue.
- [identifier](identifier.md): Deprecated. The identifier for the segue object.
