> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/tab(foridentifier:)](https://developer.apple.com/documentation/uikit/uitabbarcontroller/tab(foridentifier:))

# tab(forIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Returns the `tab` matching the specified `identifier` in the tab bar controller’s tabs. Returns nil if no tab is found matching the `identifier`.

## Declaration

```swift
func tab(forIdentifier identifier: String) -> UITab?
```

## See Also

### Accessing the tab bar controller properties

- [tabBar](tabbar.md): The tab bar view associated with this controller.

# tabForIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Returns the `tab` matching the specified `identifier` in the tab bar controller’s tabs. Returns nil if no tab is found matching the `identifier`.

## Declaration

```objectivec
- (UITab *) tabForIdentifier:(NSString *) identifier;
```

## See Also

### Accessing the tab bar controller properties

- [tabBar](tabbar.md): The tab bar view associated with this controller.
