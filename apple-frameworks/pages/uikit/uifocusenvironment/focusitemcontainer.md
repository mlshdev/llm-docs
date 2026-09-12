> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusenvironment/focusitemcontainer](https://developer.apple.com/documentation/uikit/uifocusenvironment/focusitemcontainer)

# focusItemContainer (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

The container for the child focus items in this focus environment.

## Declaration

```swift
var focusItemContainer: (any UIFocusItemContainer)? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` when no container exists.

## See Also

### Checking the ancestry of the environment

- [parentFocusEnvironment](parentfocusenvironment.md): The parent focus environment for this environment.

# focusItemContainer (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

The container for the child focus items in this focus environment.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) id<UIFocusItemContainer> focusItemContainer;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` when no container exists.

## See Also

### Checking the ancestry of the environment

- [parentFocusEnvironment](parentfocusenvironment.md): The parent focus environment for this environment.
