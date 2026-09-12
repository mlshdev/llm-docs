> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/nibbundle](https://developer.apple.com/documentation/uikit/uiviewcontroller/nibbundle)

# nibBundle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

The view controller’s nib bundle if it exists.

## Declaration

```swift
var nibBundle: Bundle? { get }
```

## See Also

### Related Documentation

- [init(nibName:bundle:)](init%28nibname_bundle_%29.md): Creates a view controller with the nib file in the specified bundle.

### Getting the storyboard and nib information

- [storyboard](storyboard.md): Deprecated. The storyboard from which the view controller originated.
- [nibName](nibname.md): Deprecated. The name of the view controller’s nib file, if one was specified.

# nibBundle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

The view controller’s nib bundle if it exists.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSBundle * nibBundle;
```

## See Also

### Related Documentation

- [initWithNibName:bundle:](init%28nibname_bundle_%29.md): Creates a view controller with the nib file in the specified bundle.

### Getting the storyboard and nib information

- [storyboard](storyboard.md): Deprecated. The storyboard from which the view controller originated.
- [nibName](nibname.md): Deprecated. The name of the view controller’s nib file, if one was specified.
