> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacegroup/setcontentinset(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacegroup/setcontentinset(_:))

# setContentInset(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the distance between the edges of the group and any contained objects.

## Declaration

```swift
func setContentInset(_ contentInset: UIEdgeInsets)
```

## Parameters

- `contentInset`: The insets to apply to contained objects. All inset values are measured in points. Inset values must not be less than `0`.

<a id="Discussion"></a>

## Discussion

Use this method to change the default insets you set in Interface Builder. Changes to the content insets of a group are animatable.

## See Also

### Setting the Layout Information

- [setCornerRadius(\_:)](setcornerradius%28__%29.md): Changes the radius to use when drawing rounded corners for the group.

# setContentInset: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the distance between the edges of the group and any contained objects.

## Declaration

```objectivec
- (void) setContentInset:(UIEdgeInsets) contentInset;
```

## Parameters

- `contentInset`: The insets to apply to contained objects. All inset values are measured in points. Inset values must not be less than `0`.

<a id="Discussion"></a>

## Discussion

Use this method to change the default insets you set in Interface Builder. Changes to the content insets of a group are animatable.

## See Also

### Setting the Layout Information

- [setCornerRadius:](setcornerradius%28__%29.md): Changes the radius to use when drawing rounded corners for the group.
