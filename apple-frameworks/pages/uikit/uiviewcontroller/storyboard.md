> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/storyboard](https://developer.apple.com/documentation/uikit/uiviewcontroller/storyboard)

# storyboard (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

The storyboard from which the view controller originated.

## Declaration

```swift
var storyboard: UIStoryboard? { get }
```

<a id="Discussion"></a>

## Discussion

If the view controller was not instantiated from a storyboard, this property is `nil`.

## See Also

### Getting the storyboard and nib information

- [nibName](nibname.md): Deprecated. The name of the view controller’s nib file, if one was specified.
- [nibBundle](nibbundle.md): Deprecated. The view controller’s nib bundle if it exists.

# storyboard (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

The storyboard from which the view controller originated.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIStoryboard * storyboard;
```

<a id="Discussion"></a>

## Discussion

If the view controller was not instantiated from a storyboard, this property is `nil`.

## See Also

### Getting the storyboard and nib information

- [nibName](nibname.md): Deprecated. The name of the view controller’s nib file, if one was specified.
- [nibBundle](nibbundle.md): Deprecated. The view controller’s nib bundle if it exists.
