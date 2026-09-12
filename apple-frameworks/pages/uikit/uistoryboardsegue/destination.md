> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistoryboardsegue/destination](https://developer.apple.com/documentation/uikit/uistoryboardsegue/destination)

# destination (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

The destination view controller for the segue.

## Declaration

```swift
var destination: UIViewController { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the view controller whose contents should be displayed at the end of the segue.

## See Also

### Accessing the segue attributes

- [source](source.md): Deprecated. The source view controller for the segue.
- [identifier](identifier.md): Deprecated. The identifier for the segue object.

# destinationViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

The destination view controller for the segue.

## Declaration

```objectivec
@property (nonatomic, readonly) UIViewController * destinationViewController;
```

<a id="Discussion"></a>

## Discussion

This property contains the view controller whose contents should be displayed at the end of the segue.

## See Also

### Accessing the segue attributes

- [sourceViewController](source.md): Deprecated. The source view controller for the segue.
- [identifier](identifier.md): Deprecated. The identifier for the segue object.
