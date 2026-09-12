> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slcomposeserviceviewcontroller/reloadconfigurationitems()](https://developer.apple.com/documentation/social/slcomposeserviceviewcontroller/reloadconfigurationitems())

# reloadConfigurationItems() (Swift)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+

Reloads the list of configuration items.

## Declaration

```swift
func reloadConfigurationItems()
```

<a id="Discussion"></a>

## Discussion

In general, a subclass doesn’t need to call this method, unless it determines its configuration items in a deferred way, such as in [presentationAnimationDidFinish()](presentationanimationdidfinish%28%29.md). In particular, you don’t need to call this method after you change a configuration item property, because the `SLComposeServiceViewController` base class automatically detects and responds to such changes.

## See Also

### Configuring the Post Details

- [configurationItems()](configurationitems%28%29.md): Returns configuration items to display in the compose view.
- [SLComposeSheetConfigurationItem](../slcomposesheetconfigurationitem.md): An object that provides additional configuration details to use when configuring a composition interface.

# reloadConfigurationItems (Objective-C)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+

Reloads the list of configuration items.

## Declaration

```objectivec
- (void) reloadConfigurationItems;
```

<a id="Discussion"></a>

## Discussion

In general, a subclass doesn’t need to call this method, unless it determines its configuration items in a deferred way, such as in [presentationAnimationDidFinish](presentationanimationdidfinish%28%29.md). In particular, you don’t need to call this method after you change a configuration item property, because the `SLComposeServiceViewController` base class automatically detects and responds to such changes.

## See Also

### Configuring the Post Details

- [configurationItems](configurationitems%28%29.md): Returns configuration items to display in the compose view.
- [SLComposeSheetConfigurationItem](../slcomposesheetconfigurationitem.md): An object that provides additional configuration details to use when configuring a composition interface.
