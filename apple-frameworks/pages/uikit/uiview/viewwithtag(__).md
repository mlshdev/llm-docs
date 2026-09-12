> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/viewwithtag(_:)](https://developer.apple.com/documentation/uikit/uiview/viewwithtag(_:))

# viewWithTag(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the view whose tag matches the specified value.

## Declaration

```swift
func viewWithTag(_ tag: Int) -> UIView?
```

## Parameters

- `tag`: The tag value to search for.

<a id="return-value"></a>

## Return Value

The view in the receiver’s hierarchy whose tag property matches the value in the `tag` parameter.

<a id="Discussion"></a>

## Discussion

This method searches the current view and all of its subviews for the specified view.

## See Also

### Identifying the view at runtime

- [tag](tag.md): An integer that you can use to identify view objects in your application.

# viewWithTag: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Returns the view whose tag matches the specified value.

## Declaration

```objectivec
- (UIView *) viewWithTag:(NSInteger) tag;
```

## Parameters

- `tag`: The tag value to search for.

<a id="return-value"></a>

## Return Value

The view in the receiver’s hierarchy whose tag property matches the value in the `tag` parameter.

<a id="Discussion"></a>

## Discussion

This method searches the current view and all of its subviews for the specified view.

## See Also

### Identifying the view at runtime

- [tag](tag.md): An integer that you can use to identify view objects in your application.
