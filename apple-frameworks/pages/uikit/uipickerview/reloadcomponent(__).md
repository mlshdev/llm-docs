> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipickerview/reloadcomponent(_:)](https://developer.apple.com/documentation/uikit/uipickerview/reloadcomponent(_:))

# reloadComponent(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Reloads a particular component of the picker view.

## Declaration

```swift
func reloadComponent(_ component: Int)
```

## Parameters

- `component`: A zero-indexed number identifying a component of the picker view.

<a id="Discussion"></a>

## Discussion

Calling this method causes the picker view to query the delegate for new data for the given component.

## See Also

### Reloading the picker view

- [reloadAllComponents()](reloadallcomponents%28%29.md): Reloads all components of the picker view.

# reloadComponent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Reloads a particular component of the picker view.

## Declaration

```objectivec
- (void) reloadComponent:(NSInteger) component;
```

## Parameters

- `component`: A zero-indexed number identifying a component of the picker view.

<a id="Discussion"></a>

## Discussion

Calling this method causes the picker view to query the delegate for new data for the given component.

## See Also

### Reloading the picker view

- [reloadAllComponents](reloadallcomponents%28%29.md): Reloads all components of the picker view.
