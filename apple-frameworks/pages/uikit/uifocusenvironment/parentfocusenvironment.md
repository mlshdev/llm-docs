> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusenvironment/parentfocusenvironment](https://developer.apple.com/documentation/uikit/uifocusenvironment/parentfocusenvironment)

# parentFocusEnvironment (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

The parent focus environment for this environment.

## Declaration

```swift
weak var parentFocusEnvironment: (any UIFocusEnvironment)? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` when no parent container exists.

## See Also

### Checking the ancestry of the environment

- [focusItemContainer](focusitemcontainer.md): The container for the child focus items in this focus environment.

# parentFocusEnvironment (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

The parent focus environment for this environment.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id<UIFocusEnvironment> parentFocusEnvironment;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` when no parent container exists.

## See Also

### Checking the ancestry of the environment

- [focusItemContainer](focusitemcontainer.md): The container for the child focus items in this focus environment.
