> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slcomposeserviceviewcontroller/configurationitems()](https://developer.apple.com/documentation/social/slcomposeserviceviewcontroller/configurationitems())

# configurationItems() (Swift)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+

Returns configuration items to display in the compose view.

## Declaration

```swift
func configurationItems() -> [Any]!
```

<a id="return-value"></a>

## Return Value

An array of [SLComposeSheetConfigurationItem](../slcomposesheetconfigurationitem.md) objects, or `nil` if no configuration items need to be displayed.

<a id="Discussion"></a>

## Discussion

Implement this method if you need to display configuration items, such as an account picker or privacy indicator, in your compose view.

## See Also

### Configuring the Post Details

- [SLComposeSheetConfigurationItem](../slcomposesheetconfigurationitem.md): An object that provides additional configuration details to use when configuring a composition interface.
- [reloadConfigurationItems()](reloadconfigurationitems%28%29.md): Reloads the list of configuration items.

# configurationItems (Objective-C)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+

Returns configuration items to display in the compose view.

## Declaration

```objectivec
- (NSArray *) configurationItems;
```

<a id="return-value"></a>

## Return Value

An array of [SLComposeSheetConfigurationItem](../slcomposesheetconfigurationitem.md) objects, or `nil` if no configuration items need to be displayed.

<a id="Discussion"></a>

## Discussion

Implement this method if you need to display configuration items, such as an account picker or privacy indicator, in your compose view.

## See Also

### Configuring the Post Details

- [SLComposeSheetConfigurationItem](../slcomposesheetconfigurationitem.md): An object that provides additional configuration details to use when configuring a composition interface.
- [reloadConfigurationItems](reloadconfigurationitems%28%29.md): Reloads the list of configuration items.
