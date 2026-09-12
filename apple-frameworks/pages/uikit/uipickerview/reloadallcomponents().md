> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipickerview/reloadallcomponents()](https://developer.apple.com/documentation/uikit/uipickerview/reloadallcomponents())

# reloadAllComponents() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Reloads all components of the picker view.

## Declaration

```swift
func reloadAllComponents()
```

<a id="Discussion"></a>

## Discussion

Calling this method causes the picker view to query the delegate for new data for all components.

## See Also

### Reloading the picker view

- [reloadComponent(\_:)](reloadcomponent%28__%29.md): Reloads a particular component of the picker view.

# reloadAllComponents (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Reloads all components of the picker view.

## Declaration

```objectivec
- (void) reloadAllComponents;
```

<a id="Discussion"></a>

## Discussion

Calling this method causes the picker view to query the delegate for new data for all components.

## See Also

### Reloading the picker view

- [reloadComponent:](reloadcomponent%28__%29.md): Reloads a particular component of the picker view.
